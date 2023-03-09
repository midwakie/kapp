/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import VerticalLine from 'app/components/lines/VerticalLine';
import { DrawerActions } from '@react-navigation/native';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';

const Notification: React.FC = (props: any) => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();

  const notifications = [
    {
      id: 1,
      title: 'Abeer Shaikh',
      img: require('../../assets/parentImage.png'),
      description: 'Commented on your post',
      description2: 'Very Good Keep it up!',
      time: '9:45 AM',
    },
    {
      id: 2,
      title: 'Husain Burhanuddin',
      img: require('../../assets/chatListThree.png'),
      description: 'Liked your post',
      description2: 'Dream Star Kids',
      time: '9:45 AM',
    },
    {
      id: 3,
      title: 'Rabbi Qureshi',
      img: require('../../assets/childImage1.png'),
      description: 'Posted new video',
      description2: 'Dream Star Kids',
      time: '5 hrs ago',
      playButtonImg: require('../../assets/play1.png'),
    },
    {
      id: 4,
      title: 'Abeer Shaikh',
      img: require('../../assets/ParentShop.png'),
      description: 'Commented on your post',
      description2: 'Very Good Keep it up!',
      time: '20 hrs ago',
    },
    {
      id: 5,
      title: 'Ahmad Adali',
      img: require('../../assets/parentTwo.png'),
      description: 'Sent you Invitaion!',
      description2: 'Dream Star Kids',
      time: '1 day ago',
      playButtonImg: require('../../assets/play1.png'),
      isButton: true,
    },
    {
      id: 6,
      title: 'Rabina Khan',
      img: require('../../assets/channelImage3.png'),
      description: 'Accepted your Invitation',
      description2: 'Very Good Keep it up!',
      time: '2 days ago',
    },
  ];

  const CardListItem = ({ notification }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).cardListStyle}>
              <Image
                source={notification.img}
                style={styles(direction).cardListImage}
              />
              <View style={styles(direction).cardListContent}>
                <Text style={styles(direction).title} numberOfLines={1}>
                  {notification.title.slice(0, 15)}
                </Text>
                <Text style={styles(direction).priceListStyle1}>
                  {notification.description}
                </Text>
                <View style={styles(direction).innerDirection}>
                  {notification.playButtonImg ? (
                    <TouchableOpacity>
                      <Image
                        source={notification.playButtonImg}
                        style={styles(direction).playImage}
                      />
                    </TouchableOpacity>
                  ) : null}
                  <Text style={styles(direction).description}>
                    {notification.description2}
                  </Text>
                  {notification.isButton ? (
                    <View style={styles(direction).innerDirection}>
                      <TouchableOpacity style={styles(direction).button}>
                        <Text style={styles(direction).buttonText}>Accept</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles(direction).button2}>
                        <Text style={styles(direction).buttonText}>Reject</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </View>
              <Text style={styles(direction).time}>{notification.time}</Text>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).cardContainer}>
              <FlatList
                numColumns={1}
                key={'-'}
                keyExtractor={item => '-' + item.id}
                data={notifications}
                renderItem={({ item }) => {
                  return <CardListItem notification={item} />;
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          middleComponent={
            <View style={styles(direction).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Notification')}
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
                <TouchableOpacity onPress={() => {}}>
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
      </View>
    </>
  );
};

export default Notification;
