/* eslint-disable @typescript-eslint/no-unused-vars */
import RadioButton from 'app/components/buttons/RadioButton';
import RegularButton from 'app/components/buttons/RegularButton';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import GradientText from 'app/components/texts/GradientText';
import useGetOnboardingStatus from 'app/hooks/useGetOnboardingStatus';
import NavigationService from 'app/navigation/NavigationService';
import { persistSelectedLanguage } from 'app/utils/storageUtils';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './styles';
const Language: React.FC = () => {
  const [radioButtonEnglish, setRadioButtonEnglish] = useState(true);
  const [radioButtonArabic, setRadioButtonArabic] = useState(false);

  const onPressRadioButtonEnglish = (radioButton: string) => {
    setRadioButtonEnglish(!radioButtonEnglish);
    setRadioButtonArabic(!radioButtonArabic);
  };

  const onPressRadioButtonArabic = (radioButton: string) => {
    setRadioButtonEnglish(!radioButtonEnglish);
    setRadioButtonArabic(!radioButtonArabic);
  };

  const { isFirstLaunch, isLoading: onboardingIsLoading } =
    useGetOnboardingStatus();

  useEffect(() => {
    if (isFirstLaunch === true) {
      NavigationService.navigate('Sign In');
    }
  }, [isFirstLaunch]);

  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container2}>
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text="Select Your Language preference"
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              You can change later if you want
            </Text>
          </View>
          <View style={styles.radioButtonContainer}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles.touchableOpacity}>
                <RadioButton
                  id={'1'}
                  label={'English'}
                  onPress={onPressRadioButtonEnglish}
                  selected={radioButtonEnglish}
                  color={'#03A0E3'}
                />
                <HorizontalLine width={'100%'} stroke={1} color={'#E2E2E2'} />
                <RadioButton
                  id={'2'}
                  label={'Arabic'}
                  onPress={onPressRadioButtonArabic}
                  selected={radioButtonArabic}
                  color={'#03A0E3'}
                />
              </View>
            </Neumorphism>
          </View>
          <RegularButton
            onPress={() => {
              persistSelectedLanguage(
                radioButtonEnglish === false ? 'Arabic' : 'English',
              );
              NavigationService.navigate('Welcome');
            }}
            text={'Save'}
            radius={50}
            colors={['#03BBE3', '#14A9FD']}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Language;
