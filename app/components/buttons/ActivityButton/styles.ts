import { Dimensions } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;
const styles = () =>
  ScaledSheet.create({
    mainContainer: {
      // marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20@s',
    },
    neomorphContainer: {
      // borderWidth: 2,
      height: '50@s',
      width: width - 60,
      // borderWidth: 2,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    textContainer: {
      width: '100%',
      paddingHorizontal: '20@s',
      // borderWidth: 2,
      marginTop: '12@s',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    mainText: {
      fontWeight: '600',
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
    },
    buttonText: {
      color: '#03A0E3',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
    },
  });

export default styles;
