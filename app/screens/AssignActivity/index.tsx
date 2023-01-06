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

const AssignActivity: React.FC = () => {
  const { control } = useForm();
  const [checked, setChecked] = React.useState(true);
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const [clicked, setClicked] = useState(false);
  const studentList = [
    {
      id: 1,
      name: 'Abeer Shaikh',
      student: 'Student',
      img: require('../../assets/parentOne.png'),
    },
    {
      id: 1,
      name: 'Ahmad Ali',
      student: 'Student',
      img: require('../../assets/yusuf.png'),
    },
    {
      id: 1,
      name: 'Amira Qureshi',
      student: 'Student',
      img: require('../../assets/person4.png'),
    },
    {
      id: 1,
      name: 'Farida Qtaishat',
      student: 'Student',
      img: require('../../assets/parentTwo.png'),
    },
    {
      id: 1,
      name: 'Mohammed Rasool',
      student: 'Student',
      img: require('../../assets/person5.png'),
    },
    {
      id: 1,
      name: 'Saba Qamar',
      student: 'Student',
      img: require('../../assets/person4.png'),
    },
  ];

  return (
    <>
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
              text={t('Assign Activity')}
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
            style={styles(direction).done}
            containerStyle={styles(direction).rightContainer}
            text={t('Done')}
          />
        }
      />
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
                      color={'#9DA6B0'}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <View style={styles(direction).assignContainer}>
              <RegularButton
                onPress={() => {
                  NavigationService.navigate('');
                }}
                text={
                  <Text style={styles(direction).assignText}>
                    {t('Assign All')}
                  </Text>
                }
                radius={8}
                height={40}
                width={107}
                colors={['#E2E2E2', '#EBEEF0']}
              />
            </View>
            {studentList.map((item, index) => {
              return (
                <View style={styles(direction).neomorphContainer}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={14}>
                    <View style={styles(direction).rectangle3}>
                      <View style={styles(direction).rowContainer}>
                        <Image
                          style={styles(direction).imageStyle}
                          source={item.img}
                        />
                        <View style={styles(direction).textContainer}>
                          <Text style={styles(direction).name}>
                            {t(item.name)}
                          </Text>
                          <Text style={styles(direction).text}>
                            {t(item.student)}
                          </Text>
                        </View>
                        <Checkbox
                          borderWidth={1}
                          color={'#03A0E3'}
                          iconColor={'#FFFFFF'}
                          iconSize={scale(18)}
                          icon={'check'}
                          height={25}
                          width={25}
                        />
                      </View>
                    </View>
                  </Neumorphism>
                </View>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
export default AssignActivity;
