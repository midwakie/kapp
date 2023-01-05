/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import { ms, s, scale } from 'react-native-size-matters';
import { CheckBoxProps } from './types';
const Checkbox = ({
  borderWidth,
  height,
  width,
  color,
  icon,
  iconSize,
  iconColor,
  onChange,
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TouchableOpacity
      style={styles(borderWidth, height, width, color, isChecked).checkbox}
      onPress={() => {
        onChange && onChange(!isChecked);
        setIsChecked(!isChecked);
      }}>
      {isChecked && <Icon name={icon} size={iconSize} color={iconColor} />}
    </TouchableOpacity>
  );
};

export default memo(Checkbox);
