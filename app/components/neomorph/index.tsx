import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Neomorph = ({
  children,
  width,
  height,
  radius,
  fillColor,
  style,
}: any) => {
  return (
    <View style={[styles.inner(width, height, radius, fillColor), style]}>
      <View style={styles.bottomShadow}>
        <View style={styles.topShadow}>{children}</View>
      </View>
    </View>
  );
};

export default Neomorph;
