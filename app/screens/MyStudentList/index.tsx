/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextStyle,
  View,
  Image,
  FlatList,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import HorizontalLine from 'app/components/lines/HorizontalLine';

const MyStudentList: React.FC = () => {
  const { control } = useForm();

  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const details = [
    {
      id: 1,
      Name: 'Abeer Shaikh',
      Subject: 'English',
      img: require('../../assets/studentList1.png'),
    },
    {
      id: 2,
      Name: 'Ahmad Ali',
      Subject: 'Urdu',

      img: require('../../assets/studentList2.png'),
    },
    {
      id: 3,
      Name: 'Amira Qureshi',
      Subject: 'Sport And Health',
      img: require('../../assets/studentList3.png'),
    },
    {
      id: 4,
      Name: 'Farida Qtaishat',
      Subject: 'Maths',

      img: require('../../assets/studentList1.png'),
    },
    {
      id: 5,
      Name: 'Mohammed Rasool',
      Subject: 'Science',

      img: require('../../assets/studentList2.png'),
    },
    {
      id: 6,
      Name: 'Saba Qamar',
      Subject: 'English',

      img: require('../../assets/studentList3.png'),
    },
  ];
  const CardListItem = ({ details }: any) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Neumorphism
          lightColor={'#ffffff'}
          darkColor={'#A8A8A8'}
          shapeType={'flat'}
          style={styles(direction).neomorphContainer2}
          radius={scale(14)}>
          <TouchableOpacity>
            <View style={styles(direction).containerRectangle}>
              <View style={styles(direction).imageContainer}>
                <Image
                  style={styles(direction).imageStyle}
                  source={details.img}
                />
              </View>
              <View style={styles(direction).detailsContainer}>
                <Text style={styles(direction).nameText}>{details.Name}</Text>
                <Text style={styles(direction).subjectText}>
                  {details.Subject}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Neumorphism>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              style={styles(direction).neomorphContainer1}
              radius={scale(14)}>
              <View style={styles(direction).containerRectangle1}>
                <Text style={styles(direction).text1}>
                  {t('All Class Room Channels')}
                </Text>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(38)}>
                  <TouchableOpacity
                    onPress={() => {
                      NavigationService.navigate('ClassFilter');
                    }}>
                    <View style={styles(direction).filterView}>
                      <Image
                        source={require('../../assets/filterImage.png')}></Image>
                    </View>
                  </TouchableOpacity>
                </Neumorphism>
              </View>
            </Neumorphism>

            <FlatList
              numColumns={1}
              key={'-'}
              keyExtractor={item => '-' + item.id}
              data={details}
              renderItem={({ item }) => {
                return <CardListItem details={item} />;
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
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
