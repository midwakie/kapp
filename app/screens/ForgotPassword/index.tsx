/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
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
import { requestResetPassword } from 'app/store/actions/resetPasswordAction';
import { watchResetPasswordSaga } from 'app/store/sagas/resetPasswordSaga';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const ForgotPassword: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    watchResetPasswordSaga();
  }, []);
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  const onSubmit = (data: any) => {
    data.roleType = selectedRole;
    dispatch(requestResetPassword(data));
    NavigationService.navigate('NewPassword');
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
