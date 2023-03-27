/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Reader, ReaderProvider, useReader } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import {
  activateKeepAwake,
  deactivateKeepAwake,
} from '@sayem314/react-native-keep-awake';
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
import { debounce } from 'app/utils/debounce';

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
  const goNextTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [currentPage, setCurrentpage] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(2);
  const [prevMarkedEpub, setPrevMarkedEpub] = useState('');
  const [currentMarkedEpub, setCurrentMarkedEpub] = useState('');
  const [currentMusicState, setCurrentMusicState] = useState<
    'IDLE' | 'PLAYING' | 'PAUSE' | 'STOP'
  >('IDLE');
  const [rotationPlayButtonAnimation] = useState(new Animated.Value(0));
  const [trackThumbPosition, setTrackThumbPosition] = useState(0);
  const [endPageReached, setEndPageReached] = useState(false);
  const [soundMapData, setSoundMapData] = useState<SoundMapFileType[]>([]);
  const [autoPlayActivated, setAutoPlayActivated] = useState(false);

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
    TrackPlayer.add({
      id: 'trackId',
      url:
        sound ||
        'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/test/sample3/audio.mp3',
      title: 'Track Title',
      artist: 'Track Artist',
    });
    return () => {
      TrackPlayer.pause();
      TrackPlayer.reset();
    };
  }, []);

  useEffect(() => {
    currentPageRef.current = currentLocation?.start?.index || 0;
    setCurrentpage(currentLocation?.start?.index || 0);
    setTrackThumbPosition(currentLocation?.start?.index || 0);
    TrackPlayer.seekTo(
      Number(
        soundMapData?.[currentPageRef?.current]?.contents?.[0]?.startAt || 0,
      ),
    );
    if (autoPlayActivated) {
      setTimeout(() => {
        playTrack('auto');
      }, soundMapData[currentPageRef?.current]?.startDelay || 3000);
    }
  }, [currentLocation?.start?.index]);

  const onChangePlaySpeed = () => {
    const newSpeedIndex = (speedIndex + 1) % availableSpeeds.length;
    setSpeedIndex(newSpeedIndex);
    TrackPlayer.setRate(availableSpeeds[newSpeedIndex]);
  };

  const onChangePageLocation = async () => {
    if (goNextTimeoutRef.current) {
      clearTimeout(goNextTimeoutRef.current);
      goNextTimeoutRef.current = null;
    }
    setEndPageReached(false);
  };

  const goNextWithDelay = () => {
    goNextTimeoutRef.current = setTimeout(() => {
      goNext();
    }, soundMapData[currentPageRef?.current]?.endDelay || 3000);
  };

  useEffect(() => {
    if (endPageReached) {
      if (goNextTimeoutRef.current) {
        clearTimeout(goNextTimeoutRef.current);
        goNextTimeoutRef.current = null;
      }
      setAutoPlayActivated(false);
      setCurrentMusicState('STOP');
      deactivateKeepAwake();
    }
  }, [endPageReached]);

  const debouncedGoNextWithDelay = debounce(goNextWithDelay, 1000);

  const playTrack = async (type: 'manual' | 'auto') => {
    const soundData = soundMapData?.[currentPageRef?.current];
    activateKeepAwake();
    if (soundData?.contents?.length) {
      if (type === 'auto') {
        await TrackPlayer.play();
      }
    } else {
      if (autoPlayActivated || currentLocation?.start?.index === 0) {
        debouncedGoNextWithDelay();
      }
    }
  };

  const pauseTrack = async () => {
    if (goNextTimeoutRef.current) {
      clearTimeout(goNextTimeoutRef.current);
      goNextTimeoutRef.current = null;
    }
    await TrackPlayer.pause();
    deactivateKeepAwake();
    // Animated.timing(rotationPlayButtonAnimation, {
    //   toValue: 1,
    //   duration: 300,
    //   easing: Easing.linear,
    //   useNativeDriver: true,
    // }).start(() => {
    //   rotationPlayButtonAnimation.setValue(0);
    // });
  };

  const onPressPlayButton = () => {
    setAutoPlayActivated(true);
    setCurrentMusicState('PLAYING');
    playTrack('auto');
  };

  const onPressPauseButton = () => {
    setCurrentMusicState('PAUSE');
    setAutoPlayActivated(false);
    pauseTrack();
  };

  useEffect(() => {
    if (prevMarkedEpub) {
      removeMark(prevMarkedEpub, 'highlight');
    }
  }, [prevMarkedEpub]);

  useEffect(() => {
    if (currentMarkedEpub) {
      addMark('highlight', currentMarkedEpub);
    }
  }, [currentMarkedEpub]);

  const handleTrackPositionChange = () => {
    const soundData = soundMapData?.[currentPageRef?.current];
    if (position && autoPlayActivated && soundData) {
      if (
        position >= Number(soundData?.contents[0]?.startAt) &&
        position <=
          Number(soundData?.contents[soundData?.contents?.length - 1]?.endAt)
      ) {
        const currentPositionIndex = soundData?.contents?.findIndex(content => {
          return (
            position >= Number(content.startAt) &&
            position < Number(content.endAt)
          );
        });
        if (
          currentMarkedEpub !==
          soundData?.contents[currentPositionIndex]?.epubCfi
        ) {
          if (currentMarkedEpub) {
            setPrevMarkedEpub(currentMarkedEpub);
          }
          setCurrentMarkedEpub(
            soundData?.contents[currentPositionIndex]?.epubCfi,
          );
        }
      } else if (
        position >
        Number(soundData?.contents[soundData?.contents?.length - 1]?.endAt)
      ) {
        pauseTrack();
        if (autoPlayActivated) {
          removeMark(currentMarkedEpub, 'highlight');
          debouncedGoNextWithDelay();
        }
      }
    }
  };

  useEffect(() => {
    handleTrackPositionChange();
  }, [position]);

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
          height={height - height / 4}
          fileSystem={useFileSystem}
          onLocationChange={onChangePageLocation}
          onFinish={() => setEndPageReached(true)}
          onResized={() => console.log('resized')}
          onLayout={() => console.log('layout change')}
        />
        <View
          style={[
            styles(direction).playerModuleWrapper,
            { backgroundColor: darkMode ? darkModeColor : white },
          ]}>
          <View style={styles(direction).pageNoWrapper}>
            <Text style={styles(direction).pageNoDetailsText}>
              {`${currentPageRef?.current + 1} of ${soundMapData?.length}`}
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
            width={width > 450 ? 450 : width - 50}
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
          {currentMusicState === 'PLAYING' ? (
            <TouchableWithoutFeedback
              onPress={() => {
                onPressPauseButton();
              }}>
              <Animated.Image
                source={require('../../assets/epubpause.png')}
                style={[
                  styles(direction).controllerImg,
                  { transform: [{ rotate: spin }] },
                ]}
              />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                onPressPlayButton();
              }}>
              <Animated.Image
                source={require('../../assets/epubplay.png')}
                style={[
                  styles(direction).controllerImg,
                  { transform: [{ rotate: spin }] },
                ]}
              />
            </TouchableWithoutFeedback>
          )}
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
      style={[styles(direction).container, { backgroundColor: white }]}>
      <View style={[styles(direction).contentContainer]}>
        <ScrollView>
          {RenderHeader()}
          {RenderEpubReader()}
          <View
            style={[
              styles(direction).bottomContainer,
              {
                width: width,
                backgroundColor: darkMode ? darkModeColor : white,
              },
            ]}>
            {RenderPlayerController()}
          </View>
        </ScrollView>
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
