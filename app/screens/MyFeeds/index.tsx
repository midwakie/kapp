import React, { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import HorizontalLine from 'app/components/lines/HorizontalLine';

const MyFeeds: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <>
      <TitleBar
        leftComponent={
          <View style={styles(direction).leftContainer}>
            <Image
              source={require('../../assets/toppic.png')}
              style={styles(direction).image1Style}
            />
          </View>
        }
        middleComponent={
          <View style={styles(direction).middlecomponent}>
            <GradientText
              colors={['#03A0E3', '#0D93CD']}
              text={t('My Feeds')}
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
            radius={50}>
            <View style={styles(direction).right}>
              <View style={{ marginRight: 12 }}>
                <TouchableOpacity>
                  <MaterialIcon
                    name={'filter-list'}
                    size={scale(18)}
                    color={'#03A0E3'}
                    style={styles(direction).topicon}
                  />
                </TouchableOpacity>
              </View>
              <HorizontalLine width={1} color={'#C1D1DB'} />
              <View style={{ marginLeft: 13 }}>
                <TouchableOpacity>
                  <MaterialIcon
                    name={'search'}
                    size={scale(18)}
                    color={'#03A0E3'}
                    style={styles(direction).topicon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Neumorphism>
        }
      />
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <TouchableOpacity>
                <View style={styles(direction).rectangle2}>
                  <View style={styles(direction).imagecontainer}>
                    <Image
                      source={require('../../assets/dp.png')}
                      style={styles(direction).image1Style}
                    />
                    <Text style={styles(direction).profilename}>
                      {t('Dream Star Kid')}
                    </Text>
                  </View>
                  <Text style={styles(direction).status}>{t('5 min ago')}</Text>
                  <View style={styles(direction).imagecontainer1}>
                    <Image
                      source={require('../../assets/esl.png')}
                      style={styles(direction).imageStyle}
                    />
                    <Image
                      source={require('../../assets/play.png')}
                      style={styles(direction).button}
                    />
                  </View>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={t('Very Productive Activities')}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).headingtext}
                  />
                  <Text style={styles(direction).text}>
                    {t(
                      'There are many variations of passages\nLorem Ipsum available, but the majority',
                    )}
                  </Text>
                  <View style={styles(direction).iconcontainer}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={50}>
                      <View style={styles(direction).iconbox}>
                        <MaterialIcon
                          name={'favorite'}
                          size={scale(15)}
                          color={'#C1DBE7'}
                          style={styles(direction).icon}
                        />
                        <Text style={styles(direction).icontext}>
                          {t('235')}
                        </Text>
                      </View>
                    </Neumorphism>
                    <View style={{ marginLeft: 20 }}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#A8A8A8'}
                        shapeType={'flat'}
                        radius={50}>
                        <View style={styles(direction).iconbox}>
                          <Icon
                            name={'chat'}
                            size={scale(15)}
                            color={'#C1DBE7'}
                            style={styles(direction).icon}
                          />
                          <Text style={styles(direction).icontext}>
                            {t('235')}
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
                        <View style={styles(direction).iconbox}>
                          <MaterialIcon
                            name={'visibility'}
                            size={scale(15)}
                            color={'#84BD47'}
                            style={styles(direction).icon}
                          />
                          <Text style={styles(direction).icontext}>
                            {t('235')}
                          </Text>
                        </View>
                      </Neumorphism>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </Neumorphism>
            <View style={{ marginTop: 30 }}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <TouchableOpacity>
                  <View style={styles(direction).rectangle2}>
                    <View style={styles(direction).imagecontainer}>
                      <Image
                        source={require('../../assets/dp.png')}
                        style={styles(direction).image1Style}
                      />
                      <Text style={styles(direction).profilename}>
                        {t('Dream Star Kid')}
                      </Text>
                    </View>
                    <Text style={styles(direction).status}>
                      {t('5 min ago')}
                    </Text>
                    <View style={styles(direction).imagecontainer1}>
                      <Image
                        source={require('../../assets/feedpic2.png')}
                        style={styles(direction).imageStyle}
                      />
                      <Image
                        source={require('../../assets/docs.png')}
                        style={styles(direction).button}
                      />
                    </View>
                    <GradientText
                      colors={['#758DAC', '#2F4868']}
                      text={t('Very Productive Activities')}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      textStyle={styles(direction).headingtext}
                    />
                    <Text style={styles(direction).text}>
                      {t(
                        'There are many variations of passages\nLorem Ipsum available, but the majority',
                      )}
                    </Text>
                    <View style={styles(direction).iconcontainer}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#A8A8A8'}
                        shapeType={'flat'}
                        radius={50}>
                        <View style={styles(direction).iconbox}>
                          <MaterialIcon
                            name={'favorite'}
                            size={scale(15)}
                            color={'#EC4D61'}
                            style={styles(direction).icon}
                          />
                          <Text style={styles(direction).icontext}>
                            {t('235')}
                          </Text>
                        </View>
                      </Neumorphism>
                      <View style={{ marginLeft: 20 }}>
                        <Neumorphism
                          lightColor={'#ffffff'}
                          darkColor={'#A8A8A8'}
                          shapeType={'flat'}
                          radius={50}>
                          <View style={styles(direction).iconbox}>
                            <Icon
                              name={'chat'}
                              size={scale(15)}
                              color={'#03A0E3'}
                              style={styles(direction).icon}
                            />
                            <Text style={styles(direction).icontext}>
                              {t('235')}
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
                          <View style={styles(direction).iconbox}>
                            <MaterialIcon
                              name={'visibility'}
                              size={scale(15)}
                              color={'#84BD47'}
                              style={styles(direction).icon}
                            />
                            <Text style={styles(direction).icontext}>
                              {t('235')}
                            </Text>
                          </View>
                        </Neumorphism>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Neumorphism>
            </View>
            <View style={{ marginTop: 30 }}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <TouchableOpacity>
                  <View style={styles(direction).rectangle2}>
                    <View style={styles(direction).imagecontainer}>
                      <Image
                        source={require('../../assets/dp.png')}
                        style={styles(direction).image1Style}
                      />
                      <Text style={styles(direction).profilename}>
                        {t('Dream Star Kid')}
                      </Text>
                    </View>
                    <Text style={styles(direction).status}>
                      {t('5 min ago')}
                    </Text>
                    <View style={styles(direction).imagecontainer1}>
                      <Image
                        source={require('../../assets/feedpic2.png')}
                        style={styles(direction).imageStyle}
                      />
                      <Image
                        source={require('../../assets/docs.png')}
                        style={styles(direction).button}
                      />
                    </View>
                    <GradientText
                      colors={['#758DAC', '#2F4868']}
                      text={t('Very Productive Activities')}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      textStyle={styles(direction).headingtext}
                    />
                    <Text style={styles(direction).text}>
                      {t(
                        'There are many variations of passages\nLorem Ipsum available, but the majority',
                      )}
                    </Text>
                    <View style={styles(direction).iconcontainer}>
                      <Neumorphism
                        lightColor={'#ffffff'}
                        darkColor={'#A8A8A8'}
                        shapeType={'flat'}
                        radius={50}>
                        <View style={styles(direction).iconbox}>
                          <MaterialIcon
                            name={'favorite'}
                            size={scale(15)}
                            color={'#EC4D61'}
                            style={styles(direction).icon}
                          />
                          <Text style={styles(direction).icontext}>
                            {t('235')}
                          </Text>
                        </View>
                      </Neumorphism>
                      <View style={{ marginLeft: 20 }}>
                        <Neumorphism
                          lightColor={'#ffffff'}
                          darkColor={'#A8A8A8'}
                          shapeType={'flat'}
                          radius={50}>
                          <View style={styles(direction).iconbox}>
                            <Icon
                              name={'chat'}
                              size={scale(15)}
                              color={'#03A0E3'}
                              style={styles(direction).icon}
                            />
                            <Text style={styles(direction).icontext}>
                              {t('235')}
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
                          <View style={styles(direction).iconbox}>
                            <MaterialIcon
                              name={'visibility'}
                              size={scale(15)}
                              color={'#84BD47'}
                              style={styles(direction).icon}
                            />
                            <Text style={styles(direction).icontext}>
                              {t('235')}
                            </Text>
                          </View>
                        </Neumorphism>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Neumorphism>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default MyFeeds;
