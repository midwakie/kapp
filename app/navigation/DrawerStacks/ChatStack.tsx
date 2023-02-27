import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GlobalSearch from 'app/screens/GlobalSearch';
import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { ROLES } from 'app/config/role-config';
import ChatList from 'app/screens/ChatList';
import ChatRoom from 'app/screens/ChatRoom';
import CreateChat from 'app/screens/CreateChat';
import CreateGroup from 'app/screens/CreateGroup';
import ChatGroupDetail from 'app/screens/ChatGroupDetail';

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
      <Stack.Screen
        name="CreateChat"
        component={CreateChat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateGroup"
        component={CreateGroup}
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
        name="ChatGroupDetail"
        component={ChatGroupDetail}
        options={{
          headerShown: false,
        }}
      />
    </LoggedInStack.Navigator>
  );
};

export default ChatStack;
