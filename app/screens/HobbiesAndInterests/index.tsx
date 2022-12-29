import React, { useCallback, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView, View } from 'react-native';
import BubbleButton from 'app/components/buttons/BubbleButton';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';

const HobbiesAndInterest: React.FC = () => {
  const { t } = useTranslation();
  const deviceOrientation = useDeviceOrientation();
  const [musicStatus, setMusicStatus] = useState(false);
  const [danceStatus, setDanceStatus] = useState(false);
  const [gameStatus, setGameStatus] = useState(false);
  const [singStatus, setSingStatus] = useState(false);
  const [writingStatus, setWritingStatus] = useState(false);
  const [footballStatus, setFootballStatus] = useState(false);
  const onMusicPress = useCallback((currentState: boolean) => {
    setMusicStatus(currentState);
  }, []);
  const onDancePress = useCallback((currentState: boolean) => {
    setDanceStatus(currentState);
  }, []);
  const onGamePress = useCallback((currentState: boolean) => {
    setGameStatus(currentState);
  }, []);
  const onSingPress = useCallback((currentState: boolean) => {
    setSingStatus(currentState);
  }, []);
  const onWritingPress = useCallback((currentState: boolean) => {
    setWritingStatus(currentState);
  }, []);
  const onFootballPress = useCallback((currentState: boolean) => {
    setFootballStatus(currentState);
  }, []);
  return (
    <ScrollView style={styles(deviceOrientation).container} bounces={false}>
      <SafeAreaView style={styles(deviceOrientation).safeAreaView}>
        <View style={styles(deviceOrientation).container2}>
          <View style={styles(deviceOrientation).gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Interests & Hobbies')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(deviceOrientation).gradientTextStyle}
            />
          </View>
          <View style={styles(deviceOrientation).bubbleContainer}>
            <View style={styles(deviceOrientation).bubbleContainerLeft}>
              <BubbleButton
                image={require('../../assets/music.png')}
                title="Music"
                onPress={onMusicPress}
              />
              <BubbleButton
                image={require('../../assets/dance.png')}
                title="Dance"
                onPress={onDancePress}
              />
              <BubbleButton
                image={require('../../assets/game.png')}
                title="Game"
                onPress={onGamePress}
              />
              <BubbleButton
                image={require('../../assets/sing.png')}
                title="Sing"
                onPress={onSingPress}
              />
            </View>
            <View style={styles(deviceOrientation).bubbleContainerRight}>
              <BubbleButton
                image={require('../../assets/writing.png')}
                title="Writing"
                onPress={onWritingPress}
              />
              <BubbleButton
                image={require('../../assets/football.png')}
                title="Football"
                onPress={onFootballPress}
              />
              <BubbleButton
                image={require('../../assets/music.png')}
                title="Music"
                onPress={onMusicPress}
              />
            </View>
          </View>
          <View style={styles(deviceOrientation).buttonContainer}>
            <RegularButton
              onPress={() => {
                NavigationService.navigate('BookDetails');
              }}
              text={t('Next')}
              radius={50}
              height={50}
              width={'100%'}
              colors={['#03BBE3', '#14A9FD']}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default HobbiesAndInterest;
