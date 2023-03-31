/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import {
  Alert,
  AsyncStorage,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import Neumorphism from 'react-native-neumorphism';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import TitleBar from 'app/components/buttons/TitleBar';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import styles from './style';
import CustomInput from 'app/components/inputs/CustomInput';
import rules from 'app/rules';
import PhoneInput from 'react-native-phone-number-input';
import ApiConfig from 'app/config/api-config';
import { useMutation, useQuery, useQueryClient } from 'react-query';
const ChangeMobileNumber: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const emailInputRef: React.RefObject<any> = React.createRef();
  const [mobileNo, setMobileNo] = React.useState('');
  const mobileNumberInputRef = useRef<TextInput>(null);
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const queryClient = useQueryClient();
  async function fetchUserDetails() {
    const authToken = await AsyncStorage.getItem('authToken');
    const headers = { Authorization: `Bearer ${authToken}` };
    const response = await fetch(
      ApiConfig.BASE_URL + ApiConfig.FETCH_USER_DETAILS,
      { headers },
    );
    const userDetails = await response.json();
    setMobileNo(userDetails.message.mobileNo);
    return userDetails;
  }
  const { isLoading, data } = useQuery('userDetails', fetchUserDetails);

  const updateMobileNumberMutation = useMutation(
    async (newMobileNumber: string) => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        const headers = {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        };
        const body = JSON.stringify({ mobileNo: newMobileNumber });
        const response = await fetch(
          ApiConfig.BASE_URL + ApiConfig.UPDATE_MOBILE,
          { method: 'PUT', headers, body },
        );
        const updatedUserDetails = await response.json();
        setTimeout(() => {
          Alert.alert('Kutubi', updatedUserDetails.message);
        }, 200);
        if (response.status === 200) {
          NavigationService.navigate('AccountDetail');
          queryClient.invalidateQueries('userDetails');
        }
        return updatedUserDetails;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  );

  const handleUpdateMobileNumber = () => {
    updateMobileNumberMutation.mutate(mobileNo);
  };
  return (
    <>
      <ScrollView style={styles(direction).container} bounces={false}>
        <SafeAreaView style={styles(direction).safeAreaView}>
          <View style={styles(direction).container2}>
            <Text style={styles(direction).text}>{mobileNo}</Text>
            <View style={styles(direction).inputTextContainer}>
              <Image
                source={require('../../assets/inputBg.png')}
                style={styles(direction).bg}
              />
              <PhoneInput
                defaultCode="AE"
                layout="second"
                onChangeFormattedText={text => {
                  setMobileNo(text);
                }}
                disabled={false}
                placeholder={`${t('Mobile Number')}*`}
                flagButtonStyle={styles(direction).flagButtonStyle}
                codeTextStyle={styles(direction).mobileCodeTextStyle}
                countryPickerButtonStyle={
                  styles(direction).countryPickerButtonStyle
                }
                textContainerStyle={styles(direction).textContainerStyle}
                containerStyle={styles(direction).mobileInputContainerStyle}
                textInputStyle={styles(direction).mobileTextInputStyle}
                textInputProps={{
                  placeholderTextColor: '#758DAC',
                  blurOnSubmit: false,
                  returnKeyType: 'next',
                  keyboardType: 'phone-pad',
                }}
              />
            </View>
            <View style={styles(direction).neomorphContainer2}>
              <RegularButton
                onPress={handleSubmit(handleUpdateMobileNumber)}
                text={t('Update')}
                radius={50}
                height={50}
                width={'100%'}
                colors={['#03BBE3', '#14A9FD']}
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
                text={t('Change Mobile Number')}
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

export default ChangeMobileNumber;
