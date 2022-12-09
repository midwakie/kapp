/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import styles from './styles';
import { BubbleButtonProps } from './types';

const BubbleButton = ({ onPress, image, title }: BubbleButtonProps) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  const Click = () => {
    setActive(!active);
    onPress(active);
  };
  return (
    <TouchableWithoutFeedback onPress={Click}>
      <View style={styles(active).neomorphContainer}>
        <Neumorphism
          lightColor={'#ffffff'}
          darkColor={'#A8A8A8'}
          shapeType={active ? 'pressed' : 'flat'}
          radius={ms(137)}>
          <View style={styles(active).ellipse}>
            {image && <Image source={image} style={styles(active).image} />}
            <Text style={styles(active).bubbleText}>{t(title)}</Text>
          </View>
        </Neumorphism>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default memo(BubbleButton);
