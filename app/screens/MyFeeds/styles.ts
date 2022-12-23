import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
      paddingHorizontal: '20@s',
      width: '100%',
      paddingBottom: 49,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '40@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    leftContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      // width: 38,
      marginTop: '80@s',
      marginLeft: '20@s',
    },
    middlecomponent: {
      // width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',

    },
    right: {
      width: '80@s',
      height: '40@s',
      flexDirection: 'row',
      // alignItems: 'center',
      justifyContent: 'center',
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

    rectangle2: {
      width: width - s(40),
      height: '381@s',
      borderRadius: 14,
      justifyContent: 'flex-start',
      // alignItems: 'center',
      backgroundColor: '#EBEEF0',
      // flexDirection: 'row',
      // textAlign: 'flex-start',
    },
    rectangle3: {
      width: width - s(40),
      height: '160@s',
      borderRadius: '14@s',
      // marginTop: '31@ms',
      justifyContent: 'flex-start',
      // alignItems: 'center',
      paddingHorizontal: '17@s',
      backgroundColor: '#EBEEF0',
    },
    text: {
      marginLeft: '20@s',
      fontSize: '16@s',
      marginTop: '5@s',
      color: '#758DAC',
      fontWeight: '600',
      fontFamily: 'Nunito',
      lineHeight: '23@s',
    },
    bottomtext: {
      marginLeft: '10@s',
      fontSize: '16@s',
      color: '#2F4868',
      fontWeight: '600',
      marginTop: '26@s',
      fontFamily: 'Nunito-Regular',
      flexDirection: 'row',
    },

    inputText: {
      height: '74@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
      marginLeft: '25@s',
      paddingBottom: '41@s',
    },
    imagecontainer: {
      paddingTop: '20@s',
      // justifyContent: 'center',
      flexDirection: 'row',
    },
    image1Style: {
      width: '50@s',
      height: '50@s',
      marginLeft: '20@s',
    },
    imageStyle: {
      width: width - s(80),
      justifyContent: 'center',
      resizeMode: 'contain',
      height: '130@s',
      marginLeft: '20@s',
      marginTop: '15@s',
    },
    profilename: {
      color: '#2F4868',
      fontFamily: 'Nunito',
      fontWeight: '600',
      fontSize: '14@s',
      marginLeft: '15@s',
      alignSelf: 'center',
      // marginTop: '29@s',
    },
    status: {
      color: '#758DAC',
      fontFamily: 'Nunito',
      fontWeight: '600',
      fontSize: '12@s',
      marginLeft: '85@s',
      // alignSelf: 'center',
      marginTop: '-17@s',
      // paddingBottom: 22,
    },
    headingtext: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      fontSize: '18@s',
      flexDirection: 'row',
      lineHeight: '25@s',
      marginTop: '20@s',
      marginLeft: '20@s',
    },
    iconcontainer: {
      marginTop: '16@s',
      flexDirection: 'row',
      marginLeft: '20@s',
      // resizeMode: 'contain',
    },
    topicon: {
      width: '20@s',
      height: '16@s',
      // resizeMode: 'contain',
      marginTop: '13@s',
      // position: 'absolute',
    },
    icon: {
      width: 16.87,
      height: 14.46,
      marginTop: '8@s',
      marginLeft: '10@s',
      // backgroundColor: '#C1DBE7',
    },
    icontext: {
      // height: '19@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
      marginTop: '6@s',
      // alignSelf: 'flex-start',
      marginLeft: '8@s',
      color: '#758DAC',
      width: '26@s',
      height: '19@s',
    },
    iconbox: {
      // alignItems: 'center',
      // justifyContent: 'center',
      flexDirection: 'row',
      width: '70@s',
      height: '32@s',
      color: '#03A0E3',
    },
  });

export default styles;
