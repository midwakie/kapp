/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ms, s, scale } from 'react-native-size-matters';
import { ProgressChart } from 'react-native-chart-kit';
import AppIntroSlider from 'react-native-app-intro-slider';
import VerticalLine from 'app/components/lines/VerticalLine';
import { DrawerActions } from '@react-navigation/native';

const ChildFullProfile: React.FC = (props: any) => {
  const refSlider: React.MutableRefObject<any> = useRef(null);
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const progressVideoChartData = {
    data: [0.5],
    labels: [`${t('50 \nhrs ')}`],
    colors: ['#2AA7DD'],
  };
  const progressReadingChartData = {
    data: [0.3],
    labels: [`${t('50 \nhrs ')}`],
    colors: ['#EC4D61'],
  };
  const progressAppChartData = {
    data: [0.8],
    labels: [`${t('50 \nhrs ')}`],
    colors: ['#84BD47'],
  };
  const progressActivityChartData = {
    data: [0.8],
    labels: [`${t('80%')}`],
    colors: ['#84BD47'],
  };

  const details = [
    {
      id: 1,
      title: 'Book Finished',
      stat: '6',
    },
    {
      id: 2,
      title: 'Hours Read',
      stat: '2',
    },
    {
      id: 3,
      title: 'Videoes Watched',
      stat: '4',
    },
    {
      id: 4,
      title: 'Word Count',
      stat: '600',
    },
    {
      id: 5,
      title: 'Active Works',
      stat: '6',
    },
  ];
  const slides = [
    {
      image: require('../../assets/sampleImageOne.png'),
      image2: require('../../assets/sampleImageTwo.png'),
      text: 'Kung Fu Panda',
      price: '500$',
      text2: 'Dora Buji',
      price2: '0$',
    },
    {
      image: require('../../assets/sampleImageTwo.png'),
      image2: require('../../assets/sampleImageOne.png'),
      text: 'Easy Maths',
      price: '2$',
      text2: 'Sun and Moon',
      price2: '500$',
    },
    {
      image: require('../../assets/sampleImageOne.png'),
      image2: require('../../assets/sampleImageTwo.png'),
      text: 'Doramon',
      price: '50$',
      text2: 'English',
      price2: '500$',
    },
    {
      image: require('../../assets/sampleImageTwo.png'),
      image2: require('../../assets/sampleImageOne.png'),
      text: 'Mr Bean',
      price: '5$',
      text2: 'Kung Fu Panda',
      price2: '500$',
    },
  ];
  const slidesTwo = [
    {
      image: require('../../assets/sampleImageOne.png'),
      image2: require('../../assets/sampleImageTwo.png'),
      text: 'Science',
      price: '50$',
      text2: 'Rhymes',
      price2: '10$',
    },
    {
      image: require('../../assets/sampleImageTwo.png'),
      image2: require('../../assets/sampleImageOne.png'),
      text: 'Chota Bheem',
      price: '2$',
      text2: 'Kung Fu Panda',
      price2: '500$',
    },
    {
      image: require('../../assets/sampleImageOne.png'),
      image2: require('../../assets/sampleImageTwo.png'),
      text: 'Doramon',
      price: '50$',
      text2: 'Kung Fu Panda',
      price2: '500$',
    },
    {
      image: require('../../assets/sampleImageTwo.png'),
      image2: require('../../assets/sampleImageOne.png'),
      text: 'Mr Bean',
      price: '5$',
      text2: 'Kung Fu Panda',
      price2: '500$',
    },
  ];
  const badge = [
    {
      image1: require('../../assets/sampleBadgeOne.png'),
      image2: require('../../assets/sampleBadgeTwo.png'),
      image3: require('../../assets/sampleBadgeThree.png'),
    },
    {
      image1: require('../../assets/sampleBadgeOne.png'),
      image2: require('../../assets/sampleBadgeTwo.png'),
      image3: require('../../assets/sampleBadgeThree.png'),
    },
  ];
  const teacherRecommended = [
    {
      id: 1,
      Image: require('../../assets/pdfImage2.png'),
      pdfLogoImage: require('../../assets/pdfLogo.png'),
      title: 'Easy Maths Tricks',
      time: '1 Hour Ago',
      likeCount: '2565',
      comments: '230',
      views: '126',
    },
    {
      id: 2,
      Image: require('../../assets/pdfImage2.png'),
      pdfLogoImage: require('../../assets/pdfLogo.png'),
      title: 'Easy Maths Tricks',
      time: '1 Hour Ago',
      likeCount: '2565',
      comments: '230',
      views: '126',
    },
    {
      id: 2,
      Image: require('../../assets/pdfImage2.png'),
      pdfLogoImage: require('../../assets/pdfLogo.png'),
      title: 'Easy Maths Tricks',
      time: '1 Hour Ago',
      likeCount: '2565',
      comments: '230',
      views: '126',
    },
  ];

  const CardListItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainerCard}>
        <Neumorphism
          style={styles(direction).neomorphMargin}
          lightColor={'#ffffff'}
          darkColor={'#C6CEDA'}
          shapeType={'flat'}
          radius={scale(9)}>
          <View style={styles(direction).statContainer}>
            <Text style={styles(direction).statContainerTitle}>
              {book.title}
            </Text>
            <Text style={styles(direction).statContainerStat}>{book.stat}</Text>
          </View>
        </Neumorphism>
      </View>
    );
  };

  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(14)}>
              <View style={styles(direction).rectangle}>
                <View style={styles(direction).innerContainerOne}>
                  <View style={styles(direction).imageContainer}>
                    <Image
                      style={styles(direction).avatarImage}
                      source={require('../../assets/editChild1.png')}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        NavigationService.navigate('EditChildProfile');
                      }}
                      style={styles(direction).imageContainer2}>
                      <Image
                        style={styles(direction).editAvatarImage}
                        source={require('../../assets/editChild2.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles(direction).mainTextContainer}>
                    <Text style={styles(direction).nameText}>
                      {t('Jabir Qureshi')}
                    </Text>
                    <Text style={styles(direction).schoolText}>
                      {t('Al Jeel Al Saeed School')}
                    </Text>
                    <Text style={styles(direction).ageText}>
                      {t('9 Year/Male')}
                    </Text>
                  </View>
                </View>

                <View style={styles(direction).coinContainer1}>
                  <View style={{ flexDirection: 'row' }}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(50)}>
                      <View style={styles(direction).coinContainer2}>
                        <Image
                          style={styles(direction).coinImage}
                          source={require('../../assets/goldCoin1.png')}
                        />
                        <Text style={styles(direction).coinText}>
                          {t('450')}
                        </Text>
                      </View>
                    </Neumorphism>
                    <View style={styles(direction).marginViewRow1} />
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(50)}>
                      <View style={styles(direction).coinContainer3}>
                        <Image
                          style={styles(direction).coinImage}
                          source={require('../../assets/greyCoin.png')}
                        />
                        <Text style={styles(direction).coinText}>
                          {t('450')}
                        </Text>
                      </View>
                    </Neumorphism>
                  </View>
                  <View style={styles(direction).iconContainer}>
                    <View style={styles(direction).iconMainContainer}>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).icon1}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/ellipse1.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).icons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/ellipse2.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).icons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/ellipse3.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).icons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/ellipse4.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).icons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/ellipse5.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).icons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/interestIcon6.png')}
                        />
                        <Image
                          style={styles(direction).plusFourImage}
                          source={require('../../assets/+4.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <FlatList
                    numColumns={1}
                    key={'-'}
                    keyExtractor={item => '-' + item.id}
                    data={details}
                    renderItem={({ item }) => {
                      return <CardListItem book={item} />;
                    }}
                  />
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView}></View>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(14)}>
              <View style={styles(direction).rectangle2}>
                <View style={styles(direction).scanTextContainer}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('Scan QR Code')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).scanText}
                  />
                </View>
                <Image
                  style={styles(direction).qrImage}
                  source={require('../../assets/qr.png')}
                />
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView}></View>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(14)}>
              <View style={styles(direction).rectangle3}>
                <View style={styles(direction).activityTextContainer}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('Total Time Spent on Activities')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).activityText}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      NavigationService.navigate('ActivitiesStats');
                    }}
                    style={styles(direction).materialIconView}>
                    <MaterialIcon
                      name={'arrow-forward'}
                      size={ms(20)}
                      color={'#03A0E3'}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles(direction).progressChartContainer}>
                  <View style={styles(direction).progressChartContainer1}>
                    <View style={styles(direction).progressChartContainer2}>
                      <ProgressChart
                        data={progressAppChartData}
                        width={s(74)}
                        height={s(74)}
                        strokeWidth={s(8)}
                        radius={s(30)}
                        withCustomBarColorFromData={true}
                        chartConfig={{
                          backgroundColor: '#EBEEF0',
                          backgroundGradientFrom: '#EBEEF0',
                          backgroundGradientTo: '#EBEEF0',
                          color: (opacity = 1) =>
                            `rgba(${74}, ${74}, ${74}, ${opacity})`,
                          propsForLabels: {
                            fontSize: s(10),
                            fill: 'rgba(117, 141, 172, 1)',
                            fontWeight: '600',
                            fontFamily: 'Nunito-Regular',
                          },
                        }}
                        hideLegend={true}
                      />
                      <Text style={styles(direction).insideText1}>
                        {t('12\nhrs')}
                      </Text>
                    </View>
                    <Text style={styles(direction).activityText1}>
                      {t('OnApp')}
                    </Text>
                  </View>
                  <View style={styles(direction).progressChartContainer1}>
                    <View style={styles(direction).progressChartContainer2}>
                      <ProgressChart
                        data={progressReadingChartData}
                        width={s(72)}
                        height={s(72)}
                        strokeWidth={s(8)}
                        radius={s(30)}
                        withCustomBarColorFromData={true}
                        chartConfig={{
                          backgroundColor: '#EBEEF0',
                          backgroundGradientFrom: '#EBEEF0',
                          backgroundGradientTo: '#EBEEF0',
                          color: (opacity = 1) =>
                            `rgba(${74}, ${74}, ${74}, ${opacity})`,
                          propsForLabels: {
                            fontSize: s(10),
                            fill: 'rgba(117, 141, 172, 1)',
                            fontWeight: '600',
                            fontFamily: 'Nunito-Regular',
                          },
                        }}
                        hideLegend={true}
                      />
                      <Text style={styles(direction).insideText2}>
                        {t('7\nhrs')}
                      </Text>
                    </View>
                    <Text style={styles(direction).activityText1}>
                      {t('Reading')}
                    </Text>
                  </View>
                  <View style={styles(direction).progressChartContainer1}>
                    <View style={styles(direction).progressChartContainer2}>
                      <ProgressChart
                        data={progressVideoChartData}
                        width={s(72)}
                        height={s(72)}
                        strokeWidth={s(8)}
                        radius={s(30)}
                        withCustomBarColorFromData={true}
                        chartConfig={{
                          backgroundColor: '#EBEEF0',
                          backgroundGradientFrom: '#EBEEF0',
                          backgroundGradientTo: '#EBEEF0',
                          color: (opacity = 1) =>
                            `rgba(${74}, ${74}, ${74}, ${opacity})`,
                          propsForLabels: {
                            fontSize: s(10),
                            fill: 'rgba(117, 141, 172, 1)',
                            fontWeight: '600',
                            fontFamily: 'Nunito-Regular',
                          },
                        }}
                        hideLegend={true}
                      />
                      <Text style={styles(direction).insideText3}>
                        {t('6\nhrs')}
                      </Text>
                    </View>
                    <Text style={styles(direction).activityText1}>
                      {t('Video')}
                    </Text>
                  </View>
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView} />
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(14)}>
              <View style={styles(direction).myBadgesContainer}>
                <View style={styles(direction).myBadgesSubContainer}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('My Badges')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).badgeText}
                  />
                </View>
                <View style={styles(direction).walkThroughContainer}>
                  <AppIntroSlider
                    ref={refSlider}
                    data={badge}
                    renderPagination={(activeIndex: number) => (
                      <View style={styles(direction).paginationContainer}>
                        <View style={styles(direction).paginationDotsBadge}>
                          {badge.length > 1 &&
                            badge.map((_, i) => (
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
                    showDoneButton={false}
                    showSkipButton={false}
                    showNextButton={false}
                    renderItem={({ item }) => (
                      <View style={styles(direction).mainContent}>
                        <Image
                          style={styles(direction).badge}
                          source={item.image1}
                        />
                        <Image
                          style={styles(direction).badge}
                          source={item.image2}
                        />
                        <Image
                          style={styles(direction).badge}
                          source={item.image3}
                        />
                      </View>
                    )}
                  />
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView}></View>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles(direction).rectangle6}>
                <View style={styles(direction).subContainer}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('Teachers Recommended')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).teacherRecommendedText}
                  />
                </View>
                <View style={styles(direction).walkThroughContainer2}>
                  <AppIntroSlider
                    ref={refSlider}
                    data={teacherRecommended}
                    renderPagination={(activeIndex: number) => (
                      <View style={styles(direction).paginationContainerPdf}>
                        <View style={styles(direction).paginationDots}>
                          {teacherRecommended.length > 1 &&
                            teacherRecommended.map((_, i) => (
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
                    showDoneButton={false}
                    showSkipButton={false}
                    showNextButton={false}
                    renderItem={({ item }) => (
                      <View style={styles(direction).mainContent2}>
                        <View style={styles(direction).pdfSubContainer}>
                          <View style={styles(direction).pdfImageContainer}>
                            <Image
                              style={styles(direction).pdfImage}
                              source={item.Image}></Image>
                            <TouchableOpacity
                              onPress={() => {}}
                              style={styles(direction).pdfLogoContainer}>
                              <Image
                                style={styles(direction).pdfLogoImage}
                                source={item.pdfLogoImage}></Image>
                            </TouchableOpacity>
                          </View>
                          <View style={styles(direction).subContainerText}>
                            <Text style={styles(direction).pdfNameText}>
                              {item.title}
                            </Text>
                            <Text style={styles(direction).timeText}>
                              {item.time}
                            </Text>
                          </View>
                          <View style={styles(direction).vectorContainer}>
                            <TouchableOpacity>
                              <Image
                                style={styles(direction).vectorImage}
                                source={require('../../assets/likeLogo.png')}></Image>
                            </TouchableOpacity>
                            <Text style={styles(direction).numberText}>
                              {item.likeCount}
                            </Text>
                            <TouchableOpacity>
                              <Image
                                style={styles(direction).vectorImage}
                                source={require('../../assets/commentLogo.png')}></Image>
                            </TouchableOpacity>
                            <Text style={styles(direction).numberText}>
                              {item.comments}
                            </Text>
                            <TouchableOpacity>
                              <Image
                                style={styles(direction).vectorImage1}
                                source={require('../../assets/viewLogo.png')}></Image>
                            </TouchableOpacity>
                            <Text style={styles(direction).numberText}>
                              {item.views}
                            </Text>
                          </View>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView} />
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles(direction).rectangle7}>
                <View style={styles(direction).activityWorkContainer}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('Activity Work')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).activityWorkText}
                  />
                  <TouchableOpacity>
                    <MaterialIcon
                      name={'arrow-forward'}
                      size={ms(20)}
                      color={'#03A0E3'}
                      style={styles(direction).activityWorkIcon}></MaterialIcon>
                  </TouchableOpacity>
                </View>
                <View style={styles(direction).activityWorkText2MainContainer}>
                  <View style={styles(direction).activityWorkText2Container}>
                    <Text style={styles(direction).activityWorkText2}>
                      {t('Activity Work')}
                    </Text>
                    <Text style={styles(direction).activityWorkText3}>
                      {t('Easy Math Book Reading')}
                    </Text>
                  </View>
                </View>
                <View style={styles(direction).activityWorkBottomContainer}>
                  <View style={styles(direction).activityWorkImageContainer}>
                    <Image
                      style={styles(direction).activityImage}
                      source={require('../../assets/channelImage3.png')}></Image>
                  </View>
                  <View
                    style={styles(direction).activityWorkBottomTextContainer}>
                    <Text style={styles(direction).teacherText}>
                      {t('Teacher')}
                    </Text>
                    <Text style={styles(direction).teacherNameText}>
                      {t('Fathima Shaikh')}
                    </Text>
                  </View>
                  <View
                    style={styles(direction).activityWorkBottomTextContainer2}>
                    <Text style={styles(direction).dateText}>
                      {t('Due Date')}
                    </Text>
                    <Text style={styles(direction).dateText2}>
                      27 Oct, 2020
                    </Text>
                  </View>
                </View>
                <View style={styles(direction).activityWorkBottomProgressBar}>
                  <View
                    style={styles(direction).activityWorkBottomProgressBarView}>
                    <ProgressChart
                      data={progressActivityChartData}
                      width={s(50)}
                      height={s(50)}
                      strokeWidth={s(4)}
                      radius={s(15)}
                      withCustomBarColorFromData={true}
                      chartConfig={{
                        backgroundColor: '#EBEEF0',
                        backgroundGradientFrom: '#EBEEF0',
                        backgroundGradientTo: '#EBEEF0',
                        color: (opacity = 1) =>
                          `rgba(${74}, ${74}, ${74}, ${opacity})`,
                        propsForLabels: {
                          fontSize: s(10),
                          fill: 'rgba(117, 141, 172, 1)',
                          fontWeight: '600',
                          fontFamily: 'Nunito-Regular',
                        },
                      }}
                      hideLegend={true}
                    />
                    <Text style={styles(direction).insideTextActivityWork}>
                      {t('80%')}
                    </Text>
                  </View>
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView} />
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(14)}>
              <View style={styles(direction).rectangle4}>
                <View style={styles(direction).bookShelfTextContainer}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('Book Shelf')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).bookShelfText}
                  />
                </View>
                <View style={styles(direction).walkThroughContainer}>
                  <AppIntroSlider
                    ref={refSlider}
                    data={slides}
                    renderPagination={(activeIndex: number) => (
                      <View style={styles(direction).paginationContainer}>
                        <View style={styles(direction).paginationDotsBooks}>
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
                    showDoneButton={false}
                    showSkipButton={false}
                    showNextButton={false}
                    renderItem={({ item }) => (
                      <View style={styles(direction).mainContent}>
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              NavigationService.navigate('EbookDetail')
                            }>
                            <Image
                              style={styles(direction).image}
                              source={item.image}
                            />
                          </TouchableOpacity>
                          <View style={styles(direction).bookNameContainer}>
                            <Text style={styles(direction).bookTitle}>
                              {item.text}
                            </Text>
                            <Text style={styles(direction).bookPrice}>
                              {item.price}
                            </Text>
                          </View>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              NavigationService.navigate('EbookDetail')
                            }>
                            <Image
                              style={styles(direction).image}
                              source={item.image2}
                            />
                          </TouchableOpacity>
                          <View style={styles(direction).bookNameContainer2}>
                            <Text style={styles(direction).bookTitle}>
                              {item.text2}
                            </Text>
                            <Text style={styles(direction).bookPrice}>
                              {item.price2}
                            </Text>
                          </View>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView}></View>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(14)}>
              <View style={styles(direction).rectangle4}>
                <View style={styles(direction).bookShelfTextContainer}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('Suggestions')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).bookShelfText}
                  />
                </View>
                <View style={styles(direction).walkThroughContainer}>
                  <AppIntroSlider
                    ref={refSlider}
                    data={slidesTwo}
                    renderPagination={(activeIndex: number) => (
                      <View style={styles(direction).paginationContainer}>
                        <View style={styles(direction).paginationDotsBooks}>
                          {slidesTwo.length > 1 &&
                            slidesTwo.map((_, i) => (
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
                    showDoneButton={false}
                    showSkipButton={false}
                    showNextButton={false}
                    renderItem={({ item }) => (
                      <View style={styles(direction).mainContent}>
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              NavigationService.navigate('EbookDetail')
                            }>
                            <Image
                              style={styles(direction).image}
                              source={item.image}
                            />
                          </TouchableOpacity>
                          <View style={styles(direction).bookNameContainer}>
                            <Text style={styles(direction).bookTitle}>
                              {item.text}
                            </Text>

                            <Text style={styles(direction).bookPrice}>
                              {item.price}
                            </Text>
                          </View>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              NavigationService.navigate('EbookDetail')
                            }>
                            <Image
                              style={styles(direction).image}
                              source={item.image2}
                            />
                          </TouchableOpacity>
                          <View style={styles(direction).bookNameContainer2}>
                            <Text style={styles(direction).bookTitle}>
                              {item.text2}
                            </Text>
                            <Text style={styles(direction).bookPrice}>
                              {item.price2}
                            </Text>
                          </View>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView}></View>

            {/* <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(14)}>
              <View style={styles(direction).rectangleNoChannel}>
                <Image
                  style={styles(direction).noChannelImage}
                  source={require('../../assets/noChannelImage.png')}></Image>
                <Text style={styles(direction).noChannelText}>
                  {t('You have not created any channel')}
                </Text>
                <View style={styles(direction).buttonContainer}>
                  <RegularButton
                    onPress={() => {}}
                    text={t('Create Channel')}
                    radius={50}
                    height={50}
                    width={'100%'}
                    colors={['#03BBE3', '#14A9FD']}
                  />
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView}></View> */}
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(14)}>
              <View style={styles(direction).rectangle5}>
                <View style={styles(direction).subContainer2}>
                  <View style={styles(direction).channelImageContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        NavigationService.navigate('MyChannel');
                      }}>
                      <Image
                        style={styles(direction).channelImage}
                        source={require('../../assets/channelImage2.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles(direction).channelTextContainer}>
                    <TouchableOpacity>
                      <Text style={styles(direction).channelNameText}>
                        {t('Al Jeel Al Saeed School')}
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles(direction).channelSubscribersText}>
                      256k {t('Subscribers')}
                    </Text>
                    <Text style={styles(direction).channelVideosText}>
                      132 {t('Videos')}
                    </Text>
                  </View>
                </View>
                <View style={styles(direction).rectangle5SubContainer}>
                  <View style={styles(direction).videoContainer}>
                    <Image
                      style={styles(direction).videoImage}
                      source={require('../../assets/videoImage1.png')}></Image>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles(direction).videoLogoContainer}>
                      <Image
                        style={styles(direction).videoLogoImage}
                        source={require('../../assets/playLogo.png')}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={styles(direction).subContainerText}>
                    <Text style={styles(direction).videoNameText}>
                      {t('Social Activities')}
                    </Text>
                    <Text style={styles(direction).timeText}>
                      {t('1 Hours Ago')}
                    </Text>
                  </View>
                  <View style={styles(direction).vectorContainer}>
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).vectorImage}
                        source={require('../../assets/likeLogo.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles(direction).numberText}>
                      {t('2563')}
                    </Text>
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).vectorImage}
                        source={require('../../assets/commentLogo.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles(direction).numberText}>{t('235')}</Text>
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).vectorImage1}
                        source={require('../../assets/viewLogo.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles(direction).numberText}>{t('126')}</Text>
                  </View>
                </View>
              </View>
            </Neumorphism>
            <View style={styles(direction).marginView}></View>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles(direction).rectangle5}>
                <View style={styles(direction).subContainer2}>
                  <View style={styles(direction).channelImageContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        NavigationService.navigate('MyChannel');
                      }}>
                      <Image
                        style={styles(direction).channelImage}
                        source={require('../../assets/channelImage1.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles(direction).channelTextContainer}>
                    <TouchableOpacity>
                      <Text style={styles(direction).channelNameText}>
                        {t('Sky Dream Colors')}
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles(direction).channelSubscribersText}>
                      256k{t('Subscribers')}
                    </Text>
                    <Text style={styles(direction).channelVideosText}>
                      132{t('Videos')}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => {}}>
                    <MaterialIcon
                      name={'more-vert'}
                      size={ms(20)}
                      color={'#758DAC'}
                      style={styles(direction).moreVertIcon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles(direction).rectangle5SubContainer}>
                  <View style={styles(direction).pdfImageContainer}>
                    <Image
                      style={styles(direction).pdfImage}
                      source={require('../../assets/pdfImage1.png')}></Image>
                    <View style={styles(direction).pdfLogoContainer}>
                      <TouchableOpacity onPress={() => {}}>
                        <Image
                          style={styles(direction).pdfLogoImage}
                          source={require('../../assets/pdfLogo.png')}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles(direction).subContainerText}>
                    <Text style={styles(direction).pdfNameText}>
                      {t('Easy Maths Tricks')}
                    </Text>
                    <Text style={styles(direction).timeText}>
                      {t('1 Hours Ago')}
                    </Text>
                  </View>
                  <View style={styles(direction).vectorContainer}>
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).vectorImage}
                        source={require('../../assets/likeLogo.png')}></Image>
                    </TouchableOpacity>

                    <Text style={styles(direction).numberText}>
                      {t('2563')}
                    </Text>
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).vectorImage}
                        source={require('../../assets/commentLogo.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles(direction).numberText}>{t('235')}</Text>
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).vectorImage1}
                        source={require('../../assets/viewLogo.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles(direction).numberText}>{t('126')}</Text>
                  </View>
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
                text={t("Tahir's Full Profile")}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
            </View>
          }
          rightComponent={
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={52}>
              <View style={styles(false).iconContainer1}>
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
    </>
  );
};

export default ChildFullProfile;
