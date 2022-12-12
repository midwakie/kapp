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
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      marginBottom: 67,
      marginTop: 54,
    },
    gradientTextStyle: {
      fontSize: '24@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
    },
    rolesContainer: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      width: width,
      height: '150@ms0.75',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      resizeMode: 'contain',
      height: '142@ms0.75',
      width: '142@ms0.75',
    },
    titleParent: {
      fontSize: '24@s',
      color: '#2AA7DD',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
    },
    titleStudent: {
      fontSize: '24@s',
      color: '#E14E58',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
    },
    titleTeacher: {
      fontSize: '24@s',
      color: '#84BD47',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
    },
  });

export default styles;
