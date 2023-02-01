import { Dimensions } from 'react-native';
import { s, ScaledSheet } from 'react-native-size-matters';

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
      width: '100%',
      marginTop: '40@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
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
    neomorphContainer: {
      marginTop: '18.32@s',
    },
    neomorphContainer2: {
      bottom: '25.05@s',
    },
    neomorphContainer3: {
      marginTop: '40@s',
      marginHorizontal: 25,
    },
    bookImage: {
      width: '192@s',
      alignSelf: 'center',
      height: '287.68@s',
    },
    bookContainer: {
      width: '100%',
      height: '737@s',
      backgroundColor: '#EBEEF0',
    },
    bookContainer2: {
      width: '100%',
      height: '100%',
      backgroundColor: '#EBEEF0',
    },
    boxText: {
      fontSize: '12.58@s',
      color: '#EC4D61',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
    },
    text: {
      fontSize: '17.35@ms',
      color: '#758DAC',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    boldText: {
      fontSize: '17.35@ms',
      color: '#3B4568',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    buttonRow: {
      width: '258@s',
      height: '40@s',
      margin: '36@s',
      alignSelf: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    firstRow: {
      width: '258@s',
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    secondRow: {
      paddingHorizontal: '19.8@s',
      marginTop: '19.07@s',
      marginBottom: '36@s',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleHeading: {
      fontFamily: 'Nunito-Regular',
      fontSize: '18.72@s',
      color: '#3B4568',
      fontWeight: '800',
    },
    titleText: {
      fontSize: '12.48@s',
      color: '#758DAC',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    descriptionText: {
      fontSize: '16.64@s',
      color: '#758DAC',
      marginTop: '5@s',
      textAlign: 'justify',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    titleTextColor: {
      fontSize: '12.48@s',
      color: '#84BD47',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    bookIcon: {
      width: '20@s',
      height: '20@s',
    },
    row: { flexDirection: 'row' },
    ratingContainer: {
      width: 145.2,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    pageContainer: {
      width: 107,
      marginTop: 64,
      right: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    thirdContainer: {
      paddingHorizontal: '19.8@s',
      width: '100%',
      justifyContent: 'center',
    },
    fourthContainer: {
      top: '28@s',
      marginBottom: '31.5@s',
      paddingHorizontal: '23.96@s',
      width: '100%',
    },
    fifthContainer: {
      top: '27@s',
      paddingHorizontal: '25@s',
      width: '100%',
    },
    badges: {
      width: 150.9,
      height: 150.9,
      alignSelf: 'center',
      top: 31,
      resizeMode: 'stretch',
    },
    paginationDots: {
      height: '16@s',
      // top: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      width: '24@s',
      height: '24@s',
      marginHorizontal: 4,
    },
    paginationContainer: {
      position: 'absolute',
      alignSelf: 'center',
      // top: 150,
      marginTop: '165@s',
    },
    slidingContainer: {
      width: '100%',
      height: 195,
      left: 10,
    },
    reviewContainer: {
      width: '100%',
      height: '217@s',
      backgroundColor: '#EBEEF0',
    },
    reviewRowContainer: {
      width: '100%',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 35,
      // paddingVertical: 60,
      marginTop: '43@s',
      marginBottom: '46@s',
    },
    reviewColumn1: {
      height: 89,
      justifyContent: 'space-between',
    },
    reviewColumn2: {
      height: 108,
      justifyContent: 'space-between',
    },
    reviewContainerTitle: {
      fontSize: '15.48@s',
      color: '#000000',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    counText: {
      left: 20,
      fontSize: '38.1@s',
      color: '#03A0E3',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    carousalContainer: {
      marginTop: 31,
      marginBottom: 44,
      alignItems: 'center',
    },
    swipeContainer: {
      width: '100%',
      height: '187.6@s',
    },
    activeSlideImage: {
      width: 156,
      alignSelf: 'center',
      height: '188@s',
    },
    leftSwipeButton: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      top: 75,
      left: -10,
      alignSelf: 'flex-start',
    },
    rightSwipeButton: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      top: 75,
      right: -10,
      alignSelf: 'flex-end',
    },
    loadMore: {
      fontSize: '8.1@ms',
      fontWeight: '800',
      fontFamily: 'Nunito-Regular',
    },
    buttonNeumorph: {
      alignSelf: 'center',
      bottom: '17@s',
    },
    buttonNeumorph2: {
      alignSelf: 'center',
    },
    loadButton: {
      width: '111@s',
      height: '23@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadMoreButton: {
      width: '95@s',
      height: '23@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listingNemorph: { marginBottom: 20, marginHorizontal: 25 },
    listingContainer: {
      width: '100%',
      height: '156@s',
      backgroundColor: '#EBEEF0',
    },
    container5: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '156@s',
      borderRadius: 14,
    },
    container6: {
      paddingHorizontal: '15@s',
      paddingVertical: '15@s',
    },
    container7: {
      flexDirection: 'row',
      marginBottom: '3.26@s',
    },
    text5: {
      color: '#2F4868',
      fontSize: '18@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '25@s',
      width: '99@s',
      flex: 1,
    },
    text6: {
      color: '#03A0E3',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      width: '76@s',
    },
    imageStyle1: {
      width: '16.5@s',
      height: '22@s',
      marginLeft: '22@s',
    },
    imageStyle4: {
      width: '16.5@s',
      height: '22@s',
      marginLeft: '22@s',
      tintColor: 'red',
    },
    text7: {
      flex: 1,
      color: '#758DAC',
      fontSize: '15@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '72@s',
      width: '207@s',
      marginVertical: '12.26@s',
    },
     imageStyle2: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: '90@s',
      height: '90@s',
      position: 'absolute',
    },
    imageStyle3: {
      resizeMode: 'contain',
      width: '30@s',
      height: '30@s',
      marginTop: '10@s',
      marginLeft: '10@s',
    },
    imageContainer4: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '78@s',
      height: '78@s',
    },
  });

export default styles;
