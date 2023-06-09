import React, { useEffect, useState } from 'react';
import styles from '../styles';
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

const Biology: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const [selectedFilter, setSelectedFilter] = useState('grid');
  const books = [
    {
      id: 1,
      title: 'Kung Fu Panda',
      author: 'By Martin Luther',
      price: '$15.30',
      img: require('../../../assets/sampleImageOne.png'),
    },
    {
      id: 2,
      title: 'Happy Lemon',
      author: 'By Abhishek',
      price: '$20.30',
      img: require('../../../assets/sampleImageTwo.png'),
    },
    {
      id: 3,
      title: 'Billy & Shmilli',
      author: 'By Harish S',
      price: '$25.30',
      img: require('../../../assets/sampleImageOne.png'),
    },
    {
      id: 4,
      title: 'Story Book',
      author: 'By Anil Bose',
      price: '$10.30',
      img: require('../../../assets/sampleImageTwo.png'),
    },
    {
      id: 5,
      title: 'Journey of the Star',
      author: 'By Sijin',
      price: '$15.30',
      img: require('../../../assets/sampleImageOne.png'),
    },
    {
      id: 6,
      title: 'Nasa Boy',
      author: 'By Rashid ',
      price: '$35.30',
      img: require('../../../assets/sampleImageTwo.png'),
    },
    {
      id: 7,
      title: 'Sample Text',
      author: 'By Shiva',
      price: '$30.30',
      img: require('../../../assets/sampleImageOne.png'),
    },
    {
      id: 8,
      title: 'Cool Kids 5',
      author: 'By Tibu PS',
      price: '$45.30',
      img: require('../../../assets/sampleImageTwo.png'),
    },
  ];
  const dropDown = () => {
    if (selectedFilter === 'grid') {
      setSelectedFilter('list');
    } else {
      setSelectedFilter('grid');
    }
  };

  const CardItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('EbookDetail');
          }}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).card}>
              <Image style={styles(direction).image} source={book.img} />
              <View style={styles(direction).bookNameContainer}>
                <Text style={styles(direction).bookTitle}>{book.title}</Text>
                <Text style={styles(direction).author}>{book.author}</Text>
                <Text style={styles(direction).bookPrice}>{book.price}</Text>
              </View>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };

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
                    {book.title}
                  </Text>
                  <Text style={styles(direction).author}>{book.author}</Text>
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
              <TouchableOpacity
                onPress={dropDown}
                style={styles(direction).gridView}>
                <Text style={styles(direction).gridText}>
                  {selectedFilter === 'grid' ? 'List View' : 'Grid View'}
                </Text>
                {selectedFilter === 'grid' ? (
                  <MaterialIcon
                    name={'view-list'}
                    size={scale(20)}
                    color={'#000000'}
                  />
                ) : (
                  <MaterialIcon
                    name={'view-grid'}
                    size={scale(20)}
                    color={'#000000'}
                  />
                )}
              </TouchableOpacity>
            </Neumorphism>
          </View>
          <ScrollView style={styles(direction).container} bounces={false}>
            <View style={styles(direction).cardContainer}>
              {selectedFilter === 'grid' ? (
                currentOrientation === 'portrait' ? (
                  <FlatList
                    numColumns={Math.floor(
                      Dimensions.get('window').width / ms(158),
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
                    keyExtractor={item => '#' + item.id}
                    numColumns={Math.floor(
                      Dimensions.get('window').width / ms(158),
                    )}
                    data={books}
                    renderItem={({ item }) => {
                      return <CardItem book={item} />;
                    }}
                  />
                )
              ) : (
                <FlatList
                  numColumns={1}
                  key={'-'}
                  keyExtractor={item => '-' + item.id}
                  data={books}
                  renderItem={({ item }) => {
                    return <CardListItem book={item} />;
                  }}
                />
              )}
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
                text={t('Biology')}
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
export default Biology;
