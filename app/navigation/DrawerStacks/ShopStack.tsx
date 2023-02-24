import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GlobalSearch from 'app/screens/GlobalSearch';
import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { ROLES } from 'app/config/role-config';
import MyFeeds from 'app/screens/MyFeeds';
import Shop from 'app/screens/Shop';
import ToyDetail from 'app/screens/ToyDetail';
import ShoppingCart from 'app/screens/ShoppingCart';
import DeliveryAddress from 'app/screens/DeliveryAddress';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const ShopStack = () => {
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ToyDetail"
        component={ToyDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
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
        name="DeliveryAddress"
        component={DeliveryAddress}
        options={{
          headerShown: false,
        }}
      />
    </LoggedInStack.Navigator>
  );
};

export default ShopStack;
