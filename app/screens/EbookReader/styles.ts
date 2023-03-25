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
      // backgroundColor: '#000000',
    },
    imageBg: {},
    epubReaderWrapper: {
      // marginTop: '50@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomContainer: {
      height: '50@s',
      position: 'absolute',
      bottom: 0,
      // paddingBottom: 15,
    },
    pageNoWrapper: {
      alignSelf: 'flex-end',
      marginRight: '12@s',
      top: '5@s',
      // backgroundColor: 'rgba(255,255,255, .8)',
      backgroundColor: '#D9D9D9',
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 10,
    },
    playerModuleWrapper: {
      // position: 'absolute',
      width: '100%',
      bottom: 5,
    },
    pageNoDetailsText: {
      color: '#000000',
      fontSize: 12,
      fontWeight: 'bold',
    },
    trackWrapper: {
      marginHorizontal: 24,
    },
    trackStyle: {
      backgroundColor: '#D9D9D9',
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
