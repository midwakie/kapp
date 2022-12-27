import { Dimensions, StyleSheet } from 'react-native';
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
      backgroundColor: '#E5E5E5',
      zIndex: -10,
    },
    safeAreaView: { alignSelf: 'stretch' },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    gradientTextContainer: {
      width: '111@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
      marginBottom: 38,
      marginTop: 50,
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      lineHeight: 25,
      textAlign: 'center',
    },
    container1: {
      //   paddingHorizontal: '30@s',
      marginTop: 50,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
      alignItems: 'center',
    },
    gradientTextContainer2: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      marginBottom: 85,
    },
    gradientTextStyle2: {
      fontSize: '24@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      lineHeight: 33,
      textAlign: 'center',
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    squareBox: {
      backgroundColor: '#EBEEF0',
      width: '251@s',
      height: '187@s',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   borderRadius: 14,
      //   marginLeft: 62,
    },
    squareBox1: {
      marginTop: 32,
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20 : undefined,
      right: direction === 'rtl' ? undefined : 20,
      position: 'absolute',
    },
    text: {
      color: '#3B3B48',
      fontSize: '18@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      width: '100%',
      height: '25@s',
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '80@s',
      height: '80@s',
      alignSelf: 'center',
      marginTop: 22,
      marginBottom: 25,
    },
    imageStyle1: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '80@s',
      height: '80@s',
      alignSelf: 'center',
      marginTop: 30.17,
      marginBottom: 25.47,
    },
    imageStyle2: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '80@s',
      height: '80@s',
      alignSelf: 'center',
      marginTop: 41,
      marginBottom: 13.85,
    },
  });

export default styles;
