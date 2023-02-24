/* eslint-disable @typescript-eslint/no-unused-vars */
import i18n from 'app/locales/i18n';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import styles from './styles';

const ProgressBar = ({ percentage }: any) => {
  const { t } = useTranslation();
  const direction: string = i18n.dir();
  const [getPercentage, setPercentage] = useState(percentage);
  return (
    <View style={styles(direction, getPercentage).neomorphContainer}>
      <Neumorphism
        lightColor={'#ffffff'}
        darkColor={'#cccccc'}
        shapeType={'pressed'}
        radius={5}>
        <View style={styles(direction, getPercentage).progressBarOut}>
          <View style={styles(direction, getPercentage).progressBarLevel} />
        </View>
      </Neumorphism>
    </View>
  );
};
export default ProgressBar;
