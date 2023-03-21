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
import ReaderJson from 'app/readerJson';

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
}

export interface SoundMapFileContentType {
  endAt: string | number;
  epubCfi: string;
  startAt: string | number;
}

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

  const playTrack = async () => {
    const soundData = soundMapData[currentPageRef?.current];

    if (soundData?.contents?.length) {
      setCurrentMusicState('PLAYING');
      if (
        position >=
        Number(soundData?.contents[soundData?.contents?.length - 1]?.endAt)
      ) {
        const content = soundData?.contents?.[0];
        const startAt = Number(content?.startAt);
        TrackPlayer.seekTo(startAt);
      }

      await TrackPlayer.play();
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

  const pauseTrack = async () => {
    await TrackPlayer.pause();
    setCurrentMusicState('PAUSE');
    Animated.timing(rotationPlayButtonAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      rotationPlayButtonAnimation.setValue(0);
    });
  };

  const removeExistingMarks = (markedEfci: string) => {
    removeMark(markedEfci, 'highlight');
    setMarkedEpub('');
  };

  const getData = async () => {
    setSoundMapData(ReaderJson);
  };
  // const getData = async () => {
  //   await axios
  //     .get(soundMapFile as string)
  //     .then(function (response) {
  //       setSoundMapData(response?.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    if (soundMapFile) {
      getData();
    }
  }, []);
  console.log('curent page-------', soundMapData[currentPageRef?.current]);

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
          }, soundData?.startDelay);
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
        handleTrackPlayPauseButton();
      }, 2000);
    }
    setEndPageReached(false);
  };

  const handleTrackPlayPauseButton = () => {
    if (currentMusicState === 'PLAYING') {
      pauseTrack();
    } else {
      playTrack();
    }
  };

  const spin = rotationPlayButtonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

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
            <Image
              source={require('../../assets/hamburger.png')}
              style={styles(direction).controllerImg}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleTrackPlayPauseButton}>
            <Animated.Image
              source={
                currentMusicState === 'PLAYING'
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
        styles(direction).safeAreaView,
        { backgroundColor: darkMode ? '#343a52' : '#ffffff' },
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).topContainer}>
            <RegularButton
              onPress={() => {
                NavigationService.goBack();
              }}
              icon={'arrow-back'}
              radius={38}
              height={38}
              width={38}
              colors={['#EBECF0', '#EBECF0']}
            />
          </View>
          <TouchableOpacity>
            <View style={styles(direction).topContainer2}>
              <Image
                source={require('../../assets/love2.png')}
                style={styles(direction).loveImg}
              />
            </View>
          </TouchableOpacity>
          <View style={styles(direction).epubReaderWrapper}>
            <Reader
              src={
                book ||
                'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/test/sample3/OEBPS/content.opf'
              }
              width={width - 80}
              height={height - 135}
              fileSystem={useFileSystem}
              onLocationChange={onChangePageLocation}
              onFinish={() => setEndPageReached(true)}
              onSwipeRight={() => setTrackThumbPosition(prev => prev - 1)}
              onSwipeLeft={() => setTrackThumbPosition(prev => prev + 1)}
            />
          </View>

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
                value={trackThumbPosition}
                step={1}
                disabled
              />
            </View>
            {RenderPlayerController()}
          </View>
        </View>
      </ScrollView>
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
