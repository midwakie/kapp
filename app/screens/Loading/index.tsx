import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styles from './styles';

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ActivityIndicator size={40} color={'#FFFFFF'} />
      </View>
    </View>
  );
};

export default Landing;
