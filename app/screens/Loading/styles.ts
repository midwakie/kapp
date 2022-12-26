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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF0',
  },
  neomorphContainer: {
    marginTop: '50@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50@s',
  },
  imageContainer: {
    width: '118@s',
    height: '118@s',
    borderRadius: '118@s',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF0',
  },
  imageStyle: {
    justifyContent: 'center',
    resizeMode: 'contain',
    width: '78.59@s',
    height: '95.03@s',
  },
});

export default styles;
