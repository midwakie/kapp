import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import rules from 'app/rules';
import CustomInput from 'app/components/inputs/CustomInput';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';

const DeliveryAddress: React.FC = () => {
  const { control } = useForm();
  const addressInputRef: React.RefObject<any> = React.createRef();
  const emailInputRef: React.RefObject<any> = React.createRef();
  const mobileNumberInputRef: React.RefObject<any> = React.createRef();
  const invitationCodeInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        {/* <View style={styles(direction).container1}> */}
        <View style={styles(direction).rectangle}>
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
          <GradientText
            colors={['#03A0E3', '#0D93CD']}
            text={t('Delivery Address')}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            textStyle={styles(direction).text}
          />
          {/* </View> */}
        </View>
        <View style={styles(direction).container2}>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              name="name"
              placeholder={t('Name')}
              label={t('Name')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                addressInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={addressInputRef}
              name="address"
              rules={rules.CustomerRules.address_number}
              placeholder={t('Address')}
              label={t('Address')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                mobileNumberInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={mobileNumberInputRef}
              name="mobile_number"
              placeholder={t('Mobile Number')}
              label={t('Mobile Number')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                invitationCodeInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).inputTextContainer1}>
            <CustomInput
              control={control}
              ref={emailInputRef}
              name="email"
              rules={rules.AuthRules.email}
              placeholder={t('Email')}
              label={t('Email')}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
            />
          </View>
          <Neumorphism
            lightColor={'#ffffff'}
            darkColor={'#A8A8A8'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).container3}>
              <View style={styles(direction).row}>
                <Text style={styles(direction).text1}>{t('Amount')}</Text>
                <Text style={styles(direction).text2}>{t('$15.50')}</Text>
              </View>
              <View style={styles(direction).row1}>
                <Text style={styles(direction).text1}>{t('Discount')}</Text>
                <Text style={styles(direction).text2}>{t('5%')}</Text>
              </View>
              <View style={styles(direction).row1}>
                <Text style={styles(direction).text1}>
                  {t('Shipping Charge')}
                </Text>
                <Text style={styles(direction).text2}>{t('Free')}</Text>
              </View>
              <View style={styles(direction).row2}>
                <Text style={styles(direction).text3}>{t('Total Amount')}</Text>
                <Text style={styles(direction).text4}>{t('$14.72')}</Text>
              </View>
            </View>
          </Neumorphism>
          <View style={{ marginTop: 40 }}>
            <RegularButton
              onPress={() => {
                NavigationService.navigate(' ');
              }}
              text={t('Continue ')}
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

export default DeliveryAddress;
