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
    container2: {
      marginTop: 40,
      paddingHorizontal: '30@s',
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    inputTextContainer1: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? '20@s' : undefined,
      right: direction === 'rtl' ? undefined : '20@s',
      position: 'absolute',
    },
    container3: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '210@ms',
      borderRadius: 14,
      paddingHorizontal: '25@s',
      paddingVertical: '25@s',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '22@s',
      marginBottom: 18,
    },
    row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 36,
      height: '22@s',
    },
    row2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '22@s',
    },
    text1: {
      color: '#455157',
      fontSize: '16@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    text2: {
      color: '#03A0E3',
      fontSize: '16@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
    },
    container4: {
      marginTop: '40@s',
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
