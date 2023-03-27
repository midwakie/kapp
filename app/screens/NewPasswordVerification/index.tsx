import React from 'react';
import { Alert, Image, SafeAreaView, Text, View } from 'react-native';
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
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import ApiConfig from 'app/config/api-config';
import axios from 'axios';
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}

const NewPassword: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation();
  const route = useRoute();
  const email = route.params?.email;
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        `${ApiConfig.BASE_URL}${ApiConfig.OTP_VERIFY}`,
        {
          roleType: selectedRole,
          email: email.email,
          otp: data.otp,
        },
      );
      if (response.status === 200) {
        NavigationService.navigate('ChangePassword', { email });
        console.log(response.data.message);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setTimeout(() => {
          Alert.alert('Kutubi', error.response.data.message);
        }, 200);
      } else {
        console.log('Error:', error);
      }
    }
  };

  const onResend = async () => {
    try {
      const response = await axios.post(
        `${ApiConfig.BASE_URL}${ApiConfig.OTP_REQUEST}`,
        {
          roleType: selectedRole,
          email: email.email,
          isResend: true,
        },
      );
      if (response.status === 200) {
        setTimeout(() => {
          Alert.alert('Kutubi', response.data.message);
        }, 200);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setTimeout(() => {
          Alert.alert('Kutubi', error.response.data.message);
        }, 200);
      } else {
        console.log('Error:', error);
      }
    }
  };
  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container2}>
          <View style={styles.topContainer}>
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
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('OTP Verification')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle}
            />
            <Text style={styles.subTextStyle}>
              {t(
                'We have sent you an Email with 6 digits long OTP code to set a new password',
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
            onPress={handleSubmit(onSubmit)}
            text={`${t('Verify')}`}
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
              onPress={onResend}
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

export default NewPassword;
