import React from 'react';

import { View } from 'react-native';
import styles from './styles';
const HorizontalLine = ({ stroke, opacity, width, color }: any) => {
  return <View style={styles.horizontal(stroke, opacity, width, color)} />;
};

export default HorizontalLine;
