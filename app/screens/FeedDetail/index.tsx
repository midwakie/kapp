/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Modal,
  Alert,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import RadioButton from 'app/components/buttons/RadioButton';

interface IState {
  currentCustomerReducer: ICurrentCustomer;
}

const FeedDetail: React.FC = () => {
  const [modalVisible2, setModalVisible2] = useState(false);
  const onPressRadioButtonPrivate = () => {
    setRadioButtonPrivate(true);
    setRadioButtonPublic(false);
    setRadioButtonGroup(false);
  };

  const onPressRadioButtonPublic = () => {
    setRadioButtonPrivate(false);
    setRadioButtonPublic(true);
    setRadioButtonGroup(false);
  };
  const onPressRadioButtonGroup = () => {
    setRadioButtonPrivate(false);
    setRadioButtonPublic(false);
    setRadioButtonGroup(true);
  };
  const [modalVisible, setModalVisible] = useState(true);
  const [radioButtonPrivate, setRadioButtonPrivate] = useState(false);
  const [radioButtonPublic, setRadioButtonPublic] = useState(false);
  const [radioButtonGroup, setRadioButtonGroup] = useState(false);
  const toggle = () => {
    setModalVisible(!modalVisible);
  };
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );

  const [data, setdata] = useState([
    {
      channnelId: 1,
      headerImage: require('../../assets/topbg.png'),
      title: 'Easy Mathes Tricks',
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      profileImage: require('../../assets/dp.png'),
      profileName: 'Dream Star Kid',
      endDate: '5k Subscriber',
      likeCount: 2536,
      likes: false,
    },
  ]);
  const [comment, setcomment] = useState([
    {
      image: require('../../assets/yusuf.png'),
      name: 'Yusuf Shaikh',
      endDate: '2 Days Ago',
      user_id: true,
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image: require('../../assets/yashi.png'),
      name: 'Yashi Queshi',
      endDate: '1 Month Ago',
      user_id: false,
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image: require('../../assets/bilal.png'),
      name: 'Bilal Ahmad',
      endDate: '1 Month Ago',
      user_id: false,
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
  ]);
  const [topOptions, settopOptions] = useState([
    {
      title: 'Recommend to Child',
      image: require('../../assets/checkMark.png'),
    },
    {
      title: 'Report Feed',
      image: require('../../assets/reportFlag.png'),
    },
    {
      title: 'Delete',
      image: require('../../assets/trash.png'),
    },
  ]);
  const [options, setOptions] = useState([
    {
      title: 'Edit',
      image: require('../../assets/pen.png'),
    },
    {
      title: 'Delete',
      image: require('../../assets/trash.png'),
    },
  ]);
  const [reportOptions, setReportOptions] = useState([
    {
      title: 'Report',
      image: require('../../assets/reportFlag.png'),
    },
  ]);
  const handlePress = channnelId => {
    const updatedData = data.map(item => {
      if (item.channnelId === channnelId) {
        return {
          ...item,
          likes: !item.likes,
          likeCount: item.likeCount + (item.likes ? -1 : 1),
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
                      {selectedRole === 'Parent' && (
                        <Menu>
                          <MenuTrigger>
                            <Image
                              source={require('../../assets/menu.png')}
                              style={styles(direction).menu}
                            />
                          </MenuTrigger>
                          <MenuOptions
                            customStyles={{
                              optionsContainer: {
                                borderRadius: scale(14),
                                width: scale(198),
                                paddingVertical: scale(10),
                                marginLeft: -6,
                                backgroundColor: '#EBEEF0',
                              },
                            }}>
                            {topOptions.map((op, i) => (
                              <MenuOption
                                onSelect={() => {}}
                                customStyles={{
                                  optionWrapper: {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingHorizontal: scale(15),
                                    paddingVertical: scale(10),
                                  },
                                }}>
                                <Text
                                  style={styles(direction).optionTitleStyle}>
                                  {op.title}{' '}
                                </Text>
                                <Image
                                  source={op.image}
                                  style={styles(direction).menuImage}
                                />
                              </MenuOption>
                            ))}
                          </MenuOptions>
                        </Menu>
                      )}
                      {selectedRole === 'Teacher' && (
                        <Menu>
                          <MenuTrigger>
                            <Image
                              source={require('../../assets/menu.png')}
                              style={styles(direction).menu}
                            />
                          </MenuTrigger>
                          <MenuOptions
                            customStyles={{
                              optionsContainer: {
                                borderRadius: scale(14),
                                width: scale(198),
                                paddingVertical: scale(10),
                                marginLeft: -6,
                                backgroundColor: '#EBEEF0',
                              },
                            }}>
                            {topOptions.map((op, i) => (
                              <MenuOption
                                onSelect={() => {
                                  [
                                    op.title === 'Delete'
                                      ? setModalVisible2(true)
                                      : '',
                                  ];
                                }}
                                customStyles={{
                                  optionWrapper: {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingHorizontal: scale(15),
                                    paddingVertical: scale(10),
                                  },
                                }}>
                                <Text
                                  style={styles(direction).optionTitleStyle}>
                                  {op.title}{' '}
                                </Text>
                                <Image
                                  source={op.image}
                                  style={styles(direction).menuImage}
                                />
                              </MenuOption>
                            ))}
                          </MenuOptions>
                        </Menu>
                      )}
                    </View>
                    <Text style={styles(direction).text2}>
                      {t(item.description)}
                    </Text>
                    <View style={styles(direction).container3}>
                      <TouchableOpacity
                        onPress={() => {
                          NavigationService.navigate('MyChannel', {
                            profileName: item.profileName,
                            profileImage: item.profileImage,
                            isCondition: true,
                          });
                        }}>
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
                      </TouchableOpacity>
                      <View style={{ marginBottom: 5 }}>
                        <RegularButton
                          onPress={() => {
                            NavigationService.navigate('');
                          }}
                          text={
                            <Text style={styles(direction).boxText}>
                              {t('Subscribe!')}
                            </Text>
                          }
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
                          <TouchableOpacity
                            onPress={() => handlePress(item.channnelId)}>
                            <Image
                              source={require('../../assets/love.png')}
                              style={
                                item.likes
                                  ? styles(direction).iconLiked
                                  : styles(direction).iconLove
                              }
                            />
                          </TouchableOpacity>
                          <Text style={styles(direction).iconText}>
                            {item.likeCount}
                          </Text>
                          <Image
                            source={require('../../assets/chat.png')}
                            style={styles(direction).iconChat}
                          />
                          <Text style={styles(direction).iconText}>
                            {t('235')}
                          </Text>
                          <Image
                            source={require('../../assets/eye.png')}
                            style={styles(direction).iconEye}
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
                  placeholder={`${t('Type your comment here')}`}
                  // onChangeText={text => handleComment(text)}
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
                      <View style={{ flexDirection: 'row' }}>
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
                      {selectedRole === 'Parent' && (
                        <Menu>
                          <MenuTrigger>
                            <Image
                              source={require('../../assets/menu.png')}
                              style={styles(direction).menu}
                            />
                          </MenuTrigger>
                          <MenuOptions
                            customStyles={{
                              optionsContainer: {
                                borderRadius: scale(14),
                                width: scale(198),
                                paddingVertical: scale(10),
                                marginLeft: -6,
                                backgroundColor: '#EBEEF0',
                              },
                            }}>
                            {item.user_id === false
                              ? reportOptions.map((op, i) => (
                                  <MenuOption
                                    onSelect={() => {}}
                                    customStyles={{
                                      optionWrapper: {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingHorizontal: scale(15),
                                        paddingVertical: scale(10),
                                      },
                                    }}>
                                    <Text
                                      style={
                                        styles(direction).optionTitleStyle
                                      }>
                                      {op.title}{' '}
                                    </Text>
                                    <Image
                                      source={op.image}
                                      style={styles(direction).menuImage}
                                    />
                                  </MenuOption>
                                ))
                              : options.map((op, i) => (
                                  <MenuOption
                                    onSelect={() => {}}
                                    customStyles={{
                                      optionWrapper: {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingHorizontal: scale(15),
                                        paddingVertical: scale(10),
                                      },
                                    }}>
                                    <Text
                                      style={
                                        styles(direction).optionTitleStyle
                                      }>
                                      {op.title}{' '}
                                    </Text>
                                    <Image
                                      source={op.image}
                                      style={styles(direction).menuImage}
                                    />
                                  </MenuOption>
                                ))}
                          </MenuOptions>
                        </Menu>
                      )}
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
        <View>
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(false);
              }}>
              <View style={styles(direction).modalContainer}>
                <View style={styles(direction).modalView}>
                  <Neumorphism
                    style={{ marginBottom: 25 }}
                    lightColor={'#ffffff'}
                    darkColor={'#d9d9d9'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).radioButtonViewContainer}>
                      <RadioButton
                        id={'1'}
                        label={`${t('Private')}`}
                        onPress={onPressRadioButtonPrivate}
                        selected={radioButtonPrivate}
                        color={'#03A0E3'}
                        labelStyle={styles(direction).radioLabel}
                      />
                    </View>
                  </Neumorphism>
                  <Neumorphism
                    style={{ marginBottom: 25 }}
                    lightColor={'#ffffff'}
                    darkColor={'#d9d9d9'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).radioButtonViewContainer}>
                      <RadioButton
                        id={'1'}
                        label={`${t('Public')}`}
                        onPress={onPressRadioButtonPublic}
                        selected={radioButtonPublic}
                        color={'#03A0E3'}
                        labelStyle={styles(direction).radioLabel}
                      />
                    </View>
                  </Neumorphism>
                  <Neumorphism
                    style={{ marginBottom: 25 }}
                    lightColor={'#ffffff'}
                    darkColor={'#d9d9d9'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).radioButtonViewContainer}>
                      <RadioButton
                        id={'1'}
                        label={`${t('Group')}`}
                        onPress={onPressRadioButtonGroup}
                        selected={radioButtonGroup}
                        color={'#03A0E3'}
                        labelStyle={styles(direction).radioLabel}
                      />
                    </View>
                  </Neumorphism>
                  <View style={{ width: '70%' }}>
                    <RegularButton
                      onPress={() => NavigationService.navigate('Select Role')}
                      text={t('Save')}
                      radius={50}
                      height={50}
                      width={'100%'}
                      colors={['#03BBE3', '#14A9FD']}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible2}>
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible2(false);
              }}>
              <View style={styles(direction).modalContainer2}>
                <View style={styles(direction).modalView2}>
                  <View style={styles(direction).iconViewContainer2}>
                    <Ionicons name="warning" size={scale(80)} color="#F0374E" />
                  </View>

                  <View style={styles(direction).textDeleteConfirmationView}>
                    <Text style={styles(direction).textDeleteConfirmation}>
                      {t('Are you sure want to delete this item!')}
                    </Text>
                  </View>

                  <View style={styles(direction).buttonConfirmationView}>
                    <RegularButton
                      onPress={() => NavigationService.navigate('Select Role')}
                      text={t('Yes')}
                      radius={50}
                      height={50}
                      width={130}
                      colors={['#03BBE3', '#14A9FD']}
                    />
                    <RegularButton
                      onPress={setModalVisible2}
                      text={t('Cancel')}
                      radius={50}
                      height={50}
                      width={130}
                      colors={['#F0374E', '#F0374E']}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </ScrollView>
    </>
  );
};

export default FeedDetail;
