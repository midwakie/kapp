import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import MyAccount from 'app/screens/MyAccount';
import GlobalSearch from 'app/screens/GlobalSearch';
import AccountDetail from 'app/screens/AccountDetail';
import ChangeEmailId from 'app/screens/ChangeEmailId';
import ChangeMobileNumber from 'app/screens/ChangeMobileNumber';
import AccountChangePassword from 'app/screens/AccountChangePassword';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const AccountStack = () => {
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GlobalSearch"
        component={GlobalSearch}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AccountDetail"
        component={AccountDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangeEmailId"
        component={ChangeEmailId}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangeMobileNumber"
        component={ChangeMobileNumber}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AccountChangePassword"
        component={AccountChangePassword}
        options={{
          headerShown: false,
        }}
      />
    </LoggedInStack.Navigator>
  );
};

export default AccountStack;
