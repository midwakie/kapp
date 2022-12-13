import React, { useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView, View } from 'react-native';

const BookDetails: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Book Details')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default BookDetails;
