import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import CustomInput from 'app/components/inputs/CustomInput';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';

const LinkChild: React.FC = () => {
  const { control } = useForm();
  const invitationCodeInputRef: React.RefObject<any> = React.createRef();
  const passwordInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
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
          <View style={styles(direction).imageContainer}>
            <Image
              source={require('../../assets/child.png')}
              style={styles(direction).imageStyle}
            />
          </View>
          <View style={styles(direction).gradientTextContainer}>
            <GradientText
              colors={['#2AA7DD', '#2AA7DD']}
              text={t(
                'Enter School Invitation Code Below To Link Your Child Account',
              )}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle}
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
          <View style={styles(direction).buttonContainer}>
            <RegularButton
              onPress={() => {
                NavigationService.navigate('AvatarCreation');
              }}
              text={t('Link Account')}
              radius={50}
              height={50}
              width={'100%'}
              colors={['#03BBE3', '#14A9FD']}
            />
          </View>

          <View style={styles(direction).bottomContainer}>
            <Text style={styles(direction).bottomText}>{t('OR')}</Text>
          </View>
          <View style={styles(direction).buttonContainer}>
            <RegularButton
              onPress={() => {
                NavigationService.navigate('CreateChannel');
              }}
              text={t('Scan QR')}
              radius={50}
              height={50}
              width={'100%'}
              colors={['#FF6F81', '#F0374E']}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LinkChild;
