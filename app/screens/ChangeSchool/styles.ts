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
    },
    safeAreaView: { alignSelf: 'stretch' },
    container2: {
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: '110@s',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      marginBottom: 137,
      shadowColor: '#5E5E5E',
      shadowOpacity: 1,
      shadowOffset: { width: 6, height: 10 },
      textShadowRadius: 6,
      elevation: 8,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '38@s',
      marginTop: 40,
      marginBottom: 32,
      marginLeft: 20,
    },
    gradientTextContainer: {
      width: '111@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
      marginBottom: 38,
      marginTop: 50,
      marginLeft: 74,
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      lineHeight: 25,
      textAlign: 'center',
    },
    container1: {
      paddingHorizontal: '30@s',
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
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
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20 : undefined,
      right: direction === 'rtl' ? undefined : 20,
      position: 'absolute',
    },
  });

export default styles;
