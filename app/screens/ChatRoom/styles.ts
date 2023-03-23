import { Dimensions } from 'react-native';
import { ms, scale, ScaledSheet, s } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '3EBEEF0',
    },
    safeAreaView: { alignSelf: 'stretch' },
    container2: {
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '38@s',
      marginLeft: '20@s',
    },
    topImage: {
      width: '50@s',
      height: '50@s',
    },
    gradientTextContainer: {
      width: '100%',
      alignItems: 'center',
      height: '33@s',
      flexDirection: 'row',
    },
    gradientTextStyle: {
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      marginLeft: '20@s',
      textAlign: 'justify',
    },
    titleBarContainer: {
      position: 'absolute',
      width: '100%',
    },
    messageContainer: {
      backgroundColor: '#EBEEF0',
      height: '100%',
      paddingTop: '100@s',
    },
    neumorphContainer1: {
      height: '60@s',
      width: '100%',
      borderRadius: 12,
      backgroundColor: '#EBEEF0',
      justifyContent: 'center',
      bottom: '61@s',
    },
    neomorphContainer2: {
      height: '40@s',
      alignItems: 'flex-start',
      marginHorizontal: '58@s',
    },
    sendIcon: {
      width: '24@s',
      height: '20.57@s',
      position: 'absolute',
      left: '-40@s',
      top: '10@s',
    },
    addIcon: {
      width: '21@s',
      height: '21@s',
      position: 'absolute',
      marginLeft: '20@s',
      marginTop: '10@s',
      tintColor: '#EC4D61',
    },
    icon: {
      width: '20@s',
      height: '20@s',
    },
    rightBubble: {
      backgroundColor: '#03A0E3',
      borderTopEndRadius: 12,
      borderBottomEndRadius: 0,
      marginTop: '36@s',
    },
    leftBubble: {
      backgroundColor: '#DEE2E5',
      borderBottomLeftRadius: 0,
      marginTop: '36@s',
    },
    menu: {
      height: '16@s',
      width: '4@s',
      resizeMode: 'contain',
    },
    optionTitleStyle: {
      color: '#758DAC',
      fontSize: '14@s',
    },
    menuImage: {
      height: '20@s',
      width: '20@s',
      resizeMode: 'contain',
    },
    messageWidth: { width: '100%' },
    footerHeight: { height: '102@s' },
    modalContainer: {
      borderWidth: 2,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(98,98,98,0.5)',
    },
    textView: {
      width: '238@s',
      backgroundColor: '#03A0E3',
      height: '44@s',
      marginBottom: '102@s',
      marginLeft: '117@s',
    },
    modalView: {
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: '15@s',
      backgroundColor: '#EBEEF0',
      height: '237@s',
      width: '176@s',
      marginBottom: '16@s',
      marginLeft: '117@s',
    },
    optionContainer: { flexDirection: 'column' },
    optionText: {
      fontSize: '14@s',
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
    },
    optionDelete: {
      fontSize: '14@s',
      color: '#FD4449',
      fontFamily: 'Nunito-Regular',
    },
    messageOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 25,
      marginVertical: 15,
    },
  });

export default styles;
