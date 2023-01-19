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
      // zIndex: -10,
    },
    safeAreaView: { alignSelf: 'stretch' },
    gradientTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
    },
    gradientTextStyle: {
      width: '100%',
      height: '22@s',
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },

    container2: {
      marginTop: '78@s',
      width: '100%',
      height: '100%',
      paddingHorizontal: '20@s',
    },
    container3: {
      width: '100%',
      backgroundColor: '#EBEEF0',
    },
    container4: {
      flexDirection: 'row',
      marginTop: '20@s',
      justifyContent: 'space-between',
    },
    container5: {
      flexDirection: 'row',
      marginBottom: '15@s',
      paddingLeft: '25@s',
      paddingRight: '19@s',
    },

    topIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
      height: '38@s',
      width: '38@s',
    },
    topIconContainer1: {
      height: '38@s',
      width: '38@s',
      right: 0,
      top: '30@s',
      position: 'absolute',
    },
    coinImage: {
      height: '18@ms',
      width: '17@ms',
      //   alignItems: 'center',
    },

    neomorphContainer: {
      marginTop: '40@s',
    },

    text1: {
      color: '#03A0E3',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      width: '159@s',
      height: '19@s',
    },
    name: {
      color: '#03A0E3',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    textContainer: {
      width: '87@s',
      height: '100%',
      justifyContent: 'center',
      marginLeft: '15@s',
    },
    down: {
      height: '100%',
      justifyContent: 'center',
      position: 'absolute',
      right: '20@s',
    },
    bookType: {
      color: '#2F4868',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      width: '72@s',
      height: '19@s',
      marginLeft: '26@s',
    },
    bookTitle: {
      marginTop: '10@s',
      marginLeft: '25@s',
      justifyContent: 'space-between',
    },
    text2: {
      color: '#455157',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '19@s',
      width: '74@s',
      marginRight: '25@s',
    },
    text3: {
      color: '#758DAC',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      letterSpacing: 0.005,
      width: '100%',
      marginTop: 10,
    },
    text4: {
      color: '#EC4D61',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      width: '175@s',
      height: '19@s',
      flex: 1,
    },
    text6: {
      color: '#84BD47',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      width: '103@s',
      height: '19@s',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },

    profileImgContainer1: {
      width: '100%',
      marginTop: '25@s',
      paddingHorizontal: '25@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    studentProfile: {
      justifyContent: 'center',
    },
    profileImg1: {
      height: '126@s',
      width: '100%',
      resizeMode: 'stretch',
    },
    studentProfile1: {
      height: '40@s',
      width: '40@s',
      resizeMode: 'stretch',
    },

    searchIcon: {},
    searchContainer: {
      flexDirection: 'row',
    },

    neomorphContainer4: {
      paddingVertical: '20@s',
    },
    childContainer: {
      backgroundColor: '#EBEEF0',
      height: '65@s',
      flexDirection: 'row',

      paddingHorizontal: '20@s',
    },
    imageContainer4: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '65@s',
      height: '73@s',
      marginLeft: '20@s',
      marginBottom: '26@s',
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
      marginTop: 10,
      marginLeft: 10,
    },
    inputContainer: {
      width: '250@s',
      height: '50@s',
      alignItems: 'center',
      marginTop: '25@s',
      flexDirection: 'row',
    },
    rowContainer: {
      flexDirection: 'row',
    },
    bg: {
      width: '250@s',
      height: '50@s',
      position: 'absolute',
      resizeMode: 'contain',
    },
    input: {
      height: '40@ms',
      paddingVertical: '10@ms',
      paddingHorizontal: '10@s',
      marginLeft: direction === 'rtl' ? undefined : '15@s',
      marginRight: direction === 'rtl' ? '15@s' : undefined,
      textAlign: direction === 'rtl' ? 'right' : 'left',
      flex: 1,
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      backfaceVisibility: 'visible',
    },
  });

export default styles;
