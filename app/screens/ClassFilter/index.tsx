/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { SafeAreaView, Text, TextStyle, View } from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import HorizontalLine from 'app/components/lines/HorizontalLine';

const ClassFilter: React.FC = () => {
  const { control } = useForm();
  const [active, setActive] = useState(false);
  const [channelOneActive, setChannelOneActive] = useState(false);
  const [channelTwoActive, setChannelTwoActive] = useState(false);
  const [urduActive, setUrduActive] = useState(false);
  const [scienceActive, setScienceActive] = useState(false);
  const [sportActive, setSportActive] = useState(false);
  const [englishActive, setEnglishActive] = useState(false);
  const [mathsActive, setMathsActive] = useState(false);
  const [urdu2Active, setUrdu2Active] = useState(false);
  const [science2Active, setScience2Active] = useState(false);

  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const Press = () => {
    setActive(!active);
  };
  const channelOnePress = () => {
    setChannelOneActive(!channelOneActive);
  };
  const channelTwoPress = () => {
    setChannelTwoActive(!channelTwoActive);
  };
  const urduPress = () => {
    setUrduActive(!urduActive);
  };
  const sciencePress = () => {
    setScienceActive(!scienceActive);
  };
  const sportPress = () => {
    setSportActive(!sportActive);
  };
  const englishPress = () => {
    setEnglishActive(!englishActive);
  };
  const mathsPress = () => {
    setMathsActive(!mathsActive);
  };
  const urdu2Press = () => {
    setUrdu2Active(!urdu2Active);
  };
  const science2Press = () => {
    setScience2Active(!science2Active);
  };
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).neomorphContainer}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={scale(14)}>
                <View style={styles(direction).container3}>
                  <View style={styles(direction).row}>
                    <GradientText
                      colors={['#758DAC', '#2F4868']}
                      text={t('Class Room Channel List')}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      textStyle={styles(direction).text1}
                    />
                  </View>
                  <View style={styles(direction).row1}>
                    <RegularButton
                      onPress={Press}
                      text={
                        <Text style={styles(direction, active).buttonText}>
                          {t('All')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        active ? ['#03BBE3', '#03A0E3'] : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                  </View>

                  <View style={styles(direction).row2}>
                    <RegularButton
                      onPress={channelOnePress}
                      text={
                        <Text
                          style={
                            styles(direction, channelOneActive).buttonText
                          }>
                          {t('Channel-1')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        channelOneActive
                          ? ['#03BBE3', '#03A0E3']
                          : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                    <HorizontalLine
                      stroke={0.01}
                      opacity={0}
                      width={scale(20)}
                      color={'transparent'}
                    />
                    <RegularButton
                      onPress={channelTwoPress}
                      text={
                        <Text
                          style={
                            styles(direction, channelTwoActive).buttonText
                          }>
                          {t('  Channel-2  ')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        channelTwoActive
                          ? ['#03BBE3', '#03A0E3']
                          : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                  </View>
                  <View style={styles(direction).row2}>
                    <RegularButton
                      onPress={urduPress}
                      text={
                        <Text style={styles(direction, urduActive).buttonText}>
                          {t('Urdu')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        urduActive
                          ? ['#03BBE3', '#03A0E3']
                          : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                    <HorizontalLine
                      stroke={0.01}
                      opacity={0}
                      width={scale(20)}
                      color={'transparent'}
                    />
                    <RegularButton
                      onPress={sciencePress}
                      text={
                        <Text
                          style={styles(direction, scienceActive).buttonText}>
                          {t('Science And Fiction')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        scienceActive
                          ? ['#03BBE3', '#03A0E3']
                          : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                  </View>
                  <View style={styles(direction).row2}>
                    <RegularButton
                      onPress={sportPress}
                      text={
                        <Text style={styles(direction, sportActive).buttonText}>
                          {t('Sport And Health')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        sportActive
                          ? ['#03BBE3', '#03A0E3']
                          : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                  </View>
                  <View style={styles(direction).row2}>
                    <RegularButton
                      onPress={englishPress}
                      text={
                        <Text
                          style={styles(direction, englishActive).buttonText}>
                          {t('English')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        englishActive
                          ? ['#03BBE3', '#03A0E3']
                          : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                    <HorizontalLine
                      stroke={0.01}
                      opacity={0}
                      width={scale(20)}
                      color={'transparent'}
                    />
                    <RegularButton
                      onPress={mathsPress}
                      text={
                        <Text style={styles(direction, mathsActive).buttonText}>
                          {t('Maths')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        mathsActive
                          ? ['#03BBE3', '#03A0E3']
                          : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                  </View>
                  <View style={styles(direction).row2}>
                    <RegularButton
                      onPress={urdu2Press}
                      text={
                        <Text style={styles(direction, urdu2Active).buttonText}>
                          {t('Urdu')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        urdu2Active
                          ? ['#03BBE3', '#03A0E3']
                          : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                    <HorizontalLine
                      stroke={0.01}
                      opacity={0}
                      width={scale(20)}
                      color={'transparent'}
                    />
                    <RegularButton
                      onPress={science2Press}
                      text={
                        <Text
                          style={styles(direction, science2Active).buttonText}>
                          {t('Sciene And Fiction')}
                        </Text>
                      }
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={
                        science2Active
                          ? ['#03BBE3', '#03A0E3']
                          : ['#E2E2E2', '#FFFFFF']
                      }
                    />
                  </View>
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).neomorphContainer2}>
              <RegularButton
                onPress={() => {}}
                text={t('Apply')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#03BBE3', '#14A9FD']}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          leftComponent={
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
          }
          middleComponent={
            <View style={styles(direction).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Filter')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
            </View>
          }
        />
      </View>
    </>
  );
};

export default ClassFilter;
