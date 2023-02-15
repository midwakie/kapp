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
      zIndex: -10,
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
      marginTop: 30,
      width: '100%',
      height: '100%',
      paddingHorizontal: '20@s',
    },
    container3: {
      width: '100%',
      paddingVertical: 20,
      backgroundColor: '#EBEEF0',
    },
    container4: {
      flexDirection: 'row',
      marginBottom: 6,
      justifyContent: 'space-between',
      paddingLeft: '25@s',
    },
    progressBarContainer: {
      alignContent: 'center',
      marginBottom: '10@s',
      // borderWidth: 2,
      flexDirection: 'row',
      width: '50%',

      paddingHorizontal: '25@s',
    },
    percentageText: {
      marginLeft: 10,
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '10@s',
      lineHeight: '14@s',
      color: '#3B3B48',
    },
    container5: {
      flexDirection: 'row',
      marginBottom: '15@s',
      paddingLeft: '25@s',
      paddingRight: '19@s',
    },
    container6: {
      alignContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '25@s',
      flexDirection: 'row',
    },
    parentImage: { height: '30@s', width: '30@s', resizeMode: 'contain' },
    parentText: {
      marginLeft: '20@s',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      lineHeight: '19@s',
      color: '#455157',
    },
    neomorphContainer: {
      marginBottom: 20,
    },
    text1: {
      color: '#03A0E3',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      width: '159@s',
      height: '19@s',
    },
    text2: {
      color: '#455157',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      height: '19@s',
      width: '74@s',
      marginRight: '21@s',
    },
    text3: {
      color: '#758DAC',
      fontSize: '14@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      letterSpacing: 0.005,
      width: '100%',
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
  });

export default styles;
