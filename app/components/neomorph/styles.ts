import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inner: (
    width: number,
    height: number,
    radius: number,
    fillColor: string,
  ) => ({
    backgroundColor: fillColor || '#EBEEF0',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: fillColor || '#E5E5E5',
    borderWidth: 1,
    width: width || 40,
    height: height || 40,
    borderRadius: radius || 40 / 2,
  }),
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
});

export default styles;
