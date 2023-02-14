/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
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

const ShoppingCart: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();

  const details = [
    {
      id: 1,
      name: 'Lion King',
      price: '$12.50',
      img: require('../../assets/lionKing.png'),
    },
    {
      id: 2,
      name: 'Mickey Mouse',
      price: '$12',
      img: require('../../assets/mickeyMouse.png'),
    },
    {
      id: 3,
      name: 'Pink Panther',
      price: '$5',
      img: require('../../assets/lionKing.png'),
    },
    {
      id: 4,
      name: 'Kung Fu Panda',
      price: '$16.50',
      img: require('../../assets/lionKing.png'),
    },
    {
      id: 5,
      name: 'Science',
      price: '$12',
      img: require('../../assets/mickeyMouse.png'),
    },
    {
      id: 6,
      name: 'Easy Maths',
      price: '$8',
      img: require('../../assets/lionKing.png'),
    },
    {
      id: 7,
      name: 'Mr.Bean',
      price: '$12.50',
      img: require('../../assets/mickeyMouse.png'),
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
            <View style={styles(direction).productInfo}>
              <View style={styles(direction).imageViewContainer}>
                <Image
                  source={book.img}
                  style={styles(direction).productImage}
                />
              </View>
              <View style={styles(direction).detailsContainer}>
                <Text style={styles(direction).productName}>{book.name}</Text>
                <Text style={styles(direction).priceText}>{book.price}</Text>
              </View>
            </View>

            <TouchableOpacity>
              <Image
                source={require('../../assets/minus.png')}
                style={styles(direction).minusImage}
              />
            </TouchableOpacity>
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
          </View>
        </ScrollView>
      </SafeAreaView>
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
                text={t('Cart List')}
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
export default ShoppingCart;
