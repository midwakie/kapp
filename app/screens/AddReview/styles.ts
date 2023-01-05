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
      width: '97@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
    },
    gradientTextStyle: {
      width: '100%',
      height: '22@s',
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    container2: {
      marginTop: 31.3,
      width: '100%',
      height: '100%',
    },
    container3: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    neomorphContainer: {
      marginTop: 25,
      marginBottom: 45,
      paddingHorizontal: '123@s',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    neomorphContainer2: {
      marginBottom: 47,
      paddingHorizontal: '67@s',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    neomorphContainer3: {
      marginBottom: 40,
      paddingHorizontal: '30@s',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '210@s',
      height: '190.94@s',
    },
    container4: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    container5: {
      width: '100%',
      height: '48@s',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },
    container6: {
      width: '100%',
      height: '144@s',
      marginHorizontal: '20@s',
      marginVertical: '20@s',
      fontSize: '14@s',
    },
    text1: {
      color: '#03A0E3',
      fontSize: '24@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      marginTop: 26,
    },
    text2: {
      color: '#3B3B48',
      fontSize: '16@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      marginTop: 12,
    },
    button: {
      marginBottom: 55,
      // justifyContent: 'center',
      // alignItems: 'center',
      paddingHorizontal: '30@s',
    },
    buttonText: {
      fontWeight: '800',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      textAlign: 'center',
      height: '40@s',
    },
  });

export default styles;
