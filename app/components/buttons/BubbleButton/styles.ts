import { ScaledSheet } from 'react-native-size-matters';

const styles = (isPressed: boolean) =>
  ScaledSheet.create({
    neomorphContainer: {
      marginBottom: 30,
    },
    ellipse: {
      width: '137@s',
      height: '137@s',
      borderRadius: '137@s',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isPressed
        ? `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0')}`
        : '#EBEEF0',
    },
    bubbleText: {
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      color: '#758DAC',
      lineHeight: '25@s',
    },
    image: {
      resizeMode: 'contain',
      width: '50@ms',
      height: '50@ms',
    },
  });

export default styles;
