import { Dimensions } from 'react-native';
import { ms, s, scale, ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string, active?: boolean) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#EBEEF0',
    },
    safeAreaView: { alignSelf: 'stretch' },
    gradientTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
      right: 10,
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
      width: '100%',
    },
    topIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
      height: '42@s',
      width: '42@s',
    },

    container1: {
      paddingHorizontal: '10@ms',
      marginTop: 10,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
      backgroundColor: '#EBEEF0',
    },
    profileImgContainer1: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '145@s',
    },
    profileImg1: {
      height: '145@s',
      width: '335@s',
      position: 'absolute',
    },
    profileImg2: {
      height: '50@s',
      width: '34.28@s',
      resizeMode: 'contain',
    },
    row2: {
      flexDirection: 'row',
      marginLeft: '20@s',
      marginTop: '30@s',
    },
    container4: {
      height: '45@s',
    },

    buttonText: {
      fontSize: '18@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      color: active ? '#FFFFFF' : '#758DAC',
    },

    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text4: {
      color: '#FFFFFF',
    },
    inputTextContainer2: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '17@s',
    },
    neomorphContainer3: {
      marginTop: '10@s',
      width: '315@s',
      alignSelf: 'center',
      paddingHorizontal: '10@s',
    },
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
      marginTop: '85@s',
      width: '100%',
      height: '100%',
      marginBottom: 35,
    },
    categoryListContainer: { height: '105@s' },
    container6: {
      width: '100%',
      height: '123@s',
      paddingHorizontal: '25@s',
      paddingVertical: '16@s',
      fontSize: '14@s',
    },
    inputTextContainer1: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    button1: {
      backgroundColor: 'blue',
    },
    text: {
      color: 'white',
    },

    coinContainer2: {
      height: '19@s',
      borderRadius: '50@s',
      marginTop: 7,
      flexDirection: 'row',
      backgroundColor: '#EBEEF0',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? '20@s' : undefined,
      right: direction === 'rtl' ? undefined : '20@s',
      position: 'absolute',
    },
    searchIcon: {
      right: '20@s',
    },
    coinImage: {
      height: '20@ms',
      width: '20@ms',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    gridText: {
      color: '#758DAC',
      textAlign: 'center',
      fontSize: '15@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
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

    card: {
      height: '199@ms',
      width: '148@ms',
      backgroundColor: '#EBEEF0',
    },
    card1: {
      height: '177@ms',
      width: '148@ms',
      backgroundColor: '#EBEEF0',
    },
    card3: {
      height: '180@ms',
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

    neomorphListContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    neomorphMargin: { margin: '20@ms' },
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
  });

export default styles;
