/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import { ms, s, scale } from 'react-native-size-matters';
import { CheckBoxRoundProps } from './types';
const Checkboxround = ({
  borderWidth,
  height,
  width,
  color,
  icon,
  borderRadius,
  iconSize,
  iconColor,
  onChange,
  status,
}: CheckBoxRoundProps) => {
  const [isChecked, setIsChecked] = useState(status);
  return (
    <TouchableOpacity
      style={
        styles(borderWidth, height, width, color, isChecked, borderRadius)
          .checkbox
      }
      onPress={() => {
        onChange && onChange(!isChecked);
        setIsChecked(!isChecked);
      }}>
      {isChecked && <Icon name={icon} size={iconSize} color={iconColor} />}
    </TouchableOpacity>
  );
};

export default memo(Checkboxround);
