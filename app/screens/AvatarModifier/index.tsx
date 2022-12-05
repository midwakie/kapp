import React, { useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form';
import PlainButton from 'app/components/buttons/PlainButton';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';

const AvatarModifier: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).topContainer}>
            <RegularButton
              onPress={() => {
                NavigationService.goBack();
              }}
              icon={'arrow-back'}
              radius={38}
              height={38}
              width={38}
              colors={['#EBECF0', '#EBECF0']}
            />
            <PlainButton
              onPress={() => {}}
              style={styles(direction).skipButtonText}
              containerStyle={styles(direction).skipButtonContainer}
              text={t('Done')}
            />
          </View>
          <View style={styles(direction).neomorphContainer}>
            <View style={styles(direction).imageContainer}>
              <Image
                source={require('../../assets/avatarHolder.png')}
                style={styles(direction).imageStyle}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AvatarModifier;
