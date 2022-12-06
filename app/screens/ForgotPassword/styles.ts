import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EBEEF0',
  },
  gradientTextStyle: {
    fontSize: 24,
    fontFamily: 'Nunito-Regular',
    fontWeight: '800',
  },
  gradientTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 33,
    marginBottom: 2,
    marginTop: 126,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginHorizontal: 29,
    marginTop: 49,
  },
  subTextContainer: {
    height: 38,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subText: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19,
    color: '#758DAC',
  },
  enterOtp: {
    width: '100%',
    // paddingHorizontal:50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 44,
  },

  container2: {
    paddingHorizontal: 30,
    marginTop: 2,
    width: '100%',
    height: '100%',
    paddingBottom: 25,
  },
  safeAreaView: { alignSelf: 'stretch' },

  bottomText: {
    color: '#758DAC',
    fontWeight: '600',
    fontSize: 12,
  },
  signUpButton: {
    color: '#03A0E3',
    fontSize: 12,
    fontWeight: '700',
    backgroundColor: 'transparent',
  },

  inputTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 60,
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
