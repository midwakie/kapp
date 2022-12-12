/* eslint-disable @typescript-eslint/no-unused-vars */
import TitleBar from 'app/components/buttons/TitleBar';
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
const TestHardness: React.FC = () => {
  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeAreaView}>
        <TitleBar
          leftComponent={<View></View>}
          middleComponent={<View></View>}
          rightComponent={<View></View>}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default TestHardness;
