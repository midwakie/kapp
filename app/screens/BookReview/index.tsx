import React, { useState } from 'react';
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
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import { AirbnbRating } from 'react-native-ratings';

const BookReview: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [rating, setRating] = useState(3);
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (id: number) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };
  const [data, setData] = useState([
    {
      bookImage: require('../../assets/bookReview.png'),
      bookName: 'Journey To The Star',
      authorName: 'Caroline Eliot',
      bookRating: 3,
      amount: '$24.12',
      reviews: [
        {
          id: 1,
          name: 'Amira Malik',
          date: '19 Oct, 2020',
          flag: 'Inactive',
          rating: 2,
          description:
            'There are many variations of passages of Lorem Ipsum available, but the majority',
          Image: require('../../assets/user.png'),
        },
        {
          id: 2,
          name: 'Amira Malik',
          date: '19 Oct, 2020',
          flag: 'Inactive',
          rating: 2,
          description:
            'There are many variations of passages of Lorem Ipsum available, but the majority',
          Image: require('../../assets/user.png'),
        },
        {
          id: 3,
          name: 'Amira Malik',
          date: '19 Oct, 2020',
          flag: 'Active',
          rating: 2,
          description:
            'There are many variations of passages of Lorem Ipsum available, but the majority',
          Image: require('../../assets/user.png'),
        },
        {
          id: 4,
          name: 'Fatima Zahra',
          date: '10 Sep, 2020',
          flag: 'Inactive',
          rating: 2,
          description:
            'There are many variations of passages of Lorem Ipsum available, but the majority.This is some additional text that will be displayed when the "read more" button is clicked.',
          Image: require('../../assets/user2.png'),
          expanded: false,
        },
      ],
    },
  ]);
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          {data.map((item, index) => (
            <View style={styles(direction).container2}>
              <View key={index} style={styles(direction).container3}>
                <View style={styles(direction).neomorphContainer}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(12)}>
                    <View style={styles(direction).imageContainer}>
                      <Image
                        source={item.bookImage}
                        style={styles(direction).imageStyle}
                      />
                    </View>
                  </Neumorphism>
                </View>
                <View style={styles(direction).container4}>
                  <GradientText
                    colors={['#758DAC', '#2F4868']}
                    text={item.bookName}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    textStyle={styles(direction).gradientTextStyle3}
                  />
                  <Text style={styles(direction).text1}>{item.authorName}</Text>
                  <View style={styles(direction).starRatingContainer}>
                    <AirbnbRating
                      isDisabled={false}
                      showRating={false}
                      defaultRating={3}
                      size={scale(14)}
                      onFinishRating={value => setRating(value)}
                    />
                  </View>

                  <Text style={styles(direction).text2}>{item.amount}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      NavigationService.navigate('Add Review');
                    }}>
                    <Text style={styles(direction).text3}>
                      {t('Add Review')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles(direction).text4}>{t('(35 Review)')}</Text>
              {item.reviews.map((review, index) => (
                <View style={styles(direction).neomorphContainer2}>
                  <Neumorphism
                    lightColor={'#ffffff'}
                    darkColor={'#A8A8A8'}
                    shapeType={'flat'}
                    radius={scale(14)}>
                    <View style={styles(direction).container5}>
                      <View style={styles(direction).container6}>
                        <View style={styles(direction).container7}>
                          <Text style={styles(direction).text5}>
                            {review.name}
                          </Text>
                          <Text style={styles(direction).text6}>
                            {review.date}
                          </Text>
                          <Image
                            source={require('../../assets/emptyFlag.png')}
                            style={
                              review.flag === 'Active'
                                ? styles(direction).imageStyle4
                                : styles(direction).imageStyle1
                            }
                          />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <AirbnbRating
                            isDisabled={true}
                            showRating={false}
                            defaultRating={review.rating}
                            size={scale(14)}
                          />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles(direction).text7}>
                            {review.description.length > 80 ? (
                              <>
                                {expanded[review.id] ? (
                                  <Text>{review.description}</Text>
                                ) : (
                                  <Text>{review.description.slice(0, 72)}</Text>
                                )}
                                <Text
                                  onPress={() => toggleExpand(review.id)}
                                  style={{ color: '#03A0E3' }}>
                                  {expanded[review.id]
                                    ? 'read less'
                                    : '.read more'}
                                </Text>
                              </>
                            ) : (
                              <Text>{review.description}</Text>
                            )}
                          </Text>
                          <View style={styles(direction).imageContainer4}>
                            <Image
                              style={styles(direction).imageStyle2}
                              source={review.Image}
                            />
                            <TouchableOpacity>
                              <Image
                                style={styles(direction).imageStyle3}
                                source={require('../../assets/play.png')}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </Neumorphism>
                </View>
              ))}
            </View>
          ))}
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
                colors={['#03A0E3', '#0D93CD']}
                text={t('Book Review')}
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

export default BookReview;
