import React, { useImperativeHandle, useRef } from 'react';
import { View, Text, TextInput, Dimensions, Image } from 'react-native';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { scale, ScaledSheet } from 'react-native-size-matters';

const CustomInput = React.forwardRef(
  (
    {
      control,
      name,
      rules = {},
      placeholder,
      secureTextEntry = false,
      keyboardType,
      autoCapitalize,
      rightComponent,
      onSubmitEditing,
      onFocus = () => {},
    }: any,
    ref,
  ) => {
    const placeHolderOtherText: string = '*';
    const [isFocused, setIsFocused] = React.useState(false);
    const refInput: React.MutableRefObject<any> = useRef(null);
    const { i18n } = useTranslation();
    const direction: string = i18n.dir();
    const setFocus = () => {
      refInput.current.focus();
    };
    useImperativeHandle(ref, () => ({
      setFocus,
    }));

    const rtlPlaceHolder = () => {
      if (direction === 'rtl' && secureTextEntry) {
        return `${rules.required ? '*' : ''}${placeholder}`;
      } else {
        return `${placeholder}${rules.required ? '*' : ''}`;
      }
    };
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
            <View
              style={[
                styles(direction).container,
                //{ borderColor: error ? 'red' : 'transparent' },
              ]}>
              <Image
                source={require('../../assets/inputBg.png')}
                style={styles(direction).bg}
              />
              <TextInput
                ref={refInput}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                value={value}
                // clearButtonMode="while-editing"
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChange}
                onBlur={() => {
                  setIsFocused(false);
                  onBlur();
                }}
                onFocus={() => {
                  onFocus();
                  setIsFocused(true);
                }}
                placeholder={`${rtlPlaceHolder()}`}
                placeholderTextColor={'#758DAC'}
                style={styles(direction).input}
                secureTextEntry={secureTextEntry}
              />
              {!isFocused && !value && (
                <Text
                  style={styles(direction).placeHolderText}
                  onPress={() => {
                    refInput?.current.focus();
                  }}>
                  {placeholder}
                  {rules.required && (
                    <Text style={styles(direction).placeHolderOtherText}>
                      {placeHolderOtherText}
                    </Text>
                  )}
                </Text>
              )}
              {rightComponent}
            </View>
            {/* </Neumorphism> */}
            {error && (
              <Text style={styles(direction).errorText}>
                {error?.message || 'Error'}
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
      // borderColor: 'transparent',
      // borderWidth: 1,
    },
    bg: {
      width: width,
      height: '50@s',
      position: 'absolute',
      resizeMode: 'contain',
    },
    input: {
      height: '40@ms',
      paddingVertical: '10@ms',
      paddingHorizontal: '10@s',
      marginLeft: direction === 'rtl' ? undefined : '15@s',
      marginRight: direction === 'rtl' ? '15@s' : undefined,
      textAlign: direction === 'rtl' ? 'right' : 'left',
      flex: 1,
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      backfaceVisibility: 'visible',
    },
    placeHolderText: {
      color: '#758DAC',
      position: 'absolute',
      left: direction === 'rtl' ? undefined : '25@s',
      right: direction === 'rtl' ? '25@s' : undefined,
      textAlign: direction === 'rtl' ? 'right' : 'left',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
    },
    placeHolderOtherText: {
      color: '#EB7376',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
    },
    errorText: {
      color: '#EB7376',
      alignSelf: 'stretch',
      fontFamily: 'Nunito-Regular',
      fontSize: '10@s',
      textAlign: direction === 'rtl' ? 'left' : 'right',
    },
  });

export default CustomInput;
