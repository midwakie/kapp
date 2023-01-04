import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#EBEEF0',
      zIndex: -10,
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
      marginTop: 40,
      paddingHorizontal: 20,
    },
    neomorphContainer2: {
      marginTop: 300,
      paddingHorizontal: 30,
    },
    container2: {
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    container3: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '212@s',
    },
    container4: {
      marginLeft: 20,
    },
    row: {
      marginTop: 20,
      height: '22@s',
    },
    row1: {
      marginTop: 20,
      height: '50@s',
      marginLeft: 20,
      width: '80@s',
    },
    row2: {
      flexDirection: 'row',
      marginTop: 20,
    },
    text1: {
      color: '#455157',
      fontSize: '16@s',
      fontWeight: '800',
      fontFamily: 'Nunito-Regular',
      marginLeft: 20,
    },
    buttonText: {
      fontSize: '18@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      color: '#758DAC',
    },
  });

export default styles;
