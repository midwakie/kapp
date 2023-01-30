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
      marginTop: '40@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    leftContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      // position: 'absolute',
      // width: 38,
    },
    middleComponent: {
      justifyContent: 'center',
      alignItems: 'center',
      // height: '22@s',
    },
    right: {
      width: '88@s',
      height: '44@s',
      flexDirection: 'row',
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
    topIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '44@s',
      width: '88@s',
    },

    searchContainer: {
      backgroundColor: '#EBEEF0',
      height: '44@s',
      width: '44@s',
      borderTopRightRadius: '50@s',
      borderBottomRightRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuContainer: {
      height: '44@s',
      width: '44@s',
      backgroundColor: '#EBEEF0',
      borderTopLeftRadius: '50@s',
      borderBottomLeftRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconImageStyle: {
      width: '20@s',
      height: '20@s',
    },
    neomorphContainer: {
      marginTop: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },

    rectangle2: {
      width: '100%',
      backgroundColor: '#EBEEF0',
      padding: '20@s',
    },
    text: {
      fontSize: '16@ms',
      marginTop: '5@s',
      color: '#758DAC',
      fontWeight: '600',
      fontFamily: 'Nunito',
      flexDirection: 'row',
    },
    imageContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    topImage: {
      width: '50@s',
      height: '50@s',
    },
    image1Style: {
      width: '50@s',
      height: '50@s',
    },
    imageContainer1: {
      width: '100%',
      alignItems: 'center',
      marginTop: '15@s',
    },
    imageButtonContainer1: {
      width: '100%',
      height: '130@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageStyle: {
      width: '100%',
      resizeMode: 'stretch',
      height: '130@s',
      position: 'absolute',
    },
    button: {
      width: '46@s',
      height: '46@s',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      // position: 'absolute',
    },
    image: {
      width: '49@s',
      height: '49@s',
    },
    profileName: {
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
      marginLeft: '15@s',
      // marginTop: '-17@s',
      // marginRight: '155@s',
      flexDirection: 'row',
    },
    headingText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      fontSize: '18@s',
      flexDirection: 'row',
      marginTop: '20@s',
    },
    iconContainer: {
      width: '100%',
      marginTop: '16@s',
      flexDirection: 'row',
      alignSelf: 'stretch',
    },
    topIcon: {
      width: '20@s',
      height: '16@s',
      marginTop: '13@s',
    },
    icon: {
      width: '16.87@s',
      height: '14.46@s',
      marginTop: '8@s',
      marginLeft: '10@s',
    },
    iconText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
      marginTop: '6@s',
      marginLeft: '8@s',
      color: '#758DAC',
      width: '26@s',
      height: '19@s',
    },
    iconBox: {
      flexDirection: 'row',
      width: '70@s',
      height: '32@s',
      color: '#03A0E3',
      backgroundColor: '#EBEEF0',
    },
  });

export default styles;
