/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PixelRatio, Pressable, Text, View } from 'react-native';
import styles from './styles';

import { RadioButtonProps } from './types';

export default function RadioButton({
  borderColor,
  color = '#444',
  containerStyle,
  description,
  descriptionStyle,
  disabled = false,
  id,
  label,
  labelStyle,
  layout = 'row',
  onPress,
  selected = false,
  size = 24,
}: RadioButtonProps) {
  const borderWidth = PixelRatio.roundToNearestPixel(size * 0.08);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.7);
  const sizeFull = PixelRatio.roundToNearestPixel(size);
  const { i18n } = useTranslation();
  const direction: string = i18n.dir();
  let orientation: any = {
    flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
  };
  let margin: any = {
    marginLeft: direction === 'rtl' ? undefined : 15,
    marginRight: direction === 'rtl' ? 15 : undefined,
  };
  let marginV: any = { color: '#323A3D', fontSize: 16 };
  let specificStyle: any = { opacity: disabled ? 0.2 : 1, marginLeft: 42 };

  if (layout === 'column') {
    orientation = { alignItems: 'center' };
    margin = { marginTop: 10 };
  }

  function handlePress() {
    if (selected) {
      return null;
    }
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  return (
    <>
      <Pressable
        onPress={handlePress}
        style={[styles.container, orientation, specificStyle, containerStyle]}>
        <View
          style={[
            styles.border,
            {
              borderColor: borderColor || color,
              borderWidth,
              width: sizeFull,
              height: sizeFull,
              borderRadius: sizeHalf,
            },
          ]}>
          {selected && (
            <View
              style={{
                backgroundColor: color,
                width: sizeHalf,
                height: sizeHalf,
                borderRadius: sizeHalf,
              }}
            />
          )}
        </View>
        {Boolean(label) && (
          <Text style={[margin, marginV, labelStyle]}>{label}</Text>
        )}
      </Pressable>
      {Boolean(description) && (
        <Text style={[margin, descriptionStyle]}>{description}</Text>
      )}
    </>
  );
}
