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
    },
    safeAreaView: { alignSelf: 'stretch' },
    container2: {
      paddingHorizontal: '30@s',
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: '25@s',
    },
    topContainer: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      right: 30,
      top: 50,
      position: 'absolute',
      zIndex: 20,
    },
    skipButtonText: {
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      fontWeight: '400',
      color: '#03A0E3',
      backgroundColor: 'transparent',
    },
    skipButtonContainer: {
      height: '50@s',
      paddingHorizontal: '5@s',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    neomorphContainer: {
      marginTop: '50@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      width: '118@s',
      height: '118@s',
      borderRadius: '118@s',
      borderWidth: 1,
      borderColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '78.59@s',
      height: '95.03@s',
    },
    gradientTextStyle: {
      fontSize: '24@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      marginBottom: 60,
      marginTop: 25,
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    labelTextContainer: {
      justifyContent: direction === 'rtl' ? 'flex-start' : 'flex-end',
      alignItems: direction === 'rtl' ? 'flex-start' : 'flex-end',
      alignSelf: direction === 'rtl' ? 'flex-start' : 'flex-end',
      marginBottom: 20,
      width: width - 60,
    },
    forgotPasswordContainer: {
      justifyContent: direction === 'rtl' ? 'flex-start' : 'flex-end',
      alignItems: 'center',
      marginBottom: 39,
    },
    forgotPassword: {
      color: '#FE4C3E',
      textAlign: direction === 'rtl' ? 'left' : 'right',
      fontSize: '12@s',
      fontWeight: '600',
      backgroundColor: 'transparent',
      fontFamily: 'Nunito-Regular',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? '20@s' : undefined,
      right: direction === 'rtl' ? undefined : '20@s',
      position: 'absolute',
    },
    socialContainer: {
      width: width - 60,
      height: '50@s',
      flexDirection: 'row',
      marginTop: 40,
      marginBottom: 30,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    socialButtonContainer: {
      width: '50@s',
      height: '50@s',
      borderRadius: '50@s',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },
    socialButtonStyle: {
      width: '23@s',
      height: '23@s',
      resizeMode: 'contain',
    },
    bottomContainer: {
      height: '20@s',
      width: width - 60,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    bottomText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: '12@s',
      fontFamily: 'Nunito-Regular',
    },
    signUpButton: {
      color: '#03A0E3',
      fontSize: '12@s',
      fontWeight: '700',
      backgroundColor: 'transparent',
      fontFamily: 'Nunito-Regular',
    },
    signUpButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '20@s',
    },
  });

export default styles;
