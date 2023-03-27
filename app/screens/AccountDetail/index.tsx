/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextStyle,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';
import RNRestart from 'react-native-restart';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import RadioButton from 'app/components/buttons/RadioButton';
import { persistSelectedLanguage } from 'app/utils/storageUtils';

const CreateChat: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const currentOrientation = useDeviceOrientation();
  const [modalVisible, setModalVisible] = useState(false);
  const [radioButtonEnglish, setRadioButtonEnglish] = useState(true);
  const [radioButtonArabic, setRadioButtonArabic] = useState(false);

  const onPressRadioButtonEnglish = (radioButton: string) => {
    i18n.changeLanguage('en');
    setRadioButtonEnglish(!radioButtonEnglish);
    setRadioButtonArabic(!radioButtonArabic);
  };

  const onPressRadioButtonArabic = (radioButton: string) => {
    i18n.changeLanguage('ar');
    setRadioButtonEnglish(!radioButtonEnglish);
    setRadioButtonArabic(!radioButtonArabic);
  };

  const details = [
    {
      id: 1,
      account: 'abeershaikh786@gmail.com',
      page: () => NavigationService.navigate('ChangeEmailId'),
    },
    {
      id: 2,
      account: '+971-565-5523-01',
      page: () => NavigationService.navigate('ChangeMobileNumber'),
    },
  ];
  const [parentData, setParentData] = useState({
    img: require('../../assets/parentOne.png'),
    name: 'Abeer Shaikh',
    role: 'Parent',
  });
  const [studentData, setStudentData] = useState({
    img: require('../../assets/childImage1.png'),
    name: 'Fatima Shaikh',
    school: 'Next Generation School',
  });
  const [teacherData, setTeacherData] = useState({
    img: require('../../assets/ParentShop.png'),
    name: 'Amira Qureshi',
    role: 'Teacher',
  });
  const [options1, setOption] = useState([
    {
      title: 'Switch Profile',
      image: require('../../assets/switchProfile.png'),
    },
    {
      title: 'Send Invitation',
      image: require('../../assets/sendInvitation.png'),
    },
    {
      title: 'Edit Profile',
      image: require('../../assets/pen.png'),
    },
    {
      title: 'Delete Profile',
      image: require('../../assets/trash.png'),
    },
  ]);
  const CardListItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <Neumorphism
          style={styles(direction).neomorphMargin}
          lightColor={'#ffffff'}
          darkColor={'#C6CEDA'}
          shapeType={'flat'}
          radius={scale(14)}>
          <View style={styles(direction).cardListStyleTwo}>
            <View style={styles(direction).chatInfo}>
              <Text style={styles(direction).cardListAccountText}>
                {book.account}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={book.page}>
                <Text style={styles(direction).chatName}> {t('Change')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Neumorphism>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <ScrollView style={styles(direction).container} bounces={false}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).cardContainer}>
              <FlatList
                numColumns={1}
                key={'-'}
                keyExtractor={item => '-' + item.id}
                data={details}
                renderItem={({ item }) => {
                  return <CardListItem book={item} />;
                }}
              />
            </View>
            <View>
              <View style={styles(direction).neomorphContainer}>
                <Neumorphism
                  style={styles(direction).neomorphMargin}
                  lightColor={'#ffffff'}
                  darkColor={'#C6CEDA'}
                  shapeType={'flat'}
                  radius={scale(14)}>
                  <View style={styles(direction).cardListStyleTwo}>
                    <View style={styles(direction).chatInfo}>
                      <Text style={styles(direction).cardListAccountText}>
                        {t('Manage Password')}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          NavigationService.navigate('AccountChangePassword');
                        }}>
                        <Text style={styles(direction).chatName}>
                          {t('Change')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Neumorphism>
              </View>
              <View style={styles(direction).neomorphContainer}>
                <Neumorphism
                  style={styles(direction).neomorphMargin}
                  lightColor={'#ffffff'}
                  darkColor={'#C6CEDA'}
                  shapeType={'flat'}
                  radius={scale(14)}>
                  <View style={styles(direction).cardListStyleTwo}>
                    <View style={styles(direction).chatInfo}>
                      <Text style={styles(direction).cardListAccountText}>
                        {t('Change Language')}
                      </Text>
                      <Text style={styles(direction).cardListLanguageText}>
                        {t('(English)')}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          setModalVisible(true);
                        }}>
                        <Text style={styles(direction).chatName}>
                          {' '}
                          {t('Change')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Neumorphism>
              </View>
              <View>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}>
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
                          <View
                            style={styles(direction).radioButtonViewContainer}>
                            <RadioButton
                              id={'1'}
                              label={`${t('English')}`}
                              onPress={onPressRadioButtonEnglish}
                              selected={radioButtonEnglish}
                              color={'#03A0E3'}
                              labelStyle={styles.radioLabel}
                            />
                          </View>
                        </Neumorphism>
                        <Neumorphism
                          style={{ marginBottom: 25 }}
                          lightColor={'#ffffff'}
                          darkColor={'#d9d9d9'}
                          shapeType={'flat'}
                          radius={scale(14)}>
                          <View
                            style={styles(direction).radioButtonViewContainer}>
                            <RadioButton
                              id={'2'}
                              label={`${t('Arabic')}`}
                              onPress={onPressRadioButtonArabic}
                              selected={radioButtonArabic}
                              color={'#03A0E3'}
                              labelStyle={styles.radioLabel}
                            />
                          </View>
                        </Neumorphism>
                        <View style={{ width: '50%' }}>
                          <RegularButton
                            onPress={() => {
                              persistSelectedLanguage(
                                radioButtonEnglish === false ? 'ar' : 'en',
                              );
                              i18n.changeLanguage(
                                radioButtonEnglish === false ? 'ar' : 'en',
                              );
                              RNRestart.Restart();
                            }}
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
              <View style={styles(direction).neomorphContainer}>
                <Neumorphism
                  style={styles(direction).neomorphMargin}
                  lightColor={'#ffffff'}
                  darkColor={'#C6CEDA'}
                  shapeType={'flat'}
                  radius={scale(14)}>
                  <View style={styles(direction).cardListStyleTwo}>
                    <View style={styles(direction).chatInfo}>
                      <Text style={styles(direction).cardListAccountTextTwo}>
                        {t('Signout Account')}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <MaterialIcon
                          name={'exit-outline'}
                          size={scale(30)}
                          color={'#EC4D61'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Neumorphism>
              </View>
            </View>
            <View>
              <Neumorphism
                style={styles(direction).neomorphMargin}
                lightColor={'#ffffff'}
                darkColor={'#C6CEDA'}
                shapeType={'flat'}
                radius={scale(14)}>
                <View style={styles(direction).accountInfo}>
                  <View style={styles(direction).parentInfo}>
                    <View style={styles(direction).innerDirection}>
                      <Image
                        source={parentData.img}
                        style={styles(direction).cardListImage}
                      />
                      <View style={styles(direction).cardListContent}>
                        <Text style={styles(direction).name} numberOfLines={1}>
                          {parentData.name}
                        </Text>
                        <Text style={styles(direction).role}>
                          {parentData.role}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Menu>
                        <MenuTrigger>
                          <Image
                            source={require('../../assets/menu.png')}
                            style={styles(direction).itemMenu}
                          />
                        </MenuTrigger>
                        <MenuOptions
                          customStyles={{
                            optionsContainer: {
                              borderRadius: scale(14),
                              width: scale(214),
                              paddingVertical: scale(20),
                              backgroundColor: '#EBEEF0',
                            },
                          }}>
                          {options1.map((op, i) => (
                            <MenuOption
                              onSelect={() => {
                                if (op.title === 'Edit Profile') {
                                  NavigationService.navigate(
                                    'EditTeacherProfile',
                                  );
                                }
                              }}
                              customStyles={{
                                optionWrapper: {
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  paddingHorizontal: scale(20),
                                  paddingVertical: scale(7),
                                },
                              }}>
                              <Text
                                style={
                                  op.title === t('Delete Profile')
                                    ? styles(direction).optionTitleStyleColor
                                    : styles(direction).optionTitleStyle
                                }>
                                {t(op.title)}
                              </Text>
                              <Image
                                source={op.image}
                                style={styles(direction).menuImage}
                              />
                            </MenuOption>
                          ))}
                        </MenuOptions>
                      </Menu>
                    </View>
                  </View>
                  <View style={styles(direction).studentInfo}>
                    <View style={styles(direction).innerDirectionThree}>
                      <Image
                        source={studentData.img}
                        style={styles(direction).cardListImage}
                      />
                      <View style={styles(direction).cardListContent}>
                        <Text style={styles(direction).name} numberOfLines={1}>
                          {studentData.name}
                        </Text>
                        <Text style={styles(direction).role}>
                          {studentData.school}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Menu>
                        <MenuTrigger>
                          <Image
                            source={require('../../assets/menu.png')}
                            style={styles(direction).itemMenu}
                          />
                        </MenuTrigger>
                        <MenuOptions
                          customStyles={{
                            optionsContainer: {
                              borderRadius: scale(14),
                              width: scale(214),
                              paddingVertical: scale(20),
                              backgroundColor: '#EBEEF0',
                            },
                          }}>
                          {options1.map((op, i) => (
                            <MenuOption
                              onSelect={() => {
                                if (op.title === 'Edit Profile') {
                                  NavigationService.navigate(
                                    'EditTeacherProfile',
                                  );
                                }
                              }}
                              customStyles={{
                                optionWrapper: {
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  paddingHorizontal: scale(20),
                                  paddingVertical: scale(7),
                                },
                              }}>
                              <Text
                                style={
                                  op.title === t('Delete Profile')
                                    ? styles(direction).optionTitleStyleColor
                                    : styles(direction).optionTitleStyle
                                }>
                                {t(op.title)}
                              </Text>
                              <Image
                                source={op.image}
                                style={styles(direction).menuImage}
                              />
                            </MenuOption>
                          ))}
                        </MenuOptions>
                      </Menu>
                    </View>
                  </View>
                  <View style={styles(direction).studentInfo}>
                    <View style={styles(direction).innerDirectionThree}>
                      <Image
                        source={studentData.img}
                        style={styles(direction).cardListImage}
                      />
                      <View style={styles(direction).cardListContent}>
                        <Text style={styles(direction).name} numberOfLines={1}>
                          {studentData.name}
                        </Text>
                        <Text style={styles(direction).role}>
                          {studentData.school}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Menu>
                        <MenuTrigger>
                          <Image
                            source={require('../../assets/menu.png')}
                            style={styles(direction).itemMenu}
                          />
                        </MenuTrigger>
                        <MenuOptions
                          customStyles={{
                            optionsContainer: {
                              borderRadius: scale(14),
                              width: scale(214),
                              paddingVertical: scale(20),
                              backgroundColor: '#EBEEF0',
                            },
                          }}>
                          {options1.map((op, i) => (
                            <MenuOption
                              onSelect={() => {
                                if (op.title === 'Edit Profile') {
                                  NavigationService.navigate(
                                    'EditTeacherProfile',
                                  );
                                }
                              }}
                              customStyles={{
                                optionWrapper: {
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  paddingHorizontal: scale(20),
                                  paddingVertical: scale(7),
                                },
                              }}>
                              <Text
                                style={
                                  op.title === t('Delete Profile')
                                    ? styles(direction).optionTitleStyleColor
                                    : styles(direction).optionTitleStyle
                                }>
                                {t(op.title)}
                              </Text>
                              <Image
                                source={op.image}
                                style={styles(direction).menuImage}
                              />
                            </MenuOption>
                          ))}
                        </MenuOptions>
                      </Menu>
                    </View>
                  </View>
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).neomorphContainer}>
              <Neumorphism
                style={styles(direction).neomorphMargin}
                lightColor={'#ffffff'}
                darkColor={'#C6CEDA'}
                shapeType={'flat'}
                radius={scale(14)}>
                <View style={styles(direction).cardListStyleThree}>
                  <View style={styles(direction).parentInfo}>
                    <View style={styles(direction).innerDirectionTwo}>
                      <Image
                        source={teacherData.img}
                        style={styles(direction).cardListImage}
                      />
                      <View style={styles(direction).cardListContent}>
                        <Text style={styles(direction).name} numberOfLines={1}>
                          {teacherData.name}
                        </Text>
                        <Text style={styles(direction).role}>
                          {teacherData.role}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Menu>
                      <MenuTrigger>
                        <Image
                          source={require('../../assets/menu.png')}
                          style={styles(direction).itemMenu}
                        />
                      </MenuTrigger>
                      <MenuOptions
                        customStyles={{
                          optionsContainer: {
                            borderRadius: scale(14),
                            width: scale(214),
                            paddingVertical: scale(20),
                            backgroundColor: '#EBEEF0',
                          },
                        }}>
                        {options1.map((op, i) => (
                          <MenuOption
                            onSelect={() => {
                              if (op.title === 'Edit Profile') {
                                NavigationService.navigate(
                                  'EditTeacherProfile',
                                );
                              }
                            }}
                            customStyles={{
                              optionWrapper: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: scale(20),
                                paddingVertical: scale(7),
                              },
                            }}>
                            <Text
                              style={
                                op.title === t('Delete Profile')
                                  ? styles(direction).optionTitleStyleColor
                                  : styles(direction).optionTitleStyle
                              }>
                              {t(op.title)}
                            </Text>
                            <Image
                              source={op.image}
                              style={styles(direction).menuImage}
                            />
                          </MenuOption>
                        ))}
                      </MenuOptions>
                    </Menu>
                  </View>
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).neomorphContainerBottom}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#C6CEDA'}
                shapeType={'flat'}
                radius={scale(14)}>
                <View style={styles(direction).cardListStyleFour}>
                  <Neumorphism
                    lightColor={'#FEFEFF'}
                    darkColor={'#C6CEDA'}
                    shapeType={'flat'}
                    radius={scale(38)}>
                    <TouchableOpacity
                      onPress={() => NavigationService.navigate('')}>
                      <View style={styles(direction).filterViewContainer}>
                        <Image
                          source={require('../../assets/plus.png')}
                          style={styles(direction).filterImage}
                        />
                      </View>
                    </TouchableOpacity>
                  </Neumorphism>
                  <Text style={styles(direction).addProfileText}>
                    {t('Add Profile')}
                  </Text>
                </View>
              </Neumorphism>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles(false).titleBarContainer}>
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
            <View style={styles(false).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Create Chat')}
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
export default CreateChat;
