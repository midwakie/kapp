import React, { useImperativeHandle, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Controller } from 'react-hook-form';
import Neumorphism from 'react-native-neumorphism';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import HorizontalLine from '../lines/HorizontalLine';
const CustomOTPInput = React.forwardRef(
  ({ control, name, rules = {} }: any, ref) => {
    const [placeHolderOtherText, setPlaceHolderOtherText] = React.useState('*');
    const [isFocused, setIsFocused] = React.useState(false);
    const refInput = useRef(null);
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
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'pressed'}
              radius={50}>
              <View style={styles.seperatorContainer}>
                <View style={styles.boxItem}>
                  <HorizontalLine width={5} color={'#ABBBC1'} stroke={1} />
                </View>
                <View style={styles.boxItem}>
                  <HorizontalLine width={5} color={'#ABBBC1'} stroke={1} />
                </View>
                <View style={styles.boxItem}>
                  <HorizontalLine width={5} color={'#ABBBC1'} stroke={1} />
                </View>
                <View style={styles.boxItem}>
                  <HorizontalLine width={5} color={'#ABBBC1'} stroke={1} />
                </View>
                <View style={styles.boxItem}>
                  <HorizontalLine width={5} color={'#ABBBC1'} stroke={1} />
                </View>
              </View>
              <View
                style={[
                  styles.container,
                  { borderColor: error ? 'red' : 'transparent' },
                ]}>
                <OTPInputView
                  style={{ width: '100%', height: 50 }}
                  pinCount={6}
                  code={value}
                  onCodeChanged={code => {
                    onChange(code);
                  }}
                  secureTextEntry={false}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  onCodeFilled={code => {
                    console.log(`Code is ${code}, you are good to go!`);
                    onBlur();
                  }}
                />
              </View>
            </Neumorphism>
            {error && (
              <Text style={styles.errorText}>{error.message || 'Error'}</Text>
            )}
          </>
        )}
      />
    );
  },
);

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: width - 60,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  seperatorContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 15,
  },
  boxItem: {
    width: (width - 80) / 6,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  underlineStyleBase: {
    color: '#3B3B48',
    borderWidth: 0,
    width: (width - 80) / 6,
  },
  input: {
    height: 40,
    padding: 10,
    marginLeft: 10,
    flex: 1,
    color: '#758DAC',
  },
  placeHolderText: { color: '#758DAC', position: 'absolute', left: 30 },
  placeHolderOtherText: {
    color: '#EB7376',
  },
  errorText: { color: '#EB7376', alignSelf: 'stretch' },
});

export default CustomOTPInput;
