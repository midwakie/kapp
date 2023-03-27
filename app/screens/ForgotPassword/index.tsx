/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import RegularButton from 'app/components/buttons/RegularButton';
import GradientText from 'app/components/texts/GradientText';
import CustomInput from 'app/components/inputs/CustomInput';
import rules from 'app/rules';
import { useForm } from 'react-hook-form';
import NavigationService from 'app/navigation/NavigationService';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import ApiConfig from 'app/config/api-config';
import axios from 'axios';
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}

const ForgotPassword: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation();
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        `${ApiConfig.BASE_URL}${ApiConfig.OTP_REQUEST}`,
        {
          roleType: selectedRole,
          email: data.email,
        },
      );
      if (response.status === 200) {
        NavigationService.navigate('NewPassword', { email: data });
        console.log(response.data.message);
      } else {
        setTimeout(() => {
          Alert.alert('Kutubi', response.data.message);
        }, 200);
      }
    } catch (error) {
      console.log('Error2:', error);
    }
  };
  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeAreaView}>
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
        <View style={styles.container2}>
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Forgot Password')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle}
            />
          </View>
          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>
              {t('Enter your registered email or Mobile Number')}
            </Text>
          </View>
          <View style={styles.inputTextContainer}>
            <CustomInput
              control={control}
              name="email"
              rules={rules.AuthRules.email}
              placeholder={t('Email / Mobile Number')}
              label={t('Email / Mobile Number')}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {}}
            />
          </View>
          <RegularButton
            onPress={handleSubmit(onSubmit)}
            text={t('Send')}
            radius={50}
            height={50}
            width={'100%'}
            colors={['#03BBE3', '#14A9FD']}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default ForgotPassword;
