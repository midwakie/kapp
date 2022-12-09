/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { TitleBarProps } from './types';

const TitleBar = ({
  leftComponent,
  middleComponent,
  rightComponent,
}: TitleBarProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/titleBarBg.png')}
        style={styles.bg}
      />
      <View style={styles.leftContainer}>{leftComponent}</View>
      <View style={styles.middleContainer}>{middleComponent}</View>
      <View style={styles.rightContainer}>{rightComponent}</View>
    </View>
  );
};

export default TitleBar;
