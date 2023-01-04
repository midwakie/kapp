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
    gradientTextStyle3: {
      width: '100%',
      height: '25@s',
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      letterSpacing: 0.01,
      marginBottom: 5,
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    container2: {
      marginTop: 70,
      width: '100%',
      height: '100%',
    },
    container3: {
      width: '100%',
      height: '140@ms',
      flexDirection: 'row',
      marginBottom: 39,
    },
    neomorphContainer: {
      marginLeft: 40,
    },
    neomorphContainer2: {
      paddingHorizontal: '20@s',
      marginBottom: 20,
    },
    imageContainer: {
      width: '100%',
      height: '140@ms',
      borderRadius: 12,
    },
    imageContainer4: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 78,
      height: 78,
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '110@s',
      height: '140@s',
    },
    imageStyle2: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '90@s',
      height: '90@s',
      position: 'absolute',
    },
    imageStyle3: {
      resizeMode: 'contain',
      width: '30@s',
      height: '30@s',
      marginTop: 10,
      marginLeft: 10,
    },
    imageStyle1: {
      width: 16.5,
      height: 22,
      marginLeft: 22,
    },
    imageStyle4: {
      width: 16.5,
      height: 22,
      marginLeft: 22,
      tintColor: 'red',
    },
    container4: {
      width: '100%',
      height: '140@ms',
      paddingHorizontal: 25,
    },
    container5: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '156@ms',
      borderRadius: 14,
    },
    container6: {
      paddingHorizontal: 15,
      paddingVertical: 15,
    },
    container7: {
      flexDirection: 'row',
      marginBottom: 3.26,
    },
    text1: {
      color: '#758DAC',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      marginBottom: 10.26,
    },
    text2: {
      color: '#03A0E3',
      fontSize: '22@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      height: '30@s',
      width: '100%',
      marginBottom: 9,
    },
    text3: {
      color: '#03A0E3',
      fontSize: '12@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      width: '100%',
    },
    text4: {
      color: '#03A0E3',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      width: '100%',
      marginLeft: 20,
      marginBottom: 35,
    },
    text5: {
      color: '#2F4868',
      fontSize: '18@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '25@s',
      width: '99@s',
      flex: 1,
    },
    text6: {
      color: '#03A0E3',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      width: '76@s',
    },
    text7: {
      flex: 1,
      color: '#758DAC',
      fontSize: '16@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '72@s',
      width: '207@s',
      marginTop: 12.26,
    },
    starRatingContainer: {
      marginBottom: 20.26,
      flexDirection: 'row',
    },
  });

export default styles;
