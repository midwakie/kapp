import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  vertical: (stroke: any, opacity: any, height: any, color: any) => ({
    backgroundColor: color,
    height: height,
    width: stroke,
    opacity: opacity,
  }),
});

export default styles;
