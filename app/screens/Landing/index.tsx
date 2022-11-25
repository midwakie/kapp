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
const Landing: React.FC = () => {
  const dispatch = useDispatch();
  const refSlider = useRef(null);
  const [slides, setSlides] = useState([
    {
      title: 'Browse various \nreading E-books',
      subTitle: '',
      image: require('../../assets/slide1.png'),
    },
    {
      title: 'Manage Your Children \nand Track Activities ',
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
      title: 'Publish videos with \nexciting features',
      subTitle: '',
      image: require('../../assets/slide6.png'),
    },
  ]);
  const onDashboard = () => dispatch(loginActions.onLoginResponse({ id: '' }));
  const onLogin = async (data: any) => {
    // NavigationService.navigate('Login');
    Keyboard.dismiss();
    const { email } = data;
    dispatch(loginActions.requestLogin(email));
  };

  const onDone = () => {
    NavigationService.navigate('Select Role');
  };
  const slideChanged = (index: any) => {};

  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container2}>
          <View style={styles.topContainer}>
            {/* <RegularButton
              onPress={() => {}}
              icon={'arrow-back'}
              radius={38}
              height={38}
              width={38}
              colors={['#EBECF0', '#EBECF0']}
            /> */}
            <PlainButton
              onPress={onDone}
              style={styles.skipButtonText}
              containerStyle={styles.skipButtonContainer}
              text={'Skip'}
            />
          </View>
          <View style={styles.walkThroughContainer}>
            <AppIntroSlider
              ref={refSlider}
              data={slides}
              onDone={onDone}
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
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                  <Image style={styles.image} source={item.image} />
                </View>
              )}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={{ width: '45%' }}>
              <RegularButton
                onPress={onDone}
                text={'Sign up'}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#FF6F81', '#F0374E']}
              />
            </View>
            <View style={{ width: '45%' }}>
              <RegularButton
                onPress={onDone}
                text={'Sign in'}
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
