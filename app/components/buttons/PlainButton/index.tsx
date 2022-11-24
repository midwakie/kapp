import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
const PlainButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      <Text style={styles.buttonText}>Skip</Text>
    </TouchableOpacity>
  );
};
export default PlainButton;
