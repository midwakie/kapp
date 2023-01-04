import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import TitleBar from 'app/components/buttons/TitleBar';
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

const EditTeacherProfile: React.FC = () => {
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
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).profileImgContainer}>
              <Image
                source={require('../../assets/editTeacher.png')}
                style={styles(direction).profileImg}
              />
              <TouchableOpacity style={styles(direction).imageContainer2}>
                <Image
                  style={styles(direction).imageRound}
                  source={require('../../assets/editChild2.png')}
                />
              </TouchableOpacity>
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
            <View style={styles(direction).inputTextContainer1}>
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
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              radius={scale(50)}>
              <View style={styles(direction).schoolInputTextContainer}>
                <Text style={styles(direction).schoolText}>
                  Al Jeel Al Saeed School
                </Text>
                <TouchableOpacity>
                  <Text style={styles(direction).changeText1}>
                    {t('Change')}
                  </Text>
                </TouchableOpacity>
              </View>
            </Neumorphism>
            <View style={styles(direction).regularButtonContainer}>
              <RegularButton
                onPress={() => {
                  NavigationService.navigate('ChangePassword');
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
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          leftComponent={
            <View style={styles(direction).regularContainer}>
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
                text={t('Edit Profile')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle}
              />
            </View>
          }
        />
      </View>
    </>
  );
};

export default EditTeacherProfile;
