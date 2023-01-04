/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View, TextStyle } from 'react-native';

import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { useForm } from 'react-hook-form';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyChannel: React.FC = () => {
  const { control } = useForm();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [data, setData] = useState([
    {
      profileImage: require('../../assets/myChannel1.png'),
      profileName: 'Angry Bird 2',
      status: '1256 View , 1 Hours Ago',
      contentImage: require('../../assets/myChannel2.png'),
    },
    {
      profileImage: require('../../assets/myChannel1.png'),
      profileName: 'Angry Bird 2',
      status: '1256 View , 1 Hours Ago',
      contentImage: require('../../assets/myChannel4.png'),
    },
    {
      profileImage: require('../../assets/myChannel1.png'),
      profileName: 'Angry Bird 2',
      status: '1256 View , 1 Hours Ago',
      contentImage: require('../../assets/myChannel5.png'),
    },
  ]);
  const [data1, setData1] = useState([
    {
      profileImage: require('../../assets/myChannel1.png'),
      channelName: 'Dream Star Kid',
      subscribers: '256k subscribers',
    },
  ]);

  const [options, setOptions] = useState([
    {
      title: 'Edit Channel',
      image: require('../../assets/pen.png'),
    },
    {
      title: 'Channel Privacy',
      image: require('../../assets/privacy.png'),
    },
    {
      title: 'Make Featured Channel',
      image: require('../../assets/money.png'),
    },
    {
      title: 'Manage People',
      image: require('../../assets/userMenu.png'),
    },
    {
      title: 'Manage Activities',
      image: require('../../assets/alarmClock.png'),
    },
  ]);

  const [options1, setOption] = useState([
    {
      title: 'Recommend to Club',
      image: require('../../assets/tv.png'),
    },
    {
      title: 'Privacy',
      image: require('../../assets/privacy.png'),
    },
    {
      title: 'Delete ',
      image: require('../../assets/trash.png'),
    },
  ]);

  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container1}>
            {data1.map((item, index) => {
              return (
                <View style={styles(direction).row}>
                  <View style={styles(direction).profileImgContainer0}>
                    <Image
                      source={require('../../assets/myChannel1.png')}
                      style={styles(direction).profileImg0}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View>
                      <Text style={styles(direction).text1}>
                        {t(item.channelName)}
                      </Text>
                      <Text style={styles(direction).text2}>
                        {t(item.subscribers)}
                      </Text>
                      <View style={{ marginTop: 17, marginLeft: 35 }}>
                        <RegularButton
                          onPress={() => {
                            NavigationService.navigate(' ');
                          }}
                          text={t('Publish ')}
                          radius={50}
                          height={45}
                          width={'100%'}
                          colors={['#03BBE3', '#14A9FD']}
                        />
                      </View>
                    </View>
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
                            backgroundColor: '#EBEEF0',
                          },
                        }}>
                        {options.map((op, i) => (
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
                            <Text style={styles(direction).optionTitleStyle}>
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
              );
            })}
            {data.map((item, index) => {
              return (
                <View style={styles(direction).container5}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).container2}>
                      <View style={styles(direction).profileImgContainer1}>
                        <Image
                          source={item.contentImage}
                          style={styles(direction).profileImg1}
                        />
                        <Image
                          source={require('../../assets/playIcon.png')}
                          style={styles(direction).profileImg2}
                        />
                      </View>
                      <View style={styles(direction).row1}>
                        <View style={styles(direction).profileImgContainer2}>
                          <Image
                            source={item.profileImage}
                            style={styles(direction).profileImg0}
                          />
                        </View>
                        <View>
                          <Text style={styles(direction).text11}>
                            {t(item.profileName)}
                          </Text>
                          <View style={styles(direction).containerSubTitle}>
                            <Text style={styles(direction).text22}>
                              {t(item.status)}
                            </Text>
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
                                        styles(direction).optionTitleStyle
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
                          <View style={styles(direction).row3}>
                            <MaterialIcon
                              name={'favorite'}
                              size={scale(14)}
                              color={'#FF5E62'}
                              style={styles(direction).icon}
                            />
                            <Text style={styles(direction).text23}>
                              {t('2563')}
                            </Text>
                            <Icon
                              name={'chat'}
                              size={scale(14)}
                              color={'#03A0E3'}
                              style={styles(direction).icon2}
                            />
                            <Text style={styles(direction).text23}>
                              {t('2563')}
                            </Text>

                            <MaterialIcon
                              name={'visibility'}
                              size={scale(14)}
                              color={'#84BD47'}
                              style={styles(direction).icon3}
                            />
                            <Text style={styles(direction).text24}>
                              {t('2563')}
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
                text={t('My Channel')}
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

export default MyChannel;
