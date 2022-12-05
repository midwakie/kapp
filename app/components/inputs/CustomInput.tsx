import React, { useImperativeHandle, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Controller } from 'react-hook-form';
import Neumorphism from 'react-native-neumorphism';
import { useTranslation } from 'react-i18next';

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
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'pressed'}
              radius={50}>
              <View
                style={[
                  styles(direction).container,
                  { borderColor: error ? 'red' : 'transparent' },
                ]}>
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
            </Neumorphism>
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
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string) =>
  StyleSheet.create({
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
    input: {
      height: 40,
      padding: 10,
      marginLeft: direction === 'rtl' ? undefined : 10,
      marginRight: direction === 'rtl' ? 10 : undefined,
      textAlign: direction === 'rtl' ? 'right' : 'left',
      flex: 1,
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
    },
    placeHolderText: {
      color: '#758DAC',
      position: 'absolute',
      left: direction === 'rtl' ? undefined : 30,
      right: direction === 'rtl' ? 30 : undefined,
      textAlign: direction === 'rtl' ? 'right' : 'left',
      fontFamily: 'Nunito-Regular',
    },
    placeHolderOtherText: {
      color: '#EB7376',
      fontFamily: 'Nunito-Regular',
    },
    errorText: {
      color: '#EB7376',
      alignSelf: 'stretch',
      fontFamily: 'Nunito-Regular',
    },
  });

export default CustomInput;
