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
import ApiConfig from 'app/config/api-config';

const ShoppingCart: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const CardListItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <Neumorphism
          lightColor={'#ffffff'}
          darkColor={'#C6CEDA'}
          shapeType={'flat'}
          radius={scale(14)}>
          <View style={styles(direction).cardListStyleTwo}>
            <View style={styles(direction).productInfo}>
              <View style={styles(direction).imageViewContainer}>
                <Image
                  source={{ uri: ApiConfig.BASE_ASSET_URL + book.img }}
                  style={styles(direction).productImage}
                />
              </View>
              <View style={styles(direction).detailsContainer}>
                <Text style={styles(direction).productName}>{book.title}</Text>
                <Text
                  style={styles(direction).priceText}>{`$${book.price}`}</Text>
                <Text style={styles(direction).priceText}>
                  Qty: {book.quantity}
                </Text>
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
              {cart?.length > 0 && (
                <View style={styles(direction).neomorphMargin1}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#C6CEDA'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).row}>
                      <View style={styles(direction).container5}>
                        <Text style={styles(direction).text8}>
                          Total Amount
                        </Text>
                        <Text
                          style={
                            styles(direction).priceText1
                          }>{`$${total}`}</Text>
                      </View>
                      <RegularButton
                        onPress={() =>
                          NavigationService.navigate('DeliveryAddress')
                        }
                        text={'Continue'}
                        radius={50}
                        height={'50@s'}
                        width={'141@s'}
                        colors={['#FF6F81', '#F0374E']}
                      />
                    </View>
                  </Neumorphism>
                </View>
              )}
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
