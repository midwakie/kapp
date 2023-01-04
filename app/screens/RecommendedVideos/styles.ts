import { Dimensions } from 'react-native';
import { ms, scale, ScaledSheet } from 'react-native-size-matters';
import { all } from 'redux-saga/effects';

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
      width: '255@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      paddingHorizontal: '30@s',
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    cardContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    neomorphMargin: { margin: '10@s' },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '203@s',
      width: '153@s',
      backgroundColor: '#EBEEF0',
    },
    cardImageContainer: {
      borderRadius: '24@s',
      height: '123@s',
      width: '123@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardImage: {
      resizeMode: 'cover',
      height: '123@s',
      width: '123@s',
      borderRadius: '24@s',
    },
    cardImageTwo: {
      resizeMode: 'contain',
      position: 'absolute',
      width: '50@s',
      height: '50@s',
    },
    cardContent: {
      flexDirection: 'column',
      marginTop: '13@s',
    },
    title: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '600',
      color: '#2F4868',
      marginBottom: 4,
    },
    author: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#03A0E3',
    },
  });

export default styles;
