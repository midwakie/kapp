import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  SafeAreaView,
  Text,
  TextStyle,
  View,
  TextInput,
  Image,
  TouchableOpacity,
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
import { scale } from 'react-native-size-matters';
import PlainButton from 'app/components/buttons/PlainButton';

const TeachersProfile: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [data, setdata] = useState([
    {
      titleImage: require('../../assets/teacherPic1.png'),
      titleName: 'Arabic Language (ST 2)',
      subscribers: '256k Subscribers',
      count: '132 Videos',
      standard: 'Standard 2',
    },
    {
      titleImage: require('../../assets/teacherPic2.png'),
      titleName: 'English Language (ST 2)',
      subscribers: '256k Subscribers',
      count: '132 Videos',
      standard: 'Standard 2',
    },
    {
      titleImage: require('../../assets/teacherPic1.png'),
      titleName: 'Arabic Language (ST 2)',
      subscribers: '256k Subscribers',
      count: '132 Videos',
      standard: 'Standard 2',
    },
    {
      titleImage: require('../../assets/teacherPic2.png'),
      titleName: 'English Language (ST 2)',
      subscribers: '256k Subscribers',
      count: '132 Videos',
      standard: 'Standard 2',
    },
  ]);
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
              text={t('Profile Detail')}
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
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles(direction).rectangle}>
                <View style={{ marginLeft: 30 }}>
                  <Image
                    source={require('../../assets/editTeacher.png')}
                    style={styles(direction).profileImageStyle}
                  />
                  <View style={{ marginTop: 14 }}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(14)}>
                      <View style={styles(direction).box}>
                        <Text style={styles(direction).insideText}>
                          {t('Teacher')}
                        </Text>
                      </View>
                    </Neumorphism>
                  </View>
                </View>
                <View>
                  <Text style={styles(direction).text}>
                    {t('Hubbir Qureshi')}
                  </Text>
                  <Text style={styles(direction).text2}>
                    {t('Next Generation School')}
                  </Text>
                </View>
                <PlainButton
                  onPress={() => {
                    NavigationService.navigate('EditTeacherProfile');
                  }}
                  style={styles(direction).text3}
                  text={t('Edit')}
                />
              </View>
            </Neumorphism>
            {data.map((item, index) => {
              return (
                <View style={{ marginTop: 30 }}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={14}>
                    <View style={styles(direction).rectangle2}>
                      <Image
                        source={item.titleImage}
                        style={styles(direction).imageStyle}
                      />
                      <View>
                        <Text style={styles(direction).text}>
                          {t(item.titleName)}
                        </Text>
                        <View
                          style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                          }}>
                          <Text style={styles(direction).status}>
                            {t(item.subscribers)}
                          </Text>
                          <Text style={styles(direction).text4}>
                            {t(item.count)}
                          </Text>
                        </View>
                        <Text style={styles(direction).text4}>
                          {t(item.standard)}
                        </Text>
                      </View>
                      <Image
                        source={require('../../assets/threeDot.png')}
                        style={styles(direction).icon}
                      />
                    </View>
                  </Neumorphism>
                </View>
              );
            })}
            <View style={{ marginTop: 30 }}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle3}>
                  <View style={styles(direction).leftContainer}>
                    <View style={styles(direction).neomorphContainer2}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#A8A8A8'}
                        shapeType={'flat'}
                        radius={scale(150)}>
                        <View style={styles(direction).container8}>
                          <TouchableOpacity onPress={() => {}}>
                            <Image
                              style={styles(direction).imageStyle1}
                              source={require('../../assets/plus.png')}
                            />
                          </TouchableOpacity>
                        </View>
                      </Neumorphism>
                    </View>
                  </View>
                  <View style={styles(direction).rightContainer}>
                    <Text style={styles(direction).inputText}>
                      {t('Create New Channel')}
                    </Text>
                  </View>
                </View>
              </Neumorphism>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default TeachersProfile;
