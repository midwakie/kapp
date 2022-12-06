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
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },
    container2: {
      marginTop: 2,
      width: '100%',
      height: '100%',
    },
    safeView: { alignSelf: 'stretch' },
    topContainer: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      paddingRight: 30,
      marginVertical: 25,
    },
    walkThroughContainer: {
      height: width + 71,
      marginBottom: 63,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    textInputStyle: {
      height: 55,
    },
    buttonContainer: {
      marginTop: 50,
      marginBottom: 20,
      paddingHorizontal: 20,
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    buttonInnerContainer: { width: '45%' },
    buttonStyle: {
      marginTop: 20,
      borderRadius: 25,
    },
    buttonContentStyle: {
      height: 55,
      borderRadius: 20,
    },
    imageStyle: {
      marginTop: 150,
      marginBottom: 30,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
    },
    mainContent: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      marginVertical: 20,
      resizeMode: 'contain',
      height: width - 60,
    },
    title: {
      fontSize: 24,
      color: '#03A0E3',
      fontWeight: '800',
      fontFamily: 'Nunito-Regular',
      lineHeight: 33,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 16,
      color: '#758DAC',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      lineHeight: 22,
      textAlign: 'center',
    },
    paginationContainer: {
      position: 'absolute',
      // bottom: 16,
      left: 16,
      right: 16,
      justifyContent: 'center',
      top: width + 71,
    },
    paginationDots: {
      height: 16,
      margin: 16,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      width: 24,
      height: 24,
      marginHorizontal: 4,
    },
    skipButtonText: {
      fontSize: 18,
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      fontWeight: '400',
      color: '#03A0E3',
      backgroundColor: 'transparent',
    },
    skipButtonContainer: {
      height: 50,
      paddingHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  });

export default styles;
