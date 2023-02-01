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
      zIndex: -10,
    },
    container2: {
      paddingHorizontal: '20@s',
      width: '100%',
      paddingBottom: 49,
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
    neomorphContainer: {
      marginTop: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },

    rectangle2: {
      width: '100%',
      height: '74@s',
      borderRadius: 14,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
    },
    rectangle3: {
      width: '100%',
      height: '160@s',
      borderRadius: '14@s',
      justifyContent: 'flex-start',
      paddingHorizontal: '17@s',
      backgroundColor: '#EBEEF0',
    },
    text: {
      marginLeft: '30@s',
      fontSize: '16@s',
      color: '#2F4868',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      flexDirection: 'row',
    },
    bottomText: {
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
    inputContainer: {
      width: '100%',
      height: '74@s',
    },
    bg: {
      width: '100%',
      height: '74@s',
      position: 'absolute',
      resizeMode: 'stretch',
    },
  });

export default styles;
