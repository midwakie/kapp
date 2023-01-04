import { Dimensions, Platform } from 'react-native';
import { s, scale, ScaledSheet } from 'react-native-size-matters';

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
      // paddingHorizontal: '20@s',
      width: '100%',
      paddingBottom: '33@s',
      justifyContent: 'center',
      // alignItems: 'center',
      // marginTop: '81@s',
    },
    midContainer: {
      paddingHorizontal: '20@s',
      width: '100%',
      marginTop: '81@s',
      justifyContent: 'center',
    },
    bottomContainer: {
      width: '100%',
      marginTop: '55@s',
      paddingHorizontal: '20@s',
      justifyContent: 'center',
    },
    commentContainer: {
      width: '100%',
      marginTop: '7@s',
      justifyContent: 'center',
    },
    container3: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '33@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '38@s',
      height: '38@s',
      marginLeft: '19@s',
      marginTop: '40@s',
      alignSelf: 'flex-start',
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
    text1: {
      fontSize: '16@s',
      fontWeight: '800',
      fontFamily: 'Nunito-Regular',
      alignSelf: 'flex-start',
      flexDirection: 'row',
      marginLeft: '5@s',
    },
    boxText: {
      fontSize: '12@ms',
      fontWeight: '800',
      marginTop: '9@s',
      fontFamily: 'Nunito-Regular',
      alignSelf: 'center',
      flexDirection: 'row',
    },
    text2: {
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      textAlign: 'justify',
      marginTop: '25@s',
      color: '#758DAC',
      marginLeft: '5@s',
    },

    inputText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@s',
      marginLeft: '10@s',
      flexDirection: 'row',
      flex: 1,
      height: '42@s',
      // paddingHorizontal: '20@s',
    },
    imageContainer: {
      width: '100%',
      alignItems: 'center',
    },
    image1Style: {
      width: '100%',
      height: '231@s',
      resizeMode: 'stretch',
      alignSelf: 'flex-start',
      position: 'absolute',
    },
    image2Style: {
      width: '100@s',
      height: '100@s',
      resizeMode: 'contain',
      marginTop: '66@s',
    },
    image3Style: {
      width: '36@s',
      height: '36@s',
      alignSelf: 'flex-start',
    },
    profileName: {
      color: '#2F4868',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
      marginLeft: '15@s',
    },
    status: {
      color: '#758DAC',
      fontFamily: 'Nunito',
      fontWeight: '600',
      fontSize: '12@s',
      position: 'absolute',
      marginLeft: '52@s',
      marginTop: '20@s',
      alignSelf: 'flex-start',
    },
    box: {
      width: '100@s',
      height: '35@s',
      backgroundColor: '#F0374E',
      alignSelf: 'center',
    },
    iconContainer: {
      width: '100%',
      marginTop: '37@s',
    },
    icon: {
      width: '24@s',
      height: '21@s',
      marginLeft: '25@s',
    },
    iconText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
      alignSelf: 'center',
      marginLeft: '8@s',
      color: '#758DAC',
      flex: 1,
    },
    iconBox: {
      flexDirection: 'row',
      width: '100%',
      height: '60@s',
      backgroundColor: '#EBEEF0',
      alignItems: 'center',
    },
    arrow: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '30@s',
      height: '30@s',
      right: '25@s',
      position: 'absolute',
    },
    horizontalLine: {
      height: '1@s',
      width: '100%',
      backgroundColor: '#758DAC',
    },
    menu: {
      height: '16@s',
      width: '4@s',
      resizeMode: 'contain',
    },
  });

export default styles;
