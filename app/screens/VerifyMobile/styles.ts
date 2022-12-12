import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EBEEF0',
  },
  safeAreaView: { alignSelf: 'stretch' },
  container2: {
    paddingHorizontal: '30@s',
    marginTop: '2@s',
    width: '100%',
    height: '100%',
    paddingBottom: '25@s',
  },
  gradientTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 44,
    marginTop: 195,
  },
  gradientTextStyle: {
    fontSize: '24@s',
    fontFamily: 'Nunito-Regular',
    fontWeight: '800',
  },
  subTextStyle: {
    color: '#758DAC',
    fontSize: '14@s',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2,
    fontFamily: 'Nunito-Regular',
  },
  subText2Style: {
    color: '#03A0E3',
    fontSize: '12@s',
    fontWeight: '600',
    marginTop: 18,
    marginBottom: 44,
    fontFamily: 'Nunito-Regular',
  },
  inputTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  bottomContainer: {
    height: '20@s',
    width: width - 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },
  bottomText: {
    color: '#758DAC',
    fontWeight: '600',
    fontSize: '12@s',
    fontFamily: 'Nunito-Regular',
  },
  signUpButton: {
    color: '#03A0E3',
    fontSize: '12@s',
    fontWeight: '700',
    backgroundColor: 'transparent',
    fontFamily: 'Nunito-Regular',
  },
  signUpButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20@s',
  },
});

export default styles;
