import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E5E5',
  },
  loaderContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    paddingHorizontal: 30,
    marginTop: 2,
    width: '100%',
    height: '100%',
    paddingBottom: 25,
  },
  safeAreaView: { alignSelf: 'stretch' },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topShadow: {
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowColor: '#FDFDFD',
  },
  bottomShadow: {
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowColor: '#A8A8A8',
  },
  inner: {
    backgroundColor: '#EBEEF0',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EBEEF0',
    borderWidth: 1,
    width: '100%',
    // height: 200,
    borderRadius: 14,
  },
  touchableOpacity: {
    borderRadius: 14,
    // height: 200,
    width: '100%',
    backgroundColor: '#EBEEF0',
  },
  gradientTextStyle: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    fontWeight: '700',
  },
  gradientTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    marginBottom: 10,
    marginTop: 145,
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    marginBottom: 79,
  },
  textStyle: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
    color: '#758DAC',
  },
  radioButtonContainer: {
    borderRadius: 14,
    // height: 200,
    width: '100%',
    marginBottom: 60,
  },
  rButtonContainer: { paddingVertical: 25 },
  radioLabel: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
