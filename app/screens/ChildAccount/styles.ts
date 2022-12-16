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
      backgroundColor: '#EBEEF0',
    },
    container2: {
      paddingHorizontal: '30@s',
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: '57@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    gradientTextStyle: {
      fontSize: '24@s',
      fontFamily: 'Nunito',
      fontStyle: 'normal',
      fontWeight: '800',
      lineHeight: '33@s',
      textAlign: 'center',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70@s',
      marginBottom: '40@s',
      marginTop: '27@s',
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
      fontSize: '12@s',
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
      height: '50@s',
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
      fontSize: '12@s',
      fontFamily: 'Nunito-Regular',
    },
    agreeDisagreeText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: '12@s',
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
    saveButton: {
      color: '#03A0E3',
      fontSize: '12@s',
      fontWeight: '700',
      backgroundColor: 'transparent',
      fontFamily: 'Nunito-Regular',
    },
    saveButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '20@s',
    },
    radioButtonContainer: {
      width: '100%',
      marginBottom: 21,
      backgroundColor: 'transparent',
      height: '50@s',
      alignItems: 'center',
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      marginTop: '30@s',
      marginLeft: '-10@s',
      // marginBottom: 27,
    },
    radiobutton: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      position: 'absolute',
      alignItems: 'center',
      height: '50@s',
      width: width - 20,
    },
    bg: {
      width: width - 60,
      height: '47@s',
      position: 'absolute',
      resizeMode: 'contain',
    },
  });

export default styles;
