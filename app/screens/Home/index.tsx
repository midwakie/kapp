/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import Neumorphism from 'react-native-neumorphism';
import TitleBar from 'app/components/buttons/TitleBar';
import VerticalLine from 'app/components/lines/VerticalLine';
import { DrawerActions } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import RegularButton from 'app/components/buttons/RegularButton';
import CategoryItem from 'app/components/buttons/CategoryItem';
import GradientText from 'app/components/texts/GradientText';
import NavigationService from 'app/navigation/NavigationService';
import { scale } from 'react-native-size-matters';
import { Rating, AirbnbRating } from 'react-native-ratings';

const Home: React.FC = (props: any) => {
  const refSlider: React.MutableRefObject<any> = useRef(null);
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const slides = [
    {
      id: 1,
      image: require('../../assets/childHomeImage.png'),
      title: t('Tangled'),
      subTitle:
        "Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an \nunknown printer took a galley of type and \nscrambled it to make a type specimen book",
    },
    {
      id: 2,
      image: require('../../assets/childHomeImage.png'),
      title: t('Tangled'),
      subTitle:
        "Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an \nunknown printer took a galley of type and \nscrambled it to make a type specimen book",
    },
    {
      id: 3,
      image: require('../../assets/childHomeImage.png'),
      title: t('Tangled'),
      subTitle:
        "Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an \nunknown printer took a galley of type and \nscrambled it to make a type specimen book",
    },
    {
      id: 4,
      image: require('../../assets/childHomeImage.png'),
      title: t('Tangled'),
      subTitle:
        "Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an \nunknown printer took a galley of type and \nscrambled it to make a type specimen book",
    },
  ];
  const categories = [
    {
      id: 1,
      image: require('../../assets/history.png'),
      title: 'History',
    },
    {
      id: 2,
      image: require('../../assets/biology.png'),
      title: 'Biology',
    },
    {
      id: 3,
      image: require('../../assets/painting.png'),
      title: 'Painting',
    },
    {
      id: 4,
      image: require('../../assets/sports.png'),
      title: 'Sports',
    },
  ];

  const continueReadingList = [
    {
      id: 1,
      image: require('../../assets/home/continueReading1.png'),
      percentage: '65%',
    },
    {
      id: 2,
      image: require('../../assets/home/continueReading2.png'),
      percentage: '65%',
    },
    {
      id: 3,
      image: require('../../assets/home/continueReading3.png'),
      percentage: '65%',
    },
    {
      id: 4,
      image: require('../../assets/home/continueReading4.png'),
      percentage: '65%',
    },
  ];

  const whatsNewList = [
    {
      id: 1,
      image: require('../../assets/home/continueReading3.png'),
    },
    {
      id: 2,
      image: require('../../assets/home/continueReading4.png'),
    },
    {
      id: 3,
      image: require('../../assets/home/continueReading2.png'),
    },
    {
      id: 4,
      image: require('../../assets/home/continueReading1.png'),
    },
  ];
  const videoToChildList = [
    {
      id: 1,
      image: require('../../assets/home/continueReading3.png'),
      title: 'Cool Kids 5...',
    },
    {
      id: 2,
      image: require('../../assets/home/continueReading4.png'),
      title: 'ESL Activities',
    },
    {
      id: 3,
      image: require('../../assets/home/continueReading2.png'),
      title: 'ESL Activities',
    },
    {
      id: 4,
      image: require('../../assets/home/continueReading1.png'),
      title: 'Cool Kids 5...',
    },
  ];

  const favoritesList = [
    {
      id: 1,
      image: require('../../assets/home/favorite1.png'),
      percentage: '65%',
      title: 'Dream Star',
      subTitle: 'Faham Qureshi',
    },
    {
      id: 2,
      image: require('../../assets/home/favorite2.png'),
      percentage: '65%',
      title: 'Sample Text',
      subTitle: 'Fatima Shaikh',
    },
    {
      id: 3,
      image: require('../../assets/home/favorite1.png'),
      percentage: '65%',
      title: 'Dream Star',
      subTitle: 'Faham Qureshi',
    },
    {
      id: 4,
      image: require('../../assets/home/favorite2.png'),
      percentage: '65%',
      title: 'Sample Text',
      subTitle: 'Fatima Shaikh',
    },
  ];

  const books = [
    {
      id: 1,
      title: 'Kung Fu Panda',
      author: 'Martin Luther',
      price: '$15.30',
      rating: 3,
      ratingCount: 35,
      pages: 290,
      img: require('../../assets/book.png'),
    },
    {
      id: 2,
      title: 'Happy Lemon',
      author: 'Caroline Eliot',
      price: '$20.30',
      rating: 3,
      ratingCount: 35,
      pages: 290,
      img: require('../../assets/book2.png'),
    },
    {
      id: 3,
      title: 'Billy & Shmilli',
      author: 'Martin Luther',
      price: '$25.30',
      rating: 2,
      ratingCount: 25,
      pages: 290,
      img: require('../../assets/book3.png'),
    },
    {
      id: 4,
      title: 'Story Book',
      author: 'Caroline Eliot',
      price: '$10.30',
      rating: 3,
      ratingCount: 35,
      pages: 290,
      img: require('../../assets/book4.png'),
    },
  ];

  const CardListItem = ({ book }: any) => {
    return (
      <View style={styles(false).neomorphContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('BookDetails');
          }}>
          <Neumorphism
            style={styles(false).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(false).cardListStyle}>
              <View style={styles(false).innerDirection}>
                <Image source={book.img} style={styles(false).cardListImage} />
                <View style={styles(false).cardListContent}>
                  <Text style={styles(false).title}>{book.title}</Text>
                  <Text style={styles(false).author}>
                    By{' '}
                    <Text style={styles(false).authorName}>{book.author}</Text>
                  </Text>
                  <View style={styles(false).ratingPagesContainer}>
                    <AirbnbRating
                      isDisabled={true}
                      showRating={false}
                      defaultRating={3}
                      size={scale(6)}
                    />
                    <Text style={styles(false).ratingCountStyle}>
                      {book.ratingCount} Review
                    </Text>
                    <Image
                      source={require('../../assets/bookOpen.png')}
                      style={styles(false).cardBookImage}
                    />
                    <Text style={styles(false).pageCountStyle}>
                      {book.pages} Pages
                    </Text>
                  </View>
                  <Text style={styles(false).description}>Description</Text>
                  <Text
                    style={styles(false).descriptionContent}
                    numberOfLines={3}>
                    {
                      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    }{' '}
                    <Text
                      onPress={() => {
                        alert('Read more!!!');
                      }}
                      style={styles(false).readMoreStyle}>
                      Read More
                    </Text>
                  </Text>
                </View>
              </View>
              <Text style={styles(false).priceListStyle}>{book.price}</Text>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };

  const gotoRelatedScreen = (name: string) => {
    switch (name) {
      case 'History':
        NavigationService.navigate('History');
        break;
      case 'Biology':
        NavigationService.navigate('Biology');
        break;
      case 'Painting':
        NavigationService.navigate('Painting');
        break;
      case 'Sports':
        NavigationService.navigate('Sports');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <SafeAreaView style={styles(false).safeAreaView}>
        <ScrollView style={styles(false).container} bounces={false}>
          <View style={styles(false).swiperContainer}>
            <AppIntroSlider
              ref={refSlider}
              data={slides}
              renderPagination={(activeIndex: number) => (
                <View style={styles(false).paginationContainer}>
                  <View style={styles(false).paginationDots}>
                    {slides.length > 1 &&
                      slides.map((_, i) =>
                        i === activeIndex ? (
                          <View style={styles(false).activeDot} />
                        ) : (
                          <View style={styles(false).inActiveDot} />
                        ),
                      )}
                  </View>
                </View>
              )}
              onSlideChange={() => {}}
              showDoneButton={false}
              showSkipButton={false}
              showNextButton={false}
              renderItem={({ item }) => (
                <View style={styles(false).mainContent}>
                  <Image style={styles(false).image} source={item.image} />
                  <View style={styles(false).gradientTextContainer2}>
                    <Text style={styles(false).gradientTextStyle2}>
                      {item?.title}
                    </Text>
                    <Text
                      style={styles(false).subTitleTextStyle}
                      numberOfLines={4}>
                      {item.subTitle}
                    </Text>
                  </View>
                  <View style={styles(false).buttonContainer}>
                    <TouchableOpacity
                      style={styles(false).playButtonStyle}
                      onPress={() => {
                        alert('Clicked');
                      }}>
                      <Image
                        style={styles(false).playHomeImage}
                        source={require('../../assets/playHome.png')}
                      />
                      <Text style={styles(false).playButtonText}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles(false).moreInfoButtonStyle}
                      onPress={() => {
                        alert('Clicked');
                      }}>
                      <Image
                        style={styles(false).moreInfoImage}
                        source={require('../../assets/info.png')}
                      />
                      <Text style={styles(false).moreInfoButtonText}>
                        More info
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={styles(false).secondContainer}>
            <View>
              <FlatList
                key={'_'}
                horizontal
                keyExtractor={item => '_' + item.id}
                data={categories}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={styles(index === categories.length - 1).itemStyle}>
                      <CategoryItem
                        onPress={() => {
                          gotoRelatedScreen(item.title);
                        }}
                        image={item.image}
                        radius={57.2}
                        height={57.2}
                        width={57.2}
                        colors={['#EBEEF0', '#F7F7F7']}
                      />
                      <Text style={styles(false).itemTextStyle}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles(false).titleBox}>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Trending in this month')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(false).gradientTextStyle}
              />
              <RegularButton
                onPress={() => {
                  NavigationService.navigate('Trending');
                }}
                icon={'arrow-forward'}
                radius={38}
                height={38}
                width={38}
                colors={['#EBECF0', '#EBECF0']}
              />
            </View>
            <View>
              <FlatList
                numColumns={1}
                key={'*'}
                keyExtractor={item => '*' + item.id}
                data={books}
                renderItem={({ item }) => {
                  return <CardListItem book={item} />;
                }}
              />
            </View>
            <View style={styles(false).titleBox}>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Continue Reading')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(false).gradientTextStyle}
              />
              <RegularButton
                onPress={() => {
                  NavigationService.navigate('Continue Reading');
                }}
                icon={'arrow-forward'}
                radius={38}
                height={38}
                width={38}
                colors={['#EBECF0', '#EBECF0']}
              />
            </View>
            <View>
              <FlatList
                key={'#'}
                horizontal
                keyExtractor={item => '#' + item.id}
                data={continueReadingList}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles(false).itemContinueReadingStyle}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#C6CEDA'}
                        shapeType={'flat'}
                        radius={scale(15.21)}>
                        <TouchableOpacity
                          onPress={() => {
                            NavigationService.navigate('BookDetails');
                          }}
                          style={styles(false).continueReading}>
                          <Image
                            source={item.image}
                            style={styles(false).continueReadingImage}
                          />
                          <View style={styles(false).continueReadingContent}>
                            <Text
                              style={styles(false).continueReadingPercentage}
                              numberOfLines={1}>
                              {item.percentage}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </Neumorphism>
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles(false).titleBox}>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('What’s New!')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(false).gradientTextStyle}
              />
              <RegularButton
                onPress={() => {
                  NavigationService.navigate('WhatsNew');
                }}
                icon={'arrow-forward'}
                radius={38}
                height={38}
                width={38}
                colors={['#EBECF0', '#EBECF0']}
              />
            </View>
            <View>
              <FlatList
                key={'-'}
                horizontal
                keyExtractor={item => '-' + item.id}
                data={whatsNewList}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles(false).itemWhatsNewStyle}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#C6CEDA'}
                        shapeType={'flat'}
                        radius={scale(15.21)}>
                        <TouchableOpacity
                          onPress={() => {
                            NavigationService.navigate('BookDetails');
                          }}
                          style={styles(false).whatsNew}>
                          <Image
                            source={item.image}
                            style={styles(false).whatsNewImage}
                          />
                        </TouchableOpacity>
                      </Neumorphism>
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles(false).titleBox}>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Favorites')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(false).gradientTextStyle}
              />
              <RegularButton
                onPress={() => {
                  NavigationService.navigate('Favorites');
                }}
                icon={'arrow-forward'}
                radius={38}
                height={38}
                width={38}
                colors={['#EBECF0', '#EBECF0']}
              />
            </View>
            <View>
              <FlatList
                key={'!'}
                horizontal
                keyExtractor={item => '!' + item.id}
                data={favoritesList}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles(false).itemFavoritesStyle}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#C6CEDA'}
                        shapeType={'flat'}
                        radius={scale(15.21)}>
                        <TouchableOpacity
                          onPress={() => {
                            NavigationService.navigate('BookDetails');
                          }}
                          style={styles(false).favorites}>
                          <Image
                            style={styles(false).starImage}
                            source={require('../../assets/filledStar.png')}
                          />
                          <ImageBackground
                            source={item.image}
                            style={styles(false).favoritesImage}>
                            <View style={styles(false).favoritesContent}>
                              <Text
                                style={styles(false).favoritesPercentage}
                                numberOfLines={1}>
                                {item.percentage}
                              </Text>
                            </View>
                            <View style={styles(false).favoritesBottomContent}>
                              <Text
                                style={styles(false).favoritesBottomTitle}
                                numberOfLines={1}>
                                {item.title}
                              </Text>
                              <Text
                                style={styles(false).favoritesBottomSubTitle}
                                numberOfLines={1}>
                                {item.subTitle}
                              </Text>
                            </View>
                          </ImageBackground>
                        </TouchableOpacity>
                      </Neumorphism>
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles(false).titleBox}>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Recommended for you')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(false).gradientTextStyle}
              />
            </View>
            <Text style={styles(false).comingSoonTitle} numberOfLines={1}>
              {'Coming Soon!'}
            </Text>
            <View style={styles(false).titleBox}>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Recommended Video to Child')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(false).gradientTextStyle}
              />
            </View>
            <View>
              <FlatList
                key={'--'}
                horizontal
                keyExtractor={item => '--' + item.id}
                data={videoToChildList}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles(false).itemVideoToChildStyle}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#C6CEDA'}
                        shapeType={'flat'}
                        radius={scale(15.21)}>
                        <TouchableOpacity
                          onPress={() => {
                            NavigationService.navigate('BookDetails');
                          }}
                          style={styles(false).videoToChild}>
                          <Image
                            source={item.image}
                            style={styles(false).videoToChildImage}
                          />
                          <Image
                            source={require('../../assets/play.png')}
                            style={styles(false).videoToChildPlayImage}
                          />
                        </TouchableOpacity>
                      </Neumorphism>
                      <Text
                        style={styles(false).videoToChildTitle}
                        numberOfLines={1}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles(false).titleBarContainer}>
        <TitleBar
          leftComponent={
            <View style={styles(false).topContainer}>
              <Image
                style={styles(false).logoImageStyle}
                source={require('../../assets/logo.png')}
              />
            </View>
          }
          middleComponent={
            <View style={styles(false).homeTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Home')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(false).homeTextStyle as TextStyle}
              />
            </View>
          }
          rightComponent={
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={52}>
              <View style={styles(false).iconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    props?.navigation.dispatch(DrawerActions.toggleDrawer());
                  }}>
                  <View style={styles(false).menuContainer}>
                    <Image
                      source={require('../../assets/childHomeMenu.png')}
                      style={styles(false).iconImageStyle}
                    />
                  </View>
                </TouchableOpacity>
                <VerticalLine
                  stroke={1}
                  opacity={0.3}
                  height={'100%'}
                  color={'#A8A8A8'}
                />
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.navigate('GlobalSearch');
                  }}>
                  <View style={styles(false).searchContainer}>
                    <Image
                      source={require('../../assets/searchIcon.png')}
                      style={styles(false).iconImageStyle}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Neumorphism>
          }
        />
      </View>
      {/* Title Bar should be placed last to stay on top */}
    </>
  );
};

export default Home;
