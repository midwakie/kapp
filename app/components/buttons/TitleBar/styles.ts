import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#EBEEF0',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '110@ms',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    shadowColor: 'rgba(94, 94, 94, 0.25)',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 20,
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
