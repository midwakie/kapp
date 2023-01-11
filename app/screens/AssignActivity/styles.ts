import { Dimensions } from 'react-native';
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
      width: '100%',
      paddingBottom: '42@s',
      marginTop: '40@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    gradientTextContainer: {
      width: '100%',
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
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20 : undefined,
      right: direction === 'rtl' ? undefined : 20,
      position: 'absolute',
    },
    done: {
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      fontWeight: '700',
      color: '#03A0E3',
      backgroundColor: 'transparent',
    },
    rightContainer: {
      width: '35@s',
      height: '19@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20@s',
    },
    searchIcon: {
      right: '20@s',
    },
    assignContainer: {
      color: '#EBEEF0',
      width: '107@s',
      height: '40@s',
      alignSelf: 'flex-end',
      alignItems: 'flex-end',
      justifyContent: 'center',
      right: '20@s',
    },
    assignText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@ms',
      color: '#03A0E3',
      textAlign: 'center',
      fontWeight: '700',
    },
    rectangle3: {
      width: '100%',
      height: '65@s',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
    },
    rowContainer: {
      width: '100%',
      paddingHorizontal: '20@s',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    row: { flexDirection: 'row' },
    button: {
      width: '46@s',
      height: '46@s',
    },
    imageStyle: {
      width: '40@s',
      height: '40@s',
    },
    textContainer: {
      flex: 1,
      left: '15@s',
    },
    name: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      color: '#323A3D',
      textAlign: 'justify',
      fontWeight: '600',
    },
    text: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      color: '#758DAC',
      textAlign: 'justify',
      fontWeight: '600',
    },
    neomorphMargin: { margin: '20@ms' },
    neomorphContainer: {
      // margin: 20,
      width: '100%',
      paddingHorizontal: '20@s',
      marginTop: '20@s',
      // paddingVertical: '20',
    },
  });

export default styles;
