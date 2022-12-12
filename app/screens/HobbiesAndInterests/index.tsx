import React, { useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView, View } from 'react-native';
import BubbleButton from 'app/components/buttons/BubbleButton';

const HobbiesAndInterest: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [musicStatus, setMusicStatus] = useState(false);
  const [danceStatus, setDanceStatus] = useState(false);
  const [gameStatus, setGameStatus] = useState(false);
  const [singStatus, setSingStatus] = useState(false);
  const [writingStatus, setWritingStatus] = useState(false);
  const [footballStatus, setFootballStatus] = useState(false);
  const onMusicPress = (currentState: boolean) => {
    setMusicStatus(currentState);
  };
  const onDancePress = (currentState: boolean) => {
    setDanceStatus(currentState);
  };
  const onGamePress = (currentState: boolean) => {
    setGameStatus(currentState);
  };
  const onSingPress = (currentState: boolean) => {
    setSingStatus(currentState);
  };
  const onWritingPress = (currentState: boolean) => {
    setWritingStatus(currentState);
  };
  const onFootballPress = (currentState: boolean) => {
    setFootballStatus(currentState);
  };
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Interests & Hobbies')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle}
            />
          </View>
          <View style={styles(direction).bubbleContainer}>
            <View style={styles(direction).bubbleContainerLeft}>
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
            <View style={styles(direction).bubbleContainerRight}>
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
          <RegularButton
            onPress={() => {
              NavigationService.navigate('EditChildProfile');
            }}
            text={t('Next')}
            radius={50}
            height={50}
            width={'100%'}
            colors={['#03BBE3', '#14A9FD']}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default HobbiesAndInterest;
