/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import PlainButton from 'app/components/buttons/PlainButton';
import CustomInput from 'app/components/inputs/CustomInput';
import rules from 'app/rules';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const PublishNewDocument: React.FC = () => {
  const { control } = useForm();
  const { t, i18n } = useTranslation();
  const controlInputRef: React.RefObject<any> = React.createRef();
  const categoryInputRef: React.RefObject<any> = React.createRef();
  const direction: string = i18n.dir();
  const [data, setData] = useState([]);
  const [description, setDescription] = useState('');
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView} />
        <View style={styles(direction).container1}>
          <View style={styles(direction).profileImgContainer1}>
            <Image
              source={require('../../assets/newDocument.png')}
              style={styles(direction).profileImg1}
            />
            <TouchableOpacity>
              <Image
                source={require('../../assets/docsIcon.png')}
                style={styles(direction).profileImg2}
              />
            </TouchableOpacity>
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              ref={controlInputRef}
              rules={rules.CustomerRules.school_location}
              name="Title"
              placeholder={t('Title')}
              label={t('Title')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                // schoolNameInputRef?.current.setFocus();
              }}
            />
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
                placeholder={t('Description')}
                placeholderTextColor="#9FA4A7"
                textAlignVertical="top"
              />
            </Neumorphism>
          </View>
          <View style={styles(direction).inputTextContainer2}>
            <CustomInput
              control={control}
              ref={categoryInputRef}
              name="Category"
              placeholder={t('Category')}
              label={t('Category')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                categoryInputRef?.current.setFocus();
              }}
              rightComponent={
                <TouchableOpacity style={styles(direction).rightComponent}>
                  <MaterialIcon
                    name={'chevron-down'}
                    size={scale(35)}
                    color={'#03A0E3'}
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={{ marginTop: 40 }}>
            <RegularButton
              onPress={() => {
                NavigationService.navigate('');
              }}
              text={t('Publish')}
              radius={50}
              height={50}
              width={'100%'}
              colors={['#03BBE3', '#14A9FD']}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          rightComponent={
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={scale(50)}>
              <View style={styles(direction).topIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.goBack();
                  }}>
                  <Image
                    style={styles(direction).coinImage}
                    source={require('../../assets/cancel.png')}
                  />
                </TouchableOpacity>
              </View>
            </Neumorphism>
          }
          middleComponent={
            <View style={styles(direction).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Publish New Document')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
            </View>
          }
        />
      </View>
    </>
  );
};

export default PublishNewDocument;
