/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import AppIntroSlider from 'react-native-app-intro-slider';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import { AirbnbRating } from 'react-native-ratings';
import Carousal, { Pagination } from 'react-native-snap-carousel';

const BookSeries: React.FC = () => {
  const refSlider: React.MutableRefObject<any> = useRef(null);
  const [rating, setRating] = useState(3);
  const { width } = Dimensions.get('window');
  const sliderWidth = width * 1;
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (id: number) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const onSnapToItem = index => {
    setActiveIndex(index);
  };

  const books = [
    {
      img: require('../../assets/arabicBook1.png'),
    },
    {
      img: require('../../assets/arabicBook2.png'),
    },
    {
      img: require('../../assets/arabicBook1.png'),
    },
    {
      img: require('../../assets/arabicBook1.png'),
    },
    {
      img: require('../../assets/arabicBook1.png'),
    },
    {
      img: require('../../assets/arabicBook1.png'),
    },
  ];
  const slides = [
    {
      image: require('../../assets/bookSeries.png'),
    },
    {
      image: require('../../assets/bookSeries.png'),
    },
  ];
  const [data, setData] = useState([
    {
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even ',
    },
  ]);

  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const slideChanged = (index: number) => {
    console.log(index);
  };
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).walkThroughContainer}>
              <AppIntroSlider
                ref={refSlider}
                data={slides}
                renderPagination={(activeIndex: number) => (
                  <View style={styles(direction).paginationContainer}>
                    <View style={styles(direction).paginationDots2}>
                      {slides.length > 1 &&
                        slides.map((_, i) => (
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
                  </View>
                )}
                onSlideChange={index => {
                  slideChanged(index);
                }}
                showDoneButton={false}
                showSkipButton={false}
                showNextButton={false}
                renderItem={({ item }) => (
                  <View style={styles(direction).mainContent}>
                    <Image
                      style={styles(direction).image}
                      source={item.image}
                    />
                  </View>
                )}
              />
            </View>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}>
              <View style={styles(direction).bookContent}>
                <View style={styles(direction).bookContainerOne}>
                  <View style={styles(direction).bookContainerInner}>
                    <GradientText
                      colors={['#758DAC', '#2F4868']}
                      text={t('Diary of a Wimpy Kid')}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      textStyle={
                        styles(direction).gradientTextStyle as TextStyle
                      }
                    />
                    <Text style={styles(direction).pagesAndAuthorText}>
                      {t('Jeff Kinney')}
                    </Text>
                  </View>
                </View>
                <View style={styles(direction).bookContainerTwo}>
                  <View style={styles(direction).bookContainerInner}>
                    <View style={styles(direction).starContainer}>
                      <AirbnbRating
                        isDisabled={false}
                        showRating={false}
                        defaultRating={3}
                        size={scale(14)}
                        onFinishRating={value => setRating(value)}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          NavigationService.navigate('Add Review');
                        }}>
                        <Text style={styles(direction).reviewText}>
                          {t('(35 reviews)')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <GradientText
                  colors={['#758DAC', '#2F4868']}
                  text={t('Description')}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  textStyle={styles(direction).gradientTextStyle as TextStyle}
                />

                <View style={styles(direction).descriptionContainer}>
                  {data.map((item, index) => (
                    <Text style={styles(direction).descriptionText}>
                      {item.description.length > 80 ? (
                        <>
                          {expanded[item.id] ? (
                            <Text>{item.description}</Text>
                          ) : (
                            <Text>{item.description.slice(0, 160)}</Text>
                          )}
                          <Text
                            onPress={() => toggleExpand(item.id)}
                            style={{ color: '#03A0E3' }}>
                            {expanded[item.id] ? 'read less' : '.read more'}
                          </Text>
                        </>
                      ) : (
                        <Text>{item.description}</Text>
                      )}
                    </Text>
                  ))}
                </View>

                <View style={styles(direction).slidingContainer2}>
                  <Carousal
                    data={books}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        onPress={() => {
                          NavigationService.navigate('FinishBook');
                        }}>
                        <Image
                          source={item.img}
                          style={[styles(direction).badges]}
                        />
                      </TouchableOpacity>
                    )}
                    sliderWidth={sliderWidth}
                    itemWidth={scale(160)}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={0.9}
                    activeSlideAlignment={'start'}
                    onSnapToItem={onSnapToItem}
                  />
                </View>
                <View style={styles(direction).dotContainer}>
                  <Pagination
                    dotsLength={books.length}
                    activeDotIndex={activeIndex}
                    containerStyle={styles(direction).paginationContainer2}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    renderDots={(activeIndex: number) => {
                      return (
                        <View style={styles(direction).paginationDots}>
                          {books.length > 1 &&
                            books.map((_, i) => (
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
                text={t('Book Series')}
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
export default BookSeries;
