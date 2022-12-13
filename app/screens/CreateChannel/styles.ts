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
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
      adjustsFontSizeToFit: true,
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
      marginTop: 60,
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
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      width: '100%',
    },
    imageContainer2: { marginTop: -38, height: 30, width: 30, marginLeft: 68 },
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
      height: '110@ms',
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
      shadowColor: 'rgba(94, 94, 94, 0.25)',
      shadowOpacity: 1,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      elevation: 20,
    },
    container1: {
      // top: '170@s',
      paddingHorizontal: 30,
      marginTop: 60,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
      marginBottom: 30,
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    bottom: {
      marginTop: 60,
    },
    profileImgContainer: {
      marginLeft: 137,
      marginRight: 138,
      height: 130,
      width: 130,
      borderRadius: 130,
      borderWidth: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      borderColor: '#FECE32',
    },
    profileImg: {
      height: 130,
      width: 130,
      borderRadius: 130,
      alignSelf: 'center',
    },
  });

export default styles;
