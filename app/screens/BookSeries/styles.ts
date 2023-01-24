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
      marginTop: '85@s',
      // paddingHorizontal: '30@s',
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },

    walkThroughContainer: {
      marginBottom: 28,
    },
    paginationContainer: {
      justifyContent: 'center',
    },
    paginationContainer2: {
      justifyContent: 'center',
    },
    paginationDots: {
      height: '16@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paginationDots2: {
      height: '16@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dotContainer: {
      alignSelf: 'center',
    },
    dot: {
      width: '24@s',
      height: '24@s',
    },
    mainContent: {
      alignItems: 'center',
    },

    image: {
      resizeMode: 'contain',
      height: '292@s',
      width: '249@s',
    },
    bookContent: {
      paddingHorizontal: '20@s',
      paddingVertical: 30,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#EBEEF0',
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
      textAlign: 'justify',
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
      marginLeft: '14.2@s',
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
    text7: {
      flex: 1,
      color: '#758DAC',
      fontSize: '16@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '72@s',
      width: '207@s',
      marginTop: 12.26,
    },
    bookContainerTwo: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: '30@s',
    },
    starContainer: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    descriptionContainer: {
      height: '125@s',
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
    slidingContainer2: {
      marginTop: '34.37@s',
      marginBottom: '20@s',
      height: '202@s',
    },
    badges: {
      width: '137@s',
      height: '202@s',
    },
    neomorphMargin: { marginRight: '20@ms' },
    neomorphContainer: { marginTop: '20@ms' },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
