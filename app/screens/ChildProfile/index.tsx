import React, { useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import RadioButton from 'app/components/buttons/RadioButton';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import rules from 'app/rules';
import CustomInput from 'app/components/inputs/CustomInput';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlainButton from 'app/components/buttons/PlainButton';
import RegularButton from 'app/components/buttons/RegularButton';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import { Checkbox } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const ChildProfile: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const { control } = useForm();
  const [radioButtonMale, setRadioButtonMale] = useState(true);
  const [radioButtonFemale, setRadioButtonFemale] = useState(false);
  const lastNameInputRef: React.RefObject<any> = React.createRef();
  const emailInputRef: React.RefObject<any> = React.createRef();
  const dateofbirthInputRef: React.RefObject<any> = React.createRef();
  const invitationCodeInputRef: React.RefObject<any> = React.createRef();
  const passwordInputRef: React.RefObject<any> = React.createRef();
  const confirmPasswordInputRef: React.RefObject<any> = React.createRef();
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
          </View>

          <View style={styles(direction).gradientTextContainer}>
            <GradientText
              colors={['#2AA7DD', '#2AA7DD']}
              text={t('Create Your \nChild Profile')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              name="first_name"
              rules={rules.CustomerRules.first_name}
              placeholder={t('First Name')}
              label={t('First Name')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                lastNameInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={lastNameInputRef}
              name="last_name"
              rules={rules.CustomerRules.last_name}
              placeholder={t('Last Name')}
              label={t('Last Name')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                emailInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).radioButtonContainer}>
            <Image
              source={require('../../assets/inputBg.png')}
              style={styles(direction).bg}
            />
            <View style={styles(direction).touchableOpacity}>
              <RadioButton
                size={16}
                id={'1'}
                label={`${t('Male')}`}
                onPress={onPressRadioButtonMale}
                selected={radioButtonMale}
                color={'#03A0E3'}
              />
              {/* <HorizontalLine width={'100%'} stroke={1} color={'#E2E2E2'} /> */}
              <RadioButton
                size={16}
                id={'2'}
                label={`${t('Female')}`}
                onPress={onPressRadioButtonFemale}
                selected={radioButtonFemale}
                color={'#03A0E3'}
              />
            </View>
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={dateofbirthInputRef}
              name="date of birth"
              placeholder={t('Date of Birth')}
              label={t('Date of Birth')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                dateofbirthInputRef?.current.setFocus();
              }}
              rightComponent={
                <TouchableOpacity style={styles(direction).rightComponent}>
                  <MaterialIcon
                    name={'chevron-down'}
                    size={35}
                    color={'#03A0E3'}
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={dateofbirthInputRef}
              name="first spoken language"
              placeholder={t('First Spoken Language')}
              label={t('First Spoken Language')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                dateofbirthInputRef?.current.setFocus();
              }}
              rightComponent={
                <TouchableOpacity style={styles(direction).rightComponent}>
                  <MaterialIcon
                    name={'chevron-down'}
                    size={35}
                    color={'#03A0E3'}
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={invitationCodeInputRef}
              name="invitation_code"
              placeholder={t('Invitation Code')}
              label={t('Invitation Code')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef?.current.setFocus();
              }}
            />
          </View>

          <View style={styles(direction).bottom}>
            <RegularButton
              onPress={() => {
                NavigationService.navigate('');
              }}
              text={t('Save')}
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

export default ChildProfile;
