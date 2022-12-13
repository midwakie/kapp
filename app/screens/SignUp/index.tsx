import React from 'react';
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
import { scale } from 'react-native-size-matters';

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const { control } = useForm();
  const lastNameInputRef: React.RefObject<any> = React.createRef();
  const emailInputRef: React.RefObject<any> = React.createRef();
  const mobileNumberInputRef: React.RefObject<any> = React.createRef();
  const invitationCodeInputRef: React.RefObject<any> = React.createRef();
  const passwordInputRef: React.RefObject<any> = React.createRef();
  const confirmPasswordInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).neomorphContainer}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(118)}>
              <View style={styles(direction).imageContainer}>
                <Image
                  source={require('../../assets/logo.png')}
                  style={styles(direction).imageStyle}
                />
              </View>
            </Neumorphism>
          </View>
          <View style={styles(direction).gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Sign Up to Continue')}
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
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={emailInputRef}
              name="email"
              rules={rules.AuthRules.email}
              placeholder={t('Email')}
              label={t('Email')}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                mobileNumberInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={mobileNumberInputRef}
              name="mobile_number"
              placeholder={t('Mobile Number')}
              label={t('Mobile Number')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                invitationCodeInputRef?.current.setFocus();
              }}
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
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              ref={passwordInputRef}
              control={control}
              name="password"
              rules={rules.AuthRules.password}
              placeholder={t('Password')}
              label={t('Password')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              secureTextEntry={!showPassword}
              rightComponent={
                <TouchableOpacity
                  style={styles(direction).rightComponent}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}>
                  <MaterialIcon
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={scale(20)}
                    color={'#758DAC'}
                  />
                </TouchableOpacity>
              }
              onSubmitEditing={() => {
                confirmPasswordInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              ref={confirmPasswordInputRef}
              control={control}
              name="confirm_password"
              rules={rules.AuthRules.password}
              placeholder={t('Confirm Password')}
              label={t('Confirm Password')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              secureTextEntry={!showPassword}
              rightComponent={
                <TouchableOpacity
                  style={styles(direction).rightComponent}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}>
                  <MaterialIcon
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={scale(20)}
                    color={'#758DAC'}
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles(direction).agreeDisagreeContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              uncheckedColor={'#03A0E3'}
              color={'#03A0E3'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={styles(direction).agreeDisagreeText}
              onPress={() => {
                setChecked(!checked);
              }}>
              {t('I Agree to Terms & Conditions')}
            </Text>
          </View>
          <RegularButton
            onPress={() => {
              NavigationService.navigate('Verify Email');
            }}
            text={t('Sign up')}
            radius={50}
            height={50}
            width={'100%'}
            colors={['#03BBE3', '#14A9FD']}
          />
          <View style={styles(direction).socialContainer}>
            <TouchableOpacity>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={50}>
                <View style={styles(direction).socialButtonContainer}>
                  <Image
                    source={require('../../assets/facebook.png')}
                    style={styles(direction).socialButtonStyle}
                  />
                </View>
              </Neumorphism>
            </TouchableOpacity>
            <HorizontalLine width={scale(43)} />
            <TouchableOpacity>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={50}>
                <View style={styles(direction).socialButtonContainer}>
                  <Image
                    source={require('../../assets/google.png')}
                    style={styles(direction).socialButtonStyle}
                  />
                </View>
              </Neumorphism>
            </TouchableOpacity>
            {Platform.OS === 'ios' && (
              <>
                <HorizontalLine width={scale(43)} />
                <TouchableOpacity>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={50}>
                    <View style={styles(direction).socialButtonContainer}>
                      <Image
                        source={require('../../assets/apple.png')}
                        style={styles(direction).socialButtonStyle}
                      />
                    </View>
                  </Neumorphism>
                </TouchableOpacity>
              </>
            )}
          </View>
          <View style={styles(direction).bottomContainer}>
            <Text style={styles(direction).bottomText}>
              {t('Already have an account?')}
            </Text>
            <HorizontalLine width={8} />
            <PlainButton
              onPress={() => {
                NavigationService.replace('Sign In');
              }}
              style={styles(direction).signUpButton}
              containerStyle={styles(direction).signUpButtonContainer}
              text={t('Sign in')}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
