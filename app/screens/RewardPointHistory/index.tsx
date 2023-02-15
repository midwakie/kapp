/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextStyle,
  TouchableWithoutFeedback,
  Alert,
  Dimensions,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';

const RewardPointHistory: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();

  const reward = [
    {
      id: 1,
      name: 'Purchased Book Dream Astronaut',
      subject: 'Product ID:236548',
      date: '28 Oct 2020, 11:30 AM',
      balance: '450',
      reward: '100',
      status: 'used',
    },
    {
      id: 2,
      name: 'Earned by Bok Reading ',
      subject: 'Dream Story',
      date: '20 Oct 2020, 5:30 PM',
      balance: '350',
      reward: '150',
      status: 'earned',
    },
    {
      id: 3,
      name: 'Purchased Toy Lion King',
      subject: 'Product ID:365401',
      date: '20 Oct 2020, 5:30 PM',
      balance: '250',
      reward: '100',
      status: 'used',
    },
  ];

  const CardListItem = ({ history }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <Neumorphism
          style={styles(direction).neomorphMargin}
          lightColor={'#ffffff'}
          darkColor={'#C6CEDA'}
          shapeType={'flat'}
          radius={scale(14)}>
          <View style={styles(direction).cardListStyle}>
            <View style={styles(direction).productContainer}>
              <Text style={styles(direction).productText}>{history.name}</Text>
              <Text
                style={
                  history.status === 'used'
                    ? styles(direction).rewardOne
                    : styles(direction).rewardTwo
                }>
                {history.status === 'used' ? '-' : '+'}
                {history.reward}
              </Text>
            </View>
            <Text style={styles(direction).productTextTwo}>
              {history.subject}
            </Text>
            <Text style={styles(direction).productDetailsText}>
              {history.date}
            </Text>
            <Text style={styles(direction).productDetailsText}>
              Closing Balance:
              {history.balance}
            </Text>
          </View>
        </Neumorphism>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <ScrollView style={styles(direction).container} bounces={false}>
            <View style={styles(direction).rewardPoint}>
              <View style={styles(direction).coinContainer}>
                <Image
                  source={require('../../assets/coin.png')}
                  style={styles(direction).coin}
                />
                <Text style={styles(direction).coinText}>450</Text>
              </View>
              <Text style={styles(direction).rewardText}>
                Your available reward points
              </Text>
            </View>
            <View style={styles(direction).gridViewContainer}>
              <Neumorphism
                lightColor={'#FEFEFF'}
                darkColor={'#C6CEDA'}
                shapeType={'flat'}
                radius={scale(8)}>
                <View style={styles(direction).cardListStyleTwo}>
                  <Text style={styles(direction).gridText}>
                    {t('Recent Transactions')}
                  </Text>
                  <Neumorphism
                    lightColor={'#FEFEFF'}
                    darkColor={'#C6CEDA'}
                    shapeType={'flat'}
                    radius={scale(38)}>
                    <TouchableOpacity
                      onPress={() => NavigationService.navigate('ClassFilter')}>
                      <View style={styles(direction).filterViewContainer}>
                        <Image
                          source={require('../../assets/filterImage.png')}
                          style={styles(direction).filterImage}
                        />
                      </View>
                    </TouchableOpacity>
                  </Neumorphism>
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).cardContainer}>
              <FlatList
                numColumns={1}
                key={'-'}
                keyExtractor={item => '-' + item.id}
                data={reward}
                renderItem={({ item }) => {
                  return <CardListItem history={item} />;
                }}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          leftComponent={
            <View style={styles(direction).topContainer}>
              <Image
                source={require('../../assets/toppic.png')}
                style={styles(direction).topImage}
              />
            </View>
          }
          middleComponent={
            <View style={styles(direction).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Students')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
            </View>
          }
        />
      </View>
    </>
  );
};
export default RewardPointHistory;
