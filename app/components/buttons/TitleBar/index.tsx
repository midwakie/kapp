/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Platform, View } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './styles';
import { TitleBarProps } from './types';

const TitleBar = ({
  leftComponent,
  middleComponent,
  rightComponent,
}: TitleBarProps) => {
  return (
    <Neumorphism
      lightColor={'rgba(255,255,255, 0.0)'}
      darkColor={
        Platform.OS === 'android' ? '#A8A8A8' : 'rgba(94, 94, 94, 0.25)'
      }
      shapeType={'flat'}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>{leftComponent}</View>
        <View style={styles.middleContainer}>{middleComponent}</View>
        <View style={styles.rightContainer}>{rightComponent}</View>
      </View>
    </Neumorphism>
  );
};

export default TitleBar;
