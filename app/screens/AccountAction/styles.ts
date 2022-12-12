import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EBEEF0',
  },
  safeAreaView: {
    alignSelf: 'stretch',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
    marginLeft: '20@s',
    marginTop: '40@ms',
    position: 'absolute',
    zIndex: 20,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '30@s',
    width: '100%',
    marginTop: 70,
  },
  itemTouchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  itemImage: {
    height: '140@ms',
    width: '140@ms',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  textOne: {
    textAlign: 'center',
    color: '#EC4D61',
    fontSize: '18@s',
    fontWeight: '700',
    fontFamily: 'Nunito-Regular',
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '30@s',
    width: '100%',
    marginTop: 50,
  },
  textTwo: {
    textAlign: 'center',
    color: '#84BD47',
    fontSize: '18@s',
    fontWeight: '700',
    fontFamily: 'Nunito-Regular',
  },
  container4: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '30@s',
    width: '100%',
    marginTop: 50,
    marginBottom: 50,
  },
  textThree: {
    textAlign: 'center',
    color: '#2AA7DD',
    fontSize: '18@s',
    fontWeight: '700',
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
