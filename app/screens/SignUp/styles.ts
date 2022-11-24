import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  login: {
    padding: 8,
  },
  orLogin: {
    paddingTop: 20,
  },
  newToHM: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  loginTitle: {
    paddingHorizontal: 30,
    width: '100%',
    textAlign: 'left',
    fontSize: 32,
    fontWeight: 'bold',
  },
  forgot: {
    marginVertical: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  imageStyle: {
    marginBottom: 30,
    justifyContent: 'center',
    resizeMode: 'contain',
    width: Dimensions.get('screen').width,
    height: 250,
  },
  socialImageStyle: {
    justifyContent: 'center',
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  loginButtonStyle: {
    width: '80%',
    borderRadius: 12,
    marginVertical: 20,
  },
  socialContainer: {
    marginTop: 30,
    flexDirection: 'row',
    width: '85%',
    height: 50,
    justifyContent: 'space-between',
  },
  itemContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderColor: '#CCCCCC',
  },
});

export default styles;
