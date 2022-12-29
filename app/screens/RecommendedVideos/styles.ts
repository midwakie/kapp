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
      paddingHorizontal: '10@ms',
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
    neomorphMargin: { margin: '10@ms' },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '203@ms',
      width: '153@ms',
      backgroundColor: '#EBEEF0',
    },
    cardImageContainer: {
      borderRadius: 24,
      height: 123,
      width: 123,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardImage: {
      resizeMode: 'contain',
      height: '114@ms',
      width: '114@ms',
    },
    cardImageTwo: {
      resizeMode: 'contain',
      position: 'absolute',
      width: '50@s',
      height: '50@s',
    },
    cardContent: {
      flexDirection: 'column',
      marginTop: 13,
    },
    title: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@ms',
      fontWeight: '600',
      color: '#2F4868',
      marginBottom: 4,
    },
    author: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@ms',
      fontWeight: '600',
      color: '#03A0E3',
    },
  });

export default styles;
