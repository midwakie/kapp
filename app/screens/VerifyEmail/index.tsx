import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
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

const VerifyEmail: React.FC = () => {
  const { control } = useForm();
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container2}>
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Verify Email')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle}
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
              name="otp_email"
              rules={rules.AuthRules.email}
            />
          </View>
          <RegularButton
            onPress={() => {
              NavigationService.navigate('Verify Mobile');
            }}
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
              onPress={() => {}}
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
