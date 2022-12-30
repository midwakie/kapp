import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'app/screens/Home';
import History from 'app/screens/EBooks/History';
import Biology from 'app/screens/EBooks/Biology';
import WhatsNew from 'app/screens/EBooks/WhatsNew';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions: any = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerRight: () => <ThemeController />,
  headerShown: false,
};

const HomeStack = () => {
  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="LoggedInNavigator"
        component={Home}
        options={homeOptions}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Biology"
        component={Biology}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WhatsNew"
        component={WhatsNew}
        options={{
          headerShown: false,
        }}
      />
    </LoggedInStack.Navigator>
  );
};

export default HomeStack;
