import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Language from 'app/screens/Language';

const Stack = createStackNavigator();
const InitialStack = createStackNavigator();

const InitialCheckStack = () => (
  <InitialStack.Navigator>
    <Stack.Screen
      name="Language"
      component={Language}
      options={{
        title: '',
        headerShown: false,
      }}
    />
  </InitialStack.Navigator>
);

export default InitialCheckStack;
