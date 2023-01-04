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
      marginTop: 30,
      width: '100%',
      height: '100%',
      paddingHorizontal: 20,
    },
    container3: {
      width: '100%',
      height: '146@ms',
      paddingVertical: 20,
    },
    container4: {
      flexDirection: 'row',
      marginBottom: 9,
      justifyContent: 'space-between',
    },
    container5: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    container6: {
      flexDirection: 'row',
      marginLeft: 25,
    },
    container7: {
      flexDirection: 'row',
      paddingVertical: 15,
      width: '100%',
      height: '70@ms',
    },
    container8: {
      width: '40@s',
      height: '40@s',
      borderRadius: 150,
      backgroundColor: '#EBEEF0',
    },
    neomorphContainer: {
      marginBottom: 20,
    },
    neomorphContainer1: {
      marginTop: 30,
      marginBottom: 30,
    },
    neomorphContainer2: {
      width: '40@s',
      height: '40@s',
    },
    imageContainer: {
      width: '100%',
      height: '25@s',
      flexDirection: 'row',
    },
    imageStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      resizeMode: 'contain',
      width: '18@s',
      height: '18@s',
      marginTop: 12,
    },
    text1: {
      color: '#03A0E3',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      width: '159@s',
      height: '19@s',
      flex: 1,
      marginLeft: 25,
    },
    text2: {
      color: '#455157',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '19@s',
      width: '74@s',
      marginRight: 46,
    },
    text3: {
      flex: 1,
      color: '#758DAC',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '38@s',
      width: '291@s',
      marginLeft: 25,
    },
    text4: {
      color: '#EC4D61',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      marginLeft: 25,
      width: '175@s',
      height: '19@s',
      flex: 1,
    },
    text6: {
      color: '#84BD47',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      width: '103@s',
      height: '19@s',
      marginLeft: 25,
    },
    text8: {
      color: '#758DAC',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '19@s',
      width: '170@s',
      // alignSelf: 'center',
      // marginLeft: 20,
    },
    interestIcon1: {
      flexDirection: 'row',
      height: '25@s',
      width: '25@s',
    },
    interestIcons: {
      height: '25@s',
      width: '25@s',
      marginLeft: '-9@s',
      alignItems: 'center',
      overflow: 'hidden',
    },
    imageRound: { width: '100%', height: '100%', resizeMode: 'cover' },
    plusFour: {
      position: 'absolute',
      alignSelf: 'center',
      marginTop: 4,
      color: 'white',
      // resizeMode: 'contain',
      // width: '14@s',
      // height: '14@s',
    },
    leftContainer: {
      flex: 1,
      marginLeft: 20,
    },
    rightContainer: {
      flex: 4,
      alignSelf: 'center',
    },
  });

export default styles;
