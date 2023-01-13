/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import { ms, scale } from 'react-native-size-matters';
import CustomInput from 'app/components/inputs/CustomInput';
import { useForm } from 'react-hook-form';
import CustomInputDescription from 'app/components/inputs/CustomInputDescription';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ActivityButton from 'app/components/buttons/ActivityButton';
import MaterialIcon from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';
import Checkbox from 'app/components/checkbox';

const CreateActivity: React.FC = () => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [chosenDate, setChosenDate] = useState();
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleConfirm = (datetime: any) => {
    let date = moment(datetime).format('MM/DD/YYYY');
    setChosenDate(date);
    hideDatePicker();
  };
  const [checked, setChecked] = React.useState(true);
  const activityTitleInputRef: React.RefObject<any> = React.createRef();
  const descriptionInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const { control, handleSubmit, watch, setValue } = useForm();

  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).inputTextContainerOne}>
              <CustomInput
                control={control}
                name="Activity Title"
                // rules={rules.CustomerRules.first_name}
                placeholder={t('Activity Title')}
                label={t('Activity Title')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  activityTitleInputRef?.current.setFocus();
                }}
              />
            </View>
            <View style={styles(direction).inputTextContainerTwo}>
              <CustomInputDescription
                control={control}
                name="Description"
                // rules={rules.CustomerRules.first_name}
                placeholder={t('Description')}
                label={t('Description')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  descriptionInputRef?.current.setFocus();
                }}
              />
            </View>
            <View style={styles(direction).inputTextContainerThree}>
              <Image
                source={require('../../assets/inputBg.png')}
                style={styles(direction).bg}
              />
              <View style={styles(direction).datePickerContainer}>
                <Text style={styles(direction).datePickerText}>
                  {chosenDate}
                </Text>
                <TouchableOpacity onPress={showDatePicker}>
                  <MaterialIcon
                    name={'arrow-down'}
                    size={scale(15)}
                    color={'#03A0E3'}
                  />
                </TouchableOpacity>
              </View>
              <DateTimePickerModal
                isVisible={datePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            <ActivityButton
              title="Select EBooks"
              onPress={undefined}
              buttonTitle="Select"
            />
            <ActivityButton
              title="Assign Students"
              onPress={undefined}
              buttonTitle="Assign"
            />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles(direction).agreeDisagreeContainer}>
                <Checkbox
                  borderWidth={1}
                  color={'#03A0E3'}
                  iconColor={'#FFFFFF'}
                  iconSize={scale(18)}
                  icon={'check'}
                  height={25}
                  width={25}
                  onChange={(status: boolean) => {
                    setChecked(status);
                  }}
                  status={checked}
                />
                <Text
                  style={styles(direction).agreeDisagreeText}
                  onPress={() => {
                    setChecked(!checked);
                  }}>
                  {t('Activity Video Required')}
                </Text>
              </View>
            </View>
            <View style={styles(direction).inputTextContainerFour}>
              <CustomInput
                control={control}
                name="No of Activity Videos"
                // rules={rules.CustomerRules.first_name}
                placeholder={t('No of Activity Videos')}
                label={t('Activity Title')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  activityTitleInputRef?.current.setFocus();
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles(direction).titleBarContainer}>
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
                text={t('Create Activity')}
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
export default CreateActivity;
