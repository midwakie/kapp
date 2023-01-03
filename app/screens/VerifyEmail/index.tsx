/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SafeAreaView, Text, TextStyle, View } from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import rules from 'app/rules';
import PlainButton from 'app/components/buttons/PlainButton';
import RegularButton from 'app/components/buttons/RegularButton';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import CustomOTPInput from 'app/components/inputs/CustomOTPInput';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as otpRequestActions from 'app/store/actions/otpRequestActions';
import * as otpVerifyActions from 'app/store/actions/otpVerifyActions';
import { ILoginState } from 'app/models/reducers/login';
import { ILoading } from 'app/models/reducers/loading';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';

interface IState {
  loginReducer: ILoginState;
  currentCustomerReducer: ICurrentCustomer;
}

const VerifyEmail: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: IState) => state.loginReducer.payload.user,
  );
  const currentCustomer = useSelector(
    (state: IState) => state.currentCustomerReducer,
  );
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  const resentOtp = () => {
    if (isLoggedIn) {
      dispatch(
        otpRequestActions.requestOtp({
          email: currentUser.email,
          mobileNo: currentUser.mobileNo.toString(),
          roleType: currentUser.roleType,
          isResend: true,
        }),
      );
    } else {
      dispatch(
        otpRequestActions.requestOtp({
          email: currentCustomer.email,
          mobileNo: currentCustomer.mobileNo,
          roleType: currentCustomer.role,
          isResend: true,
        }),
      );
    }
  };
  const onVerifyOtp = (data: any) => {
    if (isLoggedIn) {
      dispatch(
        otpVerifyActions.verifyOtp({
          email: currentUser.email,
          mobileNo: currentUser.mobileNo.toString(),
          roleType: currentUser.roleType,
          otp: data.otp,
        }),
      );
    } else {
      dispatch(
        otpVerifyActions.verifyOtp({
          email: currentCustomer.email,
          mobileNo: currentCustomer.mobileNo.toString(),
          roleType: currentCustomer.role,
          otp: data.otp,
        }),
      );
    }
  };
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container2}>
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Verify Email')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle as TextStyle}
            />
            <Text style={styles.subTextStyle}>
              {t(
                'We have sent you an Email with 6 digits long OTP code to verify Email',
              )}
            </Text>
            <Text style={styles.subText2Style}>{t('Enter OTP below')}</Text>
          </View>
          <View style={styles.inputTextContainer}>
            <CustomOTPInput
              control={control}
              name="otp"
              rules={rules.AuthRules.verification}
            />
          </View>
          <RegularButton
            onPress={handleSubmit(onVerifyOtp)}
            text={t('Verify')}
            radius={50}
            height={50}
            width={'100%'}
            colors={['#03BBE3', '#14A9FD']}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>
              {t('Didn’t receive the OTP?')}
            </Text>
            <HorizontalLine width={8} />
            <PlainButton
              onPress={resentOtp}
              style={styles.signUpButton}
              containerStyle={styles.signUpButtonContainer}
              text={t('Resend Code')}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default VerifyEmail;
