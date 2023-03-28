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
import { DrawerActions } from '@react-navigation/native';

const MyAccount: React.FC = (props: any) => {
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
      redDot: require('../../assets/redDotIcon.png'),
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
      redDot: require('../../assets/redDotIcon.png'),
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
          <View style={styles(direction).cardListStyleTwo}>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate('AccountDetail');
              }}>
              <View style={styles(direction).chatInfo}>
                <View style={styles(direction).imageViewContainer}>
                  <Image
                    source={book.img}
                    style={styles(direction).chatImage}
                  />
                </View>
                <View style={styles(direction).detailsContainer}>
                  <View style={styles(direction).nameContainer}>
                    <Text style={styles(direction).chatName}>{book.name}</Text>
                    <Image
                      source={book.redDot}
                      style={styles(direction).redDotIcon}
                    />
                  </View>
                  <Text style={styles(direction).chatText}>{book.chat}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles(direction).rightContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/refreshIcon.png')}
                  style={styles(direction).refreshIcon}
                />
              </TouchableOpacity>

              <VerticalLine
                stroke={1}
                opacity={0.3}
                height={'100%'}
                color={'#A8A8A8'}
              />
              <TouchableOpacity>
                <Image
                  source={require('../../assets/exitIcon.png')}
                  style={styles(direction).exitIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Neumorphism>
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
            <View style={styles(direction).neomorphContainer}>
              <Neumorphism
                style={styles(direction).neomorphMargin}
                lightColor={'#ffffff'}
                darkColor={'#C6CEDA'}
                shapeType={'flat'}
                radius={scale(14)}>
                <View style={styles(direction).cardListStyleLast}>
                  <Neumorphism
                    style={styles(direction).neomorphMargin}
                    lightColor={'#ffffff'}
                    darkColor={'#C6CEDA'}
                    shapeType={'flat'}
                    radius={scale(40)}>
                    <TouchableOpacity>
                      <View style={styles(direction).imageViewContainer}>
                        <Image
                          source={require('../../assets/plusIcon.png')}
                          style={styles(direction).plusIcon}
                        />
                      </View>
                    </TouchableOpacity>
                  </Neumorphism>
                  <Text style={styles(direction).addAccountText}>
                    {t('Add Account')}
                  </Text>
                </View>
              </Neumorphism>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          leftComponent={
            <View style={styles(direction).topContainer}>
              <Image
                source={require('../../assets/chatListOne.png')}
                style={styles(direction).topImage}
              />
            </View>
          }
          middleComponent={
            <View style={styles(direction).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Account')}
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
      </View>
    </>
  );
};
export default MyAccount;
