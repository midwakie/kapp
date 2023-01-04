/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
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
  Dimensions,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';

const RecommendedVideos: React.FC = () => {
  const currentOrientation = useDeviceOrientation();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const books = [
    {
      id: 1,
      title: 'Cool Kids 5..',
      author: 'Jabir Qureshi',
      img: require('../../assets/video1.png'),
      imgTwo: require('../../assets/playButton.png'),
    },
    {
      id: 2,
      title: 'Cool Kids 5..',
      author: 'Jabir Qureshi',
      img: require('../../assets/video2.png'),
      imgTwo: require('../../assets/file.png'),
    },
    {
      id: 3,
      title: 'Cool Kids 5..',
      author: 'Jabir Qureshi',
      img: require('../../assets/video3.png'),
      imgTwo: require('../../assets/playButton.png'),
    },
    {
      id: 4,
      title: 'Cool Kids 5..',
      author: 'Jabir Qureshi',
      img: require('../../assets/video4.png'),
      imgTwo: require('../../assets/playButton.png'),
    },
    {
      id: 5,
      title: 'Cool Kids 5..',
      author: 'Jabir Qureshi',
      img: require('../../assets/video1.png'),
      imgTwo: require('../../assets/playButton.png'),
    },
    {
      id: 6,
      title: 'Cool Kids 5..',
      author: 'Jabir Qureshi',
      img: require('../../assets/video3.png'),
      imgTwo: require('../../assets/playButton.png'),
    },
  ];
  const CardItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).card}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#C6CEDA'}
                shapeType={'flat'}
                radius={scale(24)}>
                <View style={styles(direction).cardImageContainer}>
                  <Image
                    source={book.img}
                    style={styles(direction).cardImage}
                  />
                  <Image
                    source={book.imgTwo}
                    style={styles(direction).cardImageTwo}
                  />
                </View>
              </Neumorphism>
              <View style={styles(direction).cardContent}>
                <Text style={styles(direction).title} numberOfLines={1}>
                  {book.title}
                </Text>
                <Text style={styles(direction).author}>{book.author}</Text>
              </View>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles(direction).container} bounces={false}>
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
              text={t('Recommended Videos')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).cardContainer}>
            {currentOrientation === 'portrait' ? (
              <FlatList
                numColumns={Math.floor(
                  Dimensions.get('window').width / scale(158),
                )}
                key={'_'}
                keyExtractor={item => '_' + item.id}
                data={books}
                renderItem={({ item }) => {
                  return <CardItem book={item} />;
                }}
              />
            ) : (
              <FlatList
                key={'#'}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => '#' + item.id}
                numColumns={Math.floor(
                  Dimensions.get('window').width / scale(158),
                )}
                data={books}
                renderItem={({ item }) => {
                  return <CardItem book={item} />;
                }}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default RecommendedVideos;
