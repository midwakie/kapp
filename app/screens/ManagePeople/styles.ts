import { Dimensions } from 'react-native';
import { ms, scale, ScaledSheet } from 'react-native-size-matters';

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
      width: '97@s',
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
      marginTop: 50,
      width: '100%',
      height: '100%',
      marginBottom: 35,
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20@s',
    },
    searchIcon: {
      right: '20@s',
    },
    skipButtonText: {
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      fontWeight: '700',
      color: '#03A0E3',
      backgroundColor: 'transparent',
    },
    skipButtonContainer: {
      height: '50@s',
      paddingHorizontal: '5@s',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    cardListStyle: {
      paddingHorizontal: '20@s',
      paddingVertical: '15@s',
      height: '125@ms',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
    },
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    neomorphMargin: { margin: '10@ms' },
    cardImage: {
      height: '50@ms',
    },
    cardListImage: {
      height: '40@ms',
      width: '40@ms',
      borderRadius: '13@ms',
      margin: '5@ms',
    },
    cardListContent: {
      flexDirection: 'column',
      height: '100%',
      paddingTop: '20@ms',
      marginLeft: '13@ms',
    },
    cardRowContainerOne: {
      justifyContent: 'space-between',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardRowContainerTwo: {
      paddingLeft: '85@s',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    childName: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@ms',
      fontWeight: '600',
      color: '#323A3D',
    },
    student: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@ms',
      fontWeight: '600',
      color: '#758DAC',
    },
    childDetailContainer: {
      justifyContent: 'center',
      marginLeft: '10@s',
    },
    innerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default styles;
