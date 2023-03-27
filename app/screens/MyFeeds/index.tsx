/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import { useTranslation } from 'react-i18next';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import VerticalLine from 'app/components/lines/VerticalLine';
import { DrawerActions } from '@react-navigation/native';
import NavigationService from 'app/navigation/NavigationService';
import ApiConfig from 'app/config/api-config';
import { useQuery } from 'react-query';

const MyFeeds: React.FC = (props: any) => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

  const { isLoading, data } = useQuery('myFeeds', async () => {
    try {
      const response = await fetch(ApiConfig.BASE_URL2 + ApiConfig.My_FEEDS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (catchError: any) {
      console.error(catchError);
    }
  });
  return (
    <>
      <TitleBar
        leftComponent={
          <View style={styles(direction).leftContainer}>
            <Image
              source={require('../../assets/toppic.png')}
              style={styles(direction).topImage}
            />
          </View>
        }
        middleComponent={
          <View style={styles(direction).middleComponent}>
            <GradientText
              colors={['#03A0E3', '#0D93CD']}
              text={t('My Feeds')}
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
            <View style={styles(direction).topIconContainer}>
              <TouchableOpacity
                onPress={() => {
                  props?.navigation.dispatch(DrawerActions.toggleDrawer());
                }}>
                <View style={styles(direction).menuContainer}>
                  <Image
                    source={require('../../assets/childHomeMenu.png')}
                    style={styles(direction).iconImageStyle}
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
                <View style={styles(direction).searchContainer}>
                  <Image
                    source={require('../../assets/searchIcon.png')}
                    style={styles(direction).iconImageStyle}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </Neumorphism>
        }
      />
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#03A0E3" />
          ) : (
            <View style={styles(direction).container2}>
              {data?.myFeeds.map((item, index) => {
                return (
                  <View style={{ marginBottom: 30 }}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={14}>
                      <View style={styles(direction).rectangle2}>
                        <View style={styles(direction).imageContainer}>
                          <TouchableOpacity
                            onPress={() => {
                              NavigationService.navigate('FeedDetail');
                            }}>
                            <Image
                              source={{
                                uri:
                                  ApiConfig.BASE_ASSET_URL + item.profileImage,
                              }}
                              style={styles(direction).image1Style}
                            />
                          </TouchableOpacity>
                          <View>
                            <Text style={styles(direction).profileName}>
                              {item.profileName}
                            </Text>
                            <Text style={styles(direction).status}>
                              {item.endDate}
                            </Text>
                          </View>
                        </View>
                        <View style={styles(direction).imageContainer1}>
                          <Image
                            source={{
                              uri: ApiConfig.BASE_ASSET_URL + item.content,
                            }}
                            style={styles(direction).imageStyle}
                          />
                          <TouchableOpacity
                            style={styles(direction).imageButtonContainer1}>
                            <Image
                              source={{
                                uri: ApiConfig.BASE_ASSET_URL + item.icon,
                              }}
                              style={styles(direction).button}
                            />
                          </TouchableOpacity>
                        </View>
                        <GradientText
                          colors={['#758DAC', '#2F4868']}
                          text={t(item.Title)}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 0, y: 1 }}
                          textStyle={styles(direction).headingText}
                        />
                        <Text style={styles(direction).text}>
                          {item.description}
                        </Text>
                        <View style={styles(direction).iconContainer}>
                          <Neumorphism
                            lightColor={'#ffffff'}
                            darkColor={'#A8A8A8'}
                            shapeType={'flat'}
                            radius={50}>
                            <View style={styles(direction).iconBox}>
                              <MaterialIcon
                                name={'favorite'}
                                size={scale(15)}
                                color={'#C1DBE7'}
                                style={styles(direction).icon}
                              />
                              <Text style={styles(direction).iconText}>
                                {t('235')}
                              </Text>
                            </View>
                          </Neumorphism>
                          <View style={{ marginLeft: 20 }}>
                            <Neumorphism
                              lightColor={'#ffffff'}
                              darkColor={'#A8A8A8'}
                              shapeType={'flat'}
                              radius={50}>
                              <View style={styles(direction).iconBox}>
                                <Icon
                                  name={'chat'}
                                  size={scale(15)}
                                  color={'#C1DBE7'}
                                  style={styles(direction).icon}
                                />
                                <Text style={styles(direction).iconText}>
                                  {t('235')}
                                </Text>
                              </View>
                            </Neumorphism>
                          </View>
                          <View style={{ marginLeft: 20 }}>
                            <Neumorphism
                              lightColor={'#ffffff'}
                              darkColor={'#A8A8A8'}
                              shapeType={'flat'}
                              radius={50}>
                              <View style={styles(direction).iconBox}>
                                <MaterialIcon
                                  name={'visibility'}
                                  size={scale(15)}
                                  color={'#84BD47'}
                                  style={styles(direction).icon}
                                />
                                <Text style={styles(direction).iconText}>
                                  {t('235')}
                                </Text>
                              </View>
                            </Neumorphism>
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
    </>
  );
};

export default MyFeeds;
