import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GlobalSearch from 'app/screens/GlobalSearch';
import ParentProfileDetail from 'app/screens/ParentProfileDetail';
import ChildFullProfile from 'app/screens/ChildFullProfile';
import TeachersProfile from 'app/screens/TeachersProfile';
import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { ROLES } from 'app/config/role-config';
import MyFeeds from 'app/screens/MyFeeds';
import FeedDetail from 'app/screens/FeedDetail';
import MyChannel from 'app/screens/MyChannel';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const FeedStack = () => {
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="MyFeeds"
        component={MyFeeds}
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
        name="FeedDetail"
        component={FeedDetail}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyChannel"
        component={MyChannel}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
    </LoggedInStack.Navigator>
  );
};

export default FeedStack;
