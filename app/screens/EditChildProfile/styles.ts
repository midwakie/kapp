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
      height: 80,
      alignItems: 'center',
      marginLeft: 10,
      marginTop: 12,
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
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
      marginTop: 20,
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20.33 : undefined,
      right: direction === 'rtl' ? undefined : 20.33,
      position: 'absolute',
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: 100,
      height: 100,
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      width: '100@s',
      height: '100@s',
    },
    imageContainer2: {
      height: '30@s',
      width: '30@s',
      position: 'absolute',
      bottom: '5@s',
      right: '5@s',
    },
    neomorphContainer: {
      marginTop: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: width - 60,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DADEE0',
    },
    radioButtonContainer: {
      width: '100%',
      width: width - 60,
      marginTop: 20,
      alignItems:'center',
     
      
    },

    radioButtonViewContainer: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      height: '65@ms0.75',
      width: '100%',
      justifyContent:'center',
      alignItems:'center',
    },

    touchableOpacity: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      height: 65,
      width: '100%',
    },
    regularContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
   
    },

    coinContainer2: {
      width: '102@ms',
      height: '40@ms',
      borderRadius: 50,
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: '12@ms',
      flexDirection: 'row',
      backgroundColor: '#EBEEF0',
    },
    coinImage: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '26@ms',
      width: '26@ms',
    },
    coinText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '600',
      color: '#455157',
    },
    coinContainer1: {
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      height: '40@s',
      marginTop: '25@s',
    },
    schoolInputTextContainer: {
      width: '100%',
      height: '50@s',
      paddingVertical: '16@s',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      paddingHorizontal: '25@s',
    },
    schoolInputContainer: {
      width: '100%',
      width: width - 60,
      marginTop: 20,
      marginHorizontal: 20,
    },
    marginView: {
      marginTop: 20,
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
      borderRadius: 12,
      backgroundColor: '#EBEEF0',
      paddingHorizontal: '25@s',
      width: width - 60,
     
      
    },
    schoolText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
      color: '#455157',
    },
    changeText1: {
      color: '#03A0E3',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
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
    },
    imageRound: { width: '100%', height: '100%', resizeMode: 'cover' },
  });

export default styles;
