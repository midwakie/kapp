import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
const width = Dimensions.get('window').width;
const styles = ScaledSheet.create({
  container: {
    width: width,
    height: '70@ms',
    flexDirection: 'row',
    backgroundColor: '#EBEEF0',
  },
  bg: {
    width: width,
    height: '70@s',
    position: 'absolute',
    resizeMode: 'stretch',
  },
  leftContainer: {
    flex: 2,
  },
  middleContainer: {
    flex: 6,
  },
  rightContainer: {
    flex: 2,
  },
});

export default styles;
