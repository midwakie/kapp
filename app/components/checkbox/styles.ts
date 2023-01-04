import { ScaledSheet } from 'react-native-size-matters';

const styles = (
  borderWidth: any,
  height: any,
  width: any,
  color: any,
  isChecked: boolean,
) =>
  ScaledSheet.create({
    checkbox: {
      backgroundColor: isChecked ? color : 'transparent',
      borderColor: color,
      borderWidth: borderWidth,
      borderRadius: 6,
      height: height,
      width: width,
    },
  });

export default styles;
