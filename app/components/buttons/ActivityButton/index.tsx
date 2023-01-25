/* eslint-disable @typescript-eslint/no-unused-vars */
import i18n from 'app/locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import styles from './styles';
import { ActivityButtonProps } from './types';

const ActivityButton = ({
  onPress,
  title,
  buttonTitle,
}: ActivityButtonProps) => {
  const { t } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <View style={styles.neomorphContainer}>
      <Neumorphism
        // style={{ height: 50 }}
        lightColor={'#ffffff'}
        darkColor={'#cccccc'}
        shapeType={'flat'}
        radius={scale(50)}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>{t(title)}</Text>
          <TouchableOpacity
            onPress={() => {
              onPress;
            }}>
            <Text style={styles.buttonText}>{t(buttonTitle)}</Text>
          </TouchableOpacity>
        </View>
      </Neumorphism>
    </View>
  );
};
export default ActivityButton;
