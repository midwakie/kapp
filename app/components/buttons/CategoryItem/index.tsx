/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Neumorphism from 'react-native-neumorphism';
import { CategoryItemProps } from './types';
const CategoryItem = ({
  onPress,
  colors,
  radius,
  height,
  width,
  image,
}: CategoryItemProps) => {
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
          {image && (
            <Image
              style={styles(radius, height, width).imageStyle}
              source={image}
            />
          )}
        </LinearGradient>
      </TouchableOpacity>
    </Neumorphism>
  );
};
export default CategoryItem;
