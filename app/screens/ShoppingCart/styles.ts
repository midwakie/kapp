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
      marginTop: '85@s',
      width: '100%',
      height: '100%',
      paddingBottom: '100@s',
      backgroundColor: '#EBEEF0',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '38@s',
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
    gridViewContainer: {
      marginTop: '85@s',
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
    productName: {
      color: '#3B3B48',
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
      height: '65@s',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '14@s',
    },
    cardListStyleTwo: {
      paddingHorizontal: '5@s',
      height: '92@s',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '14@s',
    },

    imageViewContainer: {
      width: '82@s',
      height: '82@s',

      borderRadius: '13@s',
    },
    productImage: {
      width: '82@s',
      height: '82@s',
      borderRadius: '13@s',
      resizeMode: 'contain',
    },
    productInfo: {
      flexDirection: 'row',
    },
    minusImage: {
      height: '26@s',
      width: '26@s',
      resizeMode: 'contain',
    },
    minusTouch: {
      height: '26@s',
      width: '26@s',
      marginRight: '20@s',
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
      textAlign: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    text: {
      marginTop: '100@s',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      color: '#3B3B48',
      fontSize: '20@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    neomorphContainer: {
      margin: '10@s',
    },
    neomorphListContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20@s',
    },
    neomorphMargin: { margin: '10@ms' },
    neomorphMargin1: {
      paddingHorizontal: '20@s',
      bottom: '20@s',
      position: 'absolute',
      width: '100%',
    },
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
    detailsContainer: {
      alignItems: 'flex-start',
      flexDirection: 'column',
      left: '13@s',
      top: '15@s',
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
    priceText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '700',
      color: '#03A0E3',
      marginTop: '8@s',
    },
    priceText1: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
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
    titleBarContainer: {
      position: 'absolute',
      width: '100%',
    },
    row: {
      flexDirection: 'row',
      padding: '10@s',
      justifyContent: 'space-between',
    },
    text8: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '600',
      color: '#3B3B48',
    },
    container5: {
      flexDirection: 'column',
    },
  });

export default styles;
