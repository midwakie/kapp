/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  View,
  TextInput,
} from 'react-native';
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MenuTrigger } from 'react-native-popup-menu';
import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';

const FeedDetail: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  
  const [data, setdata] = useState([
    {
      headerImage: require('../../assets/topbg.png'),
      title: 'Easy Mathes Tricks',
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      profileImage: require('../../assets/dp.png'),
      profileName: 'Dream Star Kid',
      endDate: '5k Subscriber',
    },
  ]);
  const [comment, setcomment] = useState([
    {
      image: require('../../assets/yusuf.png'),
      name: 'Yusuf Shaikh',
      endDate: '2 Days Ago',
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image: require('../../assets/yashi.png'),
      name: 'Yashi Queshi',
      endDate: '1 Month Ago',
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image: require('../../assets/bilal.png'),
      name: 'Bilal Ahmad',
      endDate: '1 Month Ago',
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
  ]);
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            {data.map((item, index) => {
              return (
                <>
                  <View style={styles(direction).imageContainer}>
                    <Image
                      source={item.headerImage}
                      style={styles(direction).image1Style}
                    />
                    <TouchableOpacity>
                      <Image
                        style={styles(direction).image2Style}
                        source={require('../../assets/play.png')}
                      />
                    </TouchableOpacity>
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
                  </View>

                  <View style={styles(direction).midContainer}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <GradientText
                        colors={['#758DAC', '#2F4868']}
                        text={t(item.title)}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        textStyle={styles(direction).text1}
                      />
                      {selectedRole === 'Parent' && <MenuTrigger>
                        <Image
                          source={require('../../assets/menu.png')}
                          style={styles(direction).menu}
                        />
                      </MenuTrigger>}
                      {selectedRole === 'Teacher' && <MenuTrigger>
                        <Image
                          source={require('../../assets/menu.png')}
                          style={styles(direction).menu}
                        />
                      </MenuTrigger>
                      }
                    </View>
                    <Text style={styles(direction).text2}>
                      {t(item.description)}
                    </Text>
                    <View style={styles(direction).container3}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image
                          source={require('../../assets/dp.png')}
                          style={styles(direction).image3Style}
                        />
                        <Text style={styles(direction).profileName}>
                          {t(item.profileName)}
                        </Text>
                        <Text style={styles(direction).status}>
                          {t(item.endDate)}
                        </Text>
                      </View>
                      <View style={{ marginBottom: 5 }}>
                      <RegularButton
                        onPress={() => {
                        NavigationService.navigate('');
                        }}
                      text={<Text style={styles(direction).boxText}>{t('Subscribe!')}</Text>}
                      radius={50}
                      height={35}
                      width={'100%'}
                      colors={['#FF6F81', '#F0374E']}
                      />
                    </View>
                    </View>
                    <View style={styles(direction).iconContainer}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#A8A8A8'}
                        shapeType={'flat'}
                        radius={12}>
                        <View style={styles(direction).iconBox}>
                          <MaterialIcon
                            name={'favorite'}
                            size={scale(21)}
                            color={'#FF5E62'}
                            style={styles(direction).icon}
                          />
                          <Text style={styles(direction).iconText}>
                            {t('2563')}
                          </Text>
                          <Icon
                            name={'chat'}
                            size={scale(21)}
                            color={'#03A0E3'}
                            style={styles(direction).icon}
                          />
                          <Text style={styles(direction).iconText}>
                            {t('235')}
                          </Text>
                          <MaterialIcon
                            name={'visibility'}
                            size={scale(21)}
                            color={'#84BD47'}
                            style={styles(direction).icon}
                          />
                          <Text style={styles(direction).iconText}>
                            {t('235')}
                          </Text>
                        </View>
                      </Neumorphism>
                    </View>
                  </View>
                </>
              );
            })}
            <View style={styles(direction).bottomContainer}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={styles(direction).inputText}
                  placeholder={t('Type your comment here')}
                  // onChangeText={text => text.setFocus({ text })}
                />
                <View style={styles(direction).arrow}>
                  <RegularButton
                    onPress={() => {
                      NavigationService.reset;
                    }}
                    icon={'chevron-right'}
                    radius={50}
                    height={30}
                    width={30}
                    colors={['#EBECF0', '#EBECF0']}
                  />
                </View>
              </View>
              <View style={styles(direction).horizontalLine}></View>
              {comment.map((item, index) => {
                return (
                  <View style={styles(direction).commentContainer}>
                    <View style={styles(direction).container3}>
                    <View style={{ flexDirection: 'row'}}> 
                      <Image
                        source={item.image}
                        style={styles(direction).image3Style}
                      />
                      <Text style={styles(direction).profileName}>
                        {t(item.name)}
                      </Text>
                      <Text style={styles(direction).status}>
                        {t(item.endDate)}
                      </Text>
                      </View>
                      {selectedRole === 'Parent' && <MenuTrigger>
                        <Image
                          source={require('../../assets/menu.png')}
                          style={styles(direction).menu}
                        />
                      </MenuTrigger>}
                    </View>
                    <Text style={styles(direction).text2}>
                      {t(item.description)}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default FeedDetail;
