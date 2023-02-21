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
import { useRoute } from '@react-navigation/native';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';

const OrderDetail: React.FC = () => {
  const { control } = useForm();

  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const route = useRoute();
  const order = route.params?.order;
  const currentOrientation = useDeviceOrientation();
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).imageContainer}>
            <Image source={order.img} style={styles(direction).imageStyle} />
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
          <View
            style={
              currentOrientation === 'portrait'
                ? styles(direction).neumorphicContainer
                : styles(direction).neumorphicContainerLandscape
            }>
            <Neumorphism
              lightColor={'#A8A8A8'}
              darkColor={'#E5E5E5'}
              shapeType={'flat'}
              radius={scale(25)}>
              <View style={styles(direction).container2}>
                <Text style={styles(direction).lionKing}>{order.title}</Text>

                <Text
                  style={
                    order.status === 'Delivered'
                      ? styles(direction).statusOne
                      : styles(direction).statusTwo
                  }>
                  {order.status}
                </Text>
                <Text style={styles(direction).text11}>{order.date}</Text>
                <Text style={styles(direction).text10}>{order.address}</Text>
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
                        <Text style={styles(direction).text6}>
                          {order.quantity}
                        </Text>
                      </View>
                    </Neumorphism>
                  </View>
                  <View style={styles(direction).container5}>
                    <Text style={styles(direction).text8}>Total Amount</Text>
                    <Text style={styles(direction).text9}>
                      ${order.price * order.quantity}
                    </Text>
                  </View>
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
