import React from 'react';
import { Image, Text, View } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import { scale } from 'react-native-size-matters';
import styles from './styles';

const NoInterestAndHobbies: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.neomorphContainer}>
          <Neumorphism
            lightColor={'#ffffff'}
            darkColor={'#A8A8A8'}
            shapeType={'flat'}
            radius={scale(234)}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/noConnection.png')}
                style={styles.imageStyle}
              />
              <Image
                source={require('../../assets/puzzle.png')}
                style={styles.imageInnerStyle}
              />
            </View>
          </Neumorphism>
        </View>
        <Text style={styles.titleText}>Interest & Hobbie!</Text>
        <Text style={styles.subTitleText}>
          You didn't select any interest & hobbies yet
        </Text>
      </View>
    </View>
  );
};

export default NoInterestAndHobbies;
