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
    neomorphContainer: {
      marginTop: '40@s',
      paddingHorizontal: '20@s',
    },
    neomorphContainer2: {
      marginTop: '40@s',
      paddingHorizontal: '30@s',
    },
    container2: {
      width: '100%',
      height: '100%',
      paddingBottom: '25@s',
      marginTop: '85@s',
    },
    container3: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '212@s',
    },
    text: {
      color: '#455157',
      fontSize: '24@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      marginTop: '137@s',
    },
    buttonText: {
      fontSize: '18@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      color: '#758DAC',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20@s',
      marginTop: '85@s',
    },
  });

export default styles;
