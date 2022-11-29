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
import CustomOTPInput from 'app/components/inputs/CustomOTPInput';

const VerifyMobile: React.FC = () => {
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
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text="Verify Mobile Number"
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle}
            />
            <Text style={styles.subTextStyle}>
              {`We have sent you SMS with 6 digits \nlong OTP code to verify mobile number`}
            </Text>
            <Text style={styles.subText2Style}>Enter OTP below</Text>
          </View>
          <View style={styles.inputTextContainer}>
            <CustomOTPInput
              control={control}
              name="otp_mobile"
              rules={rules.AuthRules.email}
            />
          </View>
          <RegularButton
            onPress={() => {}}
            text={'Verify'}
            radius={50}
            height={50}
            width={'100%'}
            colors={['#03BBE3', '#14A9FD']}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Didn’t receive the OTP?</Text>
            <HorizontalLine width={8} />
            <PlainButton
              onPress={() => {}}
              style={styles.signUpButton}
              containerStyle={styles.signUpButtonContainer}
              text={'Resend Code'}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default VerifyMobile;
