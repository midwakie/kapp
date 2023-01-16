/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import {
  Directions,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
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
import MaterialIcon from 'react-native-vector-icons/AntDesign';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';
import CustomInput from 'app/components/inputs/CustomInput';
import { useForm } from 'react-hook-form';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import { channel } from 'redux-saga';

const GlobalSearch: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { control } = useForm();
  const [active, setActive] = useState(false);
  const [showData, setShowData] = useState(false);

  const Press = () => {
    setActive(!active);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setShowData(!showData);
  };
  const [active1, setActive1] = useState(false);
  const Press1 = () => {
    setActive1(!active1);
    setActive(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setShowData(false);
  };
  const [active2, setActive2] = useState(false);
  const Press2 = () => {
    setActive2(!active2);
    setActive(false);
    setActive1(false);
    setActive3(false);
    setActive4(false);
    setShowData(false);
  };
  const [active3, setActive3] = useState(false);
  const Press3 = () => {
    setActive3(!active3);
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive4(false);
    setShowData(false);
  };
  const [active4, setActive4] = useState(false);
  const Press4 = () => {
    setActive4(!active4);
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setShowData(false);
  };
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();

  const [selectedFilter, setSelectedFilter] = useState('grid');
  const books = [
    {
      id: 1,
      title: 'Kung Fu Panda',
      author: 'By Martin Luther',
      price: '$15.30',
      img: require('../../assets/book.png'),
    },
    {
      id: 2,
      title: 'Happy Lemon',
      author: 'By Abhishek',
      price: '$20.30',
      img: require('../.././assets/book2.png'),
    },
    {
      id: 3,
      title: 'Billy & Shmilli',
      author: 'By Harish S',
      price: '$25.30',
      img: require('../../assets/book3.png'),
    },
    {
      id: 4,
      title: 'Story Book',
      author: 'By Anil Bose',
      price: '$10.30',
      img: require('../../assets/book4.png'),
    },
    {
      id: 5,
      title: 'Journey of the Star',
      author: 'By Sijin',
      price: '$15.30',
      img: require('../../assets/book.png'),
    },
    {
      id: 6,
      title: 'Nasa Boy',
      author: 'By Rashid ',
      price: '$35.30',
      img: require('../../assets/book2.png'),
    },
    {
      id: 7,
      title: 'Sample Text',
      author: 'By Shiva',
      price: '$30.30',
      img: require('../../assets/book3.png'),
    },
    {
      id: 8,
      title: 'Cool Kids 5',
      author: 'By Tibu PS',
      price: '$45.30',
      img: require('../../assets/book4.png'),
    },
  ];
  const Channels = [
    {
      id: 1,
      title: 'Kung Fu Panda',
      author: '256k Subscriber',
      img: require('../../assets/book.png'),
    },
    {
      id: 2,
      title: 'Happy Lemon',
      author: '256k Subscriber',
      img: require('../.././assets/book2.png'),
    },
    {
      id: 3,
      title: 'Billy & Shmilli',
      author: '256k Subscriber',
      img: require('../../assets/book3.png'),
    },
    {
      id: 4,
      title: 'Story Book',
      author: '256k Subscriber',
      img: require('../../assets/book4.png'),
    },
    {
      id: 5,
      title: 'Journey of the Star',
      author: '256k Subscriber',
      img: require('../../assets/book.png'),
    },
    {
      id: 6,
      title: 'Nasa Boy',
      author: '256k Subscriber',
      price: '$35.30',
      img: require('../../assets/book2.png'),
    },
    {
      id: 7,
      title: 'Sample Text',
      author: '256k Subscriber',
      img: require('../../assets/book3.png'),
    },
    {
      id: 8,
      title: 'Cool Kids 5',
      author: '256k Subscriber',
      img: require('../../assets/book4.png'),
    },
  ];
  const feeds = [
    {
      id: 1,
      title: 'Kung Fu Panda',
      author: 'By Martin Luther',
      price: '$15.30',
      img: require('../../assets/book.png'),
    },
    {
      id: 2,
      title: 'Happy Lemon',
      author: 'By Abhishek',
      price: '$20.30',
      img: require('../.././assets/book2.png'),
    },
    {
      id: 3,
      title: 'Billy & Shmilli',
      author: 'By Harish S',
      price: '$25.30',
      img: require('../../assets/book3.png'),
    },
    {
      id: 4,
      title: 'Story Book',
      author: 'By Anil Bose',
      price: '$10.30',
      img: require('../../assets/book4.png'),
    },
    {
      id: 5,
      title: 'Journey of the Star',
      author: 'By Sijin',
      price: '$15.30',
      img: require('../../assets/book.png'),
    },
    {
      id: 6,
      title: 'Nasa Boy',
      author: 'By Rashid ',
      price: '$35.30',
      img: require('../../assets/book2.png'),
    },
    {
      id: 7,
      title: 'Sample Text',
      author: 'By Shiva',
      price: '$30.30',
      img: require('../../assets/book3.png'),
    },
    {
      id: 8,
      title: 'Cool Kids 5',
      author: 'By Tibu PS',
      price: '$45.30',
      img: require('../../assets/book4.png'),
    },
  ];
  const products = [
    {
      id: 1,
      title: 'Kung Fu Panda',
      author: 'By Martin Luther',
      price: '$15.30',
      img: require('../../assets/book.png'),
    },
    {
      id: 2,
      title: 'Happy Lemon',
      author: 'By Abhishek',
      price: '$20.30',
      img: require('../.././assets/book2.png'),
    },
    {
      id: 3,
      title: 'Billy & Shmilli',
      author: 'By Harish S',
      price: '$25.30',
      img: require('../../assets/book3.png'),
    },
    {
      id: 4,
      title: 'Story Book',
      author: 'By Anil Bose',
      price: '$10.30',
      img: require('../../assets/book4.png'),
    },
    {
      id: 5,
      title: 'Journey of the Star',
      author: 'By Sijin',
      price: '$15.30',
      img: require('../../assets/book.png'),
    },
    {
      id: 6,
      title: 'Nasa Boy',
      author: 'By Rashid ',
      price: '$35.30',
      img: require('../../assets/book2.png'),
    },
    {
      id: 7,
      title: 'Sample Text',
      author: 'By Shiva',
      price: '$30.30',
      img: require('../../assets/book3.png'),
    },
    {
      id: 8,
      title: 'Cool Kids 5',
      author: 'By Tibu PS',
      price: '$45.30',
      img: require('../../assets/book4.png'),
    },
  ];
  const dropDown = () => {
    if (selectedFilter === 'grid') {
      setSelectedFilter('list');
    } else {
      setSelectedFilter('grid');
    }
  };

  const CardItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('BookDetails');
          }}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).card}>
              <Image source={book.img} style={styles(direction).cardImage} />
              <View style={styles(direction).cardContent}>
                <Text style={styles(direction).title} numberOfLines={1}>
                  {book.title}
                </Text>
                <Text style={styles(direction).author}>{book.author}</Text>
                <Text style={styles(direction).price}>{book.price}</Text>
              </View>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };
  const ChannelCardItem = ({ channel }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('BookDetails');
          }}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).card1}>
              <Image source={channel.img} style={styles(direction).cardImage} />
              <View style={styles(direction).cardContent}>
                <Text style={styles(direction).title} numberOfLines={1}>
                  {channel.title}
                </Text>
                <Text style={styles(direction).author}>{channel.author}</Text>
                {/* <Text style={styles(direction).price}>{channel.price}</Text> */}
              </View>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };
  const FeedsCardItem = ({ feeds }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('BookDetails');
          }}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).card}>
              <Image source={feeds.img} style={styles(direction).cardImage} />
              <View style={styles(direction).cardContent}>
                <Text style={styles(direction).title} numberOfLines={1}>
                  {feeds.title}
                </Text>
                <Text style={styles(direction).author}>{feeds.author}</Text>
                <Text style={styles(direction).price}>{feeds.price}</Text>
              </View>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };
  const ProductsCardItem = ({ products }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('BookDetails');
          }}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).card3}>
              <Image
                source={products.img}
                style={styles(direction).cardImage}
              />
              <View style={styles(direction).cardContent}>
                <Text style={styles(direction).title} numberOfLines={1}>
                  {products.title}
                </Text>
                {/* <Text style={styles(direction).author}>{products.author}</Text> */}
                <Text style={styles(direction).price}>{products.price}</Text>
              </View>
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
            <View style={styles(direction, active).categoryListContainer}>
              <ScrollView
                // style={{ flexDirection: 'row', height: 50 }}
                style={{ flex: 1 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles(direction).container4}>
                  <View style={styles(direction).row2}>
                    <RegularButton
                      onPress={Press}
                      text={
                        <Text style={styles(direction, active).buttonText}>
                          {t('Ebooks')}
                        </Text>
                      }
                      radius={50}
                      height={'50@s'}
                      width={'90@s'}
                      colors={
                        active ? ['#03BBE3', '#03A0E3'] : ['#EBEEF0', '#EBEEF0']
                      }
                    />
                    <HorizontalLine
                      stroke={0.01}
                      opacity={0}
                      width={scale(20)}
                      color={'transparent'}
                    />
                    <RegularButton
                      onPress={Press1}
                      text={
                        <Text style={styles(direction, active1).buttonText}>
                          {t('Channels')}
                        </Text>
                      }
                      radius={50}
                      height={'50@s'}
                      width={'100%'}
                      colors={
                        active1
                          ? ['#03BBE3', '#03A0E3']
                          : ['#EBEEF0', '#EBEEF0']
                      }
                    />
                    <HorizontalLine
                      stroke={0.01}
                      opacity={0}
                      width={scale(20)}
                      color={'transparent'}
                    />
                    <RegularButton
                      onPress={Press2}
                      text={
                        <Text style={styles(direction, active2).buttonText}>
                          {t('Feeds')}
                        </Text>
                      }
                      radius={50}
                      height={'50@s'}
                      width={'90@s'}
                      colors={
                        active2
                          ? ['#03BBE3', '#03A0E3']
                          : ['#EBEEF0', '#EBEEF0']
                      }
                    />
                    <HorizontalLine
                      stroke={0.01}
                      opacity={0}
                      width={scale(20)}
                      color={'transparent'}
                    />
                    <RegularButton
                      onPress={Press3}
                      text={
                        <Text style={styles(direction, active3).buttonText}>
                          {t('Chats')}
                        </Text>
                      }
                      radius={50}
                      height={'50@s'}
                      width={'90@s'}
                      colors={
                        active3
                          ? ['#03BBE3', '#03A0E3']
                          : ['#EBEEF0', '#EBEEF0']
                      }
                    />
                    <HorizontalLine
                      stroke={0.01}
                      opacity={0}
                      width={scale(20)}
                      color={'transparent'}
                    />
                    <RegularButton
                      onPress={Press4}
                      text={
                        <Text style={styles(direction, active4).buttonText}>
                          {t('Products')}
                        </Text>
                      }
                      radius={50}
                      height={'50@s'}
                      width={'100%'}
                      colors={
                        active4
                          ? ['#03BBE3', '#03A0E3']
                          : ['#EBEEF0', '#EBEEF0']
                      }
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
            {active && (
              <FlatList
                key={'#'}
                keyExtractor={item => '#' + item.id}
                numColumns={Math.floor(
                  Dimensions.get('window').width / ms(158),
                )}
                data={books}
                renderItem={({ item }) => {
                  return <CardItem book={item} />;
                }}
              />
            )}
            {active1 && (
              <FlatList
                key={'#'}
                keyExtractor={item => '#' + item.id}
                numColumns={Math.floor(
                  Dimensions.get('window').width / ms(158),
                )}
                data={Channels}
                renderItem={({ item }) => {
                  return <ChannelCardItem channel={item} />;
                }}
              />
            )}
            {active2 && (
              <FlatList
                key={'#'}
                keyExtractor={item => '#' + item.id}
                numColumns={Math.floor(
                  Dimensions.get('window').width / ms(158),
                )}
                data={feeds}
                renderItem={({ item }) => {
                  return <FeedsCardItem feeds={item} />;
                }}
              />
            )}
            {active4 && (
              <FlatList
                key={'#'}
                keyExtractor={item => '#' + item.id}
                numColumns={Math.floor(
                  Dimensions.get('window').width / ms(158),
                )}
                data={products}
                renderItem={({ item }) => {
                  return <ProductsCardItem products={item} />;
                }}
              />
            )}
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
                text={t('Search')}
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
export default GlobalSearch;
