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
    safeAreaView: { alignSelf: 'stretch' },
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
      width: 38,
      marginLeft: '20@s',
    },
    container1: {
      marginTop: '90@s',
      paddingHorizontal: '20@s',
      width: '100%',
      height: '100%',
      paddingBottom: '25@s',
    },
    container2: {
      width: '100%',
      height: '132@s',
      marginBottom: '30@s',
    },
    container21: {
      width: '100%',
      height: '147@s',
      marginBottom: '30@s',
    },
    container22: {
      width: '100%',
      height: '142@s',
      marginTop: '30@s',
    },
    profileImgContainer: {
      height: '132@s',
      marginLeft: '23@s',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    optionTitleStyleColor: {
      color: '#EC4D61',
      fontSize: '14@s',
    },
    menuImage: {
      height: '20@s',
      width: '20@s',
      resizeMode: 'contain',
    },
    optionTitleStyle: {
      color: '#758DAC',
      fontSize: '14@s',
    },
    itemMenu: {
      height: '16@s',
      width: '4@s',
      resizeMode: 'contain',
    },
    profileImgContainer1: {
      height: '73.5@s',
      marginLeft: '23@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImg: {
      height: '50@s',
      width: '50@s',
      resizeMode: 'contain',
      marginBottom: '14@s',
    },

    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImgCamera: {
      height: '30@s',
      width: '30@s',
      borderRadius: '30@s',
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputTextContainer1: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
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
    container3: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '132@s',
      borderRadius: '14@s',
    },

    container31: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '147@s',
      borderRadius: '14@s',
    },

    Container4: {
      height: '132@s',
      paddingTop: '8@s',
      marginLeft: '48@s',
    },
    Container42: {
      height: '73.5@s',
      width: '30%',
    },
    Container43: {
      position: 'absolute',
      right: '20@s',
    },
    textContainer4: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Container41: {
      height: '73.5@s',
      paddingTop: '5@s',
      marginLeft: '20@s',
    },
    row: {
      flexDirection: 'row',
      marginTop: '20@s',
    },
    row3: {
      flexDirection: 'row',
      marginTop: '10@s',
    },
    row2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imageContainer: {
      width: '40@s',
      height: '25@s',
      flexDirection: 'row',
      marginTop: '8@s',
    },
    interestIcon1: {
      height: '25@s',
      width: '25@s',
      borderRadius: '25@s',
    },
    interestIcons: {
      height: '25@s',
      width: '25@s',
      borderRadius: '25@s',
      marginLeft: '-9@s',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    imageRound: { width: '100%', height: '100%', resizeMode: 'cover' },

    row1: {
      flexDirection: 'row',
      marginTop: 14,
      marginLeft: 23,
    },
    plusFour: {
      position: 'absolute',
      alignSelf: 'center',
      marginTop: 4,
      color: 'white',
    },
    row11: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '20@s',
    },
    Container52: {
      flexDirection: 'column',
    },
    text1: {
      color: '#455157',
      fontSize: '14@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
    },
    text11: {
      color: '#3B3B48',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '19@s',
      width: '100%',
      marginTop: 15,
      marginLeft: 20,
    },
    text2: {
      color: '#455157',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    text22: {
      color: '#758DAC',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      width: '100%',
      marginTop: 4,
      marginLeft: 20,
    },
    text3: {
      color: '#FB595D',
      fontSize: '12@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      position: 'absolute',
      top: '20@s',
      right: '30@s',
    },
    text33: {
      color: '#FB595D',
      fontSize: '12@s',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      width: '100%',
      marginRight: 30,
    },
    smallContainer: {
      justifyContent: 'space-between',
      width: '60@s',
      height: '28@s',
    },
    coinContainer222: {
      width: '100%',
      height: '28@s',
      borderRadius: '50@s',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '12@ms',
      backgroundColor: '#EBEEF0',
    },
    coinImage: {
      height: '18@ms',
      width: '18@ms',
      marginTop: 2,
    },
    coinText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#758DAC',
      marginTop: 2,
    },
    smallText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      color: '#84BD47',
    },
    smallText1: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#323A3D',
    },
    smallText11: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#323A3D',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
