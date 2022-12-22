import React, { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextStyle,
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CustomInput from 'app/components/inputs/CustomInput';
import { useForm } from 'react-hook-form';
import rules from 'app/rules';

const FeedDetailReport: React.FC = () => {
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
                  <Text style={styles(direction).bottomtext}>{t('Other')}</Text>
                  <View style={{ marginTop: 20 }}>
                    <Neumorphism
                      lightColor={'#FFFFFF'}
                      darkColor={'#A8A8A8'}
                      shapeType={'pressed'}
                      radius={14}>
                      <TextInput
                        style={styles(direction).inputText}
                        placeholder={t('Type here..')}
                        // onChangeText={text => text.setFocus({ text })}
                      />
                    </Neumorphism>
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
                width={'315@s'}
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
