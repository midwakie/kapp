import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import rules from 'app/rules';
import CustomInput from 'app/components/inputs/CustomInput';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { ms, scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import { AirbnbRating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import Carousal, { Pagination } from 'react-native-snap-carousel';

const FinishBook: React.FC = () => {
  const { control } = useForm();
  const [showData, setShowData] = useState(false);
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(3);
  const [expanded, setExpanded] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef(null);
  const toggleExpand = (id: number) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };
  const slideChanged = (index: number) => {
    console.log(index);
  };
  const [modalVisible, setModalVisible] = useState(true);
  const toggle = () => {
    setModalVisible(!modalVisible);
  };
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const { width } = Dimensions.get('window');
  const sliderWidth = width * 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const onSnapToItem = index => {
    setActiveIndex(index);
  };
  const [activeIndex1, setActiveIndex1] = useState(0);
  const onSnapToItem1 = index => {
    setActiveIndex1(index);
  };

  const books = [
    {
      img: require('../../assets/arabicBook1.png'),
    },
    {
      img: require('../../assets/arabicBook2.png'),
    },
    {
      img: require('../../assets/arabicBook1.png'),
    },
    {
      img: require('../../assets/arabicBook2.png'),
    },
  ];
  const [data, setData] = useState([
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
  ]);
  const books1 = [
    {
      image: require('../../assets/book.png'),
    },
    {
      image: require('../../assets/book2.png'),
    },
    {
      image: require('../../assets/book3.png'),
    },
    {
      image: require('../../assets/book.png'),
    },
    {
      image: require('../../assets/book2.png'),
    },
  ];
  const books2 = [
    {
      image: require('../../assets/book.png'),
    },
    {
      image: require('../../assets/book2.png'),
    },
    {
      image: require('../../assets/book3.png'),
    },
    {
      image: require('../../assets/book.png'),
    },
    {
      image: require('../../assets/book2.png'),
    },
  ];
  const book3 = [
    {
      image: require('../../assets/collectables1.png'),
    },
    {
      image: require('../../assets/collectables2.png'),
    },
    {
      image: require('../../assets/collectables3.png'),
    },
    {
      image: require('../../assets/collectables4.png'),
    },
  ];
  const CardItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).card}>
              <Image source={book.img} style={styles(direction).cardImage} />
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };
  const CardBookItem = ({ book3 }: any) => {
    return (
      <View style={styles(direction).neomorphContainer1}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles(direction).card1}>
            <Image source={book3.image} style={styles(direction).cardImage2} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const handleNextPress = () => {
    if (currentIndex < books.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatlistRef.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
    }
  };

  const handlePreviousPress = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatlistRef.current.scrollToIndex({
        animated: true,
        index: currentIndex - 1,
      });
    }
  };

  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
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
            <TouchableOpacity>
              <View style={styles(direction).topContainer2}>
                <Image
                  source={require('../../assets/love2.png')}
                  style={styles(direction).loveImg}
                />
              </View>
            </TouchableOpacity>

            <View style={styles(direction).profileImgContainer1}>
              <Image
                source={require('../../assets/bookImage.png')}
                style={styles(direction).profileImg1}
              />
            </View>
            <View style={styles(direction).buttonRow}>
              <TouchableOpacity>
                <Neumorphism
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(50)}>
                  <View style={styles(direction).button}>
                    <Text style={styles(direction).ButtonText}>
                      {t('Finish Book')}
                    </Text>
                  </View>
                </Neumorphism>
              </TouchableOpacity>
              <TouchableOpacity>
                <Neumorphism
                  style={styles(direction).button8}
                  lightColor={'#ffffff'}
                  darkColor={'#A8A8A8'}
                  shapeType={'flat'}
                  radius={scale(50)}>
                  <View style={styles(direction).button2}>
                    <Text style={styles(direction).ButtonText1}>
                      {t('Take Quiz')}
                    </Text>
                  </View>
                </Neumorphism>
              </TouchableOpacity>
            </View>
            <View style={styles(direction).finishImgContainer1}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  source={require('../../assets/finishBook.png')}
                  style={styles(direction).profileImg2}
                />
                <Text style={styles(direction).finishBookText}>
                  {t('Want to know word count? click me')}
                </Text>
              </TouchableOpacity>
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
                      <View style={styles(direction).childImage1}>
                        <Image
                          source={require('../../assets/editChild1.png')}
                          style={styles(direction).childImg2}
                        />
                      </View>
                      <View style={styles(direction).modalRow}>
                        <View style={styles(direction).pointsImage}>
                          <Image
                            source={require('../../assets/pointsEarned.png')}
                            style={styles(direction).pointsImg2}
                          />
                        </View>
                        <Text style={styles(direction).modelText}>
                          {t('Points Earned      ')}
                        </Text>
                        <Text style={styles(direction).modelText2}>
                          {t('113 Points')}
                        </Text>
                      </View>
                      <View style={styles(direction).modalRow1}>
                        <View style={styles(direction).readingImage}>
                          <Image
                            source={require('../../assets/readingTime.png')}
                            style={styles(direction).pointsImg2}
                          />
                        </View>
                        <Text style={styles(direction).modelText}>
                          {t('Reading Time   ')}
                        </Text>
                        <Text style={styles(direction).modelText2}>
                          {t('11  Min')}
                        </Text>
                      </View>
                      <View style={styles(direction).modalRow2}>
                        <View style={styles(direction).coinImage}>
                          <Image
                            source={require('../../assets/goldCoin1.png')}
                            style={styles(direction).pointsImg2}
                          />
                        </View>
                        <Text style={styles(direction).modelText}>
                          {t('Coins Earned')}
                        </Text>
                        <Text style={styles(direction).modelText2}>
                          {t('3 Coins ')}
                        </Text>
                      </View>
                      <View style={styles(direction).modalRow3}>
                        <View style={styles(direction).silverImage}>
                          <Image
                            source={require('../../assets/silverCoin.png')}
                            style={styles(direction).silverImg2}
                          />
                        </View>
                        <Text style={styles(direction).modelText}>
                          {t('Coins Earned  ')}
                        </Text>
                        <Text style={styles(direction).modelText2}>
                          {t('3 Coins')}
                        </Text>
                      </View>
                      <Text style={styles(direction).modelText3}>
                        {t('Check your collectables')}
                      </Text>
                      <View style={styles(direction).flatlist1}>
                        <FlatList
                          ref={flatlistRef}
                          numColumns={1}
                          horizontal={true}
                          renderItem={({ item, index }) => {
                            return (
                              <CardBookItem
                                book3={item}
                                isSelected={index === currentIndex}
                              />
                            );
                          }}
                          data={book3}
                        />
                        <View style={styles(direction).regularButton11}>
                          <RegularButton
                            onPress={handlePreviousPress}
                            icon={'arrow-back'}
                            radius={38}
                            height={21}
                            width={21}
                            colors={['#EBECF0', '#EBECF0']}
                          />
                        </View>
                        <View style={styles(direction).regularButton22}>
                          <RegularButton
                            onPress={handleNextPress}
                            icon={'arrow-forward'}
                            radius={38}
                            height={21}
                            width={21}
                            colors={['#EBECF0', '#EBECF0']}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
            <View style={styles(direction).continueContainer}>
              <Text style={styles(direction).continueText}>
                {t('Continue With')}
              </Text>
            </View>

            <View style={styles(direction).flatlist}>
              <FlatList
                ref={flatlistRef}
                numColumns={1}
                horizontal={true}
                renderItem={({ item, index }) => {
                  return (
                    <CardItem book={item} isSelected={index === currentIndex} />
                  );
                }}
                data={books}
              />
              <View style={styles(direction).regularButton1}>
                <RegularButton
                  onPress={handlePreviousPress}
                  icon={'arrow-back'}
                  radius={38}
                  height={30}
                  width={30}
                  colors={['#EBECF0', '#EBECF0']}
                />
              </View>
              <View style={styles(direction).regularButton2}>
                <RegularButton
                  onPress={handleNextPress}
                  icon={'arrow-forward'}
                  radius={38}
                  height={30}
                  width={30}
                  colors={['#EBECF0', '#EBECF0']}
                />
              </View>
            </View>
            <Text style={styles(direction).reviewText}>
              {t('Book Review  ')}
            </Text>
            <View style={styles(direction).review}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={scale(9)}>
                <View style={styles(direction).reviewContainer2}>
                  <Text style={styles(direction).reviewText3}>
                    {t('Diary of a Wimpy Kid')}
                  </Text>
                  <View style={styles(direction).reviewRow}>
                    <Text style={styles(direction).reviewText4}>{t('By')}</Text>
                    <Text style={styles(direction).reviewText5}>
                      {t('Jeff Kinney')}
                    </Text>
                  </View>
                  <View style={styles(direction).reviewRow}>
                    <Text style={styles(direction).reviewText4}>
                      {t('Illustrated by')}
                    </Text>
                    <Text style={styles(direction).reviewText5}>
                      {t(' Jean Lumier')}
                    </Text>
                  </View>
                  <View style={styles(direction).starRatingTop}>
                    <AirbnbRating
                      isDisabled={true}
                      showRating={false}
                      defaultRating={3}
                      size={scale(12)}
                      onFinishRating={value => setRating(value)}
                    />
                    <Text style={styles(direction).reviewText6}>
                      {t(' 35 Reviews')}
                    </Text>
                  </View>
                </View>
                <View style={styles(direction).avrgRatings}>
                  <Text style={styles(direction).reviewText7}>
                    {t(' Average Ratings')}
                  </Text>
                  <Text style={styles(direction).reviewText8}>{t(' 4.0')}</Text>
                  <TouchableOpacity
                    style={styles(direction).buttonNeumorph}
                    onPress={() => setShowData(!showData)}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(2.3)}>
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#03A0E3', '#1976D2']}
                        style={styles(direction).loadButton}>
                        <Text style={styles(direction).reviewText9}>
                          {t(' View All')}
                        </Text>
                      </LinearGradient>
                    </Neumorphism>
                  </TouchableOpacity>
                </View>
              </Neumorphism>
            </View>
            {showData &&
              data.map((item, index) => (
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
                            {item.name}
                          </Text>
                          <Text style={styles(direction).text6}>
                            {item.date}
                          </Text>
                          <Image
                            source={require('../../assets/emptyFlag.png')}
                            style={
                              item.flag === 'Active'
                                ? styles(direction).imageStyle4
                                : styles(direction).imageStyle1
                            }
                          />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <AirbnbRating
                            isDisabled={true}
                            showRating={false}
                            defaultRating={item.rating}
                            size={scale(14)}
                          />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles(direction).text7}>
                            {item.description.length > 80 ? (
                              <>
                                {expanded[item.id] ? (
                                  <Text>{item.description}</Text>
                                ) : (
                                  <Text>{item.description.slice(0, 72)}</Text>
                                )}
                                <Text
                                  onPress={() => toggleExpand(item.id)}
                                  style={{ color: '#03A0E3' }}>
                                  {expanded[item.id]
                                    ? 'read less'
                                    : 'read more'}
                                </Text>
                              </>
                            ) : (
                              <Text>{item.description}</Text>
                            )}
                          </Text>
                          <View style={styles(direction).imageContainer4}>
                            <Image
                              style={styles(direction).imageStyle2}
                              source={item.Image}
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
            <View style={styles(direction).childImage}>
              <Image
                source={require('../../assets/editChild1.png')}
                style={styles(direction).childImg1}
              />
              <Text style={styles(direction).rateReviewText}>
                {t('Rate  and Review')}
              </Text>
              <Text style={styles(direction).rateReviewText1}>
                {t('Share your experience to help others')}
              </Text>
              <View style={styles(direction).rating}>
                <AirbnbRating
                  isDisabled={false}
                  showRating={false}
                  defaultRating={0}
                  size={scale(29)}
                  starStyle={{ margin: ms(6) }}
                  emptyStarColor="#E5E5E5"
                  onFinishRating={value => setRating(value)}
                />
              </View>
            </View>
            <View style={styles(direction).neomorphContainer3}>
              <Neumorphism
                lightColor={'#EBEEF0'}
                darkColor={'#A8A8A8'}
                shapeType={'pressed'}
                radius={scale(8)}>
                <TextInput
                  style={styles(direction).typeContainer}
                  onChangeText={text => setDescription(text)}
                  value={description}
                  multiline={true}
                  textAlignVertical="top"
                />
              </Neumorphism>
            </View>

            <View style={styles(direction).buttonRow2}>
              <RegularButton
                onPress={() => {
                  NavigationService.navigate('');
                }}
                text={
                  <Text style={styles(direction).ButtonText5}>
                    {t('Retell Video')}
                  </Text>
                }
                radius={19}
                height={'30@s'}
                width={'93@s'}
                colors={['#EBEEF0', '#EBEEF0']}
              />
              <RegularButton
                onPress={() => {
                  NavigationService.navigate('');
                }}
                text={
                  <Text style={styles(direction).ButtonText5}>{t('Post')}</Text>
                }
                radius={34}
                height={'30@s'}
                width={'48@s'}
                colors={['#EBEEF0', '#EBEEF0']}
              />
            </View>
            <Text style={styles(direction).moreText}>
              {t('More like this ')}
            </Text>
            <View style={styles(direction).slidingContainer}>
              <Carousal
                data={books1}
                renderItem={({ item, index }) => (
                  <Image
                    source={item.image}
                    style={[styles(direction).badges]}
                  />
                )}
                sliderWidth={sliderWidth}
                itemWidth={scale(160)}
                inactiveSlideScale={1}
                inactiveSlideOpacity={0.9}
                activeSlideAlignment={'start'}
                onSnapToItem={onSnapToItem}
              />
              <Pagination
                dotsLength={books1.length}
                activeDotIndex={activeIndex}
                containerStyle={styles(direction).paginationContainer}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                renderDots={(activeIndex: number) => {
                  return (
                    <View style={styles(direction).paginationDots}>
                      {books1.length > 1 &&
                        books1.map((_, i) => (
                          <Image
                            key={i}
                            style={styles(direction).dot}
                            source={
                              i === activeIndex
                                ? require('../../assets/activeOval.png')
                                : require('../../assets/oval.png')
                            }
                          />
                        ))}
                    </View>
                  );
                }}
              />
            </View>
            <Text style={styles(direction).moreText}>
              {t('Popular in Kutubi ')}
            </Text>
            <View style={styles(direction).slidingContainer2}>
              <Carousal
                data={books2}
                renderItem={({ item, index }) => (
                  <Image
                    source={item.image}
                    style={[styles(direction).badges]}
                  />
                )}
                sliderWidth={sliderWidth}
                itemWidth={scale(160)}
                inactiveSlideScale={1}
                inactiveSlideOpacity={0.9}
                activeSlideAlignment={'start'}
                onSnapToItem={onSnapToItem}
              />
              <Pagination
                dotsLength={books.length}
                activeDotIndex={activeIndex}
                containerStyle={styles(direction).paginationContainer}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                renderDots={(activeIndex: number) => {
                  return (
                    <View style={styles(direction).paginationDots}>
                      {books2.length > 1 &&
                        books2.map((_, i) => (
                          <Image
                            key={i}
                            style={styles(direction).dot}
                            source={
                              i === activeIndex
                                ? require('../../assets/activeOval.png')
                                : require('../../assets/oval.png')
                            }
                          />
                        ))}
                    </View>
                  );
                }}
              />
            </View>
            <Text style={styles(direction).moreText}>
              {t('Popular Videos  ')}
            </Text>
            <View style={styles(direction).slidingContainer3}>
              <Carousal
                data={books}
                renderItem={({ item, index }) => (
                  <View>
                    <View style={styles(direction).videoContainer}>
                      <Text style={styles(direction).videoText}>
                        {t('Cool Kids 5Second...  ')}
                      </Text>
                      <Text style={styles(direction).videoText2}>
                        {t('Jabir Qureshi  ')}
                      </Text>
                    </View>
                    <Image
                      source={item.img}
                      style={[styles(direction).badges2]}
                    />
                    <Image
                      source={require('../../assets/playIcon.png')}
                      style={styles(direction).playImg2}
                    />
                  </View>
                )}
                sliderWidth={sliderWidth}
                itemWidth={scale(160)}
                inactiveSlideScale={1}
                inactiveSlideOpacity={0.9}
                activeSlideAlignment={'start'}
                onSnapToItem={onSnapToItem1}
              />
              <Pagination
                dotsLength={books.length}
                activeDotIndex={activeIndex1}
                containerStyle={styles(direction).paginationContainer3}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                renderDots={() => {
                  return (
                    <View style={styles(direction).paginationDots}>
                      {books.length > 1 &&
                        books.map((_, i) => (
                          <Image
                            key={i}
                            style={styles(direction).dot3}
                            source={
                              i === activeIndex1
                                ? require('../../assets/activeOval.png')
                                : require('../../assets/oval.png')
                            }
                          />
                        ))}
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default FinishBook;
