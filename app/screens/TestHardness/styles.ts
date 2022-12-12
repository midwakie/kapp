import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EBEEF0',
  },
  safeAreaView: { alignSelf: 'stretch' },
  container2: {
    paddingHorizontal: '30@s',
    marginTop: 2,
    width: '100%',
    height: '100%',
    paddingBottom: '25@s',
  },
  gradientTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25@s',
    marginBottom: 10,
    marginTop: 145,
  },
  gradientTextStyle: {
    fontSize: '18@s',
    fontFamily: 'Nunito-Regular',
    fontWeight: '700',
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '18@s',
    marginBottom: 79,
  },
  textStyle: {
    fontSize: '12@s',
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
    color: '#758DAC',
  },
  radioButtonContainer: {
    borderRadius: '14@s',
    height: '142@s',
    width: '100%',
    marginBottom: 60,
  },
  radioButtonViewContainer: {
    borderRadius: '14@s',
    height: '142@s',
    width: '100%',
    backgroundColor: '#EBEEF0',
  },
  rButtonContainer: { justifyContent: 'center', height: '70@s' },
  radioLabel: {
    fontFamily: 'Nunito-Regular',
    fontSize: '16@s',
    fontWeight: '600',
  },
});

export default styles;
