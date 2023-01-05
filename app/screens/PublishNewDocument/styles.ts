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
    },
    safeAreaView: { alignSelf: 'stretch' },
    gradientTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
      right: 10,
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
      width: '100%',
    },
    topIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
      height: '42@s',
      width: '42@s',
    },

    container1: {
      paddingHorizontal: '30@s',
      marginTop: 135,
      width: '100%',
    },
    profileImgContainer1: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '145@s',
    },
    profileImg1: {
      height: '145@s',
      width: '335@s',
      position: 'absolute',
    },
    profileImg2: {
      height: '50@s',
      width: '34.28@s',
      resizeMode: 'contain',
      // position: 'absolute',
    },

    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '25@s',
    },
    inputTextContainer2: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '17@s',
    },
    neomorphContainer3: {
      marginTop: '20@s',
      width: '315@s',
      alignSelf: 'center',
      paddingHorizontal: '10@s',
    },
    container6: {
      width: '100%',
      height: '123@s',
      paddingHorizontal: '25@s',
      paddingVertical: '16@s',
      fontSize: '14@s',
    },
    inputTextContainer1: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    coinContainer2: {
      height: '19@s',
      borderRadius: '50@s',
      marginTop: 7,
      flexDirection: 'row',
      backgroundColor: '#EBEEF0',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? '20@s' : undefined,
      right: direction === 'rtl' ? undefined : '20@s',
      position: 'absolute',
    },
    coinImage: {
      height: '20@ms',
      width: '20@ms',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
