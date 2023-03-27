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
  ActivityIndicator,
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
import { useQuery } from 'react-query';
import ApiConfig from 'app/config/api-config';
import { useRoute } from '@react-navigation/native';

const EbookDetail: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [rating, setRating] = useState(3);
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (id: number) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };
  const [loadMore, setLoadMore] = useState(false);
  const data1 = {
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
  };
  const [slideIndex, setSlideIndex] = useState(
    Math.floor(data1.recomendedBooks.length / 2),
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
  const itemWidth = sliderWidth / data1.recomendedBooks.length;

  const { isLoading, data } = useQuery('book', async () => {
    try {
      const response = await fetch(ApiConfig.BASE_URL2 + ApiConfig.BOOK_DETAIL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (catchError: any) {
      console.error(catchError);
    }
  });
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
            {isLoading ? (
              <ActivityIndicator size="large" color="#03A0E3" />
            ) : (
              <>
                <View>
                  <Image
                    source={{
                      uri: ApiConfig.BASE_ASSET_URL + data?.eBook?.bookImage,
                    }}
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
                              NavigationService.navigate('BookSeries');
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
                              {t(data?.eBook?.ageRange)}
                            </Text>
                            <Text style={styles(direction).text}>
                              {t('Age Range')}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles(direction).boldText}>
                              {t(data?.eBook?.grLevel)}
                            </Text>
                            <Text style={styles(direction).text}>
                              {t('GR Level')}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles(direction).boldText}>
                              {t(data?.eBook?.quiz)}
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
                              text={t(data?.eBook?.bookTitle)}
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
                                {t(data?.eBook?.writtenBy)}
                              </Text>
                            </View>
                            <View style={styles(direction).row}>
                              <Text style={styles(direction).titleText}>
                                {t('Illustrated by  ')}
                              </Text>
                              <Text style={styles(direction).titleTextColor}>
                                {t(data?.eBook?.illustratedBy)}
                              </Text>
                            </View>
                            <View style={styles(direction).ratingContainer}>
                              <AirbnbRating
                                isDisabled={false}
                                showRating={false}
                                defaultRating={data?.eBook?.rating}
                                size={scale(14)}
                                onFinishRating={value => setRating(value)}
                              />
                              <Text style={styles(direction).titleText}>
                                {t(data?.eBook?.ratinCount)}
                              </Text>
                            </View>
                          </View>
                          <View style={styles(direction).pageContainer}>
                            <Image
                              source={require('../../assets/bookIcon.png')}
                              style={styles(direction).bookIcon}
                            />
                            <Text style={styles(direction).titleText}>
                              {t(data?.eBook?.pages)}
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
                            {data?.eBook?.description.length > 180 ? (
                              <>
                                {expanded[data?.eBook?.id] ? (
                                  <Text>{data?.eBook.description}</Text>
                                ) : (
                                  <Text>
                                    {data?.eBook.description.slice(0, 183)}
                                  </Text>
                                )}
                                <Text
                                  onPress={() => toggleExpand(data?.eBook.id)}
                                  style={{ color: '#03A0E3' }}>
                                  {expanded[data?.eBook?.id]
                                    ? 'read less'
                                    : '.read more'}
                                </Text>
                              </>
                            ) : (
                              <Text>{data?.eBook?.description}</Text>
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
                          data={data?.eBook?.badges}
                          renderItem={({ item, index }) => (
                            <Image
                              source={{
                                uri: ApiConfig.BASE_ASSET_URL + item.image,
                              }}
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
                          dotsLength={data?.eBook?.badges.length}
                          activeDotIndex={activeIndex}
                          containerStyle={styles(direction).paginationContainer}
                          inactiveDotOpacity={0.4}
                          inactiveDotScale={0.6}
                          renderDots={(activeIndex: number) => {
                            return (
                              <View style={styles(direction).paginationDots}>
                                {data?.eBook?.badges.length > 1 &&
                                  data?.eBook?.badges.map((_, i) => (
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
                        <View style={styles(direction).reviewRowContainer}>
                          <View style={styles(direction).reviewColumn1}>
                            <Text
                              style={styles(direction).reviewContainerTitle}>
                              {t('Total review')}
                            </Text>
                            <Text style={styles(direction).counText}>
                              {t(data?.eBook?.totalReview)}
                            </Text>
                          </View>
                          <View style={styles(direction).reviewColumn2}>
                            <Text
                              style={styles(direction).reviewContainerTitle}>
                              {t('Avarage Ratings')}
                            </Text>
                            <View>
                              <Text style={styles(direction).counText}>
                                {t(data?.eBook?.averageRatings)}
                              </Text>
                              <AirbnbRating
                                isDisabled={false}
                                showRating={false}
                                defaultRating={data?.eBook?.averageRating}
                                size={scale(11)}
                                onFinishRating={value => setRating(value)}
                              />
                            </View>
                          </View>
                        </View>
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
                                {'Load More details'}
                              </Text>
                            </LinearGradient>
                          </TouchableOpacity>
                        </Neumorphism>
                      </View>
                    </Neumorphism>
                    {loadMore &&
                      data?.eBook?.reviews.map((item, index) => {
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
                                    {'Load More'}
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
                              <View style={styles(direction).container5}>
                                <View style={styles(direction).container6}>
                                  <View style={styles(direction).container7}>
                                    <Text style={styles(direction).text5}>
                                      {item.name}
                                    </Text>
                                    <Text style={styles(direction).text6}>
                                      {item.date}
                                    </Text>
                                    <Image
                                      source={require('../../assets/emptyFlag.png')}
                                      style={
                                        item.flag === 'Active'
                                          ? styles(direction).imageStyle4
                                          : styles(direction).imageStyle1
                                      }
                                    />
                                  </View>
                                  <View style={{ flexDirection: 'row' }}>
                                    <AirbnbRating
                                      isDisabled={true}
                                      showRating={false}
                                      defaultRating={item.rating}
                                      size={scale(14)}
                                    />
                                  </View>
                                  <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles(direction).text7}>
                                      {item.description.length > 80 ? (
                                        <>
                                          {expanded[item.id] ? (
                                            <Text>{item.description}</Text>
                                          ) : (
                                            <Text>
                                              {item.description.slice(0, 72)}
                                            </Text>
                                          )}
                                          <Text
                                            onPress={() =>
                                              toggleExpand(item.id)
                                            }
                                            style={{ color: '#03A0E3' }}>
                                            {expanded[item.id]
                                              ? 'read less'
                                              : 'read more'}
                                          </Text>
                                        </>
                                      ) : (
                                        <Text>{item.description}</Text>
                                      )}
                                    </Text>
                                    <View
                                      style={styles(direction).imageContainer4}>
                                      <Image
                                        style={styles(direction).imageStyle2}
                                        source={{
                                          uri:
                                            ApiConfig.BASE_ASSET_URL +
                                            item.Image,
                                        }}
                                      />
                                      <TouchableOpacity>
                                        <Image
                                          style={styles(direction).imageStyle3}
                                          source={require('../../assets/play.png')}
                                        />
                                      </TouchableOpacity>
                                    </View>
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
                          data={data1.recomendedBooks}
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
              </>
            )}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default EbookDetail;
