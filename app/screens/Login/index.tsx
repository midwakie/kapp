import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onSignUp = () => NavigationService.navigate('Sign Up');
  const [text, setText] = React.useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/login.png')}
          style={styles.imageStyle}
        />
        <Text style={styles.loginTitle}>Login</Text>
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
          <Button
            mode="text"
            style={styles.forgot}
            labelStyle={styles.labelStyle}
            onPress={onForgot}>
            Forgot Password ?
          </Button>
        </View>
        <Button
          mode="contained"
          onPress={onLogin}
          labelStyle={{ color: '#FFFFFF' }}
          style={styles.loginButtonStyle}>
          Login
        </Button>
        <Text style={styles.orLogin}>Or, login with...</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.itemContainer}>
            <Image
              source={require('../../assets/google.png')}
              style={styles.socialImageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Image
              source={require('../../assets/fb.png')}
              style={styles.socialImageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Image
              source={require('../../assets/apple.png')}
              style={styles.socialImageStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.newToHM}>
          <Text style={styles.forgot}>New to Healmobile?</Text>
          <Button
            mode="text"
            style={styles.forgot}
            labelStyle={styles.labelStyle}
            onPress={onSignUp}>
            Register
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
