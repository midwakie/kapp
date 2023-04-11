/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextStyle,
  View,
  Image,
  TouchableOpacity,
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
import { scale } from 'react-native-size-matters';
import PlainButton from 'app/components/buttons/PlainButton';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import ApiConfig from 'app/config/api-config';
import { useQuery } from 'react-query';

const TeachersProfile: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

  const [options, setOptions] = useState([
    {
      title: 'Channel Privacy',
      image: require('../../assets/privacy.png'),
    },
    {
      title: 'Edit Channel',
      image: require('../../assets/pen.png'),
    },
    {
      title: 'Delete Channel',
      image: require('../../assets/trash.png'),
    },
  ]);
  const [options1, setOption] = useState([
    {
      title: 'Switch Profile',
      image: require('../../assets/switchProfile.png'),
    },
    {
      title: 'Send Invitation',
      image: require('../../assets/sendInvitation.png'),
    },
    {
      title: 'Edit Profile',
      image: require('../../assets/pen.png'),
    },
    {
      title: 'Delete Profile',
      image: require('../../assets/trash.png'),
    },
  ]);

  const { isLoading, data } = useQuery('teacher', async () => {
    try {
      const response = await fetch(
        ApiConfig.BASE_URL2 + ApiConfig.TEACHER_PROFILE,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (catchError: any) {
      console.error(catchError);
    }
  });
  console.log(data);
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
          {isLoading ? (
            <ActivityIndicator size="large" color="#03A0E3" />
          ) : (
            <View style={styles(direction).container2}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle}>
                  <View style={styles(direction).neumorphic}>
                    <Image
                      source={{
                        uri:
                          ApiConfig.BASE_ASSET_URL +
                          data?.teacher?.teacherInfo?.profileImg,
                      }}
                      style={styles(direction).profileImageStyle}
                    />
                    <View style={{ marginTop: scale(14) }}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#A8A8A8'}
                        shapeType={'flat'}
                        radius={scale(14)}>
                        <View style={styles(direction).box}>
                          <Text style={styles(direction).insideText}>
                            {t(data?.teacher?.teacherInfo?.labelText)}
                          </Text>
                        </View>
                      </Neumorphism>
                    </View>
                  </View>
                  <View>
                    <Text style={styles(direction).text5}>
                      {t(data?.teacher?.teacherInfo?.teacherName)}
                    </Text>
                    <Text style={styles(direction).text2}>
                      {t(data?.teacher?.teacherInfo?.schoolName)}
                    </Text>
                  </View>
                  <View style={styles(direction).container3}>
                    <Menu>
                      <MenuTrigger>
                        <Image
                          source={require('../../assets/menu.png')}
                          style={styles(direction).itemMenu}
                        />
                      </MenuTrigger>
                      <MenuOptions
                        customStyles={{
                          optionsContainer: {
                            borderRadius: scale(14),
                            width: scale(214),
                            paddingVertical: scale(20),
                            backgroundColor: '#EBEEF0',
                          },
                        }}>
                        {options1.map((op, i) => (
                          <MenuOption
                            onSelect={() => {
                              if (op.title === 'Edit Profile') {
                                NavigationService.navigate(
                                  'EditTeacherProfile',
                                );
                              }
                            }}
                            customStyles={{
                              optionWrapper: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: scale(20),
                                paddingVertical: scale(7),
                              },
                            }}>
                            <Text
                              style={
                                op.title === t('Delete Profile')
                                  ? styles(direction).optionTitleStyleColor
                                  : styles(direction).optionTitleStyle
                              }>
                              {t(op.title)}
                            </Text>
                            <Image
                              source={op.image}
                              style={styles(direction).menuImage}
                            />
                          </MenuOption>
                        ))}
                      </MenuOptions>
                    </Menu>
                  </View>
                </View>
              </Neumorphism>
              {data?.teacher?.teacherInfo?.channels?.map((teacher, index) => {
                return (
                  <View style={styles(direction).neumorphic1}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={14}>
                      <View style={styles(direction).rectangle2}>
                        <TouchableOpacity
                          onPress={() => {
                            NavigationService.navigate('MyChannel');
                          }}>
                          <Image
                            source={{
                              uri:
                                ApiConfig.BASE_ASSET_URL + teacher?.titleImage,
                            }}
                            style={styles(direction).imageStyle}
                          />
                        </TouchableOpacity>
                        <View style={styles(direction).margin}>
                          <Text style={styles(direction).text}>
                            {t(teacher?.titleName)}
                          </Text>
                          <View style={styles(direction).direction}>
                            <Text style={styles(direction).status}>
                              {t(teacher?.subscribers)}
                            </Text>
                            <Text style={styles(direction).text4}>
                              {t(teacher?.count)}
                            </Text>
                          </View>
                          <Text style={styles(direction).text6}>
                            {t(teacher?.standard)}
                          </Text>
                        </View>
                        <View style={styles(direction).container4}>
                          <Menu>
                            <MenuTrigger>
                              <Image
                                source={require('../../assets/menu.png')}
                                style={styles(direction).menu}
                              />
                            </MenuTrigger>
                            <MenuOptions
                              customStyles={{
                                optionsContainer: {
                                  borderRadius: scale(14),
                                  width: scale(214),
                                  paddingVertical: scale(20),
                                  marginTop: 40,
                                  marginLeft: -35,
                                  backgroundColor: '#EBEEF0',
                                },
                              }}>
                              {options.map((op, i) => (
                                <MenuOption
                                  onSelect={() => {
                                    [
                                      op.title === 'Edit Channel'
                                        ? NavigationService.navigate(
                                            'MyChannel',
                                            {
                                              titleName: item.titleName,
                                              isCondition: false,
                                            },
                                          )
                                        : NavigationService.navigate(''),
                                    ];
                                  }}
                                  customStyles={{
                                    optionWrapper: {
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      paddingHorizontal: scale(20),
                                      paddingVertical: scale(9),
                                    },
                                  }}>
                                  <Text
                                    style={
                                      op.title === 'Delete Channel'
                                        ? styles(direction).optionTitleStyle2
                                        : styles(direction).optionTitleStyle
                                    }>
                                    {op.title}{' '}
                                  </Text>
                                  <Image
                                    source={op.image}
                                    style={styles(direction).menuImage}
                                  />
                                </MenuOption>
                              ))}
                            </MenuOptions>
                          </Menu>
                        </View>
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
                            <TouchableOpacity
                              onPress={() => {
                                NavigationService.navigate('CreateChannel');
                              }}>
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
          )}
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default TeachersProfile;
