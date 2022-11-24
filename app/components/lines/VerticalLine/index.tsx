import React from 'react';

import { View } from 'react-native';
import styles from './styles';
const VerticalLine = ({ stroke, opacity, width, color }: any) => {
  return <View style={styles.vertical(stroke, opacity, width, color)} />;
};

export default VerticalLine;
