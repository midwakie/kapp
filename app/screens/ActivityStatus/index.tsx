import React, { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextStyle,
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

const ActivitiesStats: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [10, 90, 60, 100, 95, 30, 55],
        color: (opacity = 0.5) => `rgba(3, 160, 227, ${opacity})`,
        fillShadowGradientOpacity: 1,
        fillShadowGradient: (opacity = 1) => `rgba(3, 160, 227, ${opacity})`,
      },
      {
        data: [50, 30, 50, 40, 56, 75, 100],
        color: (opacity = 0.5) => `rgba(132, 189, 71, ${opacity})`,
        fillShadowGradientOpacity: 1,
        fillShadowGradient: (opacity = 1) => `rgba(132, 189, 71, ${opacity})`,
      },
      {
        data: [100, 25, 20, 50, 10, 20, 31],
        color: (opacity = 0.5) => `rgba(236, 77, 97, ${opacity})`,
        fillShadowGradientOpacity: 1,
        fillShadowGradient: (opacity = 1) => `rgba(236, 77, 97, ${opacity})`,
      },
    ],
  };

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
              text={t('Activities Stats')}
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
            <View style={styles(direction).rectangle2}>
              <View style={styles(direction).lastWeekDropdown}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'basin'}
                  radius={50}>
                  <View style={styles(direction).box}>
                    <Text style={styles(direction).text2}>
                      {t('Last Week')}
                    </Text>
                    <MaterialIcon
                      name={'expand-more'}
                      size={scale(12)}
                      color={'#03A0E3'}
                    />
                  </View>
                </Neumorphism>
              </View>
              <View style={styles(direction).lineChartContainer}>
                <LineChart
                  data={data}
                  width={Dimensions.get('window').width - s(60)}
                  height={s(160)}
                  withHorizontalLines={false}
                  withVerticalLines={false}
                  withOuterLines={true}
                  withInnerLines={true}
                  withShadow={true}
                  segments={5}
                  fromZero={true}
                  chartConfig={{
                    backgroundColor: '#EBEEF0',
                    backgroundGradientFrom: '#EBEEF0',
                    backgroundGradientTo: '#EBEEF0',
                    useShadowColorFromDataset: true,
                    decimalPlaces: 0,
                    strokeWidth: 0.5,
                    color: (opacity = 1) => `rgba(117, 141, 172, ${opacity})`,
                    propsForLabels: {
                      fontSize: ms(10),
                      fill: 'rgba(117, 141, 172, 1)',
                      fontWeight: '600',
                      fontFamily: 'Nunito-Regular',
                    },
                    propsForVerticalLabels: {
                      fontSize: ms(10),
                      fill: 'rgba(117, 141, 172, 1)',
                      fontWeight: '600',
                      fontFamily: 'Nunito-Regular',
                    },
                    propsForHorizontalLabels: {
                      fontSize: ms(10),
                      fill: 'rgba(117, 141, 172, 1)',
                      fontWeight: '600',
                      fontFamily: 'Nunito-Regular',
                    },
                  }}
                />
              </View>
            </View>
          </Neumorphism>
          <View style={{ marginTop: 31 }}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles(direction).rectangle3}>
                <ProgressChart
                  data={progressVideoChartData}
                  width={ms(105)}
                  height={ms(105)}
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
                <Text style={styles(direction).text}>
                  {t('Total time spent on video')}
                </Text>
                <Text style={styles(direction).insidetext}>
                  {t('50 \nhrs')}
                </Text>
              </View>
            </Neumorphism>
          </View>
          <View style={{ marginTop: 31 }}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles(direction).rectangle3}>
                <ProgressChart
                  data={progressReadingChartData}
                  width={ms(105)}
                  height={ms(105)}
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
                <Text style={styles(direction).text}>
                  {t('Total time spent on reading')}
                </Text>
                <Text style={styles(direction).insidetext}>
                  {t('30 \nhrs')}
                </Text>
              </View>
            </Neumorphism>
          </View>
          <View style={{ marginTop: 31 }}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles(direction).rectangle3}>
                <ProgressChart
                  data={progressAppChartData}
                  width={ms(105)}
                  height={ms(105)}
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
                <Text style={styles(direction).text}>
                  {t('Total time spent on app')}
                </Text>
                <Text style={styles(direction).insidetext}>
                  {t('80 \nhrs')}
                </Text>
              </View>
            </Neumorphism>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ActivitiesStats;
