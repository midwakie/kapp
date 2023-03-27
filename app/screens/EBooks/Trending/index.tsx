/* eslint-disable @typescript-eslint/no-unused-vars */
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
  ActivityIndicator,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';
import { useQuery } from 'react-query';
import ApiConfig from 'app/config/api-config';

const Trending: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const [selectedFilter, setSelectedFilter] = useState('grid');

  const { isLoading, data } = useQuery('books', async () => {
    try {
      const response = await fetch(ApiConfig.BASE_URL2 + ApiConfig.BOOK);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (catchError: any) {
      console.error(catchError);
    }
  });

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
              <Image
                source={{ uri: ApiConfig.BASE_ASSET_URL + book.img }}
                style={styles(direction).cardImage}
              />
              <View style={styles(direction).cardContent}>
                <Text style={styles(direction).title} numberOfLines={1}>
                  {book.title}
                </Text>
                <Text style={styles(direction).author}>{book.author}</Text>
                <Text style={styles(direction).price}>{book.price}</Text>
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
            NavigationService.navigate('EbookDetail');
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
                  source={{ uri: ApiConfig.BASE_ASSET_URL + book.img }}
                  style={styles(direction).cardListImage}
                />
                <View style={styles(direction).cardListContent}>
                  <Text style={styles(direction).title} numberOfLines={1}>
                    {book.title}
                  </Text>
                  <Text style={styles(direction).author}>{book.author}</Text>
                </View>
              </View>
              <Text style={styles(direction).priceListStyle}>{book.price}</Text>
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
            {isLoading ? (
              <ActivityIndicator size="large" color="#03A0E3" />
            ) : (
              <View style={styles(direction).cardContainer}>
                {selectedFilter === 'grid' ? (
                  currentOrientation === 'portrait' ? (
                    <FlatList
                      numColumns={Math.floor(
                        Dimensions.get('window').width / ms(158),
                      )}
                      key={'_'}
                      keyExtractor={item => '_' + item.id}
                      data={data.books}
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
                      data={data.books}
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
                    data={data.books}
                    renderItem={({ item }) => {
                      return <CardListItem book={item} />;
                    }}
                  />
                )}
              </View>
            )}
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
                text={t('Trending')}
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
export default Trending;
