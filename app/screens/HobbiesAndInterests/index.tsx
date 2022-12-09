import React, { useState } from 'react';
import styles from './styles';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import {
  SafeAreaView,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import { scale } from 'react-native-size-matters';
import BubbleButton from 'app/components/buttons/BubbleButton';

const HobbiesAndInterest: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [musicStatus, setMusicStatus] = useState(false);
  const [danceStatus, setDanceStatus] = useState(false);
  const [gameStatus, setGameStatus] = useState(false);
  const onMusicPress = (currentState: boolean) => {
    setMusicStatus(currentState);
  };
  const onDancePress = (currentState: boolean) => {
    setDanceStatus(currentState);
  };
  const onGamePress = (currentState: boolean) => {
    setGameStatus(currentState);
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
              <TouchableWithoutFeedback>
                <View style={styles(direction).neomorphContainer}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(70)}>
                    <View style={styles(direction).ellipse}>
                      <Image
                        source={require('../../assets/Sing.png')}
                        style={styles(direction).image}
                      />
                      <Text style={styles(direction).bubbleText}>
                        {t('Sing')}
                      </Text>
                    </View>
                  </Neumorphism>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles(direction).bubbleContainerRight}>
              <TouchableWithoutFeedback>
                <View style={styles(direction).neomorphContainer}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(70)}>
                    <View style={styles(direction).ellipse}>
                      <Image
                        source={require('../../assets/Writing.png')}
                        style={styles(direction).image}
                      />
                      <Text style={styles(direction).bubbleText}>
                        {t('Writing')}
                      </Text>
                    </View>
                  </Neumorphism>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles(direction).neomorphContainer}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(70)}>
                    <View style={styles(direction).ellipse}>
                      <Image
                        source={require('../../assets/football.png')}
                        style={styles(direction).image}
                      />
                      <Text style={styles(direction).bubbleText}>
                        {t('Football')}
                      </Text>
                    </View>
                  </Neumorphism>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles(direction).neomorphContainer}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(70)}>
                    <View style={styles(direction).ellipse}>
                      <Image
                        source={require('../../assets/music.png')}
                        style={styles(direction).image}
                      />
                      <Text style={styles(direction).bubbleText}>
                        {t('Music')}
                      </Text>
                    </View>
                  </Neumorphism>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <RegularButton
            onPress={() => {
              NavigationService.navigate('AvatarCreation');
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
