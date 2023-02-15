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

const OrderDetails: React.FC = (props: any) => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const orders = [
    {
      id: 1,
      title: 'Lion King',
      price: '$15.30',
      status: 'Done',
      date: 'Sun, 29 Oct',
      img: require('../../assets/toyOne.png'),
    },
    {
      id: 2,
      title: 'Happy Lemon',
      price: '$20.30',
      status: 'Done',
      date: 'Sun, 29 Oct',
      img: require('../../assets/book2.png'),
    },
    {
      id: 3,
      title: 'Ninja Turtle',
      price: '$25.30',
      status: 'Return',
      img: require('../../assets/toyThree.png'),
    },
    {
      id: 4,
      title: 'Unicorn',
      status: 'Undone',
      price: '$10.30',
      img: require('../../assets/toyFour.png'),
    },
    {
      id: 5,
      title: 'Journey of the Star',
      status: 'Done',
      date: 'Sun, 29 Oct',
      price: '$15.30',
      img: require('../../assets/book.png'),
    },
    {
      id: 6,
      title: 'Nasa Boy',
      price: '$35.30',
      status: 'Undone',
      img: require('../../assets/book2.png'),
    },
  ];

  const CardListItem = ({ order }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate();
          }}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).cardListStyle}>
              <View style={styles(direction).innerDirection}>
                <Image
                  source={order.img}
                  style={styles(direction).cardListImage}
                />
                <View style={styles(direction).cardListContent}>
                  <Text style={styles(direction).title} numberOfLines={1}>
                    {order.title.slice(0, 15)}
                  </Text>
                  <Text style={styles(direction).priceListStyle}>
                    {order.price}
                  </Text>
                </View>
              </View>
              <View style={styles(direction).statusContainer}>
                <Text
                  style={
                    order.status === 'Done'
                      ? styles(direction).statusOne
                      : styles(direction).statusTwo
                  }>
                  {order.status === 'Done' ? 'Delivered' : 'On the Way'}
                </Text>
                <Text style={styles(direction).dateText}>
                  {order.status === 'Done' ? order.date : ''}
                </Text>
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
            <View style={styles(direction).cardContainer}>
              <FlatList
                numColumns={1}
                key={'-'}
                keyExtractor={item => '-' + item.id}
                data={orders}
                renderItem={({ item }) => {
                  return <CardListItem order={item} />;
                }}
              />
            </View>
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
                text={t('Order List')}
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

export default OrderDetails;
