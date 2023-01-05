/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextStyle,
  View,
  Image,
  TouchableOpacity,
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
import { scale } from 'react-native-size-matters';
import PlainButton from 'app/components/buttons/PlainButton';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import CustomInput from 'app/components/inputs/CustomInput';
import { useForm } from 'react-hook-form';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const PublishNewVideo: React.FC = () => {
  const { control, handleSubmit, watch } = useForm();
  const titleInputRef: React.RefObject<any> = React.createRef();
  const categoryInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [description, setDescription] = useState('');

  return (
    <>
      <TitleBar
        middleComponent={
          <View style={styles(direction).gradientTextContainer}>
            <GradientText
              colors={['#03A0E3', '#0D93CD']}
              text={t('Publish New Video')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle as TextStyle}
            />
          </View>
        }
        rightComponent={
          <View style={styles(direction).topContainer}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={50}>
              <View style={styles(direction).rightContainer}>
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.goBack();
                  }}>
                  <Image
                    source={require('../../assets/cancel.png')}
                    style={styles(direction).cancel}
                  />
                </TouchableOpacity>
              </View>
            </Neumorphism>
          </View>
        }
      />
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView} />
        <View style={styles(direction).container2}>
          <View style={styles(direction).videoContainer}>
            <Image
              source={require('../../assets/publishVideo.png')}
              style={styles(direction).video}
            />
            <TouchableOpacity>
              <Image
                source={require('../../assets/play.png')}
                style={styles(direction).button}
              />
            </TouchableOpacity>
          </View>
          <View style={styles(direction).inputTextContainer}>
            <CustomInput
              control={control}
              name="Title"
              placeholder={t('Title')}
              label={t('Title')}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                titleInputRef?.current.setFocus();
              }}
            />
          </View>
          <View style={styles(direction).descContainer}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'pressed'}
              radius={scale(8)}>
              <TextInput
                style={styles(direction).description}
                onChangeText={text => setDescription(text)}
                value={description}
                multiline={true}
                placeholder={t('Description')}
                placeholderTextColor="#758DAC"
                textAlignVertical="top"
              />
            </Neumorphism>
          </View>
          <View style={styles(direction).inputTextContainer}>
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
                    size={30}
                    color={'#03A0E3'}
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles(direction).reportContainer}>
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
    </>
  );
};

export default PublishNewVideo;
