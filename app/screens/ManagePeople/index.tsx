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
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';
import MaterialIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from 'app/components/inputs/CustomInput';
import { useForm } from 'react-hook-form';
import PlainButton from 'app/components/buttons/PlainButton';
import Checkbox from 'app/components/checkbox';

const ManagePeople: React.FC = () => {
  const { control } = useForm();
  const [checked, setChecked] = React.useState(true);
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const [clicked, setClicked] = useState(false);
  const books = [
    {
      id: 1,
      child: 'Fatima Shaikh',
      student: 'Student',
      parentName: 'Abeer Shaikh',
      parent: 'Parent',
      img: require('../../assets/studentOne.png'),
      imgTwo: require('../../assets/parentOne.png'),
    },
    {
      id: 2,
      child: 'Ayda Shaikh',
      student: 'Student',
      parentName: 'Farida Qtaishat',
      parent: 'Parent',
      img: require('../../assets/studentTwo.png'),
      imgTwo: require('../../assets/parentTwo.png'),
    },
    {
      child: 'Fatima Shaikh',
      student: 'Student',
      parentName: 'Abeer Shaikh',
      parent: 'Parent',
      img: require('../../assets/studentOne.png'),
      imgTwo: require('../../assets/parentOne.png'),
    },
    {
      child: 'Ayda Shaikh',
      student: 'Student',
      parentName: 'Farida Qtaishat',
      parent: 'Parent',
      img: require('../../assets/studentTwo.png'),
      imgTwo: require('../../assets/parentTwo.png'),
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
          <View style={styles(direction).cardListStyle}>
            <View style={styles(direction).cardRowContainerOne}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={book.img}
                  style={styles(direction).cardListImage}
                />
                <View style={styles(direction).childDetailContainer}>
                  <Text style={styles(direction).childName}>{book.child}</Text>
                  <Text style={styles(direction).student}>{book.student}</Text>
                </View>
              </View>
              <Checkbox
                borderWidth={1}
                color={'#03A0E3'}
                iconColor={'#FFFFFF'}
                iconSize={scale(18)}
                icon={'check'}
                height={25}
                width={25}
                status={false}
              />
            </View>
            <View style={styles(direction).cardRowContainerTwo}>
              <View style={styles(direction).innerContainer}>
                <Image
                  source={book.imgTwo}
                  style={styles(direction).cardListImage}
                />
                <View>
                  <Text style={styles(direction).childName}>
                    {book.parentName}
                  </Text>
                  <Text style={styles(direction).student}>{book.parent}</Text>
                </View>
              </View>
              <Checkbox
                borderWidth={1}
                color={'#03A0E3'}
                iconColor={'#FFFFFF'}
                iconSize={scale(18)}
                icon={'check'}
                height={25}
                width={25}
                status={false}
              />
            </View>
          </View>
        </Neumorphism>
      </View>
    );
  };

  return (
    <>
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
                text={t('Manage People')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
            </View>
          }
          rightComponent={
            <PlainButton
              onPress={() => {
                NavigationService.navigate('Welcome');
              }}
              style={styles(direction).skipButtonText}
              containerStyle={styles(direction).skipButtonContainer}
              text={t('Done')}
            />
          }
        />
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).inputTextContainer}>
              <CustomInput
                control={control}
                name="search"
                placeholder={t('')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                rightComponent={
                  <TouchableOpacity style={styles(direction).searchIcon}>
                    <MaterialIcon
                      name={'search1'}
                      size={scale(20)}
                      color={'#9DA6B0'}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
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
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
export default ManagePeople;
