/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import VerticalLine from 'app/components/lines/VerticalLine';
import { DrawerActions } from '@react-navigation/native';

const SubscribedChannel: React.FC = (props: any) => {
  const { control } = useForm();

  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [touchedItemId, setTouchedItemId] = useState<number | null>(null);
  const [selected, setSelected] = useState(null);

  const onPress = id => {
    setSelected(id);
  };
  const [data, setdata] = useState([
    {
      id: 1,
      headerImage: require('../../assets/toppic.png'),
      profileImage: require('../../assets/dp.png'),
      profileName: 'Dream Star Kid',
      endDate: '5 min ago',
      content: require('../../assets/esl.png'),
      icon: require('../../assets/docs.png'),
      isLiked: false,
      likeCount: 235,
      Title: 'Very Productive Activities',
      description:
        'There are many variations of passages Lorem Ipsum available, but the majority',
    },
    {
      id: 2,
      headerImage: require('../../assets/toppic.png'),
      profileImage: require('../../assets/dp.png'),
      profileName: 'Dream Star Kid',
      endDate: '5 min ago',
      content: require('../../assets/topbg.png'),
      icon: require('../../assets/play.png'),
      isLiked: false,
      likeCount: 235,
      Title: 'Very Productive Activities',
      description:
        'There are many variations of passages Lorem Ipsum available, but the majority',
    },
    {
      id: 3,
      headerImage: require('../../assets/toppic.png'),
      profileImage: require('../../assets/dp.png'),
      profileName: 'Dream Star Kid',
      endDate: '25 min ago',
      content: require('../../assets/esl.png'),
      icon: require('../../assets/play.png'),
      isLiked: false,
      likeCount: 235,
      Title: 'Very Productive Activities',
      description:
        'There are many variations of passages Lorem Ipsum available, but the majority',
    },
  ]);
  const handleLikePress = id => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isLiked: !item.isLiked,
          likeCount: item.likeCount + (item.isLiked ? -1 : 1),
        };
      }
      return item;
    });
    setdata(updatedData);
  };
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).bubbleContainer}>
              <TouchableOpacity
                style={styles(direction).container4}
                onPress={() => onPress(1)}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(150)}>
                  <View
                    style={[
                      styles(direction).button,
                      selected === 1 && styles(direction).button3,
                    ]}>
                    <Image
                      source={require('../../assets/subChannel1.png')}
                      style={[
                        styles(direction).imageStyle,
                        selected === 1 && styles(direction).imageStylePressed,
                      ]}
                    />
                  </View>
                </Neumorphism>
                <Text
                  style={[
                    styles(direction).text3,
                    selected === 1 && styles(direction).text4,
                  ]}>
                  {t('Astronaut')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles(direction).container4}
                onPress={() => onPress(2)}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(150)}>
                  <View
                    style={[
                      styles(direction).button,
                      selected === 2 && styles(direction).button3,
                    ]}>
                    <Image
                      source={require('../../assets/subChannel2.png')}
                      style={[
                        styles(direction).imageStyle,
                        selected === 1 && styles(direction).imageStylePressed,
                      ]}
                    />
                  </View>
                </Neumorphism>
                <Text
                  style={[
                    styles(direction).text3,
                    selected === 2 && styles(direction).text4,
                  ]}>
                  {t('Kunfu')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles(direction).container4}
                onPress={() => onPress(3)}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(150)}>
                  <View
                    style={[
                      styles(direction).button,
                      selected === 3 && styles(direction).button3,
                    ]}>
                    <Image
                      source={require('../../assets/subChannel3.png')}
                      style={[
                        styles(direction).imageStyle,
                        selected === 1 && styles(direction).imageStylePressed,
                      ]}
                    />
                  </View>
                </Neumorphism>
                <Text
                  style={[
                    styles(direction).text3,
                    selected === 3 && styles(direction).text4,
                  ]}>
                  {t('Angry')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles(direction).container4}
                onPress={() => onPress(4)}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(150)}>
                  <View
                    style={[
                      styles(direction).button,
                      selected === 4 && styles(direction).button3,
                    ]}>
                    <Image
                      source={require('../../assets/subChannel4.png')}
                      style={[
                        styles(direction).imageStyle,
                        selected === 1 && styles(direction).imageStylePressed,
                      ]}
                    />
                  </View>
                </Neumorphism>
                <Text
                  style={[
                    styles(direction).text3,
                    selected === 4 && styles(direction).text4,
                  ]}>
                  {t('Tangled')}
                </Text>
              </TouchableOpacity>
            </View>
            {data.map((item, index) => {
              return (
                <View key={item.id} style={styles(direction).neomorphContainer}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).rectangle2}>
                      <View style={styles(direction).imageContainer}>
                        <Image
                          source={item.profileImage}
                          style={styles(direction).image1Style}
                        />
                        <View style={styles(direction).text2}>
                          <Text style={styles(direction).profileName}>
                            {item.profileName}
                          </Text>
                          <Text style={styles(direction).status}>
                            {item.endDate}
                          </Text>
                        </View>
                      </View>
                      <View style={styles(direction).imageContainer1}>
                        <Image
                          source={item.content}
                          style={styles(direction).imageStyle1}
                        />
                        <TouchableOpacity>
                          <Image
                            source={item.icon}
                            style={styles(direction).button1}
                          />
                        </TouchableOpacity>
                      </View>
                      <GradientText
                        colors={['#758DAC', '#2F4868']}
                        text={t(item.Title)}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        textStyle={styles(direction).headingText}
                      />
                      <Text style={styles(direction).text}>
                        {item.description}
                      </Text>
                      <View style={styles(direction).iconContainer}>
                        <Neumorphism
                          lightColor={'#ffffff'}
                          darkColor={'#A8A8A8'}
                          shapeType={'flat'}
                          radius={scale(50)}>
                          <View style={styles(direction).iconBox}>
                            <TouchableOpacity
                              style={styles(direction).iconBox1}
                              onPress={() => handleLikePress(item.id)}>
                              <Image
                                source={require('../../assets/love.png')}
                                style={[
                                  item.isLiked
                                    ? styles(direction).likeImage
                                    : styles(direction).icon,
                                ]}
                              />
                            </TouchableOpacity>
                            <Text style={styles(direction).iconText}>
                              {item.likeCount}
                            </Text>
                          </View>
                        </Neumorphism>
                        <View style={{ marginLeft: 20 }}>
                          <Neumorphism
                            lightColor={'#ffffff'}
                            darkColor={'#A8A8A8'}
                            shapeType={'flat'}
                            radius={50}>
                            <View style={styles(direction).iconBox}>
                              <TouchableOpacity
                                key={item.id}
                                style={styles(direction).iconBox1}
                                onPress={() =>
                                  setTouchedItemId(
                                    touchedItemId === item.id ? null : item.id,
                                  )
                                }>
                                <Image
                                  source={require('../../assets/chat.png')}
                                  style={[
                                    item.id === touchedItemId
                                      ? styles(direction).chatImage
                                      : styles(direction).icon,
                                  ]}
                                />
                              </TouchableOpacity>
                              <Text style={styles(direction).iconText}>
                                {t('126')}
                              </Text>
                            </View>
                          </Neumorphism>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                          <Neumorphism
                            lightColor={'#ffffff'}
                            darkColor={'#A8A8A8'}
                            shapeType={'flat'}
                            radius={50}>
                            <View style={styles(direction).iconBox}>
                              <Image
                                source={require('../../assets/eye.png')}
                                style={styles(direction).icon1}
                              />
                              <Text style={styles(direction).iconText}>
                                {t('235')}
                              </Text>
                            </View>
                          </Neumorphism>
                        </View>
                      </View>
                    </View>
                  </Neumorphism>
                </View>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          leftComponent={
            <View style={styles(direction).topContainer}>
              <Image
                source={require('../../assets/toppic.png')}
                style={styles(direction).topImage}
              />
            </View>
          }
          middleComponent={
            <View style={styles(direction).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Subscribed')}
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

export default SubscribedChannel;
