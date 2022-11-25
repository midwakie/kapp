import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
const PlainButton = ({ onPress, style, containerStyle, text }: any) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};
export default PlainButton;
