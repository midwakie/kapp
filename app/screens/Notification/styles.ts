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
      marginTop: '90@s',
      width: '100%',
      height: '100%',
      paddingBottom: 25,
      backgroundColor: '#EBEEF0',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
      paddingHorizontal: '30@s',
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    topImage: {
      width: '50@s',
      height: '50@s',
    },
    topIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '44@s',
      width: '88@s',
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
    searchContainer: {
      backgroundColor: '#EBEEF0',
      height: '44@s',
      width: '44@s',
      borderTopRightRadius: '50@s',
      borderBottomRightRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardListStyle: {
      borderColor: 'white',
      height: '90@ms',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      marginTop: '15@s',
    },
    innerDirection: {
      flexDirection: 'row',
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
      height: '45@ms',
      width: '45@ms',
      borderRadius: '150@ms',
      marginLeft: '20@s',
      resizeMode: 'contain',
    },
    playImage: {
      height: '18@ms',
      width: '18@ms',
      resizeMode: 'contain',
      marginRight: '6@s',
    },
    cardListContent: {
      flexDirection: 'column',
      marginLeft: '20@s',
    },
    title: {
      fontFamily: 'Nunito-Regular',
      fontSize: '15@ms',
      fontWeight: '600',
      color: '#323A3D',
    },
    time: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@ms',
      fontWeight: '600',
      color: '#03A0E3',
      position: 'absolute',
      right: '15@s',
    },
    description: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@ms',
      fontWeight: '600',
      color: '#758DAC',
    },
    priceListStyle1: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@ms',
      fontWeight: '600',
      color: '#758DAC',
      marginBottom: '5@s',
    },
    statusContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '20@s',
    },
    statusOne: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@ms',
      fontWeight: '700',
      color: '#84BD47',
    },
    statusTwo: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@ms',
      fontWeight: '700',
      color: '#EC4D61',
    },
    dateText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      color: '#758DAC',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
    button: {
      width: '50@s',
      height: '26@s',
      backgroundColor: '#84BD47',
      borderRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '5@s',
      borderWidth: '1@s',
      borderColor: '#E2E2E2',
    },
    button2: {
      width: '50@s',
      height: '26@s',
      backgroundColor: '#EC4D61',
      borderRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '5@s',
      borderWidth: '1@s',
      borderColor: '#E2E2E2',
    },
    buttonText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '400',
      color: '#FFFFFF',
      textAlign: 'center',
    },
  });

export default styles;
