import React from 'react';
import { SafeAreaView, Text, TextStyle, View } from 'react-native';
import styles from './style';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import rules from 'app/rules';
import CustomInput from 'app/components/inputs/CustomInput';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';

const RewardPointFilter: React.FC = () => {
  const { control } = useForm();

  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <>
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
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(14)}>
              <View style={styles(direction).container3}>
                <View style={styles(direction).row}>
                  <Text style={styles(direction).text1}>
                    {t('Transactions Type')}
                  </Text>
                </View>
                <View style={styles(direction).row1}>
                  <View style={styles(direction).buttonInnerContainer}>
                    <RegularButton
                      // onPress={onSignUp}
                      text={t('All')}
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={['#03BBE3', '#14A9FD']}
                    />
                  </View>
                </View>

                <View style={styles(direction).row2}>
                  <View style={styles(direction).lastWeekDropdown}>
                    <Neumorphism
                      lightColor={'#E2E2E2'}
                      darkColor={'#A8A8A8'}
                      shapeType={'basin'}
                      radius={50}>
                      <View style={styles(direction).box}>
                        <Text style={styles(direction).text123}>
                          {t('Spent')}
                        </Text>
                      </View>
                    </Neumorphism>
                  </View>
                  <View style={styles(direction).lastWeekDropdown2}>
                    <Neumorphism
                      lightColor={'#E2E2E2'}
                      darkColor={'#A8A8A8'}
                      shapeType={'basin'}
                      radius={50}>
                      <View style={styles(direction).box}>
                        <Text style={styles(direction).text123}>
                          {t('Earned')}
                        </Text>
                      </View>
                    </Neumorphism>
                  </View>
                </View>
              </View>
            </Neumorphism>
            <View style={{ marginTop: 200 }}>
              <RegularButton
                onPress={() => {
                  NavigationService.navigate(' ');
                }}
                text={t('Apply ')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#03BBE3', '#14A9FD']}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default RewardPointFilter;
