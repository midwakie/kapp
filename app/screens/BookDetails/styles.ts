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
    safeAreaView: {
      alignSelf: 'stretch',
    },
    gradientTextContainer: {
      width: '126@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
    },
    gradientTextContainerBook: {
      width: '150@s',
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
      width: 38,
      marginLeft: '20@s',
    },
    container2: {
      marginTop: 40,
      // paddingHorizontal: '30@s',
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },

    walkThroughContainer: {
      marginBottom: 28,
    },
    paginationContainer: {
      marginTop: 22,
      justifyContent: 'center',
    },
    paginationDots: {
      height: '16@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      width: '24@s',
      height: '24@s',
      marginHorizontal: 4,
    },
    mainContent: {
      alignItems: 'center',
    },

    image: {
      resizeMode: 'contain',
      height: '186@s',
      width: '151@s',
    },
    bookContent: {
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    pagesAndAuthorText: {
      color: '#758DAC',
      textAlign: 'center',
      fontSize: '12@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      marginTop: 5,
    },
    priceText: {
      color: '#03A0E3',
      textAlign: 'center',
      fontSize: '22@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    descriptionText: {
      color: '#758DAC',
      textAlign: 'center',
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    reviewText: {
      color: '#03A0E3',
      textAlign: 'center',
      fontSize: '12@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    askParent: {
      marginTop: 20,
      color: '#03A0E3',
      textAlign: 'center',
      fontSize: '12@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    regularButton: {
      width: '100%',
      marginTop: 35,
      marginBottom: 20,
    },
    starImage: {
      height: 13,
      width: 14,
    },
    bookContainerOne: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    bookContainerTwo: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    starContainer: {
      width: 100,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'space-around',
      marginBottom: 8,
    },
    descriptionContainer: {
      height: 125,
      width: '100%',
      marginTop: 5,
    },
    bookContainerInner: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    card: {
      height: '157@ms',
      width: '125@ms',
      backgroundColor: '#EBEEF0',
    },
    cardImage: {
      height: '100%',
      width: '100%',
    },
    neomorphMargin: { marginRight: '10@ms' },
    neomorphContainer: { marginTop: '20@ms' },
  });

export default styles;
