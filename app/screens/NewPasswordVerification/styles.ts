import { Dimensions, StyleSheet } from 'react-native';
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
  ncontainer: {
    backgroundColor: '#777',
    height: 50,
    borderRadius: 50,
  },
  safeAreaView: { alignSelf: 'stretch' },
  container2: {
    paddingHorizontal: '30@s',
    marginTop: 2,
    width: '100%',
    height: '100%',
    paddingBottom: 25,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
  },
  gradientTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 44,
    marginTop: 117,
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
    marginBottom: '20@s',
    width: width - 60,
  },
  forgotPasswordContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '39@s',
  },
  forgotPassword: {
    color: '#FE4C3E',
    textAlign: 'right',
    fontSize: '12@s',
    fontWeight: '600',
    backgroundColor: 'transparent',
  },
  rightComponent: { right: '20@s', position: 'absolute' },
  imageStyle: {
    justifyContent: 'center',
    resizeMode: 'contain',
    width: '100@s',
    height: '100@s',
  },
  imageContainer: {
    width: '118@s',
    height: '118@s',
    borderRadius: '118@s',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF0',
  },
  neomorphContainer: {
    marginTop: '52@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    height: '20@s',
    width: width - 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '30@s',
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
  },
  signUpButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20@s',
  },
  
  
});

export default styles;
