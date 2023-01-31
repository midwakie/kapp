/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import PlainButton from 'app/components/buttons/PlainButton';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

const ParentProfileDetail: React.FC = props => {
  const { control } = useForm();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();

  const [data, setData] = useState([
    {
      parentName: 'Abber Shaikh',
      noChildrens: '2 Childrens',
      parentImage: require('../../assets/parentImage.png'),
      childrens: [
        {
          childrenName: 'Fatima Shaikh',
          schoolName: 'Next Generation School',
          childImage: require('../../assets/childImage1.png'),
          Points: '450',
          teachersImage: [
            { avatarImage1: require('../../assets/person1.png') },
            { avatarImage2: require('../../assets/person2.png') },
            { avatarImage3: require('../../assets/person3.png') },
            { avatarImage4: require('../../assets/person4.png') },
            { avatarImage5: require('../../assets/person5.png') },
            { avatarImage6: require('../../assets/interestIcon6.png') },
          ],
        },
        {
          childrenName: 'Ayda Shaikh ',
          schoolName: 'Next Generation School',
          childImage: require('../../assets/childImage2.png'),
          Points: '450',
          teachersImage: [
            { avatarImage1: require('../../assets/person1.png') },
            { avatarImage2: require('../../assets/person2.png') },
            { avatarImage3: require('../../assets/person3.png') },
            { avatarImage4: require('../../assets/person4.png') },
            { avatarImage5: require('../../assets/person5.png') },
            { avatarImage6: require('../../assets/interestIcon6.png') },
          ],
        },
      ],
    },
  ]);
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
  // const { isCondition } = props.route.params;

  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          {data.map((item, index) => {
            return (
              <View style={styles(direction).container1}>
                <View style={styles(direction).container2}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).container3}>
                      <View style={styles(direction).row}>
                        <View style={styles(direction).profileImgContainer}>
                          <Image
                            source={item.parentImage}
                            style={styles(direction).profileImg}
                          />
                          <View style={styles(direction).smallContainer}>
                            <Neumorphism
                              lightColor={'#ffffff'}
                              darkColor={'#A8A8A8'}
                              shapeType={'flat'}
                              radius={50}>
                              <View style={styles(direction).coinContainer222}>
                                <Text style={styles(direction).smallText}>
                                  {t('Parent')}
                                </Text>
                              </View>
                            </Neumorphism>
                          </View>
                        </View>
                        <View style={styles(direction).Container4}>
                          <Text style={styles(direction).text1}>
                            {t(item.parentName)}
                          </Text>
                          <Text style={styles(direction).text2}>
                            {t(item.noChildrens)}
                          </Text>
                        </View>
                        <View style={styles(direction).Container43}>
                          {/* <PlainButton
                            onPress={() => {
                              NavigationService.navigate('');
                            }}
                            style={styles(direction).text3}
                            text={t('Edit')}
                          /> */}
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
                                  onSelect={menuItem => {
                                    if (op.title === 'Edit Profile') {
                                      // NavigationService.navigate('')
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
                                        ? styles(direction)
                                            .optionTitleStyleColor
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
                {item.childrens.map((children, index) => {
                  return (
                    <View style={styles(direction).container21}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#A8A8A8'}
                        shapeType={'flat'}
                        radius={scale(14)}>
                        <View style={styles(direction).container31}>
                          <View style={styles(direction).row}>
                            <View
                              style={styles(direction).profileImgContainer1}>
                              <TouchableOpacity
                                onPress={() => {
                                  NavigationService.navigate(
                                    'ChildFullProfile',
                                  );
                                }}>
                                <Image
                                  source={children.childImage}
                                  style={styles(direction).profileImg}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={styles(direction).Container41}>
                              <Text style={styles(direction).text1}>
                                {t(children.childrenName)}
                              </Text>
                              <Text style={styles(direction).text2}>
                                {t(children.schoolName)}
                              </Text>
                            </View>
                            <View style={styles(direction).Container43}>
                              {/* <PlainButton
                                onPress={() => {
                                  NavigationService.navigate('');
                                }}
                                style={styles(direction).text3}
                                text={t('Edit')}
                              /> */}
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
                                      onSelect={() => {}}
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
                                            ? styles(direction)
                                                .optionTitleStyleColor
                                            : styles(direction).optionTitleStyle
                                        }>
                                        {t(op.title)}{' '}
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

                          <View style={styles(direction).row11}>
                            <View style={styles(direction).Container52}>
                              <Text style={styles(direction).smallText1}>
                                {t('Teachers')}
                              </Text>
                              <View style={styles(direction).imageContainer}>
                                {children.teachersImage.map(teacher => {
                                  const teacherKey = Object.keys(teacher)[0];
                                  return (
                                    <TouchableOpacity
                                      key={teacherKey}
                                      onPress={() => {}}
                                      style={
                                        teacherKey === 'avatarImage1'
                                          ? styles(direction).interestIcon1
                                          : styles(direction).interestIcons
                                      }>
                                      <Image
                                        style={styles(direction).imageRound}
                                        source={teacher[teacherKey]}
                                      />
                                      {teacherKey === 'avatarImage6' && (
                                        <Text
                                          style={styles(direction).plusFour}>
                                          +4
                                        </Text>
                                      )}
                                    </TouchableOpacity>
                                  );
                                })}
                              </View>
                            </View>
                            <View style={styles(direction).Container52}>
                              <Text style={styles(direction).smallText11}>
                                {t('Total Points Earned')}
                              </Text>
                              <View style={styles(direction).coinContainer2}>
                                <Image
                                  style={styles(direction).coinImage}
                                  source={require('../../assets/goldCoin1.png')}
                                />
                                <Text style={styles(direction).coinText}>
                                  {t(children.Points)}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Neumorphism>
                    </View>
                  );
                })}
              </View>
            );
          })}
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
                text={t('Profile Detail')}
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

export default ParentProfileDetail;
