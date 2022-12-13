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
      top: '170@s',
      paddingHorizontal: 30,
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
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
      borderColor: '#FECE32',
    },
    profileImg: {
      height: 100,
      width: 100,
      borderRadius: 100,
      alignSelf: 'center',
    },
  });

export default styles;
