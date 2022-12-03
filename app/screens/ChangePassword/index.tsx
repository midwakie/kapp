import React, { useRef } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import NavigationService from 'app/navigation/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import Neumorphism from 'react-native-neumorphism';
import RegularButton from 'app/components/buttons/RegularButton';
import GradientText from 'app/components/texts/GradientText';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import PlainButton from 'app/components/buttons/PlainButton';
import { ScrollView } from 'react-native-gesture-handler';
import CustomInput from 'app/components/inputs/CustomInput';
import rules from 'app/rules';
import { useForm } from 'react-hook-form';
import Unorderedlist from 'react-native-unordered-list';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

const ChangePassword: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showSecPassword, setShowSecPassword] = React.useState(false);
  const { control, handleSubmit, setValue, watch, reset } = useForm();
  const inputRef = React.createRef();
  const inputSecRef = React.createRef();
  const { t, i18n } = useTranslation();
  const direction = i18n.dir() === 'rtl' ? 'row-reverse' : 'row';
  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.container}>
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
                text={t('Change Your Password')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles.gradientTextStyle}
              />
            </View>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>{t('Password must Contain')}</Text>
            </View>
            <View style={styles.UnorderedListContainer}>
              <Unorderedlist color="#758DAC" style={{}}>
                <Text style={styles.UnorderedText}>
                  {' '}
                  {t('Uppercase characters (A-Z)')}{' '}
                </Text>
              </Unorderedlist>
              <Unorderedlist color="#758DAC">
                <Text style={styles.UnorderedText}>
                  {' '}
                  {t('Lowercase characters (a-z)')}{' '}
                </Text>
              </Unorderedlist>
              <Unorderedlist color="#758DAC">
                <Text style={styles.UnorderedText}>{t(' Digits (0-9)')} </Text>
              </Unorderedlist>
              <Unorderedlist color="#758DAC">
                <Text style={styles.UnorderedText}>
                  {' '}
                  {t('Special characters')}{' '}
                </Text>
              </Unorderedlist>
            </View>

            <View style={styles.inputTextContainer}>
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
            <View style={styles.inputTextContainer}>
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
                    style={styles.rightComponent}
                    onPress={() => {
                      setShowSecPassword(!showSecPassword);
                    }}>
                    <MaterialIcon
                      name={showSecPassword ? 'eye' : 'eye-off'}
                      size={20}
                      color={'#758DAC'}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <View style={styles.RegularButton}>
              <RegularButton
                onPress={() => {}}
                text={t('Send')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#03BBE3', '#14A9FD']}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
export default ChangePassword;
