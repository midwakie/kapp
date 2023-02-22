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
import FeedDetailReport from 'app/screens/FeedDetailReport';
import OrderList from 'app/screens/OrderList';
import OrderDetail from 'app/screens/OrderDetail';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const OrderStack = () => {
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="OrderList"
        component={OrderList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
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
    </LoggedInStack.Navigator>
  );
};

export default OrderStack;
