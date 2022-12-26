/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from 'app/screens/Loading';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { useSelector } from 'react-redux';
import VerifyEmail from 'app/screens/VerifyEmail';

const Stack = createStackNavigator();
const MiddleStack = createStackNavigator();
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const MiddlewareStack = () => {
  const currentCustomerEmailVerificationStatus = useSelector(
    (state: IState) => state.currentCustomerReducer.email_verified,
  );
  return (
    <MiddleStack.Navigator>
      {currentCustomerEmailVerificationStatus === false ? (
        <Stack.Screen
          name="Verify Email"
          component={VerifyEmail}
          options={{
            title: '',
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            title: '',
            headerShown: false,
          }}
        />
      )}
    </MiddleStack.Navigator>
  );
};

export default MiddlewareStack;
