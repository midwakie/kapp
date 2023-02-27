import { Dimensions } from 'react-native';
import { ms, scale, ScaledSheet, s } from 'react-native-size-matters';

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
      marginTop: '85@s',
      width: '100%',
      paddingBottom: '25@s',
      backgroundColor: '#EBEEF0',
    },
    rewardPoint: {
      height: '164@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    coinContainer: {
      marginBottom: '5@s',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    coin: {
      height: '40@s',
      width: '40@s',
      marginRight: '15@s',
      resizeMode: 'contain',
    },
    coinText: {
      color: '#3B3B48',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '38@s',
      lineHeight: '52@s',
    },
    rewardText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '600',
      lineHeight: '22@s',
      color: '#2F4868',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '38@s',
      marginLeft: '20@s',
    },
    topImage: {
      width: '50@s',
      height: '50@s',
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
    gridViewContainer: {
      // marginTop: '20@s',
      padding: '10@s',
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
      color: '#3B3B48',
      textAlign: 'center',
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    card: {
      height: '199@ms',
      width: '148@ms',
      backgroundColor: '#EBEEF0',
    },
    cardListStyle: {
      paddingVertical: '25@s',
      paddingHorizontal: '20@s',
      height: '134@s',
      borderWidth: 1,
      borderColor: 'white',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      borderRadius: '14@s',
    },
    productContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    productText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      lineHeight: '19@s',
      // letterSpacing: '0.01em',
      color: '#3B3B48',
    },
    productTextTwo: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      lineHeight: '19@s',
      // letterSpacing: '0.01em',
      color: '#03A0E3',
      textDecorationLine: 'underline',
      marginBottom: '10@s',
    },
    productDetailsText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      lineHeight: '16@s',
      color: '#758DAC',
      marginBottom: '4@s',
    },
    rewardOne: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      fontSize: '16@s',
      lineHeight: '22@s',
      color: '#EC4D61',
    },
    rewardTwo: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      fontSize: '16@s',
      lineHeight: '22@s',
      color: '#84BD47',
    },
    cardListStyleTwo: {
      paddingHorizontal: '20@s',
      height: '65@s',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '14@s',
    },
    filterViewContainer: {
      height: '38@s',
      width: '38@s',
      borderRadius: '38@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    filterImage: {
      height: '17@s',
      width: '17@s',
      resizeMode: 'contain',
    },

    innerDirection: {
      paddingHorizontal: '15@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContainer: {
      marginTop: '20@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      paddingBottom: '10@s',
    },
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    neomorphListContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20@s',
    },
    neomorphMargin: { margin: '10@ms' },
    cardImage: {
      height: '118@ms',
      width: '100%',
    },
    cardListImage: {
      height: '40@ms',
      width: '40@ms',
      borderRadius: '13@ms',
      margin: '5@ms',
    },
    cardContent: {
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: '11@s',
      marginTop: '8@s',
    },
    cardListContent: {
      paddingLeft: '10@s',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    title: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#323A3D',
    },
    author: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      color: '#758DAC',
      marginBottom: '4@s',
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