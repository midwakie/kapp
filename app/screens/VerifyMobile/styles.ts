import { Dimensions, StyleSheet } from 'react-native';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E5E5',
  },
  container2: {
    paddingHorizontal: 30,
    marginTop: 2,
    width: '100%',
    height: '100%',
    paddingBottom: 25,
  },
  safeAreaView: { alignSelf: 'stretch' },
  gradientTextStyle: {
    fontSize: 24,
    fontFamily: 'Nunito-Regular',
    fontWeight: '800',
  },
  gradientTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 44,
    marginTop: 195,
  },
  inputTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  labelTextContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: 20,
    width: width - 60,
  },
  forgotPasswordContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 39,
  },
  forgotPassword: {
    color: '#FE4C3E',
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: 'transparent',
  },
  rightComponent: { right: 20, position: 'absolute' },
  imageStyle: {
    justifyContent: 'center',
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  imageContainer: {
    width: 118,
    height: 118,
    borderRadius: 118,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DADEE0',
  },
  neomorphContainer: {
    marginTop: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    height: 20,
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
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
  },
  signUpButton: {
    color: '#03A0E3',
    fontSize: 12,
    fontWeight: '700',
    backgroundColor: 'transparent',
    fontFamily: 'Nunito-Regular',
  },
  signUpButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
  },
  subTextStyle: {
    color: '#758DAC',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 19,
    fontFamily: 'Nunito-Regular',
  },
  subText2Style: {
    color: '#03A0E3',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 18,
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
