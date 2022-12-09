/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import ThemeController from '../components/ThemeController';
import { ILoginState } from 'app/models/reducers/login';
import Landing from 'app/screens/Landing';
import SignUp from 'app/screens/SignUp';
import Language from 'app/screens/Language';
import SignIn from 'app/screens/SignIn';
import SelectRole from 'app/screens/SelectRole';
import VerifyEmail from 'app/screens/VerifyEmail';
import VerifyMobile from 'app/screens/VerifyMobile';
import NewPassword from 'app/screens/NewPasswordVerification';
import AvatarCreation from 'app/screens/AvatarCreation';
import ForgotPassword from 'app/screens/ForgotPassword';
import ChangePassword from 'app/screens/ChangePassword';
import { useTranslation } from 'react-i18next';
import { retrieveSelectedLanguage } from 'app/utils/storageUtils';
import AvatarModifier from 'app/screens/AvatarModifier';
import ChildAccount from 'app/screens/ChildAccount';

const Stack = createStackNavigator();
const AuthenticationStack = createStackNavigator();
interface IState {
  loginReducer: ILoginState;
}

const AuthStack = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  const { i18n } = useTranslation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setLanguage = async () => {
    let lang: string = (await retrieveSelectedLanguage()) as string;
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLanguage();
  },[]);

  return (
    <AuthenticationStack.Navigator>
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
        name="ChangePassword"
        component={ChangePassword}
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
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Child Account"
        component={ChildAccount}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AvatarCreation"
        component={AvatarCreation}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AvatarModifier"
        component={AvatarModifier}
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
