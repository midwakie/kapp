import { Dimensions } from 'react-native';
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';
import { ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string, isPressed?: boolean) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#EBEEF0',
      marginTop: '85@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    container2: {
      paddingHorizontal: 20,
      marginTop: 10,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    gradientTextContainer: {
      width: '126@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      marginLeft: '20@s',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
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
    heading: {
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '40@s',
      flexDirection: 'row',
    },
    icon: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    pop: {
      position: 'absolute',
      height: 20,
      width: 20,
      borderRadius: 10,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      top: -13,
      right: -5,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
    bubbleContainer: {
      justifyContent: 'space-between',
      width: '100%',
      marginTop: '20@s',
      flexDirection: 'row',
    },
    neomorphic: {
      height: '95@s',
      width: '95@s',
    },
    categoryButtonToys: {
      borderColor: isPressed ? 'transparent' : 'white',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '95@s',
      width: '95@s',
      borderRadius: '25@s',
      backgroundColor: 'rgba(245, 228, 172, 1)',
    },
    categoryButtonConsole: {
      borderColor: isPressed ? 'transparent' : 'white',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '95@s',
      width: '95@s',
      borderRadius: '25@s',
      backgroundColor: 'rgba(212, 241, 254, 1)',
    },
    categoryButtonPuzzle: {
      opacity: 5,
      backgroundColor: 'rgba(255, 214, 219, 1)',
      borderColor: isPressed ? 'transparent' : 'white',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '95@s',
      width: '95@s',
      borderRadius: '25@s',
    },
    categoryImage: {
      resizeMode: 'contain',
      width: '36@s',
      height: '40@s',
    },
    toysText: {
      marginTop: '10@s',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      lineHeight: '19@s',
      color: '#FFA51F',
    },
    gameText: {
      marginTop: '10@s',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      lineHeight: '19@s',
      color: '#046EFF',
    },
    puzzleText: {
      marginTop: '10@s',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      lineHeight: '19@s',
      color: '#EC4D61',
    },

    cardContainer: {
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      borderRadius: 14,
      borderWidth: 1,
      borderColor: 'white',
      borderTopColor: '#E2E2E2',
      height: '190@s',
      width: '140@s',
    },
    neomorph: {
      margin: 10,
      marginBottom: 20,
      height: '190@s',
      width: '140@s',
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '120@s',
    },
    cardImage: {
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
    },
    cardContent: {
      marginTop: 15,
      paddingHorizontal: 15,
      height: 65,
    },
    cardTitleText: {
      marginBottom: 8,
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 19,
      color: '#2F4868',
    },
    cardContentPriceCoin: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    price: {
      color: '#758DAC',
      fontSize: 12,
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      lineHeight: 16,
    },
    cardContentCoin: {
      flexDirection: 'row',
    },
    cardCoin: {
      height: 18,
      width: 18,
      resizeMode: 'contain',
    },
    coinText: {
      color: '#758DAC',
      fontSize: 12,
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      lineHeight: 16,
    },
  });

export default styles;
