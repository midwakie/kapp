/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import VerticalLine from 'app/components/lines/VerticalLine';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextStyle,
  TouchableWithoutFeedback,
  Alert,
  Dimensions,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';
import BookDetails from '../BookDetails';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { id } from 'date-fns/locale';

const ChatList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();

  const details = [
    {
      id: 1,
      name: 'Afthab',
      chat: 'lorum ipsum jhasdbfahbfckabcbadhcadbkhacbkhabcbakcbabchbahbhabdbchadbchabkhbhda',
      img: require('../../assets/chatListOne.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 7,
      textTime: 'Just Now',
    },
    {
      id: 2,
      name: 'Science Class',
      chat: 'Hi',
      img: require('../../assets/chatListTwo.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 2,
      textTime: '10:08',
    },
    {
      id: 3,
      name: 'Ansari',
      chat: 'Various versions have',
      img: require('../../assets/chatListThree.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 8,
      textTime: '8:10',
    },
    {
      id: 4,
      name: 'Sports class',
      chat: 'Various versions have evolved..',
      img: require('../../assets/chatListFour.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 6,
      textTime: '11:08',
    },
    {
      id: 5,
      name: 'Fathima',
      chat: 'How was english class?',
      img: require('../../assets/chatListFive.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 55,
      textTime: '11:08',
    },
    {
      id: 6,
      name: 'Easy Math',
      chat: 'lorum Ipsum',
      img: require('../../assets/chatListOne.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 2,
      textTime: '11:08',
    },
    {
      id: 7,
      name: 'Mr.Bean',
      chat: 'hello',
      img: require('../../assets/chatListTwo.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 1,
      textTime: 'Yesterday',
    },
  ];

  const CardListItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).cardListStyleTwo}>
              <View style={styles(direction).chatInfo}>
                <View style={styles(direction).imageViewContainer}>
                  <Image
                    source={book.img}
                    style={styles(direction).chatImage}
                  />
                  <View style={styles(direction).onlineViewContainer}>
                    <Image
                      source={require('../../assets/chatListOnline.png')}
                      style={styles(direction).onlineImage}
                    />
                  </View>
                </View>
                <View style={styles(direction).detailsContainer}>
                  <Text style={styles(direction).chatName}>{book.name}</Text>
                  <Text style={styles(direction).chatText}>{book.chat}</Text>
                </View>
              </View>
              <View style={styles(direction).thirdContainer}>
                <Text style={styles(direction).timeText}>{book.textTime}</Text>
                <View style={styles(direction).blueImageContainer}>
                  <Image
                    source={book.unreadImage}
                    style={styles(direction).unreadImage}
                  />
                  <View style={styles(direction).unreadTextContainer}>
                    <Text style={styles(direction).unreadText}>
                      {book.unreadText}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <ScrollView style={styles(direction).container} bounces={false}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).cardContainer}>
              <FlatList
                numColumns={1}
                key={'-'}
                keyExtractor={item => '-' + item.id}
                data={details}
                renderItem={({ item }) => {
                  return <CardListItem book={item} />;
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles(false).titleBarContainer}>
        <TitleBar
          leftComponent={
            <View style={styles(direction).topContainer}>
              <Image
                source={require('../../assets/topPicAvatar.png')}
                style={styles(direction).topImage}
              />
            </View>
          }
          middleComponent={
            <View style={styles(false).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Chats')}
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
              <View style={styles(false).iconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    props?.navigation.dispatch(DrawerActions.toggleDrawer());
                  }}>
                  <View style={styles(false).menuContainer}>
                    <Image
                      source={require('../../assets/childHomeMenu.png')}
                      style={styles(false).iconImageStyle}
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
                  <View style={styles(false).searchContainer}>
                    <Image
                      source={require('../../assets/searchIcon.png')}
                      style={styles(false).iconImageStyle}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Neumorphism>
          }
        />
      </View>

      <View style={styles(direction).newChatMainContainer}>
        <View style={styles(direction).newChatContainer}>
          <TouchableOpacity
            onPress={() => NavigationService.navigate('CreateChat')}>
            <Image
              source={require('../../assets/chatListNewChat.png')}
              style={styles(direction).newChatImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default ChatList;
