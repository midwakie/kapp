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
import { s, scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

const OrderDetail: React.FC = () => {
  const { control } = useForm();

  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [count, setCount] = useState(2);
  const [showNumbers, setShowNumbers] = useState(false);

  const handleSelect = number => {
    setShowNumbers(false);
    setCount(number);
  };
  // const cart = useSelector(state => state.cartReducer);
  // console.log(cart);
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).imageContainer}>
            <Image
              source={require('../../assets/lion.png')}
              style={styles(direction).imageStyle}
            />
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
          <View style={styles(direction).neumorphicContainer}>
            <Neumorphism
              lightColor={'#A8A8A8'}
              darkColor={'#E5E5E5'}
              shapeType={'flat'}
              radius={scale(25)}>
              <View style={styles(direction).container2}>
                <Text style={styles(direction).lionKing}>Lion King</Text>
                <View style={styles(direction).row}>
                  <Text style={styles(direction).category}>Category</Text>
                  <Text style={styles(direction).text}>Soft Toys</Text>
                </View>
                <View style={styles(direction).row1}>
                  <View style={styles(direction).neumorphicContainer1}>
                    <Neumorphism
                      lightColor={'#ffffff'}
                      darkColor={'#A8A8A8'}
                      shapeType={'flat'}
                      radius={scale(14)}>
                      <View style={styles(direction).container3}>
                        <Text style={styles(direction).text7}>Qty</Text>
                        <Text style={styles(direction).text6}>{count}</Text>
                        <MaterialIcon
                          name={
                            showNumbers
                              ? 'keyboard-arrow-up'
                              : 'keyboard-arrow-down'
                          }
                          size={s(28)}
                          color={'#03A0E3'}
                          style={{ marginLeft: s(20) }}
                          onPress={() => setShowNumbers(!showNumbers)}
                        />
                      </View>
                    </Neumorphism>
                  </View>
                  {showNumbers && (
                    <ScrollView style={styles(direction).numbersContainer}>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        number => (
                          <Text
                            key={number}
                            style={styles(direction).number}
                            onPress={() => handleSelect(number)}>
                            {number}
                          </Text>
                        ),
                      )}
                    </ScrollView>
                  )}
                  <View style={styles(direction).container5}>
                    <Text style={styles(direction).text8}>Total Amount</Text>
                    <Text style={styles(direction).text9}>
                      ${12.25 * count}
                    </Text>
                  </View>
                </View>
                <View style={styles(direction).buttonConfirmationView}>
                  <RegularButton
                    onPress={''}
                    text={'Buy Now!'}
                    radius={50}
                    height={'50@s'}
                    width={'141@s'}
                    colors={['#FF6F81', '#F0374E']}
                  />
                  <RegularButton
                    onPress={''}
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
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default OrderDetail;
