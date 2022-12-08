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
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control } = useForm();
  const inputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).topContainer}>
            <PlainButton
              onPress={() => {}}
              style={styles(direction).skipButtonText}
              containerStyle={styles(direction).skipButtonContainer}
              text={t('Skip')}
            />
          </View>
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
              text={t('Sign In to Continue')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              name="email"
              rules={rules.AuthRules.email}
              placeholder={t('Email / Mobile Number')}
              label={t('Email / Mobile Number')}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                inputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              ref={inputRef}
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
            />
          </View>
          <View style={styles(direction).labelTextContainer}>
            <PlainButton
              onPress={() => {
                NavigationService.navigate('ForgotPassword');
              }}
              style={styles(direction).forgotPassword}
              containerStyle={styles(direction).forgotPasswordContainer}
              text={t('Forgot Password?')}
            />
          </View>
          <RegularButton
            onPress={() => {}}
            text={t('Sign in')}
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
                radius={scale(50)}>
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
                radius={scale(50)}>
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
                    radius={scale(50)}>
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
              {t('Don’t have an account?')}
            </Text>
            <HorizontalLine width={8} />
            <PlainButton
              onPress={() => {}}
              style={styles(direction).signUpButton}
              containerStyle={styles(direction).signUpButtonContainer}
              text={t('Sign up')}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;
