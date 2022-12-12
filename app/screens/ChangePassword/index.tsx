import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';
import RegularButton from 'app/components/buttons/RegularButton';
import GradientText from 'app/components/texts/GradientText';
import { ScrollView } from 'react-native-gesture-handler';
import CustomInput from 'app/components/inputs/CustomInput';
import rules from 'app/rules';
import { useForm } from 'react-hook-form';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import { navigateToForgotPassword } from 'app/store/actions/navigationActions';
import { scale } from 'react-native-size-matters';

const ChangePassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSecPassword, setShowSecPassword] = useState(false);
  const { control } = useForm();
  const inputRef: React.RefObject<any> = React.createRef();
  const inputSecRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).topContainer}>
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
          <View style={styles(direction).gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Change Your Password')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle}
            />
          </View>
          <View style={styles(direction).subTextContainer}>
            <Text style={styles(direction).subText}>
              {t('Password must Contain')}
            </Text>
          </View>
          <View style={styles(direction).bulletPointContainer}>
            <Text style={styles(direction).bulletPoints}>
              {'\u2022'} {t('Uppercase characters (A-Z)')}
            </Text>
            <Text style={styles(direction).bulletPoints}>
              {'\u2022'} {t('Lowercase characters (a-z)')}
            </Text>
            <Text style={styles(direction).bulletPoints}>
              {'\u2022'} {t('Digits (0-9)')}
            </Text>
            <Text style={styles(direction).bulletPoints}>
              {'\u2022'} {t('Special characters')}
            </Text>
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              ref={inputRef}
              control={control}
              name="password"
              rules={rules.AuthRules.password}
              placeholder={t('New Password')}
              label={t('New Password')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              secureTextEntry={!showPassword}
              onSubmitEditing={() => {
                inputSecRef?.current.setFocus();
              }}
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
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              ref={inputSecRef}
              control={control}
              name="confirm_password"
              rules={rules.AuthRules.password}
              placeholder={t('Confirm New Password')}
              label={t('Confirm New Password')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              secureTextEntry={!showSecPassword}
              rightComponent={
                <TouchableOpacity
                  style={styles(direction).rightComponent}
                  onPress={() => {
                    setShowSecPassword(!showSecPassword);
                  }}>
                  <MaterialIcon
                    name={showSecPassword ? 'eye' : 'eye-off'}
                    size={scale(20)}
                    color={'#758DAC'}
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles(direction).regularButton}>
            <RegularButton
              onPress={() => {
                NavigationService.navigate('AccountAction');
              }}
              text={t('Send')}
              radius={50}
              height={50}
              width={'100%'}
              colors={['#03BBE3', '#14A9FD']}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default ChangePassword;
