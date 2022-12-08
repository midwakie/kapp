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
      paddingHorizontal: '20@s',
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 25,
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
      paddingHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    neomorphContainer: {
      marginTop: 19,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      width: '168@ms',
      height: '168@ms',
      borderRadius: '168@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'cover',
      width: '168@ms',
      height: '168@ms',
    },
    faceImageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '50@ms',
      height: '80@ms',
      position: 'absolute',
      top: '35@ms',
    },
    hijabImageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '100@ms',
      height: '100@ms',
      position: 'absolute',
      top: '32.5@ms',
    },
    hairImageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '100@ms',
      height: '100@ms',
      position: 'absolute',
      top: '25@ms',
    },
    eyeImageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '60@ms',
      height: '60@ms',
      position: 'absolute',
      top: '45@ms',
    },
    glassImageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '50@ms',
      height: '50@ms',
      position: 'absolute',
      top: '42@ms',
    },
    noseImageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '25@ms',
      height: '25@ms',
      position: 'absolute',
      top: '65@ms',
    },
    lipImageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '25@ms',
      height: '25@ms',
      position: 'absolute',
      top: '77@ms',
    },
    avatarPropsContainer: {
      width: '100%',
      height: '97@s',
      overflow: 'visible',
      marginTop: 54,
    },
    aPropContainer: {
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'visible',
    },
    mainPropContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    imageAvatarStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '70@s',
      height: '70@s',
    },
    imagePropertyStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '25@s',
      height: '25@s',
      position: 'absolute',
      alignSelf: 'center',
    },
    aPropText: {
      color: '#3B3B48',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '16@s',
      // lineHeight: 28,
    },
    mFlatList: {
      marginTop: 50,
      marginHorizontal: '10@s',
      overflow: 'visible',
    },
    mPropContainer: {
      marginRight: '20@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageAvatarPropStyle: {
      justifyContent: 'center',
      resizeMode: 'cover',
      width: '85@s',
      height: '86@s',
    },
    imageMPropertyStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '40@s',
      height: '41@s',
      position: 'absolute',
      alignSelf: 'center',
    },
  });

export default styles;
