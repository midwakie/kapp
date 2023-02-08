import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import GradientText from 'app/components/texts/GradientText';
import { useForm } from 'react-hook-form';
import CustomInput from 'app/components/inputs/CustomInput';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import TitleBar from 'app/components/buttons/TitleBar';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';

const CreateChannel: React.FC = () => {
  const { control } = useForm();
  const channelNameInputRef: React.RefObject<any> = React.createRef();
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
              text={t('Create Channel')}
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
            <View style={styles(direction).profileImgContainer}>
              <Image
                source={require('../../assets/channel.png')}
                style={styles(direction).profileImg}
              />
              <TouchableOpacity style={styles(direction).profileImgCamera}>
                <MaterialIcon
                  name={'camera-alt'}
                  size={scale(18)}
                  color={'#03A0E3'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles(direction).inputTextContainer}>
              <CustomInput
                control={control}
                ref={channelNameInputRef}
                name="Channel_Name "
                placeholder={t('Channel Name ')}
                label={t('Channel Name ')}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  channelNameInputRef?.current.setFocus();
                }}
              />
            </View>
          </View>
          <View style={styles(direction).bottom}>
            <RegularButton
              onPress={() => {
                NavigationService.navigate('ManagePeople');
              }}
              text={t('Save')}
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

export default CreateChannel;
