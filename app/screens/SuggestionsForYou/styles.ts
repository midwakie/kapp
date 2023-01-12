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
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      width:'100%',
      alignItems:'center',
      top:'10@ms',
      
    },
    gridViewContainer: {
      marginTop: '85@s',
      padding: 10,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      backgroundColor: '#EBEEF0',
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
      color: '#758DAC',
      textAlign: 'center',
      fontSize: '15@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    card: {
      height: '199@ms',
      width: '148@ms',
      backgroundColor: '#EBEEF0',
    },
    cardListStyle: {
      height: '92@ms',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    innerDirection: { flexDirection: 'row' },
    cardContainer: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    neomorphListContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    neomorphMargin: { margin: '10@ms' },
    cardImage: {
      height: '118@ms',
      width: '100%',
    },
    cardListImage: {
      height: '82@ms',
      width: '82@ms',
      borderRadius: '13@ms',
      margin: '5@ms',
    },
    cardContent: {
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: '11@s',
      marginTop: 8,
    },
    cardListContent: {
      flexDirection: 'column',
      height: '100%',
      paddingTop: '20@ms',
      marginLeft: '13@ms',
    },
    title: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@ms',
      fontWeight: '600',
      color: '#2F4868',
      marginBottom: 4,
    },
    author: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@ms',
      fontWeight: '600',
      color: '#758DAC',
      marginBottom: 4,
    },
    price: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@ms',
      fontWeight: '700',
      color: '#03A0E3',
    },
    priceListStyle: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@ms',
      fontWeight: '700',
      color: '#03A0E3',
      marginRight: ms(25),
      marginBottom: ms(22),
      alignSelf: 'flex-end',
      width: '53@s',
      textAlign: 'right',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
