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
      zIndex: -10,
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
      width: 38,
      marginLeft: '20@s',
    },
    container2: {
      marginTop: 40,
      paddingHorizontal: '30@s',
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    inputTextContainer1: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? '20@s' : undefined,
      right: direction === 'rtl' ? undefined : '20@s',
      position: 'absolute',
    },
    container3: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '210@s',
      borderRadius: 14,
      marginRight: 30,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      height: '22@s',
      fontWeight: '800',
    },
    row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      height: '50@s',
      marginLeft: 40,
      width: 200,
      radius: 50,
    },
    row2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 35,
      width: 200,
      marginLeft: 40,

      height: '22@s',
    },
    text1: {
      color: '#455157',
      fontSize: '16@s',
      fontWeight: '800',
      fontFamily: 'Nunito-Regular',
      marginLeft: 25,
    },
    text12: {
      color: '#758DAC,#2F4868',
      fontSize: '16@s',
      fontWeight: '800',
      fontFamily: 'Nunito-Regular',
      marginLeft: 25,
      lineHeight: 22,
    },
    text2: {
      color: '#455157',
      fontSize: '16@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      marginRight: 25,
    },
    text123: {
      color: '#758DAC',
      fontSize: '18@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',

      // marginRight: 40,
      // lineHeight: 25,
      width: '100%',
      marginLeft: 25,
    },
    text3: {
      color: '#03A0E3',
      fontSize: '16@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      marginLeft: 25,
    },
    text4: {
      color: '#03A0E3',
      fontSize: '16@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      marginRight: 25,
    },
    text: {
      textAlign: 'center',
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      width: '100%',
    },
    bottom: {
      marginTop: 60,
    },
    lastWeekDropdown: {
      position: 'absolute',
      justifyContent: 'space-between',
      // right: 60,
      marginLeft: 10,
      width: 103,
    },
    lastWeekDropdown2: {
      position: 'absolute',
      justifyContent: 'space-between',
      marginLeft: 150,
      marginRight: 73,
      width: 103,
    },

    buttonInnerContainer: { width: '45%', color: '#758DAC' },
    buttonInnerContainer2: { width: '45%', color: '#758DAC' },
    buttonContainer: {
      marginBottom: '20@s',
      paddingHorizontal: 20,
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    box: {
      // width: '103@s',
      height: '50@s',
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
    },
  });

export default styles;
