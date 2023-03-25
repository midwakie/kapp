// import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = (direction: string) =>
  ScaledSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-end',
      paddingHorizontal: '12@s',
      height: 60,
    },
    topIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
      height: '38@s',
      width: '38@s',
    },
    cancelImage: {
      height: '16@ms',
      width: '16@ms',
    },
    loveImg: {
      height: '25@s',
      width: '25@s',
    },
    contentContainer: {
      flex: 1,
    },
    imageBg: {},
    epubReaderWrapper: {
      // marginTop: '50@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomContainer: {
      height: '100@s',
      // paddingBottom: 15,
    },
    pageNoWrapper: {
      alignSelf: 'flex-end',
      marginRight: '12@s',
      top: '5@s',
    },
    playerModuleWrapper: {},
    pageNoDetailsText: {
      color: '#000000',
      fontSize: 12,
      fontWeight: 'bold',
    },
    trackWrapper: {
      marginHorizontal: 24,
    },
    trackStyle: {
      backgroundColor: '#dadada',
      height: '4@s',
    },
    trackThumbStyle: {
      width: 1,
      height: 1,
      backgroundColor: '#006400',
    },
    finishControlWrapper: {
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    playControlWrapper: {
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    speedControlContainer: {
      height: 35,
      width: 35,
      borderRadius: 18,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#307fef',
    },
    speedControlText: {
      color: 'black',
      fontSize: 9,
      fontWeight: 'bold',
    },
    buttonText: {
      fontSize: '12.58@s',
      color: '#EC4D61',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      alignSelf: 'center',
    },
    controllerImg: {
      height: '38@s',
      width: '38@s',
      resizeMode: 'contain',
    },
  });

export default styles;
