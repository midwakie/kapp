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
      zIndex: -10,
    },
    container2: {
      paddingHorizontal: '20@s',
      width: '100%',
      paddingBottom: '38@s',
      justifyContent: 'space-around',
      marginTop: '40@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    leftContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      // position: 'absolute',
      // width: 38,
    },
    middleComponent: {
      justifyContent: 'center',
      alignItems: 'center',
      // height: '22@s',
    },
    right: {
      width: '88@s',
      height: '44@s',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20 : undefined,
      right: direction === 'rtl' ? undefined : 20,
      position: 'absolute',
    },
    topIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '44@s',
      width: '88@s',
    },
    topImage: {
      width: '50@s',
      height: '50@s',
    },
    searchContainer: {
      backgroundColor: '#EBEEF0',
      height: '44@s',
      width: '44@s',
      borderTopRightRadius: '50@s',
      borderBottomRightRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuContainer: {
      height: '44@s',
      width: '44@s',
      backgroundColor: '#EBEEF0',
      borderTopLeftRadius: '50@s',
      borderBottomLeftRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconImageStyle: {
      width: '20@s',
      height: '20@s',
    },
    rowContainer: {
      alignItems: 'center',
      width: '50%',
      justifyContent: 'space-between',
      marginBottom: '41@s',
    },
    rectangle2: {
      width: '130@s',
      height: '130@s',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#CFD8DC',
      borderRadius: '50@s',
    },
    addIcon: {
      width: '40@s',
      height: '40@s',
      resizeMode: 'contain',
    },
    userIcon: {
      width: '70@s',
      height: '70@s',
      resizeMode: 'contain',
    },
    profileName: {
      color: '#455157',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      fontSize: '14@ms',
      top: '7@s',
    },
  });

export default styles;
