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
  ActivityIndicator,
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
import { useQuery } from 'react-query';
import ApiConfig from 'app/config/api-config';

const ChildFullProfile: React.FC = (props: any) => {
  const refSlider: React.MutableRefObject<any> = useRef(null);
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

  const { isLoading, data } = useQuery('childProfile', async () => {
    try {
      const response = await fetch(
        ApiConfig.BASE_URL2 + ApiConfig.CHILD_PROFILE,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (catchError: any) {
      console.error(catchError);
    }
  });
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
            {isLoading ? (
              <ActivityIndicator size="large" color="#03A0E3" />
            ) : (
              <>
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
                          source={{
                            uri:
                              ApiConfig.BASE_ASSET_URL +
                              data?.data?.childBasicInfo?.profileImg,
                          }}
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
                          {t(data?.data?.childBasicInfo?.fullName)}
                        </Text>
                        <Text style={styles(direction).schoolText}>
                          {t(data?.data?.childBasicInfo?.school)}
                        </Text>
                        <Text style={styles(direction).ageText}>
                          {t(
                            `${data?.data?.childBasicInfo?.age} / ${data?.data?.childBasicInfo?.gender}`,
                          )}
                        </Text>
                      </View>
                    </View>

                    <View style={styles(direction).coinContainer1}>
                      <View style={styles(direction).row}>
                        <Neumorphism
                          lightColor={'#ffffff'}
                          darkColor={'#A8A8A8'}
                          shapeType={'flat'}
                          radius={scale(50)}>
                          <TouchableOpacity
                            style={styles(direction).coinContainer2}
                            onPress={() => {
                              NavigationService.navigate('RewardPointHistory');
                            }}>
                            <Image
                              style={styles(direction).coinImage}
                              source={require('../../assets/goldCoin1.png')}
                            />
                            <Text style={styles(direction).coinText}>
                              {data?.data?.childBasicInfo?.rewards?.goldPoints}
                            </Text>
                          </TouchableOpacity>
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
                              {t(
                                data?.data?.childBasicInfo?.rewards
                                  ?.silverPoints,
                              )}
                            </Text>
                          </View>
                        </Neumorphism>
                      </View>
                      <View style={styles(direction).iconContainer}>
                        <View style={styles(direction).iconMainContainer}>
                          {data?.data?.friendsList?.map((friend, index) => (
                            <TouchableOpacity
                              key={index}
                              onPress={() => {}}
                              style={
                                index === 0
                                  ? styles(direction).icon1
                                  : styles(direction).icons
                              }>
                              <Image
                                style={styles(direction).imageRound}
                                source={{
                                  uri:
                                    ApiConfig.BASE_ASSET_URL +
                                    friend.profileImg,
                                }}
                              />
                              {index === 5 && (
                                <Text style={styles(direction).plusFour}>
                                  +4
                                </Text>
                              )}
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                    </View>
                    <View>
                      <FlatList
                        numColumns={1}
                        key={'-'}
                        keyExtractor={item => '-' + item.id}
                        data={data?.activityData}
                        renderItem={({ item }) => {
                          return <CardListItem book={item} />;
                        }}
                      />
                    </View>
                  </View>
                </Neumorphism>
                <View style={styles(direction).marginView} />
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
                <View style={styles(direction).marginView} />
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
                            data={data?.data?.progressReadingChartData}
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
                            {data?.data?.progressReadingChartData?.labels}
                          </Text>
                        </View>
                        <Text style={styles(direction).activityText1}>
                          {data?.data?.progressReadingChartData?.type}
                        </Text>
                      </View>
                      <View style={styles(direction).progressChartContainer1}>
                        <View style={styles(direction).progressChartContainer2}>
                          <ProgressChart
                            data={data?.data?.progressWatchingChartData}
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
                            {data?.data?.progressWatchingChartData?.labels}
                          </Text>
                        </View>
                        <Text style={styles(direction).activityText1}>
                          {data?.data?.progressWatchingChartData?.type}
                        </Text>
                      </View>
                      <View style={styles(direction).progressChartContainer1}>
                        <View style={styles(direction).progressChartContainer2}>
                          <ProgressChart
                            data={data?.data?.progressOnAppChartData}
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
                            {data?.data?.progressOnAppChartData?.labels}
                          </Text>
                        </View>
                        <Text style={styles(direction).activityText1}>
                          {data?.data?.progressOnAppChartData?.type}
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
                        data={data?.data?.badge}
                        renderPagination={(activeIndex: number) => (
                          <View style={styles(direction).paginationContainer}>
                            <View style={styles(direction).paginationDotsBadge}>
                              {data?.data?.badge?.length > 1 &&
                                data?.data?.badge.map((_, i) => (
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
                              source={{
                                uri: ApiConfig.BASE_ASSET_URL + item.image1,
                              }}
                            />
                            <Image
                              style={styles(direction).badge}
                              source={{
                                uri: ApiConfig.BASE_ASSET_URL + item.image2,
                              }}
                            />
                            <Image
                              style={styles(direction).badge}
                              source={{
                                uri: ApiConfig.BASE_ASSET_URL + item.image3,
                              }}
                            />
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
                        data={data?.data?.teacherRecommended}
                        renderPagination={(activeIndex: number) => (
                          <View
                            style={styles(direction).paginationContainerPdf}>
                            <View style={styles(direction).paginationDots}>
                              {data?.data?.teacherRecommended?.length > 1 &&
                                data?.data?.teacherRecommended.map((_, i) => (
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
                                  source={{
                                    uri: ApiConfig.BASE_ASSET_URL + item.Image,
                                  }}
                                />
                                <TouchableOpacity
                                  onPress={() => {}}
                                  style={styles(direction).pdfLogoContainer}>
                                  <Image
                                    style={styles(direction).pdfLogoImage}
                                    source={{
                                      uri:
                                        ApiConfig.BASE_ASSET_URL +
                                        item.pdfLogoImage,
                                    }}
                                  />
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
                                    source={require('../../assets/likeLogo.png')}
                                  />
                                </TouchableOpacity>
                                <Text style={styles(direction).numberText}>
                                  {item.likeCount}
                                </Text>
                                <TouchableOpacity>
                                  <Image
                                    style={styles(direction).vectorImage}
                                    source={require('../../assets/commentLogo.png')}
                                  />
                                </TouchableOpacity>
                                <Text style={styles(direction).numberText}>
                                  {item.comments}
                                </Text>
                                <TouchableOpacity>
                                  <Image
                                    style={styles(direction).vectorImage1}
                                    source={require('../../assets/viewLogo.png')}
                                  />
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
                  {data?.data?.currentActivity?.map(activity => (
                    <View style={styles(direction).rectangle7}>
                      <View style={styles(direction).activityWorkContainer}>
                        <GradientText
                          colors={['#758DAC', '#2F4868']}
                          text={t('Activity Work')}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 0, y: 1 }}
                          textStyle={styles(direction).activityWorkText}
                        />
                        <TouchableOpacity
                          onPress={() => {
                            NavigationService.navigate('ActivitiesWork');
                          }}>
                          <MaterialIcon
                            name={'arrow-forward'}
                            size={ms(20)}
                            color={'#03A0E3'}
                            style={styles(direction).activityWorkIcon}
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={
                          styles(direction).activityWorkText2MainContainer
                        }>
                        <View
                          style={styles(direction).activityWorkText2Container}>
                          <Text style={styles(direction).activityWorkText2}>
                            {t('Activity Work')}
                          </Text>
                          <Text style={styles(direction).activityWorkText3}>
                            {t(activity.title)}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={styles(direction).activityWorkBottomContainer}>
                        <View
                          style={styles(direction).activityWorkImageContainer}>
                          <Image
                            style={styles(direction).activityImage}
                            source={{
                              uri:
                                ApiConfig.BASE_ASSET_URL +
                                activity.teacherProfileImage,
                            }}
                          />
                        </View>
                        <View
                          style={
                            styles(direction).activityWorkBottomTextContainer
                          }>
                          <Text style={styles(direction).teacherText}>
                            {t('Teacher')}
                          </Text>
                          <Text style={styles(direction).teacherNameText}>
                            {t(activity.teacherProfileName)}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles(direction).dateText}>
                            {t('Due Date')}
                          </Text>
                          <Text style={styles(direction).dateText2}>
                            {activity.dueDate}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={styles(direction).activityWorkBottomProgressBar}>
                        <View
                          style={
                            styles(direction).activityWorkBottomProgressBarView
                          }>
                          <ProgressChart
                            data={activity.progressActivityChartData}
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
                          <Text
                            style={styles(direction).insideTextActivityWork}>
                            {t(activity.progressActivityChartData.labels)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </Neumorphism>
                <View style={styles(direction).marginView} />
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(14)}>
                  <TouchableOpacity
                    style={styles(direction).rectangle4}
                    onPress={() => {
                      NavigationService.navigate('BookShelf');
                    }}>
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
                        data={data?.data?.bookShelf}
                        renderPagination={(activeIndex: number) => (
                          <View style={styles(direction).paginationContainer}>
                            <View style={styles(direction).paginationDotsBooks}>
                              {data?.data?.bookShelf?.length > 1 &&
                                data?.data?.bookShelf.map((_, i) => (
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
                                  source={{
                                    uri: ApiConfig.BASE_ASSET_URL + item.image,
                                  }}
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
                                  source={{
                                    uri: ApiConfig.BASE_ASSET_URL + item.image2,
                                  }}
                                />
                              </TouchableOpacity>
                              <View
                                style={styles(direction).bookNameContainer2}>
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
                  </TouchableOpacity>
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
                        text={t('Suggestions')}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        textStyle={styles(direction).bookShelfText}
                      />
                    </View>
                    <View style={styles(direction).walkThroughContainer}>
                      <AppIntroSlider
                        ref={refSlider}
                        data={data?.data?.suggestions}
                        renderPagination={(activeIndex: number) => (
                          <View style={styles(direction).paginationContainer}>
                            <View style={styles(direction).paginationDotsBooks}>
                              {data?.data?.suggestions?.length > 1 &&
                                data?.data?.suggestions.map((_, i) => (
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
                                  source={{
                                    uri: ApiConfig.BASE_ASSET_URL + item.image,
                                  }}
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
                                  source={{
                                    uri: ApiConfig.BASE_ASSET_URL + item.image2,
                                  }}
                                />
                              </TouchableOpacity>
                              <View
                                style={styles(direction).bookNameContainer2}>
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
                <View style={styles(direction).marginView} />
                {data?.data?.channels?.map(channel => (
                  <View style={styles(direction).marginView}>
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
                                source={{
                                  uri:
                                    ApiConfig.BASE_ASSET_URL +
                                    channel.channelImage,
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                          <View style={styles(direction).channelTextContainer}>
                            <TouchableOpacity>
                              <Text style={styles(direction).channelNameText}>
                                {t(channel.channelName)}
                              </Text>
                            </TouchableOpacity>
                            <Text
                              style={styles(direction).channelSubscribersText}>
                              {channel.subscriberCount} {t('Subscribers')}
                            </Text>
                            <Text style={styles(direction).channelVideosText}>
                              {channel.noOfVideos} {t('Videos')}
                            </Text>
                          </View>
                        </View>
                        {channel?.posts.map(post => (
                          <View
                            style={styles(direction).rectangle5SubContainer}>
                            <View style={styles(direction).videoContainer}>
                              <Image
                                style={styles(direction).videoImage}
                                source={{
                                  uri: ApiConfig.BASE_ASSET_URL + post.image,
                                }}
                              />
                              <TouchableOpacity
                                onPress={() => {}}
                                style={styles(direction).videoLogoContainer}>
                                <Image
                                  style={styles(direction).videoLogoImage}
                                  source={{
                                    uri: ApiConfig.BASE_ASSET_URL + post.logo,
                                  }}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={styles(direction).subContainerText}>
                              <Text style={styles(direction).videoNameText}>
                                {t(post.title)}
                              </Text>
                              <Text style={styles(direction).timeText}>
                                {t(post.publishDate)}
                              </Text>
                            </View>
                            <View style={styles(direction).vectorContainer}>
                              <TouchableOpacity>
                                <Image
                                  style={styles(direction).vectorImage}
                                  source={require('../../assets/likeLogo.png')}
                                />
                              </TouchableOpacity>
                              <Text style={styles(direction).numberText}>
                                {t(post.likes)}
                              </Text>
                              <TouchableOpacity>
                                <Image
                                  style={styles(direction).vectorImage}
                                  source={require('../../assets/commentLogo.png')}
                                />
                              </TouchableOpacity>
                              <Text style={styles(direction).numberText}>
                                {t(post.commentCount)}
                              </Text>
                              <TouchableOpacity>
                                <Image
                                  style={styles(direction).vectorImage1}
                                  source={require('../../assets/viewLogo.png')}
                                />
                              </TouchableOpacity>
                              <Text style={styles(direction).numberText}>
                                {t(post.views)}
                              </Text>
                            </View>
                          </View>
                        ))}
                      </View>
                    </Neumorphism>
                  </View>
                ))}
                <View style={styles(direction).marginView} />
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
                          source={require('../../assets/pdfImage1.png')}
                        />
                        <View style={styles(direction).pdfLogoContainer}>
                          <TouchableOpacity onPress={() => {}}>
                            <Image
                              style={styles(direction).pdfLogoImage}
                              source={require('../../assets/pdfLogo.png')}
                            />
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
                            source={require('../../assets/likeLogo.png')}
                          />
                        </TouchableOpacity>

                        <Text style={styles(direction).numberText}>
                          {t('2563')}
                        </Text>
                        <TouchableOpacity>
                          <Image
                            style={styles(direction).vectorImage}
                            source={require('../../assets/commentLogo.png')}
                          />
                        </TouchableOpacity>
                        <Text style={styles(direction).numberText}>
                          {t('235')}
                        </Text>
                        <TouchableOpacity>
                          <Image
                            style={styles(direction).vectorImage1}
                            source={require('../../assets/viewLogo.png')}
                          />
                        </TouchableOpacity>
                        <Text style={styles(direction).numberText}>
                          {t('126')}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Neumorphism>
              </>
            )}
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
