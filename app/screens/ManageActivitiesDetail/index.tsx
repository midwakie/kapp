import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { ms, scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import { useForm } from 'react-hook-form';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from 'app/components/inputs/CustomInput';

const ManageActivities: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const { control } = useForm();
  const [description, setDescription] = useState('');
  const [isFlatListVisible, setIsFlatListVisible] = useState(false);
  const [numColumns, setNumColumns] = useState(3);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [iconDirection, setIconDirection] = useState('down');
  const [data1, setData] = useState([
    {
      id: 1,
      profileImage: require('../../assets/myChannel2.png'),
      bookType: 'Story Book',
      activityTitle: 'Easy Math Book Reading',
      description:
        'Lorem Ipsum available, but the majority. There are many variations of passages.This is some additional text that will be displayed when the "More" button is clicked.',
      endDate: '1 Day to go',
      bookName: 'Math starter kit',
      expanded: false,
    },
  ]);
  const video = [
    {
      id: 1,
      studentImage: require('../../assets/studentOne.png'),
      studentName: 'Abeer Shaikh',
      videoImage: [
        { id: 1, Image: require('../../assets/user.png') },
        { id: 2, Image: require('../../assets/user.png') },
        { id: 2, Image: require('../../assets/user.png') },
        { id: 2, Image: require('../../assets/user.png') },
      ],
    },
    {
      id: 2,
      studentImage: require('../../assets/studentOne.png'),
      studentName: 'Abeer Shaikh',
      videoImage: [
        {
          id: 2,
          Image: require('../../assets/user.png'),
        },
      ],
    },
    {
      id: 3,
      studentImage: require('../../assets/studentOne.png'),
      studentName: 'Abeer Shaikh',
      videoImage: [
        {
          id: 1,
          Image: require('../../assets/user.png'),
        },
        {
          id: 1,
          Image: require('../../assets/user.png'),
        },
      ],
    },
  ];

  const handleExpand = (id: number) => {
    setData(prevData =>
      prevData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            expanded: !item.expanded,
          };
        }
        return item;
      }),
    );
  };
  const CardItem = ({ videoImage }: any) => {
    return (
      <View style={styles(direction).imageContainer4}>
        <Image
          style={styles(direction).imageStyle2}
          source={videoImage.Image}
        />
        <TouchableOpacity>
          <Image
            style={styles(direction).imageStyle3}
            source={require('../../assets/play.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            {data1.map(item => {
              return (
                <View key={item.id} style={styles(direction).neomorphContainer}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).container3}>
                      <View style={styles(direction).profileImgContainer1}>
                        <Image
                          source={item.profileImage}
                          style={styles(direction).profileImg1}
                        />
                      </View>
                      <View style={styles(direction).container4}>
                        <Text style={styles(direction).bookType}>
                          {item.bookType}
                        </Text>
                        <Text style={styles(direction).text2}>
                          {item.endDate}
                        </Text>
                      </View>
                      <View style={styles(direction).bookTitle}>
                        <Text
                          style={
                            item.id === 2
                              ? styles(direction).text4
                              : item.id === 3
                              ? styles(direction).text6
                              : styles(direction).text1
                          }>
                          {item.activityTitle}
                        </Text>
                      </View>
                      <View style={styles(direction).container5}>
                        <Text style={styles(direction).text3}>
                          {!item.expanded && item.description.slice(0, 70)}
                          {!item.expanded && (
                            <Text
                              style={{ color: '#03A0E3' }}
                              onPress={() => handleExpand(item.id)}>
                              more
                            </Text>
                          )}
                          {item.expanded && item.description}
                          {item.expanded && (
                            <Text
                              style={{ color: '#03A0E3' }}
                              onPress={() => handleExpand(item.id)}>
                              less
                            </Text>
                          )}
                        </Text>
                      </View>
                    </View>
                  </Neumorphism>
                </View>
              );
            })}
            {/* <View style={styles(direction).neomorphContainer3}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'pressed'}
                radius={scale(50)}>
                <TextInput
                  style={styles(direction).container66}
                  onChangeText={text => setDescription(text)}
                  name="search"
                  keyboardType="default"
                  autoCapitalize="none"
                  returnKeyType="next"
                  value={description}
                  placeholder={t('Search here..')}
                  placeholderTextColor="#9FA4A7"
                  rightComponent={
                    <TouchableOpacity style={styles(direction).searchIcon}>
                      <MaterialIcon
                        name={'search1'}
                        size={scale(20)}
                        color={'#03A0E3'}
                      />
                    </TouchableOpacity>
                  }
                />
              </Neumorphism>
              <View style={styles(direction).topIconContainer1}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={50}>
                  <TouchableOpacity style={styles(direction).topIconContainer}>
                    <Image
                      style={styles(direction).coinImage}
                      source={require('../../assets/filter.png')}
                    />
                  </TouchableOpacity>
                </Neumorphism>
              </View>
            </View> */}
            <View style={[styles(direction).rowContainer]}>
              <View style={[styles(direction).inputContainer]}>
                <Image
                  source={require('../../assets/inputBg.png')}
                  style={styles(direction).bg}
                />
                <TextInput
                  keyboardType="default"
                  autoCapitalize="none"
                  value={description}
                  onChangeText={text => setDescription(text)}
                  placeholder={t('Search here..')}
                  placeholderTextColor="#9FA4A7"
                  style={styles(direction).input}
                />
              </View>
              <View style={styles(direction).topIconContainer1}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={50}>
                  <TouchableOpacity style={styles(direction).topIconContainer}>
                    <Image
                      style={styles(direction).coinImage}
                      source={require('../../assets/filter.png')}
                    />
                  </TouchableOpacity>
                </Neumorphism>
              </View>
            </View>
            {video.map(item => {
              return (
                <View style={styles(direction).neomorphContainer4}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).childExpansionContainer}>
                      <View style={styles(direction).childContainer}>
                        <View style={styles(direction).studentProfile}>
                          <Image
                            source={item.studentImage}
                            style={styles(direction).studentProfile1}
                          />
                        </View>
                        <View style={styles(direction).textContainer}>
                          <Text style={styles(direction).name}>
                            {t(item.studentName)}
                          </Text>
                        </View>

                        <TouchableOpacity
                          style={styles(direction).down}
                          onPress={() => {
                            if (activeId !== item.id) {
                              setActiveId(item.id);
                              setIsVideoVisible(true);
                              setIsFlatListVisible(true);
                            } else {
                              setActiveId(null);
                              setIsVideoVisible(false);
                              setIsFlatListVisible(false);
                            }
                          }}>
                          <MaterialIcon
                            name={`chevron-${
                              activeId === item.id ? 'up' : 'down'
                            }`}
                            size={35}
                            color={'#03A0E3'}
                          />
                        </TouchableOpacity>
                      </View>
                      {isVideoVisible && activeId === item.id && (
                        <FlatList
                          key={'#'}
                          keyExtractor={item => '#' + item.id}
                          numColumns={numColumns}
                          data={item.videoImage}
                          renderItem={({ item }) => {
                            return <CardItem videoImage={item} />;
                          }}
                        />
                      )}
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
                text={t('Activities Work')}
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

export default ManageActivities;
