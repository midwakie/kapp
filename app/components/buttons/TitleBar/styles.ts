import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#EBEEF0',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  leftContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10@s',
    marginTop: '20@s',
    marginBottom: '30@s',
  },
  middleContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20@s',
    marginBottom: '30@s',
  },
  rightContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '20@s',
    marginTop: '20@s',
    marginBottom: '30@s',
  },
});

export default styles;
