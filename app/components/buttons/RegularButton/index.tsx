/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ms } from 'react-native-size-matters';
import { RegularButtonProps } from './types';
const RegularButton = ({
  onPress,
  text = '',
  colors,
  radius,
  icon,
  height,
  width,
  start,
  end,
  disabled = false,
}: RegularButtonProps) => {
  return (
    <Neumorphism
      lightColor={'#ffffff'}
      darkColor={'#A8A8A8'}
      shapeType={'flat'}
      radius={radius}>
      <TouchableOpacity
        style={styles(radius, height, width).touchableOpacity}
        onPress={onPress}
        disabled={disabled}>
        <LinearGradient
          colors={colors}
          start={start || { x: 0, y: 0 }}
          end={end || { x: 0, y: 1 }}
          style={styles(radius, height, width).touchableOpacity}>
          {icon ? (
            <MaterialIcon name={icon} size={ms(20)} color={'#03A0E3'} />
          ) : (
            <Text style={styles(radius, height, width).buttonText}>{text}</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </Neumorphism>
  );
};
export default RegularButton;
