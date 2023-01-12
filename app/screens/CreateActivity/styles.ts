import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width - 60;

const styles = (direction: string) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#EBEEF0',
      marginTop: '80@s',
    },
    safeAreaView: {
      alignSelf: 'stretch',
    },
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
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    inputTextContainerOne: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15@s',
    },
    inputTextContainerTwo: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '25@s',
    },
    bg: {
      width: width,
      height: '50@s',
      position: 'absolute',
      resizeMode: 'contain',
    },
    inputTextContainerThree: {
      // marginTop: '20@s',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '30@s',
    },
    inputTextContainerFour: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15@s',
    },
    agreeDisagreeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20@s',
      width: width,
    },
    agreeDisagreeText: {
      color: '#2F4868',
      fontWeight: '600',
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
    },
    datePickerText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
    },
    datePickerContainer: {
      width: width - 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
