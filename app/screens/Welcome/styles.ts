import { color } from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#EBEEF0',
  },
  neomorphContainer: {
    marginTop: 178,
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50@s',
  },
  imageContainer: {
    width: '234@s',
    height: '234@s',
    borderRadius: '234@s',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF0',
  },
  imageStyle: {
    justifyContent: 'center',
    resizeMode: 'contain',
    width: '110.44@s',
    height: '117.25@s',
  },
  imageInnerStyle: {
    justifyContent: 'center',
    resizeMode: 'contain',
    width: '100@s',
    height: '100@s',
    position: 'absolute',
  },
  titleText: {
    marginTop: 67,
    width: '100%',
    textAlign: 'center',
    color: '#03A0E3',
    fontFamily: 'Nunito-Regular',
    fontWeight: '600',
    fontSize: '34@s',
  },
  subTitleText: {
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
    color: '#758DAC',
    fontFamily: 'Nunito-Regular',
    fontWeight: '600',
    fontSize: '16@s',
  },
});

export default styles;
