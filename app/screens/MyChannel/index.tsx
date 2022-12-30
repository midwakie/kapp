import React, { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { useForm } from 'react-hook-form';
import rules from 'app/rules';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyChannel: React.FC = () => {
  const { control } = useForm();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [data, setData] = useState([
    {
      profileImage: require('../../assets/myChannel1.png'),
      profileName: 'Angry Bird 2',
      status: '1256 View , 1 Hours Ago',
      contentImage: require('../../assets/myChannel2.png'),
    },
    {
      profileImage: require('../../assets/myChannel1.png'),
      profileName: 'Angry Bird 2',
      status: '1256 View , 1 Hours Ago',
      contentImage: require('../../assets/myChannel4.png'),
    },
    {
      profileImage: require('../../assets/myChannel1.png'),
      profileName: 'Angry Bird 2',
      status: '1256 View , 1 Hours Ago',
      contentImage: require('../../assets/myChannel5.png'),
    },
  ]);
  const [data1, setData1] = useState([
    {
      profileImage: require('../../assets/myChannel1.png'),
      channelName: 'Dream Star Kid',
      subscribers: '256k subscribers',
    },
  ]);

  const [options, setOptions] = useState([
    {
      title: 'Edit Channel',
      icon: 'pencil-outline',
    },
    {
      title: 'Channel Privacy',
      icon: 'shield-outline',
    },
    {
      title: 'Make Featured Channel',
      icon: 'dollar',
    },
    {
      title: 'Manage People',
      icon: 'account-outline',
    },
    {
      title: 'Manage Activities',
      icon: 'alarm',
    },
  ]);

  const [options1, setOption] = useState([
    {
      title: 'Recommend to Club',
      icon: 'tv-outline',
    },
    {
      title: 'Privacy',
      icon: 'shield-outline',
    },
    {
      title: 'Delete ',
      icon: 'delete',
    },
  ]);

  return (
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
              text={t('My Channel')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container1}>
          {data1.map((item, index) => {
            return (
              <View style={styles(direction).row}>
                <View style={styles(direction).profileImgContainer0}>
                  <Image
                    source={require('../../assets/myChannel1.png')}
                    style={styles(direction).profileImg0}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles(direction).text1}>
                      {t(item.channelName)}
                    </Text>
                    <Text style={styles(direction).text2}>
                      {t(item.subscribers)}
                    </Text>
                    <View style={{ marginTop: 17, marginLeft: 35 }}>
                      <RegularButton
                        onPress={() => {
                          NavigationService.navigate(' ');
                        }}
                        text={t('Publish ')}
                        radius={50}
                        height={45}
                        width={'100%'}
                        colors={['#03BBE3', '#14A9FD']}
                      />
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => setVisible(true)}>
                    <MaterialIcon
                      name={'more-vert'}
                      size={scale(14)}
                      color={'#758DAC'}
                      style={styles(direction).icon5}
                    />
                  </TouchableOpacity>
                  <Modal transparent visible={visible}>
                    <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                      <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles(direction).popup}>
                          {options.map((op, i) => (
                            <TouchableOpacity
                              style={styles(direction).option}
                              key={i}>
                              <Text
                                style={{
                                  color: '#758DAC',
                                  fontSize: 14,
                                  marginLeft: 20,
                                }}>
                                {op.title}{' '}
                              </Text>
                              <Icon
                                name={op.icon}
                                size={26}
                                color={'#323A3D'}
                              />
                            </TouchableOpacity>
                          ))}
                        </View>
                      </SafeAreaView>
                    </TouchableWithoutFeedback>
                  </Modal>
                </View>
              </View>
            );
          })}
          {data.map((item, index) => {
            return (
              <View style={styles(direction).container5}>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(14)}>
                  <View style={styles(direction).container2}>
                    <View style={styles(direction).profileImgContainer1}>
                      <Image
                        source={item.contentImage}
                        style={styles(direction).profileImg1}
                      />
                      <Image
                        source={require('../../assets/playIcon.png')}
                        style={styles(direction).profileImg2}
                      />
                    </View>
                    <View style={styles(direction).row1}>
                      <View style={styles(direction).profileImgContainer2}>
                        <Image
                          source={item.profileImage}
                          style={styles(direction).profileImg0}
                        />
                      </View>
                      <View>
                        <Text style={styles(direction).text11}>
                          {t(item.profileName)}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles(direction).text22}>
                            {t(item.status)}
                          </Text>
                          <MaterialIcon
                            name={'more-vert'}
                            onPress={() => setVisible2(true)}
                            size={scale(14)}
                            color={'#758DAC'}
                            style={styles(direction).icon4}
                          />
                          <Modal transparent visible={visible2}>
                            <TouchableWithoutFeedback
                              onPress={() => setVisible2(false)}>
                              <SafeAreaView style={{ flex: 1 }}>
                                <View style={styles(direction).popup3}>
                                  {options1.map((op, i) => (
                                    <TouchableOpacity
                                      style={styles(direction).option3}
                                      key={i}>
                                      <Text
                                        style={{
                                          color: '#758DAC',
                                          fontSize: 14,
                                          marginLeft: 20,
                                        }}>
                                        {op.title}{' '}
                                      </Text>
                                      <Icon
                                        name={op.icon}
                                        size={26}
                                        color={'#323A3D'}
                                      />
                                    </TouchableOpacity>
                                  ))}
                                </View>
                              </SafeAreaView>
                            </TouchableWithoutFeedback>
                          </Modal>
                        </View>
                        <View style={styles(direction).row3}>
                          <MaterialIcon
                            name={'favorite'}
                            size={scale(14)}
                            color={'#FF5E62'}
                            style={styles(direction).icon}
                          />
                          <Text style={styles(direction).text23}>
                            {t('2563')}
                          </Text>
                          <Icon
                            name={'chat'}
                            size={scale(14)}
                            color={'#03A0E3'}
                            style={styles(direction).icon2}
                          />
                          <Text style={styles(direction).text23}>
                            {t('2563')}
                          </Text>

                          <MaterialIcon
                            name={'visibility'}
                            size={scale(14)}
                            color={'#84BD47'}
                            style={styles(direction).icon3}
                          />
                          <Text style={styles(direction).text24}>
                            {t('2563')}
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default MyChannel;
