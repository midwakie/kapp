/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import PlainButton from 'app/components/buttons/PlainButton';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import ApiConfig from 'app/config/api-config';
import { useQuery } from 'react-query';

const ParentProfileDetail: React.FC = props => {
  const { control } = useForm();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

  const { isLoading, data } = useQuery('parentProfile', async () => {
    try {
      const response = await fetch(ApiConfig.BASE_URL2 + ApiConfig.PARENT);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (catchError: any) {
      console.error(catchError);
    }
  });
  console.log(data);

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

  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#03A0E3" />
          ) : (
            <View style={styles(direction).container1}>
              <View style={styles(direction).container2}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(14)}>
                  <View style={styles(direction).container3}>
                    <View style={styles(direction).row}>
                      <View style={styles(direction).profileImgContainer}>
                        <Image
                          source={{
                            uri:
                              ApiConfig.BASE_ASSET_URL +
                              data?.parentProfile?.parentImage,
                          }}
                          style={styles(direction).profileImg}
                        />
                        <View style={styles(direction).smallContainer}>
                          <Neumorphism
                            lightColor={'#ffffff'}
                            darkColor={'#A8A8A8'}
                            shapeType={'flat'}
                            radius={50}>
                            <View style={styles(direction).coinContainer222}>
                              <Text style={styles(direction).smallText}>
                                {t('Parent')}
                              </Text>
                            </View>
                          </Neumorphism>
                        </View>
                      </View>
                      <View style={styles(direction).Container4}>
                        <Text style={styles(direction).text1}>
                          {t(data?.parentProfile?.parentName)}
                        </Text>
                        <Text style={styles(direction).text2}>
                          {t(data?.parentProfile?.noChildrens)}
                        </Text>
                      </View>
                      <View style={styles(direction).Container43}>
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
                                      'EditParentProfile',
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
                  </View>
                </Neumorphism>
              </View>
              {data?.parentProfile?.childrens?.map((children, index) => {
                return (
                  <View style={styles(direction).container21}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(14)}>
                      <View style={styles(direction).container31}>
                        <View style={styles(direction).row3}>
                          <View style={styles(direction).profileImgContainer1}>
                            <TouchableOpacity
                              onPress={() => {
                                NavigationService.navigate('ChildFullProfile');
                              }}>
                              <Image
                                source={{
                                  uri:
                                    ApiConfig.BASE_ASSET_URL +
                                    children?.childImage,
                                }}
                                style={styles(direction).profileImg}
                              />
                            </TouchableOpacity>
                          </View>
                          <View style={styles(direction).Container41}>
                            <Text style={styles(direction).text1}>
                              {t(children.childrenName)}
                            </Text>
                            <Text style={styles(direction).text2}>
                              {t(children.schoolName)}
                            </Text>
                          </View>
                          <View style={styles(direction).Container43}>
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
                                    onSelect={() => {}}
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
                                          ? styles(direction)
                                              .optionTitleStyleColor
                                          : styles(direction).optionTitleStyle
                                      }>
                                      {t(op.title)}{' '}
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

                        <View style={styles(direction).row11}>
                          <View style={styles(direction).Container52}>
                            <Text style={styles(direction).smallText1}>
                              {t('Teachers')}
                            </Text>
                            <View style={styles(direction).imageContainer}>
                              {children?.teachersImage?.map(
                                (teacher, index) => (
                                  <TouchableOpacity
                                    key={index}
                                    onPress={() => {}}
                                    style={
                                      index === 0
                                        ? styles(direction).interestIcon1
                                        : styles(direction).interestIcons
                                    }>
                                    <Image
                                      style={styles(direction).imageRound}
                                      source={{
                                        uri:
                                          ApiConfig.BASE_ASSET_URL +
                                          teacher?.avatarImage,
                                      }}
                                    />
                                    {index === 5 && (
                                      <Text style={styles(direction).plusFour}>
                                        +4
                                      </Text>
                                    )}
                                  </TouchableOpacity>
                                ),
                              )}
                            </View>
                          </View>
                          <View style={styles(direction).Container52}>
                            <Text style={styles(direction).smallText11}>
                              {t('Total Points Earned')}
                            </Text>
                            <View style={styles(direction).coinContainer2}>
                              <Image
                                style={styles(direction).coinImage}
                                source={require('../../assets/goldCoin1.png')}
                              />
                              <Text style={styles(direction).coinText}>
                                {t(children.Points)}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </Neumorphism>
                  </View>
                );
              })}
            </View>
          )}
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
                text={t('Profile Detail')}
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

export default ParentProfileDetail;
