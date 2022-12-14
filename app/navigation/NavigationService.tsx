/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function replace(name: string, params?: any) {
  navigationRef.current.dispatch(StackActions.replace(name, params));
}

function reset(name: string) {
  navigationRef.current.reset({
    index: 0,
    routes: [{ name }],
  });
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  replace,
  reset,
  goBack,
};
