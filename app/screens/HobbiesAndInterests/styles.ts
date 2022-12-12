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
    container2: {
      // justifyContent: 'center',
      // alignItems: 'center',
      // paddingHorizontal: '30@s',
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      marginBottom: 40,
      marginTop: 30,
      paddingHorizontal: '30@s',
    },
    gradientTextStyle: {
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    bubbleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 10,
      flexDirection: direction === 'landscape' ? 'column' : 'row',
      marginBottom: 20,
    },
    bubbleContainerLeft: {
      justifyContent: direction === 'landscape' ? 'space-around' : undefined,
      width: direction === 'landscape' ? '100%' : undefined,
      flexDirection: direction === 'landscape' ? 'row' : 'column',
      marginRight: direction === 'landscape' ? undefined : 24,
    },
    bubbleContainerRight: {
      justifyContent: direction === 'landscape' ? 'space-around' : undefined,
      width: direction === 'landscape' ? '100%' : undefined,
      flexDirection: direction === 'landscape' ? 'row' : 'column',
      marginTop: direction === 'landscape' ? undefined : 100,
    },
    buttonContainer: {
      paddingHorizontal: '30@s',
    },
  });

export default styles;
