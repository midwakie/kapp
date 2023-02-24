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
      paddingHorizontal: '20@s',
    },
    container3: {
      width: '100%',
      paddingVertical: 20,
      backgroundColor: '#EBEEF0',
    },
    container4: {
      flexDirection: 'row',
      marginBottom: 9,
      justifyContent: 'space-between',
      paddingHorizontal: '25@s',
    },
    container5: {
      flexDirection: 'row',
      marginBottom: '15@s',
      paddingLeft: '25@s',
      paddingRight: '19@s',
    },
    container6: {
      flexDirection: 'row',
      marginLeft: '25@s',
      marginBottom: '10@s',
    },
    container7: {
      flexDirection: 'row',
      paddingVertical: '15@s',
      width: '100%',
      backgroundColor: '#EBEEF0',
    },
    container8: {
      width: '40@s',
      height: '40@s',
      borderRadius: '150@s',
      backgroundColor: '#EBEEF0',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    neomorphContainer: {
      marginBottom: '20@s',
    },
    neomorphContainer1: {
      marginTop: '30@s',
      marginBottom: '30@s',
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
      resizeMode: 'contain',
      width: '18@s',
      height: '18@s',
    },
    text1: {
      color: '#03A0E3',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      width: '159@s',
      height: '19@s',
    },
    text2: {
      color: '#455157',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '19@s',
      width: '74@s',
      marginRight: '21@s',
    },
    text3: {
      color: '#758DAC',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      letterSpacing: 0.005,
      width: '100%',
    },
    text4: {
      color: '#EC4D61',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
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
    },
    leftContainer: {
      flex: 1,
      marginLeft: '20@s',
    },
    rightContainer: {
      flex: 4,
      alignSelf: 'center',
    },
  });

export default styles;
