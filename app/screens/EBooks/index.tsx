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
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import books from 'app/components/books';
import { scale } from 'react-native-size-matters';

const EBooks: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const dropDown = () => {
    Alert;
  };
  const Card = ({ book }) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity onPress={null}>
          <Neumorphism
            style={{ margin: 10 }}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).card}>
              <Image source={book.img} style={styles(direction).cardImage} />
              <View style={styles(direction).cardContent}>
                <Text style={styles(direction).title}>{book.title}</Text>
                <Text style={styles(direction).author}>{book.author}</Text>
                <Text style={styles(direction).price}>{book.price}</Text>
              </View>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles(direction).container} bounces={false}>
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
              text={t('History')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <TouchableWithoutFeedback onPress={dropDown}>
            <View style={styles(direction).gridViewContainer}>
              <Neumorphism
                lightColor={'#FEFEFF'}
                darkColor={'#C6CEDA'}
                shapeType={'flat'}
                radius={8}>
                <View style={styles(direction).gridView}>
                  <Text style={styles(direction).gridText}>Grid View</Text>
                  <MaterialIcon
                    name={'view-grid'}
                    size={20}
                    color={'#000000'}
                  />
                </View>
              </Neumorphism>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles(direction).cardContainer}>
            <FlatList
              numColumns={2}
              data={books}
              renderItem={({ item }) => {
                return <Card book={item} />;
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default EBooks;
