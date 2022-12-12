/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleProp, ViewStyle } from 'react-native';

export type PlainButtonProps = {
  onPress: any;
  style?: StyleProp<ViewStyle> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  text: string;
};
