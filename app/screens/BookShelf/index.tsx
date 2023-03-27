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
  ActivityIndicator,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ms, scale } from 'react-native-size-matters';
import ProgressBar from 'app/components/ProgressBar';
import { useQuery } from 'react-query';
import ApiConfig from 'app/config/api-config';

const BookShelf: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

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
              </View>
              <View style={styles(direction).progressBarContainer}>
                <ProgressBar percentage={book.percentage} />
                <Text style={styles(direction).percentageText}>
                  {book.percentage}
                </Text>
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
        <ScrollView style={styles(direction).container} bounces={false}>
          <View style={styles(direction).container2}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#03A0E3" />
            ) : (
              <View style={styles(direction).cardContainer}>
                <FlatList
                  numColumns={2}
                  key={'_'}
                  keyExtractor={item => '_' + item.id}
                  data={data.books}
                  renderItem={({ item }) => {
                    return <CardItem book={item} />;
                  }}
                />
              </View>
            )}
          </View>
        </ScrollView>
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
              <View style={styles(direction).container3}>
                <Image
                  source={require('../../assets/topPicAvatar.png')}
                  style={styles(direction).topImage}
                />
                <GradientText
                  colors={['#3B3B48', '#3B3B48']}
                  text={t('Jabir Qureshi')}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  textStyle={
                    styles(direction).gradientTextStyleName as TextStyle
                  }
                />
              </View>
            </View>
          }
        />
      </View>
    </>
  );
};
export default BookShelf;
