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
      marginTop: 10,
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
      height: '33@s',
      paddingHorizontal: '30@s',
    },
    gradientTextStyle: {
      fontSize: '18@s',
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
      height: '92@ms',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    innerDirection: { flexDirection: 'row' },
    cardContainer: {
      marginTop: 140,
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
      height: '82@ms',
      width: '82@ms',
      borderRadius: '13@ms',
      margin: '5@ms',
    },
    cardListContent: {
      flexDirection: 'column',
      height: '100%',
      paddingTop: '20@ms',
      marginLeft: '13@ms',
    },
    title: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@ms',
      fontWeight: '600',
      color: '#3B3B48',
      marginBottom: 6,
      lineHeight: '22@s',
    },
    priceListStyle: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@ms',
      fontWeight: '700',
      color: '#03A0E3',
      marginRight: ms(25),
      marginBottom: ms(22),
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
  });

export default styles;
