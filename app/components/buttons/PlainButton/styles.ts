import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 50,
    height: 50,
    width: '100%',
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: '#FFFFFF',
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
    backgroundColor: '#0DB1F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0DB1F2',
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 50,
  },
  touchableOpacity: {
    height: 50,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    fontWeight: '400',
    color: '#03A0E3',
    backgroundColor: 'transparent',
  },
});

export default styles;
