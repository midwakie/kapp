import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { ms, scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import { AirbnbRating } from 'react-native-ratings';

const AddReview: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [rating, setRating] = useState(4);
  const [description, setDescription] = useState('');
  //   return (
  //     <View style={{ flexDirection: 'row' }}>
  //       {[1, 2, 3, 4, 5].map((i, index) => (
  //         <TouchableOpacity
  //           key={i}
  //           onPress={() => onPress(i)}
  //           style={{ marginRight: index === 4 ? 0 : 12.86 }}>
  //           <Image
  //             style={styles(direction).starimg}
  //             key={i}
  //             source={
  //               i <= rating
  //                 ? require('../../assets/filledStar.png')
  //                 : require('../../assets/emptyStar.png')
  //             }
  //             onPress={() => onPress(i)}
  //           />
  //         </TouchableOpacity>
  //       ))}
  //     </View>
  //   );
  // };

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
              colors={['#03A0E3', '#0D93CD']}
              text={t('Add Review')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
      />
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).imageContainer}>
              <Image
                source={require('../../assets/addReview.png')}
                style={styles(direction).imageStyle}
              />
            </View>
            <View style={styles(direction).container4}>
              <Text style={styles(direction).text1}>
                {t('How’s the Experiance!')}
              </Text>
              <Text style={styles(direction).text2}>
                {t('Share Your Valuable Feedback')}
              </Text>
            </View>
            <View style={styles(direction).neomorphContainer}>
              <RegularButton
                onPress={''}
                text={
                  <Text style={styles(direction).buttonText}>
                    {t('Make Video')}
                  </Text>
                }
                radius={50}
                height={'40@s'}
                width={'100%'}
                colors={['#9EDC5D', '#84BD47']}
              />
            </View>
            <View style={styles(direction).neomorphContainer2}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={scale(50)}>
                <View style={styles(direction).container5}>
                  <AirbnbRating
                    isDisabled={false}
                    showRating={false}
                    defaultRating={4}
                    size={scale(29)}
                    starStyle={{ margin: ms(6) }}
                    onFinishRating={value => setRating(value)}
                  />
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).neomorphContainer3}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'pressed'}
                radius={scale(8)}>
                <TextInput
                  style={styles(direction).container6}
                  onChangeText={text => setDescription(text)}
                  value={description}
                  multiline={true}
                  placeholder={t('Type here..')}
                  placeholderTextColor="#9FA4A7"
                  textAlignVertical="top"
                />
              </Neumorphism>
            </View>
            <View style={styles(direction).button}>
              <RegularButton
                onPress={() => {
                  console.log('Rating:', rating, 'Description:', description);
                }}
                text={t('Submit')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#03BBE3', '#14A9FD']}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default AddReview;
