/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { navigationRef } from './NavigationService';
import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { ILoading } from 'app/models/reducers/loading';
import MiddlewareStack from './MiddlewareStack';

const Stack = createStackNavigator();

const homeOptions: any = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerRight: () => <ThemeController />,
};

interface IState {
  loginReducer: ILoginState;
  loadingReducer: ILoading;
}

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  const isLoading = useSelector(
    (state: IState) => state.loadingReducer.isLoading,
  );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'dark-content' : 'light-content'} />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoading ? (
          isLoggedIn ? (
            <Stack.Screen
              name="Home"
              component={AppStack}
              options={homeOptions}
            />
          ) : (
            <Stack.Screen
              name="Auth"
              component={AuthStack}
              options={{
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
                animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                // headerRight: () => <ThemeController />,
              }}
            />
          )
        ) : (
          <Stack.Screen
            name="MiddleWare"
            component={MiddlewareStack}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
