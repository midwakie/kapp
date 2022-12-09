import { Dimensions, StyleSheet } from 'react-native';
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
      paddingHorizontal: '30@s',
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
    },
    gradientTextStyle: {
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    bubbleContainer: {
      // justifyContent: 'center',
      // alignItems: 'center',
      width: width,
      marginTop: 10,
      flexDirection: 'row',
      marginBottom: 20,
    },
    bubbleContainerLeft: {
      marginRight: 24,
      marginLeft: 13,
    },
    bubbleContainerRight: {
      marginTop: 100,
    },
  });

export default styles;
