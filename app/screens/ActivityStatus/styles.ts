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
    container2: {
      paddingHorizontal: '20@s',
      width: '100%',
      paddingBottom: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '40@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    labelTextContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      marginBottom: 20,
      width: width - 60,
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
      adjustsFontSizeToFit: true,
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
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
    inputContainer: {
      width: width - 60,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },
    insidetext: {
      color: '#03A0E3',
      fontWeight: '600',
      fontSize: 16,
      fontFamily: 'Nunito-Regular',
      left: 65,
      marginTop: -75,
      // letterSpacing: 0.75,
      lineHeight: 18,
      alignSelf: 'auto',
    },
    saveButton: {
      color: '#03A0E3',
      fontSize: 12,
      fontWeight: '700',
      backgroundColor: 'transparent',
      fontFamily: 'Nunito-Regular',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    rectangle: {
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#FDFDFD',
      width: '100%',
      height: '110@s',
      backgroundColor: '#EBEEF0',
      elevation: '20@s',
      // paddingRight: 10,
      // marginTop: -2,
      // marginStart: ,
      borderBottomEndRadius: 25,
      borderBottomLeftRadius: 25,
      justifyContent: 'center',
    },
    stats: {
      // width: '100%',
      height: 38,
      left: 150,
      right: 150,
      // top: 50,
      fontSize: 16,
      // justifyContent: 'center',
      fontFamily: 'Nunito-Regular',
      fontStyle: 'normal',
      fontWeight: '700',
    },
    rectangle2: {
      width: width - s(40),
      height: '236@s',
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rectangle3: {
      width: '100%',
      height: 120,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: '#FDFDFD',
      // shadowRadius: 14,
      marginTop: 31,
      // justifyContent: 'center',
      backgroundColor: '#EBEEF0',
      elevation: 10,
    },
    rectangle4: {
      width: '100%',
      height: 120,
      borderWidth: 1,
      borderColor: '#FDFDFD',
      borderRadius: 14,
      marginTop: 20,
      backgroundColor: '#EBEEF0',
      elevation: 10,
      // left: 20,
      // shadowRadius: 14,
      // justifyContent: 'center',
    },
    image: {
      width: '80%',
      // height: '80%',
      // width: 292.73,
      height: 140.48,
      // left: 30,
      top: 140,
      alignSelf: 'auto',
    },
    image1: {
      width: '80%',
      // height: '80%',
      // width: 292.73,
      height: 140.48,
      // left: 30,
      // bottom: 1,
    },
    image2: {
      width: '80%',
      // width: 292.73,
      height: 140.48,
      // height: '70%',
      top: -140,
    },
    Toptext: {
      // marginLeft: 120,
      // marginTop: 50,
      // marginLeft: 120,
      fontSize: '14@s',
      color: '#03A0E3',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      backgroundColors: ['03A0E3', '#0D93CD'],
      textAlign: 'center',
    },
    text2: {
      fontSize: '10@s',
      color: '#03A0E3',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    text: {
      marginLeft: 120,
      marginTop: 50,
      fontSize: 14,
      color: '#323A3D',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      lineHeight: 19,
      textAlign: 'center',
    },
    elipse1: {
      width: 89.27,
      height: 89.27,
      left: 20,
      marginTop: -50,
      // marginVertical: -24,
      marginHorizontal: 10,
      resizeMode: 'contain',
      // height: width / 2,
      // width: width / 5,
    },
    elipse2: {
      width: 83.27,
      height: 89.27,
      left: 36,
      marginTop: -75,
      // marginVertical: -24,
      resizeMode: 'contain',
      // height: width / 2,
      // width: width / 5,
    },
    elipse3: {
      width: 83.27,
      height: 89.27,
      left: 38,
      marginTop: -81,
      // marginVertical: -24,
      resizeMode: 'contain',
      // height: width / 2,
      // width: width / 5,
    },
    elipse4: {
      width: 83.27,
      height: 89.27,
      left: 38,
      marginTop: -90,
      // marginVertical: -24,
      resizeMode: 'contain',
    },
    box: {
      width: '97@s',
      height: '29@s',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
    },
    lastWeekDropdown: { position: 'absolute', top: 15, right: 20 },
  });

export default styles;
