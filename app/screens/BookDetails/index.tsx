/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {
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

const BookDetails: React.FC = () => {
  const refSlider: React.MutableRefObject<any> = useRef(null);
  const books = [
    {
      img: require('../../assets/book.png'),
    },
    {
      img: require('../../assets/book2.png'),
    },
    {
      img: require('../../assets/book3.png'),
    },
    {
      img: require('../../assets/book4.png'),
    },
    {
      img: require('../../assets/book.png'),
    },
  ];
  const slides = [
    {
      image: require('../../assets/book.png'),
    },
    {
      image: require('../../assets/book.png'),
    },
  ];
  const CardItem = ({ book }: any) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Neumorphism
          style={styles(direction).neomorphMargin}
          lightColor={'#ffffff'}
          darkColor={'#C6CEDA'}
          shapeType={'flat'}
          radius={scale(14)}>
          <View style={styles(direction).card}>
            <Image source={book.img} style={styles(direction).cardImage} />
          </View>
        </Neumorphism>
      </TouchableOpacity>
    );
  };
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const slideChanged = (index: number) => {
    console.log(index);
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
              text={t('Book Details')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).walkThroughContainer}>
            <AppIntroSlider
              ref={refSlider}
              data={slides}
              renderPagination={(activeIndex: number) => (
                <View style={styles(direction).paginationContainer}>
                  <View style={styles(direction).paginationDots}>
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
                  <Image style={styles(direction).image} source={item.image} />
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
                    text={t('Journey To The Star')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).gradientTextStyle as TextStyle}
                  />
                  <Text style={styles(direction).pagesAndAuthorText}>
                    {t('Caroline Eliot')}
                  </Text>
                </View>
                <Text style={styles(direction).pagesAndAuthorText}>
                  {t('290 pages')}
                </Text>
              </View>
              <View style={styles(direction).bookContainerTwo}>
                <View style={styles(direction).bookContainerInner}>
                  <View style={styles(direction).starContainer}>
                    <Image
                      source={require('../../assets/starOne.png')}
                      style={styles(direction).starImage}
                    />
                    <Image
                      source={require('../../assets/starOne.png')}
                      style={styles(direction).starImage}
                    />
                    <Image
                      source={require('../../assets/starOne.png')}
                      style={styles(direction).starImage}
                    />
                    <Image
                      source={require('../../assets/starTwo.png')}
                      style={styles(direction).starImage}
                    />
                    <Image
                      source={require('../../assets/starTwo.png')}
                      style={styles(direction).starImage}
                    />
                  </View>
                  <Text style={styles(direction).reviewText}>
                    {t('(35 reviews)')}
                  </Text>
                </View>
                <Text style={styles(direction).priceText}>{t('$24.12')}</Text>
              </View>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Description')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
              <View style={styles(direction).descriptionContainer}>
                <Text style={styles(direction).descriptionText}>
                  {t(
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don  t look even..',
                  )}
                </Text>
              </View>
              <View style={styles(direction).regularButton}>
                <RegularButton
                  onPress={() => {
                    NavigationService.navigate('AvatarModifier');
                  }}
                  text={t('Buy Now!')}
                  radius={50}
                  height={50}
                  width={'100%'}
                  colors={['#03BBE3', '#14A9FD']}
                />
                <Text style={styles(direction).askParent}>
                  {t('Ask Your Parent to Buy')}
                </Text>
              </View>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Related Books')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
              <FlatList
                numColumns={1}
                horizontal={true}
                renderItem={({ item }) => {
                  return <CardItem book={item} />;
                }}
                data={books}
              />
            </View>
          </Neumorphism>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default BookDetails;
