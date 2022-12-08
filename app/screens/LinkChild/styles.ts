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
      backgroundColor: '#E5E5E5',
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
      fontSize: 18,
      fontFamily: 'Nunito-Regular',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 25,
      textAlign: 'center',
      letterSpacing: 0.72,
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      marginBottom: 41,
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
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: 140,
      height: 140,
    },
    imageContainer: {
      marginBottom: 65,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomContainer: {
      height: 19,
      width: width - 21,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 40,
      marginBottom: 40,
    },
    bottomText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: 14,
      fontFamily: 'Nunito',
      fontStyle: 'normal',
      lineHeight: 19,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      marginVertical: 25,
      marginBottom: 42,
    },
  });

export default styles;
