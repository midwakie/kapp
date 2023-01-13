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
    gradientTextContainer: {
      width: '126@s',
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
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      marginLeft: '20@s',
    },
    neomorphContainer: {
      marginTop: '30@s',
      marginBottom: '29@s',
    },
    container2: {
      width: '100%',
      height: '100%',
      paddingBottom: '25@s',
      marginTop: '95@s',
      paddingHorizontal: '20@s',
    },
    container4: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '60@s',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
    topImage: {
      width: '50@s',
      height: '50@s',
    },
    topIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '44@s',
      width: '88@s',
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
    searchContainer: {
      backgroundColor: '#EBEEF0',
      height: '44@s',
      width: '44@s',
      borderTopRightRadius: '50@s',
      borderBottomRightRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bubbleContainer: {
      justifyContent: 'space-between',
      width: '100%',
      marginTop: '30@s',
      flexDirection: 'row',
    },
    button: {
      width: '60@s',
      height: '60@s',
      borderRadius: '150@s',
      backgroundColor: '#EBEEF0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button3: {
      borderColor: '#03A0E3',
      borderWidth: 2,
      width: '60@s',
      height: '60@s',
      borderRadius: '150@s',
      backgroundColor: '#EBEEF0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button1: {
      width: '50@s',
      height: '50@s',
    },
    imageStyle: {
      width: '60@s',
      height: '60@s',
      resizeMode: 'contain',
    },
    imageStylePressed: {
      width: '60@s',
      height: '60@s',
      resizeMode: 'contain',
      borderRadius: 2,
      borderColor: '#03A0E3',
    },
    imageStyle1: {
      width: '100%',
      resizeMode: 'stretch',
      height: '140@s',
      position: 'absolute',
      borderRadius: '12@s',
    },
    rectangle2: {
      width: '100%',
      height: '386@s',
      backgroundColor: '#EBEEF0',
      padding: '20@s',
    },
    imageContainer: {
      flexDirection: 'row',
    },
    image1Style: {
      width: '50@s',
      height: '50@s',
    },
    profileName: {
      color: '#2F4868',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
      width: '99@s',
      height: '19@s',
    },
    status: {
      color: '#758DAC',
      fontFamily: 'Nunito',
      fontWeight: '600',
      fontSize: '12@s',
    },
    imageContainer1: {
      marginTop: '15@s',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '140@s',
    },
    headingText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      fontSize: '18@s',
      marginTop: '15@s',
    },
    text: {
      fontSize: '16@ms',
      marginTop: '5@s',
      color: '#758DAC',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    iconContainer: {
      width: '100%',
      marginTop: '16@s',
      flexDirection: 'row',
      alignSelf: 'stretch',
    },
    iconBox: {
      flexDirection: 'row',
      width: '70@s',
      height: '32@s',
    },
    iconBox1: {
      alignSelf: 'center',
    },
    icon: {
      width: '16.87@s',
      height: '14.46@s',
      alignSelf: 'center',
      marginLeft: '10.12@s',
    },
    likeImage: {
      width: '16.87@s',
      height: '14.46@s',
      alignSelf: 'center',
      marginLeft: '10.12@s',
      tintColor: '#EC4D61',
    },
    chatImage: {
      width: '16.87@s',
      height: '14.46@s',
      alignSelf: 'center',
      marginLeft: '10.12@s',
      tintColor: '#03A0E3',
    },
    icon1: {
      width: '17@s',
      height: '10@s',
      alignSelf: 'center',
      marginLeft: '10.12@s',
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
    text3: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@s',
      marginTop: '10@s',
      // marginLeft: '20@s',
      color: '#2F4868',
      // width: '100%',
      height: '16@s',
      alignSelf: 'center',
      // justifyContent: 'center',
    },
    text4: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@s',
      marginTop: '10@s',
      // marginLeft: '20@s',
      // alignSelf: 'center',
      color: '#03A0E3',
      // width: '100%',
      height: '16@s',
      // justifyContent: 'center',
    },
    text2: {
      marginLeft: '15@s',
      alignSelf: 'center',
    },
  });

export default styles;
