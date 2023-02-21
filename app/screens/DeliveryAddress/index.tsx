import React from 'react';
import { SafeAreaView, Text, TextStyle, View } from 'react-native';
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
import TitleBar from 'app/components/buttons/TitleBar';
import { useSelector } from 'react-redux';

const DeliveryAddress: React.FC = () => {
  const { control } = useForm();
  const addressInputRef: React.RefObject<any> = React.createRef();
  const emailInputRef: React.RefObject<any> = React.createRef();
  const mobileNumberInputRef: React.RefObject<any> = React.createRef();
  const invitationCodeInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const cart = useSelector(state => state.cartReducer.cart);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const discountedTotal = total * 0.95;
  return (
    <>
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
              text={t('Delivery Address')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
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
                  <Text style={styles(direction).text1}>{`$${total}`}</Text>
                </View>
                <View style={styles(direction).row}>
                  <Text style={styles(direction).text1}>{t('Discount')}</Text>
                  <Text style={styles(direction).text1}>{t('5%')}</Text>
                </View>
                <View style={styles(direction).row1}>
                  <Text style={styles(direction).text1}>
                    {t('Shipping Charge')}
                  </Text>
                  <Text style={styles(direction).text1}>{t('Free')}</Text>
                </View>
                <View style={styles(direction).row2}>
                  <Text style={styles(direction).text2}>
                    {t('Total Amount')}
                  </Text>
                  <Text
                    style={
                      styles(direction).text2
                    }>{`$${discountedTotal}`}</Text>
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).container4}>
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
    </>
  );
};

export default DeliveryAddress;
