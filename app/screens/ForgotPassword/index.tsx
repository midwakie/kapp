import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import RegularButton from 'app/components/buttons/RegularButton';
import GradientText from 'app/components/texts/GradientText';
import CustomInput from 'app/components/inputs/CustomInput';
import rules from 'app/rules';
import { useForm } from 'react-hook-form';
import NavigationService from 'app/navigation/NavigationService';

const ForgotPassword: React.FC = () => {
  const { control, handleSubmit, setValue, watch, reset } = useForm();
  return (
    <>
      <View style={styles.container}>
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
                text="Forgot Password"
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles.gradientTextStyle}
              />
            </View>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>
                Enter your registered email or Mobile Number
              </Text>
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
            <RegularButton
              onPress={() => {
                NavigationService.navigate('ChangePassword');
              }}
              text={'Send'}
              radius={50}
              height={50}
              width={'100%'}
              colors={['#03BBE3', '#14A9FD']}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};
export default ForgotPassword;
