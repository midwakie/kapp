import NavigationService from 'app/navigation/NavigationService';
import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';

import styles from './styles';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onSignUp = () => NavigationService.navigate('Sign Up');
  const [text, setText] = React.useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.orLogin}>Or, register with email...</Text>
        <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 20 }}>
          <TextInput
            label="Email ID"
            value={text}
            onChangeText={text => setText(text)}
            mode={'flat'}
            style={{ backgroundColor: '#FFFFFF' }}
            left={<TextInput.Icon name="at" />}
          />
          <TextInput
            label="Password"
            value={text}
            onChangeText={text => setText(text)}
            mode={'flat'}
            style={{ backgroundColor: '#FFFFFF' }}
            left={<TextInput.Icon name="lock" />}
          />
          <TextInput
            label="Full name"
            value={text}
            onChangeText={text => setText(text)}
            mode={'flat'}
            style={{ backgroundColor: '#FFFFFF' }}
            left={<TextInput.Icon name="account-circle" />}
          />
          <TextInput
            label="Company name"
            value={text}
            onChangeText={text => setText(text)}
            mode={'flat'}
            style={{ backgroundColor: '#FFFFFF' }}
            left={<TextInput.Icon name="briefcase-account" />}
          />
        </View>
        <Button
          mode="contained"
          onPress={onLogin}
          labelStyle={{ color: '#FFFFFF' }}
          style={styles.loginButtonStyle}>
          Register
        </Button>
      </View>
    </ScrollView>
  );
};

export default SignUp;
