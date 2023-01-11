import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
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
import AppIntroSlider from 'react-native-app-intro-slider';
import { LineChart, ProgressChart } from 'react-native-chart-kit';

const ChildFullProfile: React.FC = () => {
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
  const slides = [];
  const slideChanged = (index: number) => {
    console.log(index);
  };
  const [data, setData] = useState([
    {
      avatarImage: [{ avatarImage: require('../../assets/person1.png') }],
      expanded: false,
    },
    {
      id: 1,
      bookTitle: 'Kung Fu Panda',
      author: 'Martin Luthe',

      expanded: false,
    },
    {
      id: 2,
      bookTitle: 'Angry Bird 2',
      author: 'Martin Luthe',

      expanded: false,
    },
    {
      id: 4,
      activityTitle: 'Easy Math Book Reading',
      description:
        'Lorem Ipsum available, but the majority. There are many variations of passages.This is some additional text that will be displayed when the "More" button is clicked.',
      endDate: '1 Day to go',
      bookName: 'Math starter kit',
      students: [
        { avatarImage1: require('../../assets/person1.png') },
        { avatarImage2: require('../../assets/person2.png') },
        { avatarImage3: require('../../assets/person3.png') },
        { avatarImage4: require('../../assets/person4.png') },
        { avatarImage5: require('../../assets/person5.png') },
        { avatarImage6: require('../../assets/interestIcon6.png') },
      ],
      expanded: false,
    },
  ]);

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
              text={t("Tahir's Full Profile")}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <Neumorphism
            lightColor={'#ffffff'}
            darkColor={'#A8A8A8'}
            shapeType={'flat'}
            radius={14}>
            <View style={styles(direction).rectangle}>
              <View style={styles(direction).editButton}>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles(direction).editText}>{t('Edit')}</Text>
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
              <View style={styles(direction).imageContainer}>
                <Image
                  style={styles(direction).avatarImage}
                  source={require('../../assets/editChild1.png')}
                />
                <TouchableOpacity style={styles(direction).imageContainer2}>
                  <Image
                    style={styles(direction).editAvatarImage}
                    source={require('../../assets/editChild2.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles(direction).coinContainer1}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={50}>
                  <View style={styles(direction).coinContainer2}>
                    <Image
                      style={styles(direction).coinImage}
                      source={require('../../assets/goldCoin1.png')}
                    />
                    <Text style={styles(direction).coinText}>{t('450')}</Text>
                  </View>
                  <View style={styles(direction).editButton}></View>
                </Neumorphism>
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
            </View>
          </Neumorphism>
          <View style={styles(direction).marginView}></View>
          <Neumorphism
            lightColor={'#ffffff'}
            darkColor={'#A8A8A8'}
            shapeType={'flat'}
            radius={14}>
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
              <View style={styles(direction).qrImageContainer}>
                <Image
                  style={styles(direction).qrImage}
                  source={require('../../assets/qr.png')}
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
            <View style={styles(direction).rectangle3}>
              <View style={styles(direction).activityTextContainer}>
                <GradientText
                  colors={['#758DAC', '#2F4868']}
                  text={t('Total Time Spent on Activities')}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  textStyle={styles(direction).activityText}
                />
                <View style={styles(direction).materialIconView}>
                  <MaterialIcon
                    name={'arrow-forward'}
                    size={ms(20)}
                    color={'#03A0E3'}
                  />
                </View>
              </View>

              <View style={styles(direction).progressChartContainer}>
                <View style={styles(direction).progressChartContainer1}>
                  <ProgressChart
                    data={progressAppChartData}
                    width={ms(74)}
                    height={ms(74)}
                    strokeWidth={8}
                    radius={s(30)}
                    withCustomBarColorFromData={true}
                    chartConfig={{
                      backgroundColor: '#EBEEF0',
                      backgroundGradientFrom: '#EBEEF0',
                      backgroundGradientTo: '#EBEEF0',
                      color: (opacity = 1) =>
                        `rgba(${74}, ${74}, ${74}, ${opacity})`,
                      propsForLabels: {
                        fontSize: ms(10),
                        fill: 'rgba(117, 141, 172, 1)',
                        fontWeight: '600',
                        fontFamily: 'Nunito-Regular',
                      },
                    }}
                    style={{ marginLeft: ms(15) }}
                    hideLegend={true}
                  />
                  <Text style={styles(direction).insideText1}>
                    {t('12\nhrs')}
                  </Text>
                </View>
                <View style={styles(direction).progressChartContainer2}>
                  <ProgressChart
                    data={progressReadingChartData}
                    width={ms(72)}
                    height={ms(72)}
                    strokeWidth={8}
                    radius={s(30)}
                    withCustomBarColorFromData={true}
                    chartConfig={{
                      backgroundColor: '#EBEEF0',
                      backgroundGradientFrom: '#EBEEF0',
                      backgroundGradientTo: '#EBEEF0',
                      color: (opacity = 1) =>
                        `rgba(${74}, ${74}, ${74}, ${opacity})`,
                      propsForLabels: {
                        fontSize: ms(10),
                        fill: 'rgba(117, 141, 172, 1)',
                        fontWeight: '600',
                        fontFamily: 'Nunito-Regular',
                      },
                    }}
                    style={{ marginLeft: ms(15) }}
                    hideLegend={true}
                  />
                  <Text style={styles(direction).insideText2}>
                    {t('7\nhrs')}
                  </Text>
                </View>
                <View style={styles(direction).progressChartContainer3}>
                  <ProgressChart
                    data={progressVideoChartData}
                    width={ms(72)}
                    height={ms(72)}
                    strokeWidth={8}
                    radius={s(30)}
                    withCustomBarColorFromData={true}
                    chartConfig={{
                      backgroundColor: '#EBEEF0',
                      backgroundGradientFrom: '#EBEEF0',
                      backgroundGradientTo: '#EBEEF0',
                      color: (opacity = 1) =>
                        `rgba(${74}, ${74}, ${74}, ${opacity})`,
                      propsForLabels: {
                        fontSize: ms(10),
                        fill: 'rgba(117, 141, 172, 1)',
                        fontWeight: '600',
                        fontFamily: 'Nunito-Regular',
                      },
                    }}
                    style={{ marginLeft: ms(15) }}
                    hideLegend={true}
                  />
                  <Text style={styles(direction).insideText3}>
                    {t('6\nhrs')}
                  </Text>
                </View>
              </View>

              <View style={styles(direction).textContainer}>
                <Text style={styles(direction).activityText1}>
                  {t('OnApp')}
                </Text>
                <Text style={styles(direction).activityText2}>
                  {t('Reading')}
                </Text>
                <Text style={styles(direction).activityText3}>
                  {t('Video')}
                </Text>
              </View>
            </View>
          </Neumorphism>
          <View style={styles(direction).marginView}></View>
          <Neumorphism
            lightColor={'#ffffff'}
            darkColor={'#A8A8A8'}
            shapeType={'flat'}
            radius={14}>
            <View style={styles(direction).rectangle4}>
              <View style={styles(direction).bookShelfTextContainer}>
                <GradientText
                  colors={['#758DAC', '#2F4868']}
                  text={t('Book Shelf')}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  textStyle={styles(direction).bookShelfText}
                />
                <TouchableOpacity>
                  <MaterialIcon
                    name={'arrow-forward'}
                    size={ms(20)}
                    color={'#03A0E3'}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles(direction).bookShelfMainContainer}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={14}>
                  <View style={styles(direction).bookShelfContainer}>
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).bookShelfImage1}
                        source={require('../../assets/bookShelfImage1.png')}></Image>
                      <Text style={styles(direction).bookTitle}>
                        {t('Kung Fu Panda')}
                      </Text>
                      <Text style={styles(direction).bookAuthor}>
                        {t('By Martin Luthe')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Neumorphism>
                <View style={styles(direction).marginViewRow}></View>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={14}>
                  <View style={styles(direction).bookShelfContainer}>
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).bookShelfImage1}
                        source={require('../../assets/bookShelfImage2.png')}></Image>
                      <Text style={styles(direction).bookTitle}>
                        {t('Angry Bird 2')}
                      </Text>
                      <Text style={styles(direction).bookAuthor}>
                        {t('By Martin Luthe')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Neumorphism>
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
              <View style={styles(direction).subContainer}>
                <View style={styles(direction).channelImageContainer}>
                  <TouchableOpacity>
                    <Image
                      style={styles(direction).channelImage}
                      source={require('../../assets/channelImage1.png')}></Image>
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

                  <Text style={styles(direction).numberText}>{t('2563')}</Text>
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
              <View style={styles(direction).subContainer}>
                <View style={styles(direction).channelImageContainer}>
                  <TouchableOpacity>
                    <Image
                      style={styles(direction).channelImage}
                      source={require('../../assets/channelImage2.png')}></Image>
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
                  <View style={styles(direction).videoLogoContainer}>
                    <TouchableOpacity onPress={() => {}}>
                      <Image
                        style={styles(direction).videoLogoImage}
                        source={require('../../assets/playLogo.png')}></Image>
                    </TouchableOpacity>
                  </View>
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
                  <Text style={styles(direction).numberText}>{t('2563')}</Text>
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
            <View style={styles(direction).rectangle6}>
              <View style={styles(direction).subContainer}>
                <View style={styles(direction).channelImageContainer}>
                  <TouchableOpacity>
                    <Image
                      style={styles(direction).channelImage}
                      source={require('../../assets/channelImage3.png')}></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles(direction).channelTextContainer}>
                  <TouchableOpacity>
                    <Text style={styles(direction).channelNameText}>
                      {t('Arabic Language (ST 2)')}
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
                <View style={styles(direction).pdfImageContainer}>
                  <Image
                    style={styles(direction).pdfImage}
                    source={require('../../assets/pdfImage2.png')}></Image>
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
                  <Text style={styles(direction).numberText}>{t('2563')}</Text>
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
                <Image
                  style={styles(direction).activityImage}
                  source={require('../../assets/channelImage3.png')}></Image>
                <View style={styles(direction).activityWorkBottomTextContainer}>
                  <Text style={styles(direction).teacherText}>
                    {t('Teacher')}
                  </Text>
                  <Text style={styles(direction).teacherNameText}>
                    {t('Fathima Shaikh')}
                  </Text>
                </View>
                <View style={styles(direction).activityWorkBottomTextContainer}>
                  <Text style={styles(direction).dateText}>
                    {t('Due Date')}
                  </Text>
                  <Text style={styles(direction).dateText2}>27 Oct, 2020</Text>
                </View>
              </View>
              <View style={styles(direction).activityWorkBottomProgressBar}>
                <ProgressChart
                  data={progressActivityChartData}
                  width={ms(50)}
                  height={ms(50)}
                  strokeWidth={4}
                  radius={s(15)}
                  withCustomBarColorFromData={true}
                  chartConfig={{
                    backgroundColor: '#EBEEF0',
                    backgroundGradientFrom: '#EBEEF0',
                    backgroundGradientTo: '#EBEEF0',
                    color: (opacity = 1) =>
                      `rgba(${74}, ${74}, ${74}, ${opacity})`,
                    propsForLabels: {
                      fontSize: ms(10),
                      fill: 'rgba(117, 141, 172, 1)',
                      fontWeight: '600',
                      fontFamily: 'Nunito-Regular',
                    },
                  }}
                  style={{ marginLeft: ms(15) }}
                  hideLegend={true}
                />
                <Text style={styles(direction).insideTextActivityWork}>
                  {t('80%')}
                </Text>
              </View>
            </View>
          </Neumorphism>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ChildFullProfile;
