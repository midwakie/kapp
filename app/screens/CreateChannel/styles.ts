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
    safeAreaView: { alignSelf: 'stretch' },
    gradientTextStyle: {
      fontSize: 16,
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      lineHeight: 25,
      textAlign: 'center',
    },
    gradientTextStyle2: {
      fontSize: 24,
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      lineHeight: 33,
      textAlign: 'center',
    },
    gradientTextContainer: {
      width: 111,
      justifyContent: 'center',
      alignItems: 'center',
      height: 22,
      marginBottom: 38,
      marginTop: 50,
      marginLeft: 74,
    },
    gradientTextContainer2: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 33,
      marginBottom: 85,
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
      marginTop: 30,
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
      marginTop: 20,
      marginLeft: 138,
      marginRight: 137,
    },
    imageContainer: {
      marginBottom: 60,
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
    container2: {
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 110,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      marginBottom: 137,
      shadowColor: '#5E5E5E',
      shadowOpacity: 1,
      shadowOffset: { width: 6, height: 10 },
      textShadowRadius: 6,
      elevation: 3,
    },
    container1: {
      paddingHorizontal: 30,
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 38,
      marginTop: 40,
      marginBottom: 32,
      marginLeft: 20,
    },
    bottom: {
      marginTop: 100,
    },
    profileImgContainer: {
      marginLeft: 40,
      height: 100,
      width: 100,
      borderRadius: 100,
      borderWidth: 1,
      alignSelf: 'center',
    },
    profileImg: {
      height: 100,
      width: 100,
      borderRadius: 100,
      alignSelf: 'center',
    },
  });

export default styles;
