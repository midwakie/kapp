import { Dimensions, StyleSheet } from 'react-native';
const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;
const styles = (direction: string) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#E5E5E5',
    },
    container2: {
      marginTop: 2,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    safeView: { alignSelf: 'stretch' },
    gradientTextStyle: {
      fontSize: 24,
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      lineHeight: 33,
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 33,
      marginBottom: 67,
      marginTop: 54,
    },
    image: {
      marginVertical: 20,
      resizeMode: 'contain',
      height: width / 3,
      width: width / 3,
    },
    titleParent: {
      fontSize: 24,
      color: '#2AA7DD',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      lineHeight: 33,
      textAlign: 'center',
    },
    titleStudent: {
      fontSize: 24,
      color: '#E14E58',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      lineHeight: 33,
      textAlign: 'center',
    },
    titleTeacher: {
      fontSize: 24,
      color: '#84BD47',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      lineHeight: 33,
      textAlign: 'center',
    },
    rolesContainer: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
