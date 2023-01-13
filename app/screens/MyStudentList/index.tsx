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

const MyStudentList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();

  const details = [
    {
      id: 1,
      name: 'Abeer Shaikh',
      subject: 'English',
      img: require('../../assets/studentList1.png'),
    },
    {
      id: 2,
      name: 'Ahmad Ali',
      subject: 'Malayalam',
      img: require('../../assets/studentList2.png'),
    },
    {
      id: 3,
      name: 'Amira Qureshi',
      subject: 'Tamil',
      img: require('../../assets/studentList3.png'),
    },
    {
      id: 4,
      name: 'Farida Qtaishat',
      subject: 'Urdu',
      img: require('../../assets/studentList1.png'),
    },
    {
      id: 5,
      name: 'Mohammed Rasool',
      subject: 'Maths',
      img: require('../../assets/studentList2.png'),
    },
    {
      id: 6,
      name: 'Amira Qureshi',
      subject: 'Sports and Health',
      img: require('../../assets/studentList3.png'),
    },
    {
      id: 7,
      name: 'Saba Qamar',
      subject: 'Science',
      img: require('../../assets/studentList1.png'),
    },
  ];

  const CardListItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('BookDetails');
          }}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).cardListStyle}>
              <View style={styles(direction).innerDirection}>
                <Image
                  source={book.img}
                  style={styles(direction).cardListImage}
                />
                <View style={styles(direction).cardListContent}>
                  <Text style={styles(direction).title} numberOfLines={1}>
                    {book.subject}
                  </Text>
                  <Text style={styles(direction).author}>{book.name}</Text>
                </View>
              </View>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).gridViewContainer}>
            <Neumorphism
              lightColor={'#FEFEFF'}
              darkColor={'#C6CEDA'}
              shapeType={'flat'}
              radius={scale(8)}>
              <View style={styles(direction).cardListStyleTwo}>
                <Text style={styles(direction).gridText}>
                  {t('All Class Room Channels')}
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
          <ScrollView style={styles(direction).container} bounces={false}>
            <View style={styles(direction).cardContainer}>
              <FlatList
                numColumns={1}
                key={'-'}
                keyExtractor={item => '-' + item.id}
                data={details}
                renderItem={({ item }) => {
                  return <CardListItem book={item} />;
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
export default MyStudentList;
