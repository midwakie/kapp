/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
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
import { useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useQuery } from 'react-query';
import ApiConfig from 'app/config/api-config';

const Shop: React.FC = (props: any) => {
  const { control } = useForm();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const [toyActive, setToyActive] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [puzzleActive, setPuzzleActive] = useState(false);
  const cart = useSelector(state => state.cartReducer.cart);
  const handleAddToCart = item => {
    NavigationService.navigate('ToyDetail', { book: item });
  };
  const { isLoading, data } = useQuery('shop', async () => {
    try {
      const response = await fetch(ApiConfig.BASE_URL2 + ApiConfig.SHOP);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (catchError: any) {
      console.error(catchError);
    }
  });
  const Toy = () => {
    setToyActive(true);
    setGameActive(false);
    setPuzzleActive(false);
  };
  const Game = () => {
    setToyActive(false);
    setGameActive(true);
    setPuzzleActive(false);
  };
  const Puzzle = () => {
    setToyActive(false);
    setGameActive(false);
    setPuzzleActive(true);
  };

  const CardItem = ({ book }: any) => {
    return (
      <View style={styles(direction).cardContainer}>
        <TouchableOpacity onPress={() => handleAddToCart(book)}>
          <Neumorphism
            style={styles(direction).neomorph}
            lightColor={'#ffffff'}
            darkColor={'#d9d9d9'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).card}>
              <View style={styles(direction).imageContainer}>
                <Image
                  source={{ uri: ApiConfig.BASE_ASSET_URL + book.img }}
                  style={styles(direction).cardImage}
                />
              </View>
              <View style={styles(direction).cardContent}>
                <Text style={styles(direction).cardTitleText}>
                  {book.title}
                </Text>
                <View style={styles(direction).cardContentPriceCoin}>
                  <Text
                    style={styles(direction).price}>{`$${book.price}`}</Text>
                  <View style={styles(direction).cardContentCoin}>
                    <Image
                      source={require('../../assets/coin.png')}
                      style={styles(direction).cardCoin}
                    />
                    <Text style={styles(direction).coinText}>{book.coin}</Text>
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
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).heading}>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Find Your Favorite Toys')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
              <View style={styles(direction).icon}>
                <TouchableOpacity
                  onPress={() => NavigationService.navigate('ShoppingCart')}>
                  <MaterialIcons name="shopping-cart" size={30} color="black" />
                  {cart?.length > 0 && (
                    <View style={styles(direction).pop}>
                      <Text style={styles(direction).text}>{cart.length}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles(direction).bubbleContainer}>
              <Neumorphism
                style={styles(direction).neomorphic}
                lightColor={'#ffffff'}
                darkColor={'#d9d9d9'}
                shapeType={toyActive ? 'pressed' : 'flat'}
                radius={scale(25)}>
                <TouchableWithoutFeedback onPress={Toy}>
                  <View style={styles(direction, toyActive).categoryButtonToys}>
                    <Image
                      source={require('../../assets/rubberDuck.png')}
                      style={styles(direction).categoryImage}
                    />
                    <Text style={styles(direction).toysText}>
                      {t('Soft Toys')}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </Neumorphism>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#d9d9d9'}
                shapeType={gameActive ? 'pressed' : 'flat'}
                radius={scale(25)}>
                <TouchableWithoutFeedback onPress={Game}>
                  <View
                    style={styles(direction, gameActive).categoryButtonConsole}>
                    <Image
                      source={require('../../assets/gameConsole.png')}
                      style={styles(direction).categoryImage}
                    />
                    <Text style={styles(direction).gameText}>{t('Game')}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </Neumorphism>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#d9d9d9'}
                shapeType={puzzleActive ? 'pressed' : 'flat'}
                radius={scale(25)}>
                <TouchableWithoutFeedback onPress={Puzzle}>
                  <View
                    style={
                      styles(direction, puzzleActive).categoryButtonPuzzle
                    }>
                    <Image
                      source={require('../../assets/puzzleRed.png')}
                      style={styles(direction).categoryImage}
                    />
                    <Text style={styles(direction).puzzleText}>
                      {t('Puzzles')}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </Neumorphism>
            </View>
            {isLoading ? (
              <ActivityIndicator size="large" color="#03A0E3" />
            ) : (
              <View style={styles(direction).cardContainer}>
                {currentOrientation === 'portrait' ? (
                  <FlatList
                    numColumns={Math.floor(
                      Dimensions.get('window').width / scale(158),
                    )}
                    key={'_'}
                    keyExtractor={item => '_' + item.id}
                    data={data.items}
                    renderItem={({ item }) => {
                      return <CardItem book={item} />;
                    }}
                  />
                ) : (
                  <FlatList
                    key={'#'}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => '#' + item.id}
                    numColumns={Math.floor(
                      Dimensions.get('window').width / scale(158),
                    )}
                    data={data.items}
                    renderItem={({ item }) => {
                      return <CardItem book={item} />;
                    }}
                  />
                )}
              </View>
            )}
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          leftComponent={
            <View style={styles(direction).topContainer}>
              <Image
                source={require('../../assets/ParentShop.png')}
                style={styles(direction).topImage}
              />
            </View>
          }
          middleComponent={
            <View style={styles(direction).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Toy Shop')}
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

export default Shop;
