import React from 'react';
import { Image, View } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import { ActivityIndicator } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import styles from './styles';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.neomorphContainer}>
          <Neumorphism
            lightColor={'#ffffff'}
            darkColor={'#A8A8A8'}
            shapeType={'flat'}
            radius={scale(118)}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.imageStyle}
              />
            </View>
          </Neumorphism>
        </View>
        <ActivityIndicator size={40} color={'#FA4B0C'} />
      </View>
    </View>
  );
};

export default Loading;
