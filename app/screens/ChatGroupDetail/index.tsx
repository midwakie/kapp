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
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { useSelector } from 'react-redux';
import { ROLES } from 'app/config/role-config';

const ChatGroupDetail: React.FC = props => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const [selectedFilter, setSelectedFilter] = useState('grid');
  const profileImage = (props && props?.route?.params?.profileImage) || '';
  const title = (props && props?.route?.params?.title) || '';
  interface IState {
    currentCustomerReducer: ICurrentCustomer;
  }
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  const books = [
    {
      id: 1,
      name: 'Abeer Shaikh',
      role: 'Parent',
      price: '$15.30',
      img: require('../../assets/parentOne.png'),
    },
    {
      id: 2,
      name: 'Ahmad Ali',
      role: 'Student',
      price: '$20.30',
      img: require('../../assets/studentOne.png'),
    },
    {
      id: 3,
      name: 'Amira Qureshi',
      role: 'Parent',
      price: '$25.30',
      img: require('../../assets/studentTwo.png'),
    },
    {
      id: 4,
      name: 'Farida Qtaishat',
      role: 'Parent',
      price: '$10.30',
      img: require('../../assets/parentOne.png'),
    },
    {
      id: 5,
      name: 'Mohammed Rasool',
      role: 'Parent',
      price: '$15.30',
      img: require('../../assets/parentTwo.png'),
    },
    {
      id: 6,
      name: 'Saba Qamar',
      role: 'Parent',
      price: '$35.30',
      img: require('../../assets/studentOne.png'),
    },
    {
      id: 7,
      name: 'Amira Qureshi',
      role: 'Student',
      price: '$30.30',
      img: require('../../assets/parentOne.png'),
    },
  ];
  const dropDown = () => {
    if (selectedFilter === 'grid') {
      setSelectedFilter('list');
    } else {
      setSelectedFilter('grid');
    }
  };

  const CardListItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <View>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).cardListStyle}>
              <View style={styles(direction).innerView}>
                <TouchableOpacity>
                  <Image
                    source={book.img}
                    style={styles(direction).cardListImage}
                  />
                </TouchableOpacity>
                <View style={styles(direction).childDetailContainer}>
                  <Text style={styles(direction).childName}>{book.name}</Text>
                  <Text style={styles(direction).student}>{book.role}</Text>
                </View>
              </View>
              {selectedRole === ROLES.TEACHER ? (
                <View style={styles(direction).minusTouch}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/remove.png')}
                      style={styles(direction).minusImage}
                    />
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </Neumorphism>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <ScrollView style={styles(direction).container} bounces={false}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).imageContainer}>
              <Image
                source={{ uri: profileImage }}
                style={styles(direction).imageContainerImage}
              />
              <View style={styles(direction).imageText}>
                <Text style={styles(direction).classText}>{t(title)}</Text>
              </View>
            </View>
            <View style={styles(direction).gridViewContainer}>
              <Neumorphism
                lightColor={'#FEFEFF'}
                darkColor={'#C6CEDA'}
                shapeType={'flat'}
                radius={scale(8)}>
                {selectedRole === ROLES.TEACHER ? (
                  <TouchableOpacity
                    onPress={null}
                    style={styles(direction).gridView}>
                    <Image
                      source={require('../../assets/delete.png')}
                      style={styles(direction).deleteImg}
                    />
                    <Text style={styles(direction).gridText}>
                      {t('Delete Group')}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={null}
                    style={styles(direction).gridView}>
                    <Text style={styles(direction).gridText}>
                      {t('Leave Group')}
                    </Text>
                  </TouchableOpacity>
                )}
              </Neumorphism>
            </View>
            <View style={styles(direction).textView}>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Group Members')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
              {selectedRole === ROLES.TEACHER ? (
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(150)}>
                  <View style={styles(direction).container8}>
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).imageStyle}
                        source={require('../../assets/plus.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </Neumorphism>
              ) : null}
            </View>
            <View style={styles(direction).cardContainer}>
              <FlatList
                numColumns={1}
                key={'-'}
                keyExtractor={item => '-' + item.id}
                data={books}
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
                text={t('Group Detail')}
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
export default ChatGroupDetail;
