/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import { useTranslation } from 'react-i18next';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import VerticalLine from 'app/components/lines/VerticalLine';
import { DrawerActions } from '@react-navigation/native';

const Child: React.FC = (props: any) => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [child, setChild] = useState([
    {
      id: 1,
      profileName: 'Add Child',
    },
    {
      id: 2,
      profileName: 'Tahir Shaikh',
    },
    {
      id: 3,
      profileName: 'Fatima Qureshi',
    },
    {
      id: 4,
      profileName: 'Imran Yusuf',
    },
    {
      id: 5,
      profileName: 'Faham Mohammad',
    },
  ]);
  const colors = ['#CFD8DC', '#2AA7DD', '#FECE32', '#84BD47', '#EC4D61'];
  const tintColors = ['#FFFFFF', '#8CD9FA', '#FCE7A2', '#B9E38C', '#F5ACB5'];
  return (
    <>
      <TitleBar
        leftComponent={
          <View style={styles(direction).leftContainer}>
            <Image
              source={require('../../assets/person4.png')}
              style={styles(direction).topImage}
            />
          </View>
        }
        middleComponent={
          <View style={styles(direction).middleComponent}>
            <GradientText
              colors={['#03A0E3', '#0D93CD']}
              text={t('Child')}
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
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <FlatList
              data={child}
              numColumns={2}
              renderItem={({ item, index }) => (
                <View style={styles(direction).rowContainer}>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles(direction).rectangle2,
                        { backgroundColor: colors[index % colors.length] },
                      ]}>
                      <Image
                        key={item.id}
                        source={
                          item.id === 1
                            ? require('../../assets/addIcon.png')
                            : require('../../assets/userIcon.png')
                        }
                        style={[
                          item.id === 1
                            ? styles(direction).addIcon
                            : styles(direction).userIcon,
                          {
                            tintColor: tintColors[index % tintColors.length],
                          },
                        ]}
                      />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles(direction).profileName}>
                    {t(item.profileName)}
                  </Text>
                </View>
              )}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Child;
