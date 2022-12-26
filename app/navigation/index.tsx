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
import useGetOnboardingStatus from 'app/hooks/useGetOnboardingStatus';
import { useTranslation } from 'react-i18next';
import InitialCheckStack from './InitialCheckStack';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';

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
  currentCustomerReducer: ICurrentCustomer;
}

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const { t, i18n } = useTranslation();
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  const currentCustomerEmailVerificationStatus = useSelector(
    (state: IState) => state.currentCustomerReducer.email_verified,
  );
  const isLoading = useSelector(
    (state: IState) => state.loadingReducer.isLoading,
  );

  const { isFirstLaunch, isLoading: onboardingIsLoading } =
    useGetOnboardingStatus();

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'dark-content'} />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoading ? (
          isLoggedIn ? (
            currentCustomerEmailVerificationStatus === false ? (
              <Stack.Screen
                name="MiddleWare"
                component={MiddlewareStack}
                options={homeOptions}
              />
            ) : (
              <Stack.Screen
                name="Home"
                component={AppStack}
                options={homeOptions}
              />
            )
          ) : onboardingIsLoading ? (
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
          ) : !isFirstLaunch ? (
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
          ) : (
            <Stack.Screen
              name="InitialCheck"
              component={InitialCheckStack}
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
