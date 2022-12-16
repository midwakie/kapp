import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import CustomInput from 'app/components/inputs/CustomInput';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import Neumorphism from 'react-native-neumorphism';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';

const ChildHome: React.FC = () => {
  const { control } = useForm();
  const invitationCodeInputRef: React.RefObject<any> = React.createRef();
  const passwordInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <>
      <TitleBar
        leftComponent={
          <View style={styles(direction).topContainer}>
            <Image
              style={styles(direction).logoImageStyle}
              source={require('../../assets/logo.png')}></Image>
          </View>
        }
        middleComponent={
          <View style={styles(direction).homeTextContainer}>
            <Text style={styles(direction).homeTextStyle}>Home</Text>
          </View>
        }
        rightComponent={
          // <Neumorphism
          //   lightColor={'#ffffff'}
          //   darkColor={'#A8A8A8'}
          //   shapeType={'flat'}
          //   radius={52}>
          <View style={styles(direction).iconContainer}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles(direction).menuContainer}>
                <Image
                  source={require('../../assets/childHomeMenu.png')}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles(direction).searchContainer}>
                <Image source={require('../../assets/searchIcon.png')}></Image>
              </View>
            </TouchableOpacity>
          </View>
          // </Neumorphism>
        }
      />
      <SafeAreaView style={styles(direction).safeAreaView}>
        <ScrollView style={styles(direction).container} bounces={false}>
          <ImageBackground
            style={styles(direction).imageBackground}
            source={require('../../assets/childHomeImage.png')}>
            <View style={styles(direction).container1}>
              <View style={styles(direction).gradientTextContainer2}>
                <GradientText
                  colors={['#455157', '#455157']}
                  text={t('Al Jeel Al Saeed School')}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  textStyle={styles(direction).gradientTextStyle2}
                />
              </View>

              <RegularButton
                onPress={() => {
                  NavigationService.navigate('Delivery Address');
                }}
                text={t('Update')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#03BBE3', '#14A9FD']}
              />
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ChildHome;
