import { ScaledSheet } from 'react-native-size-matters';

const styles = (radius: any, height: any, width: any) =>
  ScaledSheet.create({
    touchableOpacity: {
      borderRadius: `${radius}@ms`,
      height: `${height}@ms`,
      width: typeof width === 'number' ? `${width}@ms` : width,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      height: `${height / 2}@ms`,
      width: `${width / 2}@ms`,
      resizeMode: 'contain',
    },
  });

export default styles;
