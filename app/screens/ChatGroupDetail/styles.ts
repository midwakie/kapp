import { Dimensions } from 'react-native';
import { ms, scale, ScaledSheet } from 'react-native-size-matters';

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
      paddingHorizontal: '10@ms',
      marginTop: '115@s',
      width: '100%',
      height: '100%',
      paddingBottom: 25,
      backgroundColor: '#EBEEF0',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '38@s',
      marginLeft: '20@s',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      paddingHorizontal: '30@s',
    },
    gradientTextStyle: {
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    imageContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainerImage: {
      resizeMode: 'stretch',
      width: '335@s',
      height: '160@s',
    },
    imageText: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textView: {
      paddingHorizontal: '20@s',
      marginTop: '25@s',
    },
    classText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: '22@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      lineHeight: '30@s',
    },
    gridViewContainer: {
      padding: '10@s',
      marginRight: '8@s',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      backgroundColor: '#EBEEF0',
    },
    innerView: {
      flexDirection: 'row',
      marginLeft: '10@s',
    },
    gridView: {
      paddingHorizontal: '10@ms',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '138@s',
      height: '40@s',
      backgroundColor: '#EBEEF0',
    },
    gridText: {
      marginLeft: '30@s',
      color: '#FD4449',
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    cardListStyle: {
      borderWidth: 1,
      borderColor: '#ffffff',
      height: '70@ms',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardContainer: {
      marginTop: '20@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    neomorphMargin: { margin: '10@ms' },
    cardListImage: {
      height: '40@ms',
      width: '40@ms',
      borderRadius: '13@ms',
      margin: '5@ms',
    },
    childDetailContainer: {
      justifyContent: 'center',
      marginLeft: '10@s',
    },
    childName: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@ms',
      fontWeight: '600',
      color: '#323A3D',
    },
    student: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@ms',
      fontWeight: '600',
      color: '#758DAC',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
