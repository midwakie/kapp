import React from 'react';
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
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import CustomInput from 'app/components/inputs/CustomInput';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import Neumorphism from 'react-native-neumorphism';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import PlainButton from 'app/components/buttons/PlainButton';

const Publish: React.FC = () => {
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
              colors={['#2AA7DD', '#2AA7DD']}
              text={t('Publish')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container1}>
            <TouchableOpacity onPress={() => alert('The box was clicked!')}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={scale(14)}>
                <View style={styles(direction).squareBox}>
                  <Image
                    source={require('../../assets/videoCamera.png')}
                    style={styles(direction).imageStyle}
                  />
                  <Text style={styles(direction).text}>{t('Video')}</Text>
                </View>
              </Neumorphism>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('The box was clicked!')}
              style={styles(direction).squareBox1}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={scale(14)}>
                <View style={styles(direction).squareBox}>
                  <Image
                    source={require('../../assets/documents.png')}
                    style={styles(direction).imageStyle1}
                  />
                  <Text style={styles(direction).text}>{t('Document')}</Text>
                </View>
              </Neumorphism>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('The box was clicked!')}
              style={styles(direction).squareBox1}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={scale(14)}>
                <View style={styles(direction).squareBox}>
                  <Image
                    source={require('../../assets/image1.png')}
                    style={styles(direction).imageStyle2}
                  />
                  <Text style={styles(direction).text}>{t('Image')}</Text>
                </View>
              </Neumorphism>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Publish;
