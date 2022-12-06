import React, { useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import RadioButton from 'app/components/buttons/RadioButton';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import CustomInput from 'app/components/inputs/CustomInput';
import PlainButton from 'app/components/buttons/PlainButton';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';

const AvatarCreation: React.FC = () => {
  const { control } = useForm();
  const [radioButtonMale, setRadioButtonMale] = useState(true);
  const [radioButtonFemale, setRadioButtonFemale] = useState(false);
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const onPressRadioButtonMale = () => {
    setRadioButtonMale(!radioButtonMale);
    setRadioButtonFemale(!radioButtonFemale);
  };

  const onPressRadioButtonFemale = () => {
    setRadioButtonMale(!radioButtonMale);
    setRadioButtonFemale(!radioButtonFemale);
  };
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
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
            <PlainButton
              onPress={() => {}}
              style={styles(direction).skipButtonText}
              containerStyle={styles(direction).skipButtonContainer}
              text={t('Skip')}
            />
          </View>
          <View style={styles(direction).neomorphContainer}>
            <View style={styles(direction).imageContainer}>
              <Image
                source={require('../../assets/cAvatar.png')}
                style={styles(direction).imageStyle}
              />
            </View>
          </View>
          <View style={styles(direction).gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Create Avatar')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle}
            />
          </View>
          <View style={styles(direction).radioButtonContainer}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'pressed'}
              radius={60}>
              <View style={styles(direction).touchableOpacity}>
                <RadioButton
                  id={'1'}
                  label={`${t('Male')}`}
                  onPress={onPressRadioButtonMale}
                  selected={radioButtonMale}
                  color={'#03A0E3'}
                />
                {/* <HorizontalLine width={'100%'} stroke={1} color={'#E2E2E2'} /> */}
                <RadioButton
                  id={'2'}
                  label={`${t('Female')}`}
                  onPress={onPressRadioButtonFemale}
                  selected={radioButtonFemale}
                  color={'#03A0E3'}
                />
              </View>
            </Neumorphism>
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              name="first_name"
              //   rules={rules.CustomerRules.first_name}
              placeholder={t('Nickname')}
              //   label="First Name*"
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {}}
            />
          </View>
          <View style={styles(direction).regularButton}>
            <RegularButton
              onPress={() => {
                NavigationService.navigate('AvatarModifier');
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

export default AvatarCreation;
