import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  horizontal: (stroke: any, opacity: any, width: any, color: any) => ({
    backgroundColor: color,
    height: stroke,
    width: width,
    opacity: opacity,
  }),
});

export default styles;
