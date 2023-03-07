import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import TitleBar from 'app/components/buttons/TitleBar';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import RadioButton from 'app/components/buttons/RadioButton';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import rules from 'app/rules';
import CustomInput from 'app/components/inputs/CustomInput';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';

const EditParentProfile: React.FC = () => {
  const { control } = useForm();
  const [radioButtonMale, setRadioButtonMale] = useState(true);
  const [radioButtonFemale, setRadioButtonFemale] = useState(false);
  const lastNameInputRef: React.RefObject<any> = React.createRef();
  const emailInputRef: React.RefObject<any> = React.createRef();
  const dateofbirthInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const onPressRadioButtonMale = () => {
    setRadioButtonMale(!radioButtonMale);
    setRadioButtonFemale(!radioButtonFemale);
  };

  const onPressRadioButtonFemale = () => {
    setRadioButtonMale(!radioButtonMale);
    setRadioButtonFemale(!radioButtonFemale);
  };
  return (
    <>
      <TitleBar
        leftComponent={
          <View style={styles(direction).regularContainer}>
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
              text={t('Edit Profile')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle}
            />
          </View>
        }
      />
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).imageContainer}>
              <Image
                style={styles(direction).imageRound}
                source={require('../../assets/topPicAvatar.png')}
              />
              <TouchableOpacity style={styles(direction).imageContainer2}>
                <Image
                  style={styles(direction).imageRound}
                  source={require('../../assets/editChild2.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles(direction).inputTextContainer}>
              <CustomInput
                control={control}
                name="first_name"
                rules={rules.CustomerRules.first_name}
                placeholder={t('First Name')}
                label={t('First Name')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  lastNameInputRef?.current.setFocus();
                }}
              />
            </View>
            <View style={styles(direction).inputTextContainer1}>
              <CustomInput
                control={control}
                ref={lastNameInputRef}
                name="last_name"
                rules={rules.CustomerRules.last_name}
                placeholder={t('Last Name')}
                label={t('Last Name')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef?.current.setFocus();
                }}
              />
            </View>

            <View style={styles(direction).marginView}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={scale(12)}>
                <View style={styles(direction).interestContainer}>
                  <Text style={styles(direction).interestText}>
                    {t('Interests & Hobbies')}
                  </Text>

                  <View style={styles(direction).interestIconContainer}>
                    <View style={styles(direction).interestIconMainContainer}>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).interestIcon1}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/interestIcon1.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).interestIcons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/interestIcon2.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).interestIcons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/interestIcon3.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).interestIcons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/interestIcon4.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).interestIcons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/interestIcon5.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles(direction).interestIcons}>
                        <Image
                          style={styles(direction).imageRound}
                          source={require('../../assets/interestIcon6.png')}
                        />
                        <Image
                          style={styles(direction).plusFourImage}
                          source={require('../../assets/+4.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        NavigationService.navigate('HobbiesAndInterest');
                      }}>
                      <Text style={styles(direction).changeText2}>
                        {t('change')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Neumorphism>
            </View>
            <View style={styles(direction).regularButtonContainer}>
              <RegularButton
                onPress={() => {
                  NavigationService.reset('Select Role');
                }}
                text={t('Save')}
                radius={2.63}
                height={50}
                width={'100%'}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[
                  'rgba(3, 187, 227, 1)',
                  'rgba(3, 160, 227, 1)',
                  'rgba(25, 118, 210, 0.87)',
                ]}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default EditParentProfile;
