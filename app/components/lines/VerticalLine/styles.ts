import { StyleSheet } from 'react-native';

const styles = (stroke: any, opacity: any, height: any, color: any) =>
  StyleSheet.create({
    vertical: {
      backgroundColor: color,
      height: height,
      width: stroke,
      opacity: opacity,
    },
  });

export default styles;
