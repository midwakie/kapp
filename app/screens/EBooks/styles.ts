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
    container2: {
      paddingHorizontal: '20@s',
      marginTop: 10,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
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
      height: '33@s',
      marginBottom: 40,
      marginTop: 30,
      paddingHorizontal: '30@s',
    },
    gradientTextStyle: {
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    gridViewContainer: {
      marginTop: 20,
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    gridView: {
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: 138,
      height: 40,
      backgroundColor: '#EBEEF0',
    },
    gridText: {
      color: '#758DAC',
      textAlign: 'center',
      fontSize: '15@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    card: {
      height: 199,
      width: 158,
    },
    cardContainer: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardImage: {
      height: 118,
      width: '100%',
    },
    cardContent: {
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: 11,
      marginTop: 8,
    },
    title: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#2F4868',
      marginBottom: 4,
    },
    author: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      color: '#758DAC',
      marginBottom: 4,
    },
    price: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '700',
      color: '#03A0E3',
    },
  });

export default styles;
