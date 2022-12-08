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
    safeView: { alignSelf: 'stretch' },
    container2: {
      marginTop: 2,
      width: '100%',
      height: '100%',
    },
    topContainer: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      paddingRight: 30,
      marginVertical: 25,
    },
    skipButtonText: {
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      fontWeight: '400',
      color: '#03A0E3',
      backgroundColor: 'transparent',
    },
    skipButtonContainer: {
      height: '50@s',
      paddingHorizontal: '5@s',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    walkThroughContainer: {
      marginBottom: 63,
    },
    paginationContainer: {
      marginTop: 71,
      justifyContent: 'center',
    },
    paginationDots: {
      height: '16@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      width: '24@s',
      height: '24@s',
      marginHorizontal: 4,
    },
    mainContent: {
      alignItems: 'center',
    },
    textContainer: { height: '66@s', marginBottom: 69 },
    title: {
      fontSize: '24@s',
      color: '#03A0E3',
      fontWeight: '800',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      lineHeight: '32.74@s',
    },
    subTitle: {
      fontSize: '16@s',
      color: '#758DAC',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      lineHeight: '21.82@s',
    },
    image: {
      resizeMode: 'contain',
      height: '290@s',
      width: '315@s',
    },
    buttonContainer: {
      marginBottom: '20@s',
      paddingHorizontal: 20,
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    buttonInnerContainer: { width: '45%' },
  });

export default styles;
