import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'app/screens/Home';

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

const HomeStack = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen
      name="LoggedInNavigator"
      component={Home}
      options={homeOptions}
    />
  </LoggedInStack.Navigator>
);

export default HomeStack;
