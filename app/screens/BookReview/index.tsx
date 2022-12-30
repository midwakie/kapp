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

const BookReview: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [rating, setRating] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const Star = ({ filled, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles(direction).starimg}
        source={
          filled
            ? require('../../assets/filledStar.png')
            : require('../../assets/emptyStar.png')
        }
      />
    </TouchableOpacity>
  );
  const StarRating = ({ rate, onRateChange }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star key={i} filled={i < rate} onPress={() => onRateChange(i + 1)} />,
      );
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        {stars}
        {/* <Text style={{ marginLeft: 8 }}>{rating}/5</Text> */}
      </View>
    );
  };
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
              colors={['#03A0E3', '#0D93CD']}
              text={t('Book Review')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).container3}>
            <View style={styles(direction).neomorphContainer}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={scale(12)}>
                <View style={styles(direction).imageContainer}>
                  <Image
                    source={require('../../assets/bookReview.png')}
                    style={styles(direction).imageStyle}
                  />
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).container4}>
              <GradientText
                colors={['#758DAC', '#2F4868']}
                text={t('Journey To The Star')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle3}
              />
              <Text style={styles(direction).text1}>{t('Caroline Eliot')}</Text>
              <View style={styles(direction).starRatingContainer}>
                <StarRating rate={rating} onRateChange={setRating} />
              </View>

              <Text style={styles(direction).text2}>{t('$24.12')}</Text>
              <Text style={styles(direction).text3}>{t('Add Review')}</Text>
            </View>
          </View>
          <Text style={styles(direction).text4}>{t('(35 Review)')}</Text>
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
                      {t('Amira Malik')}
                    </Text>
                    <Text style={styles(direction).text6}>
                      {t('19 Oct, 2020')}
                    </Text>
                    <Image
                      source={require('../../assets/emptyFlag.png')}
                      style={styles(direction).imageStyle1}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Star filled onPress={undefined} />

                    <Star filled onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles(direction).text7}>
                      {t(
                        'There are many variations of passages of Lorem Ipsum available, but the majority',
                      )}
                    </Text>
                    <View style={styles(direction).imageContainer4}>
                      <Image
                        style={styles(direction).imageStyle2}
                        source={require('../../assets/user.png')}
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
                      {t('Amira Malik')}
                    </Text>
                    <Text style={styles(direction).text6}>
                      {t('19 Oct, 2020')}
                    </Text>
                    <Image
                      source={require('../../assets/emptyFlag.png')}
                      style={styles(direction).imageStyle1}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Star filled onPress={undefined} />

                    <Star filled onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles(direction).text7}>
                      {t(
                        'There are many variations of passages of Lorem Ipsum available, but the majority',
                      )}
                    </Text>
                    <View style={styles(direction).imageContainer4}>
                      <Image
                        style={styles(direction).imageStyle2}
                        source={require('../../assets/user.png')}
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
                      {t('Amira Malik')}
                    </Text>
                    <Text style={styles(direction).text6}>
                      {t('19 Oct, 2020')}
                    </Text>
                    <Image
                      source={require('../../assets/emptyFlag.png')}
                      style={styles(direction).imageStyle4}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Star filled onPress={undefined} />

                    <Star filled onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles(direction).text7}>
                      {t(
                        'There are many variations of passages of Lorem Ipsum available, but the majority',
                      )}
                    </Text>
                    <View style={styles(direction).imageContainer4}>
                      <Image
                        style={styles(direction).imageStyle2}
                        source={require('../../assets/user.png')}
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
                      {t('Fatima Zahra')}
                    </Text>
                    <Text style={styles(direction).text6}>
                      {t('10 Sep,2020')}
                    </Text>
                    <Image
                      source={require('../../assets/emptyFlag.png')}
                      style={styles(direction).imageStyle1}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Star filled onPress={undefined} />

                    <Star filled onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />

                    <Star filled={undefined} onPress={undefined} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles(direction).text7}>
                      {t(
                        'There are many variations of passages of Lorem Ipsum available, but the ',
                      )}
                      {!isVisible && (
                        <Text
                          style={{ color: '#03A0E3' }}
                          onPress={() => setIsVisible(!isVisible)}>
                          {t('read more')}
                        </Text>
                      )}
                      {isVisible && <Text> {t('majority')}</Text>}
                    </Text>
                    <View style={styles(direction).imageContainer4}>
                      <Image
                        style={styles(direction).imageStyle2}
                        source={require('../../assets/user2.png')}
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
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default BookReview;
