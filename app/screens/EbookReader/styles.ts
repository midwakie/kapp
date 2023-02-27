// import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = (direction: string) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#FFFFFF',
      zIndex: -10,
    },
    safeAreaView: { alignSelf: 'stretch' },
    container2: {
      marginTop: 8,
      width: '100%',
      height: '100%',
      marginBottom: '40@s',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      marginLeft: '12@s',
      marginTop: '7.9@s',
    },
    topContainer2: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      marginTop: '19@s',

      right: '12@s',
    },
    loveImg: {
      height: '23@s',
      width: '23@s',
    },
    epubReaderWrapper: {
      marginTop: '45@s',
      justifyContent: 'center',
      alignItems: 'center',
    },

    pageNoWrapper: {
      alignSelf: 'flex-end',
      marginRight: '12@s',
    },
    playerModuleWrapper: {
      position: 'absolute',
      bottom: 0,
      marginBottom: '70@s',
      width: '100%',
    },
    pageNoDetailsText: {
      color: '#000000',
      fontSize: 12,
      fontWeight: 'bold',
    },
    trackWrapper: {
      marginHorizontal: 12,
    },
    trackStyle: {
      backgroundColor: '#dadada',
    },
    trackThumbStyle: {
      width: 15,
      height: 15,
    },
    playControlWrapper: {
      flexDirection: 'row',
      bottom: 0,
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
    },
    controllerImg: {
      height: 35,
      width: 35,
      resizeMode: 'contain',
    },
  });

export default styles;
