import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EBEEF0',
  },
  safeAreaView: { alignSelf: 'stretch' },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginHorizontal: '29@s',
    marginTop: 40,
  },
  container2: {
    paddingHorizontal: '30@s',
    marginTop: 2,
    width: '100%',
    height: '100%',
    paddingBottom: 25,
  },
  gradientTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '33@s',
    marginBottom: 2,
    marginTop: 117,
  },
  gradientTextStyle: {
    fontSize: '24@s',
    fontFamily: 'Nunito-Regular',
    fontWeight: '800',
  },
  subTextContainer: {
    height: '18@s',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '20@s',
  },
  subText: {
    fontSize: '12@s',
    fontWeight: '500',
    fontFamily: 'Nunito-Regular',
    // lineHeight: 19,
    color: '#758DAC',
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
