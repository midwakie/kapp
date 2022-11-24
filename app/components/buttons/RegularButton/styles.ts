import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  touchableOpacity: (radius: any, height: any, width: any) => ({
    borderRadius: radius,
    height: height,
    width: width,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default styles;
