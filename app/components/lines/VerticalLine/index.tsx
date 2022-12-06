import React from 'react';

import { View } from 'react-native';
import styles from './styles';
const VerticalLine = ({ stroke, opacity, height, color }: any) => {
  return <View style={styles(stroke, opacity, height, color).vertical} />;
};

export default VerticalLine;
