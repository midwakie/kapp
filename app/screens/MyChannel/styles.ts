import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

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
    gradientTextStyleName: {
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      textAlign: 'center',
    },
    menuContainer: {
      marginLeft: '30@s',
      marginTop: '40@s',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    boxText: {
      fontSize: '16@ms',
      fontWeight: active ? '700' : '800',
      fontFamily: 'Nunito-Regular',
      alignSelf: 'center',
      color: active ? '#758DAC' : '#FFFFFF',
    },
    container1: {
      paddingHorizontal: '20@s',
      width: '100%',
      height: '100%',
      paddingBottom: 25,
      marginTop: '85@s',
    },
    container2: {
      width: '100%',
      height: '212@s',
      backgroundColor: '#EBEEF0',
    },
    profileImgContainer1: {
      width: '100%',
      marginTop: '12@s',
      paddingHorizontal: '12@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImgContainer0: {
      height: '102@s',
      width: '102@s',
      alignItems: 'center',
      marginTop: 40,
      justifyContent: 'center',
      borderColor: '#FECE32',
    },
    profileImgContainer2: {
      height: '41@s',
      width: '41@s',
      alignItems: 'center',
      marginTop: '15@s',
      justifyContent: 'center',
      borderColor: '#FECE32',
    },
    profileImg0: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    menuImage: {
      height: '20@s',
      width: '20@s',
      resizeMode: 'contain',
    },
    topImage: {
      height: '40@s',
      width: '40@s',
      marginRight: '15@s',
    },
    profileImg1: {
      height: '114@s',
      width: '100%',
      resizeMode: 'stretch',
    },
    profileImg2: {
      height: '50@s',
      width: '34.28@s',
      resizeMode: 'contain',
      position: 'absolute',
    },
    container5: {
      marginTop: 20,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 30,
      marginLeft: 17,
    },
    row1: {
      flexDirection: 'row',
      marginBottom: 30,
      marginHorizontal: '12@s',
    },
    containerSubTitle: {
      flexDirection: 'row',
      width: '237@s',
      justifyContent: 'space-between',
    },
    row3: {
      flexDirection: 'row',
      marginTop: '6@s',
    },
    text1: {
      color: '#3B3B48',
      fontSize: '16@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '22@s',
      width: '100%',
      marginTop: 40,
      marginLeft: 35,
    },
    text11: {
      color: '#3B3B48',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '19@s',
      marginTop: '15@s',
      marginLeft: '15@s',
    },
    text2: {
      color: '#03A0E3',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      width: '97@s',
      marginTop: 1,
      marginLeft: 35,
    },
    text22: {
      color: '#758DAC',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      marginTop: '1@s',
      marginLeft: '15@s',
    },
    text23: {
      color: '#758DAC',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      width: '30@s',
      marginLeft: 6,
    },
    text24: {
      color: '#758DAC',
      fontSize: '12@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '16@s',
      width: '100%',
      marginLeft: 6,
    },
    likeImage: {
      width: '16@s',
      height: '13.71@s',
      alignSelf: 'center',
      marginLeft: '16@s',
      marginTop: '2@s',
      tintColor: '#FF5E62',
    },
    icon: {
      width: '16@s',
      height: '13.71@s',
      alignSelf: 'center',
      marginLeft: '16@s',
      marginTop: '2@s',
    },
    icon2: {
      width: '16@s',
      height: '13.71@s',
      marginTop: '2@s',
      marginLeft: '20@s',
      tintColor: '#03A0E3',
    },
    icon3: {
      width: '16@s',
      height: '9.54@s',
      marginLeft: '20@s',
      marginTop: '2@s',
    },
    optionTitleStyle: {
      color: '#758DAC',
      fontSize: '14@s',
    },
    optionTitleStyleColor: {
      color: '#EC4D61',
      fontSize: '14@s',
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
