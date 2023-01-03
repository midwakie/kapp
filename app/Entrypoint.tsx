/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import 'app/locales/i18n.ts';
import {
  PaperThemeDefault,
  CombinedDefaultTheme,
} from 'app/config/theme-config';
import Navigator from 'app/navigation';
import configureStore from 'app/store';
import { MenuProvider } from 'react-native-popup-menu';

LogBox.ignoreAllLogs(true);

const { persistor, store } = configureStore();
const RootNavigation: React.FC = () => {
  return (
    <PaperProvider theme={PaperThemeDefault}>
      <Navigator theme={CombinedDefaultTheme} />
    </PaperProvider>
  );
};

const EntryPoint: React.FC = () => {
  return (
    <MenuProvider>
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </MenuProvider>
  );
};

export default EntryPoint;
