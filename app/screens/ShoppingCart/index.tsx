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
  Pressable,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';
import BookDetails from '../BookDetails';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { id } from 'date-fns/locale';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from 'app/store/actions/cartActions';

const ShoppingCart: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);

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
                <Text style={styles(direction).productName}>{book.title}</Text>
                <Text
                  style={styles(direction).priceText}>{`$${book.price}`}</Text>
              </View>
            </View>
            <View style={styles(direction).minusTouch}>
              <Pressable onPress={() => dispatch(removeFromCart(book))}>
                <Image
                  source={require('../../assets/remove.png')}
                  style={styles(direction).minusImage}
                />
              </Pressable>
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
                data={cart}
                renderItem={({ item }) => {
                  return <CardListItem book={item} />;
                }}
                ListEmptyComponent={
                  <Text style={styles(direction).text}>
                    {t('Your cart is empty')}
                  </Text>
                }
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
