/* eslint-disable @typescript-eslint/no-unused-vars */
import RadioButton from 'app/components/buttons/RadioButton';
import RegularButton from 'app/components/buttons/RegularButton';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import GradientText from 'app/components/texts/GradientText';
import { persistSelectedLanguage } from 'app/utils/storageUtils';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './styles';
import RNRestart from 'react-native-restart';
const Language: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [radioButtonEnglish, setRadioButtonEnglish] = useState(true);
  const [radioButtonArabic, setRadioButtonArabic] = useState(false);

  const onPressRadioButtonEnglish = (radioButton: string) => {
    i18n.changeLanguage('en');
    setRadioButtonEnglish(!radioButtonEnglish);
    setRadioButtonArabic(!radioButtonArabic);
  };

  const onPressRadioButtonArabic = (radioButton: string) => {
    i18n.changeLanguage('ar');
    setRadioButtonEnglish(!radioButtonEnglish);
    setRadioButtonArabic(!radioButtonArabic);
  };

  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container2}>
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Select Your Language preference')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              {t('You can change later if you want')}
            </Text>
          </View>
          <View style={styles.radioButtonContainer}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles.touchableOpacity}>
                <View style={{paddingVertical:25}}>
                  <RadioButton
                    id={'1'}
                    label={`${t('English')}`}
                    onPress={onPressRadioButtonEnglish}
                    selected={radioButtonEnglish}
                    color={'#03A0E3'}
                    labelStyle={styles.radioLabel}
                  />
                </View>
                <HorizontalLine width={'100%'} stroke={1} color={'#E2E2E2'} />
                <View style={{paddingVertical:25}}>
                  <RadioButton
                    id={'2'}
                    label={`${t('Arabic')}`}
                    onPress={onPressRadioButtonArabic}
                    selected={radioButtonArabic}
                    color={'#03A0E3'}
                    labelStyle={styles.radioLabel}
                  />
                </View>
              </View>
            </Neumorphism>
          </View>
          <RegularButton
            onPress={() => {
              persistSelectedLanguage(
                radioButtonEnglish === false ? 'ar' : 'en',
              );
              i18n.changeLanguage(radioButtonEnglish === false ? 'ar' : 'en');
              RNRestart.Restart();
            }}
            text={`${t('Save')}`}
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

export default Language;
