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
      backgroundColor: '#EBEEF0',
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
      fontSize: 24,
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      lineHeight: 35,
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 33,
      marginBottom: 60,
      marginTop: 40,
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    labelTextContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      marginBottom: 20,
      width: width - 60,
    },
    forgotPasswordContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 39,
    },
    forgotPassword: {
      color: '#FE4C3E',
      textAlign: 'right',
      fontSize: 12,
      fontWeight: '600',
      backgroundColor: 'transparent',
    },
    rightComponent: { right: 20, position: 'absolute' },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'cover',
      width: (width - 60) / 2.5,
      height: (width - 60) / 2.5,
    },
    imageContainer: {
      width: (width - 60) / 2.5,
      height: (width - 60) / 2.5,
      borderRadius: (width - 60) / 2.5,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#EBEEF0',
    },
    neomorphContainer: {
      marginTop: 19,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: width - 60,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },
    socialContainer: {
      width: width - 60,
      height: 50,
      flexDirection: 'row',
      marginTop: 40,
      marginBottom: 30,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    socialButtonContainer: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialButtonStyle: {
      width: 23,
      height: 23,
      resizeMode: 'contain',
    },
    bottomContainer: {
      height: 20,
      width: width - 60,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    bottomText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: 12,
    },
    agreeDisagreeText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: 12,
    },
    agreeDisagreeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 22,
    },
    signUpButton: {
      color: '#03A0E3',
      fontSize: 12,
      fontWeight: '700',
      backgroundColor: 'transparent',
    },
    signUpButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 20,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      // paddingRight: 30,
      marginTop: 25,
    },
    skipButtonText: {
      fontSize: 18,
      // fontFamily: 'Gill Sans',
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
    profilePicture: {
      height: 140,
      width: 140,
      borderRadius: 200 / 2,
      //  backgroundColor:'white',
    },
    radioButtonContainer: {
      // borderRadius: 50,
      // height:50,
      width: '100%',
      marginBottom: 21,
      // flexDirection:'row',
    },
    touchableOpacity: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      height: 65,
      width: '100%',
    },
    regularButton: {
      marginTop: 40,
    },
  });

export default styles;
