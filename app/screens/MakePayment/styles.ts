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
    container2: {
      width: '100%',
      height: '100%',
      backgroundColor: '#EBEEF0',
      marginBottom: '30@s',
      marginTop: '77@s',
    },
    container3: {
      paddingHorizontal: '30@s',
      marginTop: '40@s',
    },
    container4: {
      paddingHorizontal: '30@s',
      marginTop: '20@s',
    },
    container5: {
      paddingHorizontal: '30@s',
      marginTop: '20@s',
    },
    container6: {
      paddingHorizontal: '30@s',
      marginTop: '160@s',
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
    container1: {
      marginTop: '85@s',
      paddingHorizontal: '20@s',
      width: '100%',
      height: '100%',
    },
    rectangle1: {
      height: '80@s',
      borderRadius: 14,
      backgroundColor: '#EBEEF0',
      paddingVertical: '25@s',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '22@s',
      marginBottom: 18,
    },
    row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '22@s',
      marginBottom: 18,
    },
    radioButtonViewContainer: {
      borderRadius: '14@s',
      height: '55@s',
    },
    radioLabel: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '18@s',
      color: '#455157',
    },
    text1: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      fontSize: '16@s',
      color: '#03A0E3',
    },
    text2: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      fontSize: '16@s',
      color: '#03A0E3',
    },
    imageContainer: {
      height: '100%',
      alignItems: 'flex-end',
      marginRight: '25@s',
    },
    cardImage: {
      width: '30@s',
      height: '30@s',
    },
    rectangle2: {
      height: '80@s',
      borderRadius: 14,
      backgroundColor: '#EBEEF0',
      paddingVertical: '25@s',
    },
    rectangle3: {
      height: '80@s',
      borderRadius: 14,
      backgroundColor: '#EBEEF0',
      paddingVertical: '25@s',
    },
    rectangle4: {
      height: '80@s',
      borderRadius: 14,
      backgroundColor: '#EBEEF0',
      paddingHorizontal: '25@s',
      paddingVertical: '25@s',
    },
    button: {
      marginTop: '40@s',
      paddingHorizontal: '30@s',
      backgroundColor: '#EBEEF0',
    },

    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
