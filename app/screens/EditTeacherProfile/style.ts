import { Dimensions, StyleSheet } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';

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
    container2: {
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 20,
      marginTop: '85@s',
    },
    safeAreaView: { alignSelf: 'stretch' },

    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontStyle: 'normal',
      fontWeight: '700',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 20,
    },
    inputTextContainer1: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    inputTextContainer2: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    profileImgContainer: {
      marginTop: 60,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    imageContainer2: {
      height: '30@s',
      width: '30@s',
      position: 'absolute',
      bottom: '12@s',
      right: '12@s',
    },
    imageRound: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20.33 : undefined,
      right: direction === 'rtl' ? undefined : 20.33,
      position: 'absolute',
    },
    profileImg: {
      height: '130@s',
      width: '130@s',
      borderRadius: '130@s',
      alignSelf: 'center',
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: 100,
      height: 100,
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
      width: 50,
    },
    // imageContainer2: { marginTop: -38, height: 30, width: 30, marginLeft: 68 },
    neomorphContainer: {
      marginTop: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: width - 60,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DADEE0',
    },
    radioButtonContainer: {
      width: '100%',
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },

    radioButtonViewContainer: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      height: '65@ms0.75',
      width: '100%',
    },

    touchableOpacity: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      height: 65,
      width: '100%',
    },
    regularContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    coinContainer2: {
      width: 102,
      height: 40,
      borderRadius: 50,
      flexDirection: 'row',
    },
    coinImage: {
      marginTop: 7,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 12,
      height: 26,
      width: 26,
    },
    coinText: {
      fontFamily: 'Nunito-Regular',
      fontSize: 16,
      fontWeight: '600',
      width: 30,
      color: '#455157',
      marginTop: 9,
      marginLeft: 12,
    },
    coinContainer1: {
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      height: 45,
      marginTop: 22,
      paddingBottom: 5,
    },
    schoolInputTextContainer: {
      width: width - scale(60),
      height: '50@s',
      borderRadius: '50@s',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      paddingHorizontal: '25@s',
    },
    marginView: { marginTop: 20 },

    interestContainer: {
      width: '100%',
      height: 86,
      borderRadius: 12,
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
    },
    schoolText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
      color: '#455157',
    },
    changeText1: {
      color: '#03A0E3',
      fontFamily:'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
    },
    interestText: {
      color: '#455157',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: 14,
      paddingLeft: 25,
      marginTop: 10,
    },
    changeText2: {
      color: '#03A0E3',
      width: 47,
      lineHeight: 16.2,
      fontWeight: '600',
      marginTop: 47,
      marginLeft: 102,
    },
    regularButtonContainer: {
      width: width - scale(60),
      marginTop: 50,
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
