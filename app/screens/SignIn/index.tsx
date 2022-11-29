import React, { useRef } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
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

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onSignUp = () => NavigationService.navigate('Sign Up');
  const [text, setText] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit, setValue, watch, reset } = useForm();
  const inputRef = React.createRef();
  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container2}>
          <View style={styles.neomorphContainer}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={118}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../assets/logo.png')}
                  style={styles.imageStyle}
                />
              </View>
            </Neumorphism>
          </View>
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text="Sign In to Continue"
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <CustomInput
              control={control}
              name="email"
              rules={rules.AuthRules.email}
              placeholder="Email / Mobile Number"
              label="Email / Mobile Number"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                inputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <CustomInput
              ref={inputRef}
              control={control}
              name="password"
              rules={rules.AuthRules.password}
              placeholder="Password"
              label="Password"
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              secureTextEntry={!showPassword}
              rightComponent={
                <TouchableOpacity
                  style={styles.rightComponent}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}>
                  <MaterialIcon
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color={'#758DAC'}
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles.labelTextContainer}>
            <PlainButton
              onPress={() => {}}
              style={styles.forgotPassword}
              containerStyle={styles.forgotPasswordContainer}
              text={'Forgot Password?'}
            />
          </View>
          <RegularButton
            onPress={() => {}}
            text={'Sign In'}
            radius={50}
            height={50}
            width={'100%'}
            colors={['#03BBE3', '#14A9FD']}
          />
          <View style={styles.socialContainer}>
            <TouchableOpacity>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={50}>
                <View style={styles.socialButtonContainer}>
                  <Image
                    source={require('../../assets/facebook.png')}
                    style={styles.socialButtonStyle}
                  />
                </View>
              </Neumorphism>
            </TouchableOpacity>
            <HorizontalLine width={43} />
            <TouchableOpacity>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={50}>
                <View style={styles.socialButtonContainer}>
                  <Image
                    source={require('../../assets/google.png')}
                    style={styles.socialButtonStyle}
                  />
                </View>
              </Neumorphism>
            </TouchableOpacity>
            {Platform.OS === 'ios' && (
              <>
                <HorizontalLine width={43} />
                <TouchableOpacity>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={50}>
                    <View style={styles.socialButtonContainer}>
                      <Image
                        source={require('../../assets/apple.png')}
                        style={styles.socialButtonStyle}
                      />
                    </View>
                  </Neumorphism>
                </TouchableOpacity>
              </>
            )}
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Don’t have an account?</Text>
            <HorizontalLine width={8} />
            <PlainButton
              onPress={() => {}}
              style={styles.signUpButton}
              containerStyle={styles.signUpButtonContainer}
              text={'Sign up'}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;
