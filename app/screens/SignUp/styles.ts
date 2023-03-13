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
      paddingBottom: 25,
    },
    neomorphContainer: {
      marginTop: 53,
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
      width: '100@s',
      height: '100@s',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      marginBottom: 38,
      marginTop: 25,
    },
    gradientTextStyle: {
      fontSize: '24@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20@s',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? '20@s' : undefined,
      right: direction === 'rtl' ? undefined : '20@s',
      position: 'absolute',
    },
    agreeDisagreeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 22,
      marginTop: 12,
      width: width,
      paddingLeft: '40@s',
    },
    agreeDisagreeText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: '12@s',
      fontFamily: 'Nunito-Regular',
      left: '10@s',
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
      height: '16@s',
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
      height: '16@s',
    },
    bg: {
      width: '100%',
      height: '65@ms0.75',
      position: 'absolute',
      resizeMode: 'contain',
    },
    mobileCodeTextStyle: {
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
    },
    countryPickerButtonStyle: {
      backgroundColor: 'transparent',
    },
    flagButtonStyle: { backgroundColor: 'transparent' },
    textContainerStyle: {
      backgroundColor: 'transparent',
      marginLeft: 7,
    },
    mobileInputContainerStyle: {
      borderRadius: 4,
      overflow: 'hidden',
      width: '90%',
      height: 60,
      backgroundColor: 'transparent',
    },
    mobileTextInputStyle: {
      width: '90%',
      height: 60,
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      backgroundColor: 'transparent',
    },
  });

export default styles;
