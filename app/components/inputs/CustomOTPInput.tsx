import React, { useImperativeHandle, useRef } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { Controller } from 'react-hook-form';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import HorizontalLine from '../lines/HorizontalLine';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
const CustomOTPInput = React.forwardRef(
  ({ control, name, rules = {} }: any, ref) => {
    const refInput = useRef(null);
    const { i18n } = useTranslation();
    const direction: string = i18n.dir();
    const setFocus = () => {
      refInput.current.focus();
    };
    useImperativeHandle(ref, () => ({
      setFocus,
    }));
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <Image
              source={require('../../assets/inputBg.png')}
              style={styles(direction).bg}
            />
            <View style={styles(direction).seperatorContainer}>
              <View style={styles(direction).boxItem}>
                <HorizontalLine width={scale(5)} color={'#ABBBC1'} stroke={1} />
              </View>
              <View style={styles(direction).boxItem}>
                <HorizontalLine width={scale(5)} color={'#ABBBC1'} stroke={1} />
              </View>
              <View style={styles(direction).boxItem}>
                <HorizontalLine width={scale(5)} color={'#ABBBC1'} stroke={1} />
              </View>
              <View style={styles(direction).boxItem}>
                <HorizontalLine width={scale(5)} color={'#ABBBC1'} stroke={1} />
              </View>
              <View style={styles(direction).boxItem}>
                <HorizontalLine width={scale(5)} color={'#ABBBC1'} stroke={1} />
              </View>
            </View>
            <View style={styles(direction).container}>
              <OTPInputView
                style={styles(direction).otpView}
                pinCount={6}
                code={value}
                onCodeChanged={code => {
                  onChange(code);
                }}
                secureTextEntry={false}
                autoFocusOnLoad
                codeInputFieldStyle={styles(direction).underlineStyleBase}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                  onBlur();
                }}
              />
            </View>
            {error && (
              <Text style={styles(direction).errorText}>
                {error.message || 'Error'}
              </Text>
            )}
          </>
        )}
      />
    );
  },
);

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height - scale(60)
    : Dimensions.get('window').width - scale(60);

const styles = (direction: string) =>
  ScaledSheet.create({
    container: {
      backgroundColor: 'transparent',
      width: width,
      height: '50@s',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'transparent',
      borderWidth: 1,
    },
    otpView: { width: '100%', height: '50@s' },
    bg: {
      width: width,
      height: '50@s',
      position: 'absolute',
      resizeMode: 'contain',
    },
    seperatorContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginLeft: '15@s',
    },
    boxItem: {
      width: width / 6,
      height: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'red'
    },
    underlineStyleBase: {
      color: '#3B3B48',
      borderWidth: 0,
      width: width / 6,
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '16@s',
    },
    input: {
      height: '40@s',
      padding: '10@s',
      marginLeft: '10@s',
      flex: 1,
      color: '#758DAC',
    },
    placeHolderText: { color: '#758DAC', position: 'absolute', left: '30@s' },
    placeHolderOtherText: {
      color: '#EB7376',
    },
    errorText: {
      color: '#EB7376',
      alignSelf: 'stretch',
      fontFamily: 'Nunito-Regular',
      fontSize: '10@s',
      textAlign: direction === 'rtl' ? 'left' : 'right',
      paddingTop: '10@s',
      width: width,
    },
  });

export default CustomOTPInput;
