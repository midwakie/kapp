/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import styles from './style';
import CustomInput from 'app/components/inputs/CustomInput';
import rules from 'app/rules';
import PhoneInput from 'react-native-phone-number-input';
const ChangeMobileNumber: React.FC = () => {
  const { control } = useForm();
  const emailInputRef: React.RefObject<any> = React.createRef();
  const [mobileNo, setMobileNo] = React.useState('');
  const mobileNumberInputRef = useRef<TextInput>(null);
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <Text style={styles(direction).text}>+971-565-5523-01</Text>
            <View style={styles(direction).inputTextContainer}>
              <CustomInput
                control={control}
                ref={mobileNumberInputRef}
                name="Mobile Number"
                rules={rules.AuthRules.email}
                placeholder={t('Mobile Number')}
                label={t('Mobile Number')}
                keyboardType="phone-pad"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </View>
            <View style={styles(direction).neomorphContainer2}>
              <RegularButton
                onPress={undefined}
                text={t('Update')}
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
            <View style={styles(direction).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Change Mobile Number')}
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

export default ChangeMobileNumber;
