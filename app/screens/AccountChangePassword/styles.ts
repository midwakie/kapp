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
      width: '100%',
      height: '100%',
      paddingBottom: '25@s',
      marginTop: '85@s',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      marginBottom: 20,
      marginTop: '35@s',
    },
    gradientTextContainer1: {
      width: '126@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
    },
    gradientTextStyle: {
      fontSize: '24@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
    },
    subTextContainer: {
      height: '19@s',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '20@s',
      marginBottom: 10,
    },
    subText: {
      fontSize: '14@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      color: '#3B3B48',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bulletPointContainer: {
      marginBottom: 41,
      alignSelf: 'center',
      paddingLeft: direction === 'rtl' ? '35@s' : '30@s',
    },
    bulletPoints: {
      color: '#758DAC',
      alignItems: 'flex-start',
      justifyContent: 'center',
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    bottomContainer: {
      marginTop: '42@s',
      height: '20@s',
      width: width - 60,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    bottomText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: '12@s',
    },
    signUpButton: {
      color: '#03A0E3',
      fontSize: '12@s',
      fontWeight: '700',
      backgroundColor: 'transparent',
    },
    regularButton: {
      marginVertical: 20,
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? '20@s' : undefined,
      right: direction === 'rtl' ? undefined : '20@s',
      position: 'absolute',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
