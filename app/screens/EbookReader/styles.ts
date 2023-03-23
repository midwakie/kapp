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
      justifyContent: 'space-between',
      paddingHorizontal: '12@s',
      paddingVertical: '12@s',
    },
    loveImg: {
      height: '23@s',
      width: '23@s',
    },
    contentContainer: {
      flex: 1,
    },
    epubReaderWrapper: {
      // marginTop: '50@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomContainer: {
      position: 'absolute',
      bottom: 10,
    },
    pageNoWrapper: {
      alignSelf: 'flex-end',
      marginRight: '12@s',
    },
    playerModuleWrapper: {
      position: 'absolute',
      bottom: 0,
      marginBottom: '40@s',
      width: '100%',
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
      backgroundColor: '#dadada',
    },
    trackThumbStyle: {
      width: 15,
      height: 15,
    },
    finishControlWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    playControlWrapper: {
      flexDirection: 'row',
      width: '94%',
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
      height: 35,
      width: 35,
      resizeMode: 'contain',
    },
  });

export default styles;
