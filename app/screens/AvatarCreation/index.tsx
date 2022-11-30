import React, { useRef, useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import RadioButton from 'app/components/buttons/RadioButton';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import rules from 'app/rules';
import CustomInput from 'app/components/inputs/CustomInput';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlainButton from 'app/components/buttons/PlainButton';
import RegularButton from 'app/components/buttons/RegularButton';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import { Checkbox } from 'react-native-paper';

const AvatarCreation: React.FC = () => {
  const { control, handleSubmit, setValue, watch, reset } = useForm();
  const [radioButtonMale, setRadioButtonMale] = useState(true);
  const [radioButtonFemale, setRadioButtonFemale] = useState(false);

  const onPressRadioButtonMale = (radioButton: string) => {
    setRadioButtonMale(!radioButtonMale);
    setRadioButtonFemale(!radioButtonFemale);
  };

  const onPressRadioButtonFemale = (radioButton: string) => {
    setRadioButtonMale(!radioButtonMale);
    setRadioButtonFemale(!radioButtonFemale);
  };
  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container2}>
          <View style={styles.topContainer}>
            <RegularButton
              onPress={() => {}}
              icon={'arrow-back'}
              radius={38}
              height={38}
              width={38}
              colors={['#EBECF0', '#EBECF0']}
            />
            <PlainButton
              onPress={() => {
                refSlider?.current.goToSlide(5);
              }}
              style={styles.skipButtonText}
              containerStyle={styles.skipButtonContainer}
              text={'Skip'}
            />
          </View>
          <View style={styles.neomorphContainer}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={118}>
              <View style={styles.profilePicture}></View>
            </Neumorphism>
          </View>
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text="Create Avatar"
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle}
            />
          </View>
          <View style={styles.radioButtonContainer}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'pressed'}
              radius={60}>
              <View style={styles.touchableOpacity}>
                <RadioButton
                  id={'1'}
                  label={'Male'}
                  onPress={onPressRadioButtonMale}
                  selected={radioButtonMale}
                  color={'#03A0E3'}
                />
                {/* <HorizontalLine width={'100%'} stroke={1} color={'#E2E2E2'} /> */}
                <RadioButton
                  id={'2'}
                  label={'Female'}
                  onPress={onPressRadioButtonFemale}
                  selected={radioButtonFemale}
                  color={'#03A0E3'}
                />
              </View>
            </Neumorphism>
          </View>
          <View style={styles.inputTextContainer}>
            <CustomInput
              control={control}
              name="first_name"
              //   rules={rules.CustomerRules.first_name}
              placeholder="Nickname"
              //   label="First Name*"
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                inputRef?.current.setFocus();
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AvatarCreation;
