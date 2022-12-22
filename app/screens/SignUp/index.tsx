import React, { useRef } from 'react';
import {
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
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
import PhoneInput from 'react-native-phone-number-input';
import NationalityPicker from 'react-native-nationality-country-calling-code-picker';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [country, setCountry] = React.useState('');
  const { control, handleSubmit, watch, setValue } = useForm();
  const pwd = watch('password');
  const lastNameInputRef: React.RefObject<any> = React.createRef();
  const emailInputRef: React.RefObject<any> = React.createRef();
  const mobileNumberInputRef = useRef<TextInput>(null);
  let countryInputRef = useRef(null);
  const schoolLocationInputRef: React.RefObject<any> = React.createRef();
  const schoolNameInputRef: React.RefObject<any> = React.createRef();
  const countryDummyInputRef: React.RefObject<any> = React.createRef();
  const cityInputRef: React.RefObject<any> = React.createRef();
  const passwordInputRef: React.RefObject<any> = React.createRef();
  const confirmPasswordInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

  const signUpUser = (data) => {
    // alert('Sign Up' + JSON.stringify(data));
    NavigationService.navigate('Verify Email');
  };

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
              name="firstName"
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
              name="lastName"
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
                //@ts-ignore
                mobileNumberInputRef?.current.focus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <Image
              source={require('../../assets/inputBg.png')}
              style={styles(direction).bg}
            />
            <PhoneInput
              defaultCode="AE"
              layout="second"
              onChangeFormattedText={text => {
                setMobileNumber(text);
              }}
              disabled={false}
              placeholder={`${t('Mobile Number')}*`}
              flagButtonStyle={styles(direction).flagButtonStyle}
              codeTextStyle={styles(direction).mobileCodeTextStyle}
              countryPickerButtonStyle={
                styles(direction).countryPickerButtonStyle
              }
              textContainerStyle={styles(direction).textContainerStyle}
              containerStyle={styles(direction).mobileInputContainerStyle}
              textInputStyle={styles(direction).mobileTextInputStyle}
              textInputProps={{
                placeholderTextColor: '#758DAC',
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => {
                  schoolLocationInputRef?.current.setFocus();
                },
                // @ts-ignore
                ref: mobileNumberInputRef,
                keyboardType: 'phone-pad',
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={schoolLocationInputRef}
              name="schoolLocation"
              rules={rules.CustomerRules.school_location}
              placeholder={t('School Location')}
              label={t('School Location')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                schoolNameInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={schoolNameInputRef}
              name="schoolName"
              rules={rules.CustomerRules.school_name}
              placeholder={t('School Name')}
              label={t('School Name')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                countryDummyInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={countryDummyInputRef}
              name="country"
              rules={rules.CustomerRules.country}
              placeholder={t('Country')}
              label={t('Country')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onFocus={() => {
                Keyboard.dismiss();
                countryInputRef.open();
              }}
            />
            <NationalityPicker
              nationalityPickerRef={(ref: any) => {
                countryInputRef = ref;
              }}
              enable={false}
              darkMode={false}
              containerConfig={{
                showFlag: true,
                showCallingCode: false,
                showCountryName: true,
                showNationalityName: false,
                showCountryCode: false,
                showCountryCode3: false,
              }}
              modalConfig={{
                showFlag: true,
                showCallingCode: false,
                showCountryName: true,
                showNationalityName: false,
                showCountryCode: false,
                showCountryCode3: false,
              }}
              onSelectCountry={(data: any) => {
                setValue('country', data.name);
                setCountry(data.name);
              }}
              onInit={data => {
                // console.log("DATA on init", data);
              }}
              onOpen={() => {}}
              onClose={() => {
                cityInputRef?.current.setFocus();
              }}
              containerStyle={{
                container: {
                  backgroundColor: '#EBEEF0',
                },
                flagStyle: {},
                callingCodeStyle: {},
                countryCodeStyle: {},
                countryNameStyle: {},
                nationalityNameStyle: {},
              }}
              modalStyle={{
                container: {
                  backgroundColor: '#EBEEF0',
                },
                searchStyle: {
                  backgroundColor: '#EBEEF0',
                },
                tileStyle: {
                  color: '#758DAC',
                  fontFamily: 'Nunito-Regular',
                  fontSize: scale(14),
                },
                itemStyle: {
                  itemContainer: {
                    backgroundColor: '#EBEEF0',
                  },
                  flagStyle: {},
                  countryCodeStyle: {},
                  countryNameStyle: {
                    color: '#758DAC',
                    fontFamily: 'Nunito-Regular',
                    fontSize: scale(14),
                  },
                  nationalityNameStyle: {},
                  callingNameStyle: {},
                },
              }}
              title={'Country'}
              searchPlaceholder={'Search'}
              showCloseButton={true}
              showModalTitle={true}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={cityInputRef}
              name="city"
              rules={rules.CustomerRules.city}
              placeholder={t('City')}
              label={t('City')}
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
              rules={{
                required: 'Confirm password required',
                validate: (value: any) =>
                  value === pwd || 'Passwords not match',
              }}
              placeholder={t('Confirm Password')}
              label={t('Confirm Password')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              secureTextEntry={!showConfirmPassword}
              rightComponent={
                <TouchableOpacity
                  style={styles(direction).rightComponent}
                  onPress={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}>
                  <MaterialIcon
                    name={showConfirmPassword ? 'eye' : 'eye-off'}
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
            onPress={handleSubmit(signUpUser)}
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
