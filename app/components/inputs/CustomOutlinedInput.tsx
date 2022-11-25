import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { OutlinedTextField } from 'rn-material-ui-textfield';
import { Controller } from 'react-hook-form';
import Neumorphism from 'react-native-neumorphism';

const CustomOutlinedInput = ({
  control,
  name,
  rules = {},
  placeholder,
  label,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  returnKeyType,
  blurOnSubmit = false,
  onSubmitEditing,
  onFocus,
  editable = true,
  refInput,
  loading,
  info,
  prefix,
  disabled,
}: any) => {
  const [focus, setFocus] = useState(false);
  const [placeHolderOtherText, setPlaceHolderOtherText] = React.useState('*');
  const showInfo = () => {
    setFocus(true);
    // setTimeout(() => {
    //   setFocus(false);
    // }, 8000);
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
        <Neumorphism
          lightColor={'#ffffff'}
          darkColor={'#A8A8A8'}
          shapeType={'pressed'}
          radius={50}>
          <View style={styles.container}>
            {/* <Tooltip
              isVisible={focus}
              content={<Text style={styles.infoText}>{info}</Text>}
              placement="top"
              onClose={() => setFocus(false)}
              contentStyle={{ marginBottom: 40 }}
            >
              <Text> </Text>
            </Tooltip> */}

            {loading && (
              <ActivityIndicator
                size="small"
                color={'#CCCCCC'}
                style={styles.indicator}
              />
            )}

            <OutlinedTextField
              ref={refInput}
              inputContainerStyle={[
                styles.input,
                { marginBottom: error ? -2 : 8 },
              ]}
              textColor={'#758DAC'}
              tintColor={'transparent'}
              baseColor={error ? 'red' : '#FFFFFF'}
              // placeholder={placeholder}
              placeholder={
                !loading ? `${placeholder}${rules.required ? '*' : ''}` : ' '
              }
              label={`${label} ${rules.required ? '*' : ''}`}
              placeholderTextColor={'#758DAC'}
              onChangeText={onChange}
              disabled={disabled}
              value={value}
              prefix={prefix}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              returnKeyType={returnKeyType}
              blurOnSubmit={blurOnSubmit}
              onSubmitEditing={onSubmitEditing}
              secureTextEntry={secureTextEntry}
              onFocus={info ? showInfo : onFocus}
              editable={editable}/>
            {focus && !error && (
              <Text style={styles.infoText}>{info || ''}</Text>
            )}
            {error && (
              <Text style={styles.errorTitle}>{error.message || 'Error'}</Text>
            )}
          </View>
        </Neumorphism>
      )}
    />
  );
};
const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: "row",
    // alignItems: "center",
    // borderWidth: 1,
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // marginVertical: 5,
  },
  input: {
    width: width - 80,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  errorTitle: {
    marginBottom: 20,
    color: 'red',
    alignSelf: 'stretch',
  },
  indicator: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  infoText: {
    marginBottom: 10,
    color: '#FFFFFF',
    // alignSelf: "stretch",
  },
});

export default CustomOutlinedInput;
