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
    container2: {
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 20,
      paddingHorizontal: '30@s',
    },
    safeAreaView: { alignSelf: 'stretch' },

    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '60@s',
    },
    inputTextContainer1: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    inputTextContainer2: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20.33 : undefined,
      right: direction === 'rtl' ? undefined : 20.33,
      position: 'absolute',
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '60@s',
      width: '100@s',
      height: '100@s',
    },
    imageContainer2: {
      height: '30@s',
      width: '30@s',
      position: 'absolute',
      bottom: '2@s',
      right: '5@s',
    },
    regularContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    marginView: {
      marginTop: '20@s',
      marginHorizontal: '30@s',
      width: '100%',
    },
    bg: {
      width: '100%',
      height: '65@ms0.75',
      position: 'absolute',
      resizeMode: 'contain',
    },
    interestContainer: {
      width: '100%',
      height: '86@s',
      borderRadius: '12@s',
      backgroundColor: '#EBEEF0',
      paddingHorizontal: '25@s',
    },
    interestText: {
      color: '#455157',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@s',
      marginTop: '10@ms',
    },

    changeText2: {
      color: '#03A0E3',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    regularButtonContainer: {
      marginVertical: 40,
      width: '100%',
    },
    interestIconContainer: {
      justifyContent: 'space-between',
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      marginVertical: '17@s',
    },
    interestIconMainContainer: {
      flexDirection: 'row',
      height: '30@s',
    },
    interestIcon1: {
      height: '25@s',
      width: '25@s',
      borderRadius: '25@s',
    },
    interestIcons: {
      height: '25@s',
      width: '25@s',
      borderRadius: '25@s',
      marginLeft: '-9@s',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    plusFourImage: {
      position: 'absolute',
      alignSelf: 'center',
      resizeMode: 'contain',
      width: '14@s',
      height: '14@s',
    },
    imageRound: { width: '100%', height: '100%', resizeMode: 'cover' },
  });

export default styles;
