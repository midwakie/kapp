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
      width: 38,
      marginLeft: '20@s',
    },
    container2: {
      marginTop: '115@s',
      paddingHorizontal: '30@s',
      width: '100%',
      height: '100%',
      paddingBottom: '25@s',
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20@s',
    },
    inputTextContainer1: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '40@s',
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
      height: '210@ms',
      borderRadius: 14,
      paddingHorizontal: '25@s',
      paddingVertical: '25@s',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '22@s',
      marginBottom: '18@s',
    },
    row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '36@s',
      height: '22@s',
    },
    row2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '22@s',
    },
    text1: {
      color: '#455157',
      fontSize: '16@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    text2: {
      color: '#03A0E3',
      fontSize: '16@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
