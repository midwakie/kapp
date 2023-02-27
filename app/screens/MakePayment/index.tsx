/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
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
import RadioButton from 'app/components/buttons/RadioButton';
import { useRoute } from '@react-navigation/native';

const MakePayment: React.FC = props => {
  const { control } = useForm();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const onPressRadioButtonMaster = () => {
    setRadioButtonMaster(true);
    setRadioButtonVisa(false);
    setRadioButtonBank(false);
  };

  const onPressRadioButtonVisa = () => {
    setRadioButtonMaster(false);
    setRadioButtonVisa(true);
    setRadioButtonBank(false);
  };
  const onPressRadioButtonBank = () => {
    setRadioButtonMaster(false);
    setRadioButtonVisa(false);
    setRadioButtonBank(true);
  };
  const [radioButtonMaster, setRadioButtonMaster] = useState(false);
  const [radioButtonVisa, setRadioButtonVisa] = useState(false);
  const [radioButtonBank, setRadioButtonBank] = useState(false);
  const route = useRoute();
  const item = route.params?.item;
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).container3}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle1}>
                  <View style={styles(direction).row}>
                    <View style={styles(direction).radioButtonViewContainer}>
                      <RadioButton
                        id={'1'}
                        label={`${t('Master Card')}`}
                        onPress={onPressRadioButtonMaster}
                        selected={radioButtonMaster}
                        color={'#03A0E3'}
                        labelStyle={styles(direction).radioLabel}
                      />
                    </View>
                    <View style={styles(direction).imageContainer}>
                      <Image
                        style={styles(direction).cardImage}
                        source={require('../../assets/mastercard.png')}
                      />
                    </View>
                  </View>
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).container4}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle2}>
                  <View style={styles(direction).row}>
                    <View style={styles(direction).radioButtonViewContainer}>
                      <RadioButton
                        id={'1'}
                        label={`${t('Visa Card')}`}
                        onPress={onPressRadioButtonVisa}
                        selected={radioButtonVisa}
                        color={'#03A0E3'}
                        labelStyle={styles(direction).radioLabel}
                      />
                    </View>
                    <View style={styles(direction).imageContainer}>
                      <Image
                        style={styles(direction).cardImage}
                        source={require('../../assets/visaCard.png')}
                      />
                    </View>
                  </View>
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).container5}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle3}>
                  <View style={styles(direction).row}>
                    <View style={styles(direction).radioButtonViewContainer}>
                      <RadioButton
                        id={'1'}
                        label={`${t('Net Banking')}`}
                        onPress={onPressRadioButtonBank}
                        selected={radioButtonBank}
                        color={'#03A0E3'}
                        labelStyle={styles(direction).radioLabel}
                      />
                    </View>
                    <View style={styles(direction).imageContainer}>
                      <Image
                        style={styles(direction).cardImage}
                        source={require('../../assets/netBanking.png')}
                      />
                    </View>
                  </View>
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).container6}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle4}>
                  <View style={styles(direction).row1}>
                    <Text style={styles(direction).text1}>
                      {t('Total Amount')}
                    </Text>
                    <Text style={styles(direction).text2}>${item}</Text>
                  </View>
                </View>
              </Neumorphism>
            </View>

            <View style={styles(direction).button}>
              <RegularButton
                onPress={() => {
                  if (radioButtonVisa || radioButtonMaster) {
                    NavigationService.navigate('CardPayment');
                  }
                }}
                text={t('Make Payment ')}
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
                text={t('Make Payment')}
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

export default MakePayment;
