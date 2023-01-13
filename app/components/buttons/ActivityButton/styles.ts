import { Dimensions } from 'react-native';
import { s, scale, ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;
const styles = ScaledSheet.create({
  neomorphContainer: {
    // borderWidth: 2,
    height: '50@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10@s',
    alignSelf: 'center',
  },
  textContainer: {
    width: width - s(60),
    paddingHorizontal: '20@s',
    backgroundColor: '#EBEEF0',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '50@s',
  },
  mainText: {
    fontWeight: '600',
    color: '#758DAC',
    fontFamily: 'Nunito-Regular',
    fontSize: '14@s',
  },
  buttonText: {
    color: '#03A0E3',
    fontWeight: '600',
    fontFamily: 'Nunito-Regular',
    fontSize: '14@s',
  },
});

export default styles;
