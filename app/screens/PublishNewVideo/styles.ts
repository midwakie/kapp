import { Dimensions } from 'react-native';
import { s, ScaledSheet } from 'react-native-size-matters';

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
    container2: {
      width: '100%',
      paddingBottom: '142@s',
      marginTop: '25@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
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
      height: '22@s',
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20 : undefined,
      right: direction === 'rtl' ? undefined : 20,
      position: 'absolute',
    },
    neomorphContainer: {
      marginTop: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cancel: {
      width: '20@s',
      height: '20@s',
    },
    rightContainer: {
      width: '42@s',
      height: '42@s',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
    },
    videoContainer: {
      marginBottom: '41@s',
      //   paddingHorizontal: '10@s',
      width: '100%',
      height: '145@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    video: {
      width: '335@s',
      height: '145@s',
      position: 'absolute',
      resizeMode: 'stretch',
    },
    button: {
      width: '46@s',
      height: '46@s',
    },
    inputTextContainer: {
      width: '100%',
      resizeMode: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    descContainer: {
      paddingVertical: '19@s',
      width: '315@s',
      alignSelf: 'center',
      paddingHorizontal: '10@s',
    },
    description: {
      width: '100%',
      height: '144@s',
      paddingHorizontal: '25@s',
      paddingVertical: '16@s',
      fontSize: '14@ms',
    },
    reportContainer: {
      marginTop: '40@s',
      paddingHorizontal: '30@s',
    },
  });

export default styles;
