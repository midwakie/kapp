import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import ProgressBar from 'app/components/ProgressBar';

const ActivitiesWork: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [data, setData] = useState([
    {
      id: 1,
      activityTitle: 'Easy Math Book Reading',
      description:
        'Lorem Ipsum available, but the majority. There are many variations of passages.This is some additional text that will be displayed when the "More" button is clicked.',
      endDate: '1 Day to go',
      bookName: 'Math starter kit',
      expanded: false,
      percentage: '65%',
      img: require('../../assets/parentTwo.png'),
      parent: 'Fatima Shaikh',
    },
    {
      id: 2,
      activityTitle: 'Science Fiction Book Read..',
      description:
        'Lorem Ipsum available, but the majority. There are many variations of passages.This is some additional text that will be displayed when the "More" button is clicked.',
      endDate: '1 Day to go',
      bookName: 'Math starter kit',
      percentage: '80%',
      expanded: false,
      img: require('../../assets/parentOne.png'),
      parent: 'Fatima Shaikh',
    },
    {
      id: 3,
      activityTitle: 'Sports & Health',
      description:
        'Lorem Ipsum available, but the majority. There are many variations of passages.This is some additional text that will be displayed when the "More" button is clicked.',
      endDate: '1 Day to go',
      bookName: 'Math starter kit',
      percentage: '90%',
      expanded: false,
      img: require('../../assets/parentTwo.png'),
      parent: 'Fatima Shaikh',
    },
    {
      id: 4,
      activityTitle: 'Easy Math Book Reading',
      description:
        'Lorem Ipsum available, but the majority. There are many variations of passages.This is some additional text that will be displayed when the "More" button is clicked.',
      endDate: '1 Day to go',
      bookName: 'Math starter kit',
      percentage: '50%',
      expanded: false,
      img: require('../../assets/parentOne.png'),
      parent: 'Fatima Shaikh',
    },
  ]);
  const handleExpand = (id: number) => {
    setData(prevData =>
      prevData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            expanded: !item.expanded,
          };
        }
        return item;
      }),
    );
  };
  return (
    <>
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
              colors={['#03A0E3', '#0D93CD']}
              text={t('Activities Work')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            {data.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.navigate('ManageActivitiesDetail');
                  }}
                  key={item.id}
                  style={styles(direction).neomorphContainer}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).container3}>
                      <View style={styles(direction).container4}>
                        <Text
                          style={
                            item.id === 2
                              ? styles(direction).text4
                              : item.id === 3
                              ? styles(direction).text6
                              : styles(direction).text1
                          }>
                          {item.activityTitle}
                        </Text>
                        <Text style={styles(direction).text2}>
                          {item.endDate}
                        </Text>
                      </View>
                      <View style={styles(direction).progressBarContainer}>
                        <ProgressBar percentage={item.percentage} />
                        <Text style={styles(direction).percentageText}>
                          {item.percentage}
                        </Text>
                      </View>
                      <View style={styles(direction).container5}>
                        <Text style={styles(direction).text3}>
                          {!item.expanded && item.description.slice(0, 70)}
                          {!item.expanded && (
                            <Text
                              style={{ color: '#03A0E3' }}
                              onPress={() => handleExpand(item.id)}>
                              more
                            </Text>
                          )}
                          {item.expanded && item.description}
                          {item.expanded && (
                            <Text
                              style={{ color: '#03A0E3' }}
                              onPress={() => handleExpand(item.id)}>
                              less
                            </Text>
                          )}
                        </Text>
                      </View>
                      <View style={styles(direction).container6}>
                        <Image
                          source={item.img}
                          style={styles(direction).parentImage}
                        />
                        <Text style={styles(direction).parentText}>
                          {item.parent}
                        </Text>
                      </View>
                    </View>
                  </Neumorphism>
                </TouchableOpacity>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default ActivitiesWork;
