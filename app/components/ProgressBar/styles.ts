import { ScaledSheet } from 'react-native-size-matters';

const styles = (direction, percentage: undefined) =>
  ScaledSheet.create({
    neomorphContainer: {
      width: '100%',
      paddingTop: 5,
    },
    progressBarOut: {
      width: '100%',
      height: '6@s',
      borderRadius: '5@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressBarLevel: {
      width: percentage ? percentage : 0,
      height: '4@s',
      borderRadius: '5@s',
      backgroundColor: '#0FC721',
      position: 'absolute',
      left: '1@s',
      right: '1@s',
    },
  });

export default styles;
