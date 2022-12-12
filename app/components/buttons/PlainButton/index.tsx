/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PlainButtonProps } from './types';
const PlainButton = ({
  onPress,
  style,
  containerStyle,
  text,
}: PlainButtonProps) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};
export default PlainButton;
