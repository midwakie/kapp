import React from 'react';
import { Image, SafeAreaView, Text, TextStyle, View } from 'react-native';
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

const ChangeSchool: React.FC = () => {
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
              text={t('Change School')}
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
            <View style={styles(direction).gradientTextContainer2}>
              <GradientText
                colors={['#455157', '#455157']}
                text={t('Al Jeel Al Saeed School')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle2}
              />
            </View>
            <View style={styles(direction).inputTextContainer}>
              <CustomInput
                control={control}
                ref={invitationCodeInputRef}
                name="invitation_code"
                placeholder={t('Invitation Code')}
                label={t('Invitation Code')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef?.current.setFocus();
                }}
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
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default ChangeSchool;
