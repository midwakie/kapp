/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Image,
  Modal,
  Platform,
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
import HorizontalLine from 'app/components/lines/HorizontalLine';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from 'app/store/actions/cartActions';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';

const ToyDetail: React.FC = () => {
  const route = useRoute();
  const book = route.params?.book;
  const { control } = useForm();
  const currentOrientation = useDeviceOrientation();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [quantity, setQuantity] = useState(book.quantity);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = (item, quantity) => {
    const updatedItem = { ...item, quantity };
    dispatch(addToCart(updatedItem));
    NavigationService.navigate('ShoppingCart');
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).imageContainer}>
            <Image source={book.img} style={styles(direction).imageStyle} />
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
          </View>
          {currentOrientation === 'portrait' ? (
            <View style={styles(direction).neumorphicContainer}>
              <Neumorphism
                lightColor={'#A8A8A8'}
                darkColor={'#E5E5E5'}
                shapeType={'flat'}
                radius={scale(25)}>
                <View style={styles(direction).container2}>
                  <Text style={styles(direction).lionKing}>{book.title}</Text>
                  <Text style={styles(direction).description}>
                    {book.description}
                  </Text>
                  <View style={styles(direction).row}>
                    <Text style={styles(direction).text}>Color</Text>
                    <Text style={styles(direction).text1}>{book.color}</Text>
                  </View>
                  <View style={styles(direction).row1}>
                    <Text style={styles(direction).text}>Material</Text>
                    <Text style={styles(direction).text2}>{book.material}</Text>
                  </View>
                  <View style={styles(direction).row1}>
                    <Text style={styles(direction).text}>Age Group</Text>
                    <Text style={styles(direction).text3}>{book.age}</Text>
                  </View>
                  <View style={styles(direction).row1}>
                    <Text style={styles(direction).text}>Weight</Text>
                    <Text style={styles(direction).text4}>{book.weight}</Text>
                  </View>
                  <View style={styles(direction).row1}>
                    <Text style={styles(direction).text}>Price</Text>
                    <Text
                      style={styles(direction).text10}>{`$${book.price}`}</Text>
                  </View>
                  <View style={styles(direction).neumorphicContainer1}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(14)}>
                      <View style={styles(direction).container3}>
                        <Text style={styles(direction).text5}>
                          {t('How Many?')}
                        </Text>
                        <TouchableOpacity
                          onPress={handleDecrement}
                          style={styles(direction).neomorphContainer2}>
                          <Neumorphism
                            lightColor={'#ffffff'}
                            darkColor={'#A8A8A8'}
                            shapeType={'flat'}
                            radius={scale(150)}>
                            <View style={styles(direction).container4}>
                              <Image
                                style={styles(direction).imageStyle1}
                                source={require('../../assets/minus.png')}
                              />
                            </View>
                          </Neumorphism>
                        </TouchableOpacity>
                        <Text style={styles(direction).text6}>{quantity}</Text>
                        <TouchableOpacity
                          onPress={handleIncrement}
                          style={styles(direction).neomorphContainer3}>
                          <Neumorphism
                            lightColor={'#ffffff'}
                            darkColor={'#A8A8A8'}
                            shapeType={'flat'}
                            radius={scale(150)}>
                            <View style={styles(direction).container4}>
                              <Image
                                style={styles(direction).imageStyle1}
                                source={require('../../assets/plus.png')}
                              />
                            </View>
                          </Neumorphism>
                        </TouchableOpacity>
                      </View>
                    </Neumorphism>
                  </View>
                  <View style={styles(direction).buttonConfirmationView}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(50)}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}>
                        <LinearGradient
                          colors={['#FF6F81', '#F0374E']}
                          style={styles(direction).button}>
                          <View style={styles(direction).contentContainer}>
                            <Image
                              style={styles(direction).imageStyle1}
                              source={require('../../assets/coin.png')}
                            />
                            <Text style={styles(direction).buttonText}>
                              {book.coin}
                            </Text>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                      <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}>
                        <View style={styles(direction).modalContainer}>
                          <View style={styles(direction).modalView}>
                            <View style={styles(direction).neomorphContainer4}>
                              <Neumorphism
                                lightColor={'#ffffff'}
                                darkColor={'#A8A8A8'}
                                shapeType={'flat'}
                                radius={scale(50)}>
                                <View style={styles(direction).closeButton}>
                                  <TouchableOpacity
                                    onPress={() => setModalVisible(false)}>
                                    <Image
                                      style={styles(direction).coinImage}
                                      source={require('../../assets/cancel.png')}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </Neumorphism>
                            </View>
                            <Image
                              style={styles(direction).imageStyle2}
                              source={require('../../assets/coin.png')}
                            />
                            <Text style={styles(direction).text7}>
                              Need 80 points
                            </Text>
                            <View style={styles(direction).container5}>
                              <Text style={styles(direction).text8}>
                                Not enough points
                              </Text>
                              <Text style={styles(direction).text9}>
                                to purchase this product
                              </Text>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </Neumorphism>
                    <RegularButton
                      onPress={() => handleAddToCart(book, quantity)}
                      text={'Add to Cart'}
                      radius={50}
                      height={'50@s'}
                      width={'149@s'}
                      colors={['#03BBE3', '#14A9FD']}
                    />
                  </View>
                </View>
              </Neumorphism>
            </View>
          ) : (
            <View style={styles(direction).neumorphicContainer3}>
              <Neumorphism
                lightColor={'#A8A8A8'}
                darkColor={'#E5E5E5'}
                shapeType={'flat'}
                radius={scale(25)}>
                <View style={styles(direction).container2}>
                  <Text style={styles(direction).lionKing}>{book.title}</Text>
                  <Text style={styles(direction).description}>
                    {book.description}
                  </Text>
                  <View style={styles(direction).row}>
                    <Text style={styles(direction).text}>Color</Text>
                    <Text style={styles(direction).text1}>{book.color}</Text>
                  </View>
                  <View style={styles(direction).row1}>
                    <Text style={styles(direction).text}>Material</Text>
                    <Text style={styles(direction).text2}>{book.material}</Text>
                  </View>
                  <View style={styles(direction).row1}>
                    <Text style={styles(direction).text}>Age Group</Text>
                    <Text style={styles(direction).text3}>{book.age}</Text>
                  </View>
                  <View style={styles(direction).row1}>
                    <Text style={styles(direction).text}>Weight</Text>
                    <Text style={styles(direction).text4}>{book.weight}</Text>
                  </View>
                  <View style={styles(direction).row1}>
                    <Text style={styles(direction).text}>Price</Text>
                    <Text
                      style={styles(direction).text10}>{`$${book.price}`}</Text>
                  </View>
                  <View style={styles(direction).neumorphicContainer1}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(14)}>
                      <View style={styles(direction).container3}>
                        <Text style={styles(direction).text5}>
                          {t('How Many?')}
                        </Text>
                        <TouchableOpacity
                          onPress={handleDecrement}
                          style={styles(direction).neomorphContainer5}>
                          <Neumorphism
                            lightColor={'#ffffff'}
                            darkColor={'#A8A8A8'}
                            shapeType={'flat'}
                            radius={scale(150)}>
                            <View style={styles(direction).container4}>
                              <Image
                                style={styles(direction).imageStyle1}
                                source={require('../../assets/minus.png')}
                              />
                            </View>
                          </Neumorphism>
                        </TouchableOpacity>
                        <Text style={styles(direction).text11}>{quantity}</Text>
                        <TouchableOpacity
                          onPress={handleIncrement}
                          style={styles(direction).neomorphContainer6}>
                          <Neumorphism
                            lightColor={'#ffffff'}
                            darkColor={'#A8A8A8'}
                            shapeType={'flat'}
                            radius={scale(150)}>
                            <View style={styles(direction).container4}>
                              <Image
                                style={styles(direction).imageStyle1}
                                source={require('../../assets/plus.png')}
                              />
                            </View>
                          </Neumorphism>
                        </TouchableOpacity>
                      </View>
                    </Neumorphism>
                  </View>
                  <View style={styles(direction).buttonConfirmationView}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(50)}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}>
                        <LinearGradient
                          colors={['#FF6F81', '#F0374E']}
                          style={styles(direction).button1}>
                          <View style={styles(direction).contentContainer}>
                            <Image
                              style={styles(direction).imageStyle1}
                              source={require('../../assets/coin.png')}
                            />
                            <Text style={styles(direction).buttonText}>
                              {book.coin}
                            </Text>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                      <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}>
                        <View style={styles(direction).modalContainer}>
                          <View style={styles(direction).modalView}>
                            <View style={styles(direction).neomorphContainer4}>
                              <Neumorphism
                                lightColor={'#ffffff'}
                                darkColor={'#A8A8A8'}
                                shapeType={'flat'}
                                radius={scale(50)}>
                                <View style={styles(direction).closeButton}>
                                  <TouchableOpacity
                                    onPress={() => setModalVisible(false)}>
                                    <Image
                                      style={styles(direction).coinImage}
                                      source={require('../../assets/cancel.png')}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </Neumorphism>
                            </View>
                            <Image
                              style={styles(direction).imageStyle2}
                              source={require('../../assets/coin.png')}
                            />
                            <Text style={styles(direction).text7}>
                              Need 80 points
                            </Text>
                            <View style={styles(direction).container5}>
                              <Text style={styles(direction).text8}>
                                Not enough points
                              </Text>
                              <Text style={styles(direction).text9}>
                                to purchase this product
                              </Text>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </Neumorphism>
                    <RegularButton
                      onPress={() => handleAddToCart(book, quantity)}
                      text={'Add to Cart'}
                      radius={50}
                      height={'50@s'}
                      width={'200@s'}
                      colors={['#03BBE3', '#14A9FD']}
                    />
                  </View>
                </View>
              </Neumorphism>
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default ToyDetail;
