import { s, ScaledSheet } from 'react-native-size-matters';

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
      borderRadius: '18@s',
      height: s(height),
      width: s(width),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
