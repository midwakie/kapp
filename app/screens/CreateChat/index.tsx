/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { useForm } from 'react-hook-form';
import MaterialIcon from 'react-native-vector-icons/AntDesign';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import VerticalLine from 'app/components/lines/VerticalLine';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextStyle,
  ImageBackground,
  TouchableWithoutFeedback,
  Alert,
  Dimensions,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';
import BookDetails from '../BookDetails';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { id } from 'date-fns/locale';
import CustomInput from 'app/components/inputs/CustomInput';

const CreateChat: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [description, setDescription] = useState('');
  const currentOrientation = useDeviceOrientation();
  const { control } = useForm();

  const details = [
    {
      id: 1,
      name: 'Afthab',
      chat: 'Parent',
      img: require('../../assets/chatListOne.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 7,
      textTime: 'Just Now',
    },
    {
      id: 2,
      name: 'Science Class',
      chat: 'Parent',
      img: require('../../assets/chatListTwo.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 2,
      textTime: '10:08',
    },
    {
      id: 3,
      name: 'Ansari',
      chat: 'Student',
      img: require('../../assets/chatListThree.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 8,
      textTime: '8:10',
    },
    {
      id: 4,
      name: 'Rasool',
      chat: 'Parent',
      img: require('../../assets/chatListFour.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 6,
      textTime: '11:08',
    },
    {
      id: 5,
      name: 'Farida',
      chat: 'Student',
      img: require('../../assets/chatListFive.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 55,
      textTime: '11:08',
    },
    {
      id: 6,
      name: 'Easy Math',
      chat: 'Student',
      img: require('../../assets/chatListOne.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 2,
      textTime: '11:08',
    },
    {
      id: 7,
      name: 'Mr.Bean',
      chat: 'Parent',
      img: require('../../assets/chatListTwo.png'),
      unreadImage: require('../../assets/chatListUnread.png'),
      unreadText: 1,
      textTime: 'Yesterday',
    },
  ];

  const CardListItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <Neumorphism
          style={styles(direction).neomorphMargin}
          lightColor={'#ffffff'}
          darkColor={'#C6CEDA'}
          shapeType={'flat'}
          radius={scale(14)}>
          <TouchableOpacity>
            <View style={styles(direction).cardListStyleTwo}>
              <View style={styles(direction).chatInfo}>
                <View style={styles(direction).imageViewContainer}>
                  <Image
                    source={book.img}
                    style={styles(direction).chatImage}
                  />
                </View>
                <View style={styles(direction).detailsContainer}>
                  <Text style={styles(direction).chatName}>{book.name}</Text>
                  <Text style={styles(direction).chatText}>{book.chat}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Neumorphism>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <ScrollView style={styles(direction).container} bounces={false}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).inputTextContainer}>
              <CustomInput
                control={control}
                name="search"
                placeholder={t('Search here..')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                rightComponent={
                  <TouchableOpacity style={styles(direction).searchIcon}>
                    <MaterialIcon
                      name={'search1'}
                      size={scale(20)}
                      color={'#03A0E3'}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <View style={styles(direction).createGroupMainContainer}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#C6CEDA'}
                shapeType={'flat'}
                radius={scale(8)}>
                <TouchableOpacity
                  onPress={() => NavigationService.navigate('CreateGroup')}>
                  <View style={styles(direction).createGroupContainer}>
                    <Image
                      source={require('../../assets/createGroupIcon.png')}
                      style={styles(direction).groupIcon}
                    />
                    <Text style={styles(direction).createGroupText}>
                      {t('Create Group')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Neumorphism>
            </View>
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
            <View style={styles(false).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Create Chat')}
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
export default CreateChat;
