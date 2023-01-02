import React, { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Dimensions,
  Image,
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
import { LineChart, ProgressChart } from 'react-native-chart-kit';

const ChildFullProfile: React.FC = () => {
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
                  <Text style={styles(direction).editText}> Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles(direction).mainTextContainer}>
                <Text style={styles(direction).nameText}>
                  {t('Jabir Qureshi')}
                </Text>
                <Text style={styles(direction).schoolText}>
                  {t('Al Jeel Al Saeel School')}
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
                    <Text style={styles(direction).coinText}>450</Text>
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
                {/* <View style={styles(direction).materialIconView}>
                  <MaterialIcon
                    name={'arrow-forward'}
                    size={ms(20)}
                    color={'#03A0E3'}
                  />
                </View> */}
              </View>
              <View style={styles(direction).chartContainer}>
                <View style={styles(direction).progressChartContainer}>
                  <ProgressChart
                    data={progressAppChartData}
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
                  <Text style={styles(direction).insideText1}>
                    {t('12 \nhrs')}
                  </Text>
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
                    {t(' 7\nhrs')}
                  </Text>
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
                    {t(' 6\nhrs')}
                  </Text>
                </View>
              </View>
              <View style={styles(direction).textContainer}>
                <Text style={styles(direction).activityText2}>OnApp</Text>
                <Text style={styles(direction).activityText2}>Reading</Text>
                <Text style={styles(direction).activityText3}> Video</Text>
              </View>
            </View>
          </Neumorphism>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ChildFullProfile;
