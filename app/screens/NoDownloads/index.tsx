import React from 'react';
import { Image, Text, View } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import { scale } from 'react-native-size-matters';
import styles from './styles';

const NoDownload: React.FC = () => {
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
                source={require('../../assets/noDownloads.png')}
                style={styles.imageStyle}
              />
            </View>
          </Neumorphism>
        </View>
        <Text style={styles.titleText}>No Downloads!</Text>
        <Text style={styles.subTitleText}>
          You don’t have any downloads yet
        </Text>
      </View>
    </View>
  );
};

export default NoDownload;
