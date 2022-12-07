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
    gradientTextStyle: {
      fontSize: 24,
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 33,
      marginBottom: 20,
      marginTop: 117,
    },
    subTextContainer: {
      height: 38,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    subText: {
      fontSize: 14,
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      lineHeight: 19,
      color: '#3B3B48',
      justifyContent: 'center',
      alignItems: 'center',
    },
    safeAreaView: { alignSelf: 'stretch' },
    bottomContainer: {
      marginTop: 42,
      height: 20,
      width: width - 60,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    bottomText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: 12,
    },
    signUpButton: {
      color: '#03A0E3',
      fontSize: 12,
      fontWeight: '700',
      backgroundColor: 'transparent',
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    signUpButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 20,
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20 : undefined,
      right: direction === 'rtl' ? undefined : 20,
      position: 'absolute',
    },
    bulletPointContainer: {
      marginBottom: 41,
      alignSelf: 'center',
      paddingLeft: direction === 'rtl' ? 35 : 30,
    },
    bulletPoints: {
      color: '#758DAC',
      alignItems: 'flex-start',
      justifyContent: 'center',
      fontSize: 14,
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      lineHeight: 19,
    },
    container2: {
      paddingHorizontal: 30,
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    regularButton: {
      marginTop: 40,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      marginTop: 40,
      
    },
  });

export default styles;
