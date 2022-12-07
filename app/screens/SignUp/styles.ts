import { Dimensions, StyleSheet } from 'react-native';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#EBEEF0',
    },
    container2: {
      paddingHorizontal: 30,
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    safeAreaView: { alignSelf: 'stretch' },
    gradientTextStyle: {
      fontSize: 24,
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      lineHeight: 33,
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 33,
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
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      marginBottom: 20,
      width: width - 60,
    },
    forgotPasswordContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 39,
    },
    forgotPassword: {
      color: '#FE4C3E',
      textAlign: 'right',
      fontSize: 12,
      fontWeight: '600',
      backgroundColor: 'transparent',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20 : undefined,
      right: direction === 'rtl' ? undefined : 20,
      position: 'absolute',
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: 100,
      height: 100,
    },
    imageContainer: {
      width: 118,
      height: 118,
      borderRadius: 118,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },
    neomorphContainer: {
      marginTop: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: width - 60,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },
    socialContainer: {
      width: width - 60,
      height: 50,
      flexDirection: 'row',
      marginTop: 40,
      marginBottom: 30,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    socialButtonContainer: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialButtonStyle: {
      width: 23,
      height: 23,
      resizeMode: 'contain',
    },
    bottomContainer: {
      height: 20,
      width: width - 60,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    bottomText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: 12,
      fontFamily: 'Nunito-Regular',
    },
    agreeDisagreeText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: 12,
      fontFamily: 'Nunito-Regular',
      lineHeight: 16,
    },
    agreeDisagreeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 22,
      width: width - 60,
    },
    signUpButton: {
      color: '#03A0E3',
      fontSize: 12,
      fontWeight: '700',
      backgroundColor: 'transparent',
      fontFamily: 'Nunito-Regular',
    },
    signUpButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 20,
    },
  });

export default styles;
