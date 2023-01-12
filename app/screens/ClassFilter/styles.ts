import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string, isPressed: boolean) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#EBEEF0',
    },
    safeAreaView: { alignSelf: 'stretch' },
    gradientTextContainer: {
      width: '126@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    neomorphContainer: {
      marginTop: '40@s',
      paddingHorizontal: '20@s',
    },
    neomorphContainer2: {
      marginTop: 100,
      paddingHorizontal: '30@s',
    },
    container2: {
      width: '100%',
      height: '100%',
      paddingBottom: '25@s',
      marginTop: '85@s',
    },
    container3: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '515@s',
    },
    row: {
      margin: '20@s',
      // height: '22@s',
    },
    row1: {
      marginHorizontal: '20@s',
      // height: '50@s',
      width: '80@ms',
    },
    row2: {
      flexDirection: 'row',
      margin: '20@s',
      marginBottom: '10@s',
    },
    text1: {
      color: '#455157',
      fontSize: '16@s',
      fontWeight: '800',
      fontFamily: 'Nunito-Regular',
    },
    buttonText: {
      fontSize: '18@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      color: isPressed ? '#ffff' : '#758DAC',
    },
    buttonText1: {
      fontSize: '18@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      color: isPressed ? '#ffff' : '#758DAC',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
