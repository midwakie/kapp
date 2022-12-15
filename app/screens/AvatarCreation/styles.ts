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
    safeAreaView: { alignSelf: 'stretch' },
    container2: {
      paddingHorizontal: '30@s',
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: '274@s',
    },
    topContainer: {
      flexDirection: 'row',
      marginLeft: '-10@s',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 30,
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
      marginTop: 22,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      width: '140@ms',
      height: '140@ms',
      borderRadius: '140@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'cover',
      width: '140@ms',
      height: '140@ms',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      marginBottom: 40,
      marginTop: 40,
    },
    gradientTextStyle: {
      fontSize: '24@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    radioButtonContainer: {
      width: '100%',
      marginBottom: 21,
      backgroundColor: 'transparent',
      height: '50@s',
      alignItems: 'center',
    },
    bg: {
      width: width - 60,
      height: '47@s',
      position: 'absolute',
      resizeMode: 'contain',
    },
    radioButtonViewContainer: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      position: 'absolute',
      alignItems: 'center',
      height: '50@s',
      width: width - 20,
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    regularButton: {
      marginTop: 40,
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
    rightComponent: { right: '20@s', position: 'absolute' },

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
    },
    agreeDisagreeText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: 12,
    },
    agreeDisagreeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 22,
    },
    signUpButton: {
      color: '#03A0E3',
      fontSize: 12,
      fontWeight: '700',
      backgroundColor: 'transparent',
    },
    signUpButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 20,
    },

    profilePicture: {
      height: 140,
      width: 140,
      borderRadius: 140,
      //  backgroundColor:'white',
    },
  });

export default styles;
