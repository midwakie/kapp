import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Image, SafeAreaView, Text, TextStyle, View } from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';


const ActivitiesStats: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
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
              {/* <Image
                  style={styles(direction).image}
                  source={require('../../assets/graph3.png')}
                />
                <Image
                  style={styles(direction).image1}
                  source={require('../../assets/graph2.png')}
                />
                <Image
                  style={styles(direction).image2}
                  source={require('../../assets/graph1.png')}
                /> */}
            </View>
          </Neumorphism>
          <View style={styles(direction).rectangle3}>
            <Text style={styles(direction).text}>
              {t('Total time spent on video')}
            </Text>
            <Image
              style={styles(direction).elipse1}
              source={require('../../assets/white.png')}
            />
            <Image
              style={styles(direction).elipse2}
              source={require('../../assets/Ellipseblue.png')}
            />
            <Text style={styles(direction).insidetext}>{t('50 \nhrs ')}</Text>
          </View>
          <View style={styles(direction).rectangle4}>
            <Text style={styles(direction).text}>
              {t('Total time spent reading')}
            </Text>
            <Image
              style={styles(direction).elipse1}
              source={require('../../assets/white.png')}
            />
            <Image
              style={styles(direction).elipse3}
              source={require('../../assets/Ellipsered.png')}
            />
            <Text style={styles(direction).insidetext}>{t('50 \nhrs ')}</Text>
          </View>
          <View style={styles(direction).rectangle4}>
            <Text style={styles(direction).text}>
              {t('Total time spent on app')}
            </Text>
            <Image
              style={styles(direction).elipse1}
              source={require('../../assets/white.png')}
            />
            <Image
              style={styles(direction).elipse4}
              source={require('../../assets/Ellipse3.png')}
            />
            <Text style={styles(direction).insidetext}>{t('50 \nhrs ')}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ActivitiesStats;
