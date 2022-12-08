import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ms } from 'react-native-size-matters';
const RegularButton = ({
  onPress,
  text,
  colors,
  radius,
  icon,
  height,
  width,
}: any) => {
  return (
    <Neumorphism
      lightColor={'#ffffff'}
      darkColor={'#A8A8A8'}
      shapeType={'flat'}
      radius={radius}>
      <TouchableOpacity
        style={styles(radius, height, width).touchableOpacity}
        onPress={onPress}>
        <LinearGradient
          colors={colors}
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
