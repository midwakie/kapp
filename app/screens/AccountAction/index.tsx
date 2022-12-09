import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from 'app/navigation/NavigationService';
import { useTranslation } from 'react-i18next';
import RegularButton from 'app/components/buttons/RegularButton';
import Neumorphism from 'react-native-neumorphism';

const AccountAction: React.FC = () => {
  //   const { control } = useForm();
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.topContainer}>
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
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.itemTouchableOpacity}>
            <Image
              style={styles.itemImage}
              source={require('../../assets/linkChildAccount.png')}
            />
            <Text style={styles.textOne}>{t('Link Your Child Account')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.itemTouchableOpacity}>
            <Image
              style={styles.itemImage}
              source={require('../../assets/createChildAccount.png')}
            />
            <Text style={styles.textTwo}>{t('Create Your Child Account')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.itemTouchableOpacity}>
            <Image
              style={styles.itemImage}
              source={require('../../assets/createChildProfile.png')}
            />
            <Text style={styles.textThree}>
              {t('Create Your Child Profile')}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default AccountAction;
