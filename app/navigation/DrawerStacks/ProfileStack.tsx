import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GlobalSearch from 'app/screens/GlobalSearch';
import ParentProfileDetail from 'app/screens/ParentProfileDetail';
import ChildFullProfile from 'app/screens/ChildFullProfile';
import TeachersProfile from 'app/screens/TeachersProfile';
import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { ROLES } from 'app/config/role-config';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const ProfileStack = () => {
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  return (
    <LoggedInStack.Navigator>
      {selectedRole === ROLES.PARENT && (
        <Stack.Screen
          name="ParentProfileDetail"
          component={ParentProfileDetail}
          options={{
            headerShown: false,
          }}
        />
      )}
      {selectedRole === ROLES.STUDENT && (
        <Stack.Screen
          name="ChildFullProfile"
          component={ChildFullProfile}
          options={{
            headerShown: false,
          }}
        />
      )}
      {selectedRole === ROLES.TEACHER && (
        <Stack.Screen
          name="TeachersProfile"
          component={TeachersProfile}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Stack.Screen
        name="GlobalSearch"
        component={GlobalSearch}
        options={{
          headerShown: false,
        }}
      />
    </LoggedInStack.Navigator>
  );
};

export default ProfileStack;
