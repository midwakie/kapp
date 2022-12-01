import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import AppIntroSlider from 'react-native-app-intro-slider';
import PlainButton from 'app/components/buttons/PlainButton';
import RegularButton from 'app/components/buttons/RegularButton';
import Neumorphism from 'react-native-neumorphism';
import NavigationService from 'app/navigation/NavigationService';
import RNRestart from 'react-native-restart';
import { useTranslation } from 'react-i18next';
import { persistSelectedLanguage } from 'app/utils/storageUtils';
const Landing: React.FC = () => {
  const dispatch = useDispatch();
  const refSlider = useRef(null);
  const { t, i18n } = useTranslation();
  const direction = i18n.dir() === 'rtl' ? 'row-reverse' : 'row';
  const slides = [
    {
      title: 'Browse various reading E-books',
      subTitle: '',
      image: require('../../assets/slide1.png'),
    },
    {
      title: 'Manage Your Children and Track Activities',
      subTitle: '',
      image: require('../../assets/slide2.png'),
    },
    {
      title: 'Earn Rewards',
      subTitle: 'Reading books & Completing activities',
      image: require('../../assets/slide3.png'),
    },
    {
      title: 'Feeds based on your hobbies',
      subTitle: '',
      image: require('../../assets/slide4.png'),
    },
    {
      title: 'Manage Your Channels',
      subTitle: 'Personal & Classroom',
      image: require('../../assets/slide5.png'),
    },
    {
      title: 'Publish videos with exciting features',
      subTitle: '',
      image: require('../../assets/slide6.png'),
    },
  ];
  const onDashboard = () => dispatch(loginActions.onLoginResponse({ id: '' }));
  const onLogin = async (data: any) => {
    // NavigationService.navigate('Login');
    Keyboard.dismiss();
    const { email } = data;
    dispatch(loginActions.requestLogin(email));
  };

  const onSignUp = () => {
    NavigationService.navigate('Select Role');
  };
  const onSignIn = () => {
    NavigationService.navigate('Sign In');
  };
  const slideChanged = (index: any) => {};

  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container2}>
          <View style={styles.topContainer(direction)}>
            {/* <RegularButton
              onPress={() => {}}
              icon={'arrow-back'}
              radius={38}
              height={38}
              width={38}
              colors={['#EBECF0', '#EBECF0']}
            /> */}
            <PlainButton
              onPress={() => {
                refSlider?.current.goToSlide(5);
              }}
              style={styles.skipButtonText}
              containerStyle={styles.skipButtonContainer}
              text={t('Skip')}
            />
          </View>
          <View style={styles.walkThroughContainer}>
            <AppIntroSlider
              ref={refSlider}
              data={slides}
              renderPagination={(activeIndex: number) => (
                <View style={styles.paginationContainer}>
                  <SafeAreaView>
                    <View style={styles.paginationDots}>
                      {slides.length > 1 &&
                        slides.map((_, i) => (
                          <Image
                            key={i}
                            style={styles.dot}
                            source={
                              i === activeIndex
                                ? require('../../assets/activeOval.png')
                                : require('../../assets/Oval.png')
                            }
                          />
                        ))}
                    </View>
                  </SafeAreaView>
                </View>
              )}
              onSlideChange={index => {
                slideChanged(index);
              }}
              showDoneButton={false}
              showSkipButton={false}
              showNextButton={false}
              renderItem={({ item }) => (
                <View style={styles.mainContent}>
                  <Text style={styles.title}>{t(item.title)}</Text>
                  <Text style={styles.subTitle}>{t(item.subTitle)}</Text>
                  <Image style={styles.image} source={item.image} />
                </View>
              )}
            />
          </View>
          <View style={styles.buttonContainer(direction)}>
            <View style={{ width: '45%' }}>
              <RegularButton
                onPress={onSignUp}
                text={t('Sign up')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#FF6F81', '#F0374E']}
              />
            </View>
            <View style={{ width: '45%' }}>
              <RegularButton
                onPress={onSignIn}
                text={t('Sign in')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#03BBE3', '#14A9FD']}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Landing;
