import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Neumorphism from 'react-native-neumorphism';
import TitleBar from 'app/components/buttons/TitleBar';
import VerticalLine from 'app/components/lines/VerticalLine';

const Home: React.FC = () => {
  const { control } = useForm();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <>
      <TitleBar
        leftComponent={
          <View style={styles(direction).topContainer}>
            <Image
              style={styles(direction).logoImageStyle}
              source={require('../../assets/logo.png')}
            />
          </View>
        }
        middleComponent={
          <View style={styles(direction).homeTextContainer}>
            <Text style={styles(direction).homeTextStyle}>Home</Text>
          </View>
        }
        rightComponent={
          <Neumorphism
            lightColor={'#ffffff'}
            darkColor={'#A8A8A8'}
            shapeType={'flat'}
            radius={52}>
            <View style={styles(direction).iconContainer}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles(direction).menuContainer}>
                  <Image source={require('../../assets/childHomeMenu.png')} />
                </View>
              </TouchableOpacity>
              <VerticalLine
                stroke={1}
                opacity={0.3}
                height={'100%'}
                color={'#A8A8A8'}
              />
              <TouchableOpacity onPress={() => {}}>
                <View style={styles(direction).searchContainer}>
                  <Image source={require('../../assets/searchIcon.png')} />
                </View>
              </TouchableOpacity>
            </View>
          </Neumorphism>
        }
      />
      <ImageBackground
        style={styles(direction).imageBackground}
        source={require('../../assets/childHomeImage.png')}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <ScrollView style={styles(direction).container} bounces={false}>
            <View style={styles(direction).container1}>
              <View style={styles(direction).gradientTextContainer2}>
                <Text style={styles(direction).gradientTextStyle2}>
                  {t('Tangled')}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default Home;
