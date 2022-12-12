import React, { useRef } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import PlainButton from 'app/components/buttons/PlainButton';
import RegularButton from 'app/components/buttons/RegularButton';
import NavigationService from 'app/navigation/NavigationService';
import { useTranslation } from 'react-i18next';
const Landing: React.FC = () => {
  const refSlider: React.MutableRefObject<any> = useRef(null);
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
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

  const onSignUp = () => {
    NavigationService.navigate('Sign Up');
  };
  const onSignIn = () => {
    NavigationService.navigate('Sign In');
  };
  const slideChanged = (index: number) => {
    console.log(index);
  };

  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).topContainer}>
            <PlainButton
              onPress={() => {}}
              style={styles(direction).skipButtonText}
              containerStyle={styles(direction).skipButtonContainer}
              text={t('Skip')}
            />
          </View>
          <View style={styles(direction).walkThroughContainer}>
            <AppIntroSlider
              ref={refSlider}
              data={slides}
              renderPagination={(activeIndex: number) => (
                <View style={styles(direction).paginationContainer}>
                  <SafeAreaView>
                    <View style={styles(direction).paginationDots}>
                      {slides.length > 1 &&
                        slides.map((_, i) => (
                          <Image
                            key={i}
                            style={styles(direction).dot}
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
                <View style={styles(direction).mainContent}>
                  <View style={styles(direction).textContainer}>
                    <Text style={styles(direction).title}>{t(item.title)}</Text>
                    <Text style={styles(direction).subTitle}>
                      {t(item.subTitle)}
                    </Text>
                  </View>
                  <Image style={styles(direction).image} source={item.image} />
                </View>
              )}
            />
          </View>
          <View style={styles(direction).buttonContainer}>
            <View style={styles(direction).buttonInnerContainer}>
              <RegularButton
                onPress={onSignUp}
                text={t('Sign up')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#FF6F81', '#F0374E']}
              />
            </View>
            <View style={styles(direction).buttonInnerContainer}>
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
