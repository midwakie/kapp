import React, { useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  SafeAreaView,
  Text,
  TextStyle,
  View,
  TextInput,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import { AirbnbRating } from 'react-native-ratings';
import Carousel from 'react-native-snap-carousel';
import { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

const EbookDetail: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [rating, setRating] = useState(3);
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (id: number) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };
  const [loadMore, setLoadMore] = useState(false);
  const data = {
    eBook: [
      {
        id: 1,
        bookImage: require('../../assets/eBook.png'),
        ageRange: '8-12',
        grLevel: '--',
        quiz: 'Yes',
        bookTitle: 'Diary of a Wimpy Kid',
        writtenBy: 'Jeff Kinney',
        illustratedBy: 'Jean Lumier',
        rating: 3,
        ratinCount: '(35)',
        pages: '290 Pages',
        description:
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even..gbb jbjbjhb bjhbhbh nbbjbjb jbhjbhbh bjvj vjv hgvg',
        totalReview: '35',
        averageRatings: '4.0',
        averageRating: 4,
      },
    ],
    slides: [
      {
        image: require('../../assets/welldoneBadge.png'),
      },
      {
        image: require('../../assets/awardBadge.png'),
      },
      {
        image: require('../../assets/awardBadge.png'),
      },
      {
        image: require('../../assets/awardBadge.png'),
      },
      {
        image: require('../../assets/awardBadge.png'),
      },
    ],
    recomendedBooks: [
      {
        imgUrl: require('../../assets/storyBook5.png'),
      },
      {
        imgUrl: require('../../assets/storyBook4.png'),
      },
      {
        imgUrl: require('../../assets/storyBook1.png'),
      },
      {
        imgUrl: require('../../assets/storyBook2.png'),
      },
      {
        imgUrl: require('../../assets/storyBook3.png'),
      },
    ],
    reviews: [
      {
        profileName: 'Amira Malik',
        rating: 2,
        description:
          'There are many variations of passages of Lorem Ipsum available, but the majority ',
        date: '19 Oct, 2020',
        flag: require('../../assets/flag.png'),
        contentUrl: require('../../assets/user.png'),
      },
      {
        profileName: 'Amira Malik',
        rating: 2,
        description:
          'There are many variations of passages of Lorem Ipsum available, but the majority ',
        date: '19 Oct, 2020',
        flag: require('../../assets/flag.png'),
        contentUrl: require('../../assets/user.png'),
      },
      {
        profileName: 'Amira Malik',
        rating: 2,
        description:
          'There are many variations of passages of Lorem Ipsum available, but the majority ',
        date: '19 Oct, 2020',
        flag: require('../../assets/flag.png'),
        contentUrl: require('../../assets/user.png'),
      },
      {
        profileName: 'Fatima Zahra',
        rating: 2,
        description:
          'There are many variations of passages of Lorem Ipsum available, but the majority ',
        date: '10 Sep, 2020',
        flag: require('../../assets/flag.png'),
        contentUrl: require('../../assets/user.png'),
      },
      {
        profileName: 'Fatima Zahra',
        rating: 2,
        description:
          'There are many variations of passages of Lorem Ipsum available, but the majority ',
        date: '10 Sep, 2020',
        flag: require('../../assets/flag.png'),
        contentUrl: require('../../assets/user.png'),
      },
    ],
  };
  const [slideIndex, setSlideIndex] = useState(
    Math.floor(data.recomendedBooks.length / 2),
  );
  const handleNextButtonPress = () => {
    setSlideIndex(slideIndex + 1);
  };

  const handlePreviousButtonPress = () => {
    setSlideIndex(slideIndex - 1);
  };
  const handleLoadButton = () => {
    setLoadMore(!loadMore);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const onSnapToItem = index => {
    setActiveIndex(index);
  };
  const { width } = Dimensions.get('window');
  const badgeWidth = width * 1;
  const sliderWidth = 320;
  const itemWidth = sliderWidth / data.recomendedBooks.length;
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
              text={t('E-Book ')}
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
            {data.eBook.map((item, index) => {
              return (
                <View>
                  <Image
                    source={item.bookImage}
                    style={styles(direction).bookImage}
                  />
                  <Neumorphism
                    style={styles(direction).neomorphContainer}
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(26)}>
                    <View style={styles(direction).bookContainer}>
                      <>
                        <View style={styles(direction).buttonRow}>
                          <RegularButton
                            onPress={() => {
                              NavigationService.navigate('');
                            }}
                            text={
                              <Text style={styles(direction).boxText}>
                                {t('Explore The Series')}
                              </Text>
                            }
                            radius={60}
                            height={40}
                            width={'161.53@s'}
                            colors={['#EBEEF0', '#EBEEF0']}
                          />
                          <RegularButton
                            onPress={() => {
                              NavigationService.navigate('');
                            }}
                            text={
                              <MaterialIcon
                                name={'favorite-border'}
                                size={ms(20)}
                                color={'#EC4D61'}
                              />
                            }
                            radius={34}
                            height={40}
                            width={'73@s'}
                            colors={['#EBEEF0', '#EBEEF0']}
                          />
                        </View>
                        <View style={styles(direction).firstRow}>
                          <View>
                            <Text style={styles(direction).boldText}>
                              {t(item.ageRange)}
                            </Text>
                            <Text style={styles(direction).text}>
                              {t('Age Range')}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles(direction).boldText}>
                              {t(item.grLevel)}
                            </Text>
                            <Text style={styles(direction).text}>
                              {t('GR Level')}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles(direction).boldText}>
                              {t(item.quiz)}
                            </Text>
                            <Text style={styles(direction).text}>
                              {t('Quiz')}
                            </Text>
                          </View>
                        </View>
                        <View style={styles(direction).secondRow}>
                          <View>
                            <GradientText
                              colors={['#758DAC', '#2F4868']}
                              text={t(item.bookTitle)}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 0, y: 1 }}
                              textStyle={
                                styles(direction).titleHeading as TextStyle
                              }
                            />
                            <View style={styles(direction).row}>
                              <Text style={styles(direction).titleText}>
                                {t('By ')}
                              </Text>
                              <Text style={styles(direction).titleTextColor}>
                                {t(item.writtenBy)}
                              </Text>
                            </View>
                            <View style={styles(direction).row}>
                              <Text style={styles(direction).titleText}>
                                {t('Illustrated by  ')}
                              </Text>
                              <Text style={styles(direction).titleTextColor}>
                                {t(item.illustratedBy)}
                              </Text>
                            </View>
                            <View style={styles(direction).ratingContainer}>
                              <AirbnbRating
                                isDisabled={false}
                                showRating={false}
                                defaultRating={item.rating}
                                size={scale(14)}
                                onFinishRating={value => setRating(value)}
                              />
                              <Text style={styles(direction).titleText}>
                                {t(item.ratinCount)}
                              </Text>
                            </View>
                          </View>
                          <View style={styles(direction).pageContainer}>
                            <Image
                              source={require('../../assets/bookIcon.png')}
                              style={styles(direction).bookIcon}
                            />
                            <Text style={styles(direction).titleText}>
                              {t(item.pages)}
                            </Text>
                          </View>
                        </View>
                        <View style={styles(direction).thirdContainer}>
                          <GradientText
                            colors={['#758DAC', '#2F4868']}
                            text={t('Description')}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            textStyle={
                              styles(direction).titleHeading as TextStyle
                            }
                          />
                          <Text style={styles(direction).descriptionText}>
                            {item.description.length > 180 ? (
                              <>
                                {expanded[item.id] ? (
                                  <Text>{item.description}</Text>
                                ) : (
                                  <Text>{item.description.slice(0, 183)}</Text>
                                )}
                                <Text
                                  onPress={() => toggleExpand(item.id)}
                                  style={{ color: '#03A0E3' }}>
                                  {expanded[item.id]
                                    ? 'read less'
                                    : '.read more'}
                                </Text>
                              </>
                            ) : (
                              <Text>{item.description}</Text>
                            )}
                          </Text>
                        </View>
                        <View style={styles(direction).fourthContainer}>
                          <GradientText
                            colors={['#758DAC', '#2F4868']}
                            text={t('Earn these Badges')}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            textStyle={
                              styles(direction).titleHeading as TextStyle
                            }
                          />
                        </View>
                      </>
                      <View style={styles(direction).slidingContainer}>
                        <Carousel
                          data={data.slides}
                          renderItem={({ item, index }) => (
                            <Image
                              source={item.image}
                              style={[styles(direction).badges]}
                            />
                          )}
                          sliderWidth={badgeWidth}
                          itemWidth={159}
                          inactiveSlideScale={1}
                          inactiveSlideOpacity={0.9}
                          activeSlideAlignment={'start'}
                          onSnapToItem={onSnapToItem}
                        />
                        <Pagination
                          dotsLength={data.slides.length}
                          activeDotIndex={activeIndex}
                          containerStyle={styles(direction).paginationContainer}
                          inactiveDotOpacity={0.4}
                          inactiveDotScale={0.6}
                          renderDots={(activeIndex: number) => {
                            return (
                              <View style={styles(direction).paginationDots}>
                                {data.slides.length > 1 &&
                                  data.slides.map((_, i) => (
                                    <Image
                                      key={i}
                                      style={styles(direction).dot}
                                      source={
                                        i === activeIndex
                                          ? require('../../assets/activeOval.png')
                                          : require('../../assets/oval.png')
                                      }
                                    />
                                  ))}
                              </View>
                            );
                          }}
                        />
                      </View>
                    </View>
                  </Neumorphism>
                </View>
              );
            })}
            <Neumorphism
              style={styles(direction).neomorphContainer2}
              lightColor={'#E5E5E5'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(0)}>
              <View style={styles(direction).bookContainer2}>
                <View style={styles(direction).fifthContainer}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('Book Review')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).titleHeading as TextStyle}
                  />
                </View>
                <Neumorphism
                  style={styles(direction).neomorphContainer3}
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(14)}>
                  <View style={styles(direction).reviewContainer}>
                    {data.eBook.map((item, index) => {
                      return (
                        <View style={styles(direction).reviewRowContainer}>
                          <View style={styles(direction).reviewColumn1}>
                            <Text
                              style={styles(direction).reviewContainerTitle}>
                              {t('Total review')}
                            </Text>
                            <Text style={styles(direction).counText}>
                              {t(item.totalReview)}
                            </Text>
                          </View>
                          <View style={styles(direction).reviewColumn2}>
                            <Text
                              style={styles(direction).reviewContainerTitle}>
                              {t('Avarage Ratings')}
                            </Text>
                            <View>
                              <Text style={styles(direction).counText}>
                                {t(item.averageRatings)}
                              </Text>
                              <AirbnbRating
                                isDisabled={false}
                                showRating={false}
                                defaultRating={item.averageRating}
                                size={scale(11)}
                                onFinishRating={value => setRating(value)}
                              />
                            </View>
                          </View>
                        </View>
                      );
                    })}
                    <Neumorphism
                      style={styles(direction).buttonNeumorph}
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(2.3)}>
                      <TouchableOpacity onPress={handleLoadButton}>
                        <LinearGradient
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          colors={
                            loadMore
                              ? ['#BEBEBE', '#BEBEBE']
                              : ['#03A0E3', '#1976D2']
                          }
                          style={styles(direction).loadButton}>
                          <Text style={styles(direction).loadMore}>
                            {'Loard More details'}
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </Neumorphism>
                  </View>
                </Neumorphism>
                {loadMore &&
                  data.reviews.map((item, index) => {
                    if (index > 3) {
                      return (
                        <Neumorphism
                          style={styles(direction).buttonNeumorph2}
                          lightColor={'#ffffff'}
                          darkColor={'#A8A8A8'}
                          shapeType={'flat'}
                          radius={scale(2.3)}>
                          <TouchableOpacity>
                            <LinearGradient
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              colors={['#03A0E3', '#1976D2']}
                              style={styles(direction).loadMoreButton}>
                              <Text style={styles(direction).loadMore}>
                                {'Lord More'}
                              </Text>
                            </LinearGradient>
                          </TouchableOpacity>
                        </Neumorphism>
                      );
                    }
                    return (
                      <>
                        <Neumorphism
                          style={styles(direction).listingNemorph}
                          lightColor={'#ffffff'}
                          darkColor={'#A8A8A8'}
                          shapeType={'flat'}
                          radius={scale(14)}>
                          <View style={styles(direction).listingContainer}>
                            <View style={styles(direction).profileContainer}>
                              <View style={{ alignItems: 'flex-start' }}>
                                <Text style={styles(direction).profileName}>
                                  {t(item.profileName)}
                                </Text>
                                <AirbnbRating
                                  isDisabled={false}
                                  showRating={false}
                                  defaultRating={item.rating}
                                  size={scale(11)}
                                  onFinishRating={value => setRating(value)}
                                />
                              </View>
                              <View style={styles(direction).rightContainer}>
                                <Text style={styles(direction).date}>
                                  {t(item.date)}
                                </Text>
                                <Image
                                  source={item.flag}
                                  style={styles(direction).flagImage}
                                />
                              </View>
                            </View>
                            <View
                              style={styles(direction).descriptionContainer}>
                              <Text
                                style={styles(direction).profileDescription}>
                                {t(item.description)}
                              </Text>
                              <View style={styles(direction).contentImage}>
                                <Image
                                  source={item.contentUrl}
                                  style={styles(direction).content}
                                />
                                <Image
                                  source={require('../../assets/play.png')}
                                  style={styles(direction).playButton}
                                />
                              </View>
                            </View>
                          </View>
                        </Neumorphism>
                      </>
                    );
                  })}

                <View style={styles(direction).fifthContainer}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('Recommended for you')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).titleHeading as TextStyle}
                  />
                  <View style={styles(direction).carousalContainer}>
                    <Carousel
                      data={data.recomendedBooks}
                      // layout="stack"
                      alwaysBounceVertical={true}
                      renderItem={({ item, index }) => (
                        <View style={[styles(direction).swipeContainer]}>
                          <Image
                            source={item.imgUrl}
                            style={styles(direction).activeSlideImage}
                          />
                        </View>
                      )}
                      sliderWidth={sliderWidth}
                      itemWidth={50}
                      inactiveSlideScale={0.8}
                      inactiveSlideOpacity={1}
                      firstItem={slideIndex}
                      slideStyle={{}}
                      activeSlideAlignment={'center'}
                      containerCustomStyle={{}}
                    />
                    <View style={styles(direction).leftSwipeButton}>
                      <RegularButton
                        onPress={handlePreviousButtonPress}
                        icon={'arrow-back'}
                        radius={38}
                        height={38}
                        width={38}
                        colors={['#EBECF0', '#EBECF0']}
                      />
                    </View>
                    <View style={styles(direction).rightSwipeButton}>
                      <RegularButton
                        onPress={handleNextButtonPress}
                        icon={'arrow-forward'}
                        radius={38}
                        height={38}
                        width={38}
                        colors={['#EBECF0', '#EBECF0']}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Neumorphism>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default EbookDetail;
