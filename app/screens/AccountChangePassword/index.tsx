import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';

const AccountChangePassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSecPassword, setShowSecPassword] = useState(false);
  const [showThirdPassword, setShowThirdSecPassword] = useState(false);
  const { control } = useForm();
  const inputRef: React.RefObject<any> = React.createRef();
  const inputSecRef: React.RefObject<any> = React.createRef();
  const inputThirdRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
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
                name="OldPassword"
                rules={rules.AuthRules.password}
                placeholder={t('Old Password')}
                label={t('Old Password')}
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
                name="NewPassword"
                rules={rules.AuthRules.password}
                placeholder={t('New Password')}
                label={t('New Password')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                secureTextEntry={!showSecPassword}
                onSubmitEditing={() => {
                  inputThirdRef?.current.setFocus();
                }}
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
            <View style={styles(direction).inputTextContainer}>
              <CustomInput
                ref={inputThirdRef}
                control={control}
                name="confirm_password"
                rules={rules.AuthRules.password}
                placeholder={t('Confirm New Password')}
                label={t('Confirm New Password')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                secureTextEntry={!showThirdPassword}
                rightComponent={
                  <TouchableOpacity
                    style={styles(direction).rightComponent}
                    onPress={() => {
                      setShowThirdSecPassword(!showThirdPassword);
                    }}>
                    <MaterialIcon
                      name={showThirdPassword ? 'eye' : 'eye-off'}
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
                  NavigationService.reset('');
                }}
                text={t('Save')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#03BBE3', '#14A9FD']}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          leftComponent={
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
          }
          middleComponent={
            <View style={styles(direction).gradientTextContainer1}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
            </View>
          }
        />
      </View>
    </>
  );
};
export default AccountChangePassword;
