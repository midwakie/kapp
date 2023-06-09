import { ScaledSheet } from 'react-native-size-matters';

const styles = (radius: any, height: any, width: any) =>
  ScaledSheet.create({
    touchableOpacity: {
      borderRadius: `${radius}@ms`,
      height: typeof height === 'number' ? `${height}@ms` : height,
      width: typeof width === 'number' ? `${width}@ms` : width,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: '18@ms',
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      textAlign: 'center',
      margin: '10@ms',
      color: '#ffffff',
      backgroundColor: 'transparent',
      alignSelf: 'center',
    },
  });

export default styles;
