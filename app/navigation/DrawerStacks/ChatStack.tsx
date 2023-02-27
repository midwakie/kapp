import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GlobalSearch from 'app/screens/GlobalSearch';
import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { ROLES } from 'app/config/role-config';
import ChatList from 'app/screens/ChatList';
import ChatRoom from 'app/screens/ChatRoom';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const ChatStack = () => {
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          headerShown: false,
        }}
      />
    </LoggedInStack.Navigator>
  );
};

export default ChatStack;
