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
        ? `rgba(${Math.random() * 200},${Math.random() * 150}, ${
            Math.random() * 200
          }, 0.7)`
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
