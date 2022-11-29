/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import ForgotPassword from 'app/screens/Loading';

import ThemeController from '../components/ThemeController';
import { ILoginState } from 'app/models/reducers/login';
import Landing from 'app/screens/Landing';
import SignUp from 'app/screens/SignUp';
import Language from 'app/screens/Language';
import SignIn from 'app/screens/SignIn';
import SelectRole from 'app/screens/SelectRole';
import VerifyEmail from 'app/screens/VerifyEmail';
import VerifyMobile from 'app/screens/VerifyMobile';

const Stack = createStackNavigator();
const AuthenticationStack = createStackNavigator();

interface IState {
  loginReducer: ILoginState;
}

const AuthStack = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthenticationStack.Navigator>
      <Stack.Screen
        name="Language"
        component={Language}
        options={{
          headerShown: false,
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Landing}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Select Role"
        component={SelectRole}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign In"
        component={SignIn}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verify Email"
        component={VerifyEmail}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verify Mobile"
        component={VerifyMobile}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthStack;
