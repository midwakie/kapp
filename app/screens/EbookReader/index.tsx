/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Reader, ReaderProvider, useReader } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { Switch } from 'react-native-switch';
import Slider from 'react-native-slider';
import axios from 'axios';

import NavigationService from 'app/navigation/NavigationService';
import RegularButton from 'app/components/buttons/RegularButton';

import styles from './styles';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import Neumorphism from 'react-native-neumorphism';

const availableSpeeds = [0.5, 0.75, 1.0, 1.25, 1.5];

interface EBookProps {
  book?: string;
  sound?: string;
  soundMapFile?: string;
}

export interface SoundMapFileType {
  contents: SoundMapFileContentType[];
  hasNextPage: boolean;
  page: number;
  startDelay: number;
  endDelay: number;
  isAudio: boolean;
}

export interface SoundMapFileContentType {
  endAt: string | number;
  epubCfi: string;
  startAt: string | number;
}

const darkModeColor = '#343a52';
const white = '#ffffff';

function EBook(props: EBookProps) {
  const { width, height } = useWindowDimensions();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const { position } = useProgress();

  const { book, sound, soundMapFile } = props;

  const { addMark, removeMark, currentLocation, goNext } = useReader();

  const currentPageRef = useRef(currentLocation?.start?.index || 0);

  const [darkMode, setDarkMode] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(2);
  const [markedEpub, setMarkedEpub] = useState('');
  const [currentMusicState, setCurrentMusicState] = useState<
    'IDLE' | 'PLAYING' | 'PAUSE' | 'STOP'
  >('IDLE');
  const [rotationPlayButtonAnimation] = useState(new Animated.Value(0));
  const [trackThumbPosition, setTrackThumbPosition] = useState(0);
  const [endPageReached, setEndPageReached] = useState(false);
  const [soundMapData, setSoundMapData] = useState<SoundMapFileType[]>([]);
  const [autoPlayActivated, setAutoPlayActivated] = useState(false);

  useEffect(() => {
    if (currentLocation?.start?.index) {
      currentPageRef.current = currentLocation?.start?.index;
    }
  }, [currentLocation?.start?.index]);

  useEffect(() => {
    TrackPlayer.add({
      id: 'trackId',
      url:
        sound ||
        'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/test/sample3/audio.mp3',
      title: 'Track Title',
      artist: 'Track Artist',
    });
    return () => {
      TrackPlayer.reset();
    };
  }, []);

  const onChangePlaySpeed = () => {
    const newSpeedIndex = (speedIndex + 1) % availableSpeeds.length;
    setSpeedIndex(newSpeedIndex);
    TrackPlayer.setRate(availableSpeeds[newSpeedIndex]);
  };

  const playTrack = async (mode: 'manual' | 'auto') => {
    const soundData = soundMapData[currentPageRef?.current];

    if (soundData?.contents?.length) {
      if (mode === 'manual') {
        setAutoPlayActivated(true);
      }
      setCurrentMusicState('PLAYING');
      // if (
      //   position >=
      //   Number(soundData?.contents[soundData?.contents?.length - 1]?.endAt)
      // ) {
      const content = soundData?.contents?.[0];
      const startAt = Number(content?.startAt);
      console.log('start', startAt);

      TrackPlayer.seekTo(startAt);
      // }

      await TrackPlayer.play();
      if (!autoPlayActivated) {
        Animated.timing(rotationPlayButtonAnimation, {
          toValue: 1,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(() => {
          rotationPlayButtonAnimation.setValue(0);
        });
      }
    }
  };

  // console.log('auto play', autoPlayActivated);

  const pauseTrack = async () => {
    await TrackPlayer.pause();
    setCurrentMusicState('PAUSE');
    if (!autoPlayActivated) {
      Animated.timing(rotationPlayButtonAnimation, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        rotationPlayButtonAnimation.setValue(0);
      });
    }
  };

  const removeExistingMarks = (markedEfci: string) => {
    removeMark(markedEfci, 'highlight');
    setMarkedEpub('');
  };

  const getData = async () => {
    await axios
      .get(soundMapFile as string)
      .then(function (response) {
        setSoundMapData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (soundMapFile) {
      getData();
    }
  }, []);

  useEffect(() => {
    const soundData = soundMapData[currentPageRef?.current];
    if (!soundData?.contents?.length) {
      if (currentMusicState === 'PLAYING') {
        pauseTrack();
      }
      return;
    }
    if (currentMusicState === 'PLAYING') {
      const currentContents = soundData?.contents;
      const currentContentIndex = currentContents.findIndex(content => {
        return (
          position >= Number(content.startAt) &&
          position < Number(content.endAt)
        );
      });

      if (
        currentContentIndex === -1 &&
        position >= Number(currentContents[currentContents?.length - 1].endAt)
      ) {
        pauseTrack();
        if (!endPageReached) {
          setTimeout(() => {
            goNext();
            setTrackThumbPosition(prev => prev + 1);
          }, soundMapData[currentPageRef?.current]?.endDelay);
        }
      }

      currentContents.forEach(content => {
        const { epubCfi, startAt, endAt } = content;

        const isMusicInRange =
          position >= Number(startAt) && position < Number(endAt);
        const hasMark = markedEpub === epubCfi ? true : false;

        if (markedEpub && markedEpub !== epubCfi) {
          removeExistingMarks(markedEpub);
        }

        if (currentContentIndex === -1) {
          pauseTrack();
          removeExistingMarks(epubCfi);
          return;
        }

        if (isMusicInRange && !hasMark) {
          addMark('highlight', epubCfi);
          setMarkedEpub(epubCfi);
        } else if (!isMusicInRange && hasMark) {
          removeExistingMarks(epubCfi);
        }
        if (
          currentContentIndex === currentContents.length - 1 &&
          position >=
            Number(currentContents[currentContents?.length - 1]?.endAt)
        ) {
          pauseTrack();
        }
      });
    } else {
      if (markedEpub) {
        removeExistingMarks(markedEpub);
      }
    }
  }, [position]);

  const onChangePageLocation = () => {
    if (currentMusicState === 'PLAYING' || currentMusicState === 'PAUSE') {
      setTimeout(() => {
        handleTrackPlayPauseButton('auto');
      }, soundMapData[currentPageRef?.current]?.startDelay);
    }
    setEndPageReached(false);
  };

  // console.log('cuurent page ref', soundMapData[currentPageRef?.current]);

  const handleTrackPlayPauseButton = (mode: 'manual' | 'auto') => {
    if (currentMusicState === 'PLAYING') {
      if (mode === 'manual') {
        setAutoPlayActivated(false);
      }
      pauseTrack();
    } else {
      playTrack(mode);
    }
  };

  const spin = rotationPlayButtonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const RenderHeader = () => {
    return (
      <View style={styles(direction).headerContainer}>
        <Neumorphism
          lightColor={'#ffffff'}
          darkColor={'#ffffff'}
          shapeType={'flat'}
          radius={scale(50)}>
          <View style={styles(direction).topIconContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                NavigationService.goBack();
              }}>
              <Image
                style={styles(direction).cancelImage}
                source={require('../../assets/cancel.png')}
              />
            </TouchableWithoutFeedback>
          </View>
        </Neumorphism>
      </View>
    );
  };

  const RenderEpubReader = () => {
    return (
      <View style={[styles(direction).epubReaderWrapper]}>
        <Reader
          src={
            book ||
            'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/test/sample3/OEBPS/content.opf'
          }
          width={width}
          height={height}
          fileSystem={useFileSystem}
          onLocationChange={onChangePageLocation}
          onFinish={() => setEndPageReached(true)}
          onSwipeRight={() => {
            setAutoPlayActivated(false);
            setTrackThumbPosition(prev => prev - 1);
          }}
          onSwipeLeft={() => {
            setAutoPlayActivated(false);
            setTrackThumbPosition(prev => prev + 1);
          }}
          onResized={() => console.log('resized')}
          onLayout={() => console.log('layout change')}
        />
      </View>
    );
  };

  const RenderPlayerController = () => {
    if (endPageReached) {
      return (
        <View style={styles(direction).finishControlWrapper}>
          <RegularButton
            onPress={() => {
              NavigationService.navigate('FinishBook');
            }}
            text={
              <Text style={styles(direction).buttonText}>{t('Finish')}</Text>
            }
            radius={60}
            height={40}
            width={width > 450 ? 450 : width}
            colors={['#EBEEF0', '#EBEEF0']}
          />
        </View>
      );
    } else {
      return (
        <View style={styles(direction).playControlWrapper}>
          <TouchableWithoutFeedback>
            <Ionicons name="share-social" size={scale(30)} color="#00008b" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image
              source={require('../../assets/love2.png')}
              style={styles(direction).loveImg}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              handleTrackPlayPauseButton('manual');
            }}>
            <Animated.Image
              source={
                currentMusicState === 'PLAYING' || autoPlayActivated
                  ? require('../../assets/epubpause.png')
                  : require('../../assets/epubplay.png')
              }
              style={[
                styles(direction).controllerImg,
                { transform: [{ rotate: spin }] },
              ]}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => onChangePlaySpeed()}>
            <View style={styles(direction).speedControlContainer}>
              <Text style={styles(direction).speedControlText}>
                {availableSpeeds[speedIndex]}x
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Switch
            value={darkMode}
            onValueChange={val => {
              setDarkMode(val);
            }}
            disabled={false}
            circleSize={25}
            circleBorderWidth={0.3}
            backgroundActive={'#3d4462'}
            backgroundInactive={'#00a0e3'}
            circleActiveColor={'#d9d9d9'}
            circleInActiveColor={'#ffc631'}
            changeValueImmediately={true}
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2}
            switchRightPx={2}
            switchBorderRadius={30}
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView
      style={[
        styles(direction).container,
        { backgroundColor: darkMode ? darkModeColor : white },
      ]}>
      <View style={[styles(direction).contentContainer]}>
        <ImageBackground
          source={require('../../assets/bookBg1.png')}
          style={styles(direction).imageBg}>
          {RenderHeader()}
          {RenderEpubReader()}
        </ImageBackground>
        <View style={[styles(direction).bottomContainer, { width: width }]}>
          <View style={styles(direction).playerModuleWrapper}>
            <View style={styles(direction).pageNoWrapper}>
              <Text style={styles(direction).pageNoDetailsText}>
                {`Page ${currentPageRef?.current + 1} of ${
                  soundMapData?.length
                }`}
              </Text>
            </View>
            <View style={styles(direction).trackWrapper}>
              <Slider
                trackStyle={styles(direction).trackStyle}
                thumbStyle={styles(direction).trackThumbStyle}
                maximumValue={soundMapData?.length}
                minimumTrackTintColor={'#006400'}
                value={trackThumbPosition}
                step={1}
                disabled
              />
            </View>
          </View>
          {RenderPlayerController()}
        </View>
      </View>
    </SafeAreaView>
  );
}

function EBookReader() {
  const { params } = useRoute();

  return (
    <ReaderProvider>
      <EBook
        book={params?.book}
        sound={params?.sound}
        soundMapFile={params?.soundMapFile}
      />
    </ReaderProvider>
  );
}

export default EBookReader;
