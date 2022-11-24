import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from 'app/screens/Loading';

const Stack = createStackNavigator();
const MiddleStack = createStackNavigator();

const MiddlewareStack = () => (
  <MiddleStack.Navigator>
    <Stack.Screen
      name="Loading"
      component={Loading}
      options={{
        title: '',
        headerShown: false,
      }}
    />
  </MiddleStack.Navigator>
);

export default MiddlewareStack;
