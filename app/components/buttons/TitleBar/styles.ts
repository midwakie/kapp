import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#EBEEF0',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '110@ms',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 25,
  },
  leftContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
