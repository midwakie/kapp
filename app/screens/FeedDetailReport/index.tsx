import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  SafeAreaView,
  Text,
  TextStyle,
  View,
  TextInput,
  Image,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';

const FeedDetailReport: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [description, setDescription] = useState('');
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
              text={t('Report')}
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
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={14}>
              <View style={styles(direction).rectangle2}>
                <Text style={styles(direction).text}>
                  {t('Nudity or sexual activity')}
                </Text>
              </View>
            </Neumorphism>
            <View style={{ marginTop: 20 }}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle2}>
                  <Text style={styles(direction).text}>
                    {t('Hate speech or symbols')}
                  </Text>
                </View>
              </Neumorphism>
            </View>
            <View style={{ marginTop: 20 }}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle2}>
                  <Text style={styles(direction).text}>
                    {t('Bullying or harrasment')}
                  </Text>
                </View>
              </Neumorphism>
            </View>
            <View style={{ marginTop: 20 }}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle2}>
                  <Text style={styles(direction).text}>
                    {t('Scam or fraud')}
                  </Text>
                </View>
              </Neumorphism>
            </View>
            <View style={{ marginTop: 20 }}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={14}>
                <View style={styles(direction).rectangle3}>
                  <Text style={styles(direction).bottomText}>{t('Other')}</Text>
                  <View style={{ marginTop: 20 }}>
                    <View style={[styles(direction).inputContainer]}>
                      <Image
                        source={require('../../assets/textBox.png')}
                        style={styles(direction).bg}
                      />
                      <TextInput
                        keyboardType="default"
                        autoCapitalize="none"
                        value={description}
                        placeholder={t('Type here..')}
                        onChangeText={text => setDescription(text)}
                        placeholderTextColor="#9FA4A7"
                        style={styles(direction).inputText}
                      />
                    </View>
                  </View>
                </View>
              </Neumorphism>
            </View>
            <View style={{ marginTop: 41 }}>
              <RegularButton
                onPress={() => {
                  NavigationService.navigate('ActivitiesStats');
                }}
                text={t('Report')}
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

export default FeedDetailReport;
