import React, { useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { Checkbox, Colors } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import RadioButton from 'app/components/buttons/RadioButton';
import { color } from 'react-native-reanimated';

const ActivitiesStats: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const { control } = useForm();
  const lastNameInputRef: React.RefObject<any> = React.createRef();
  const emailInputRef: React.RefObject<any> = React.createRef();
  const mobileNumberInputRef: React.RefObject<any> = React.createRef();
  const invitationCodeInputRef: React.RefObject<any> = React.createRef();
  const passwordInputRef: React.RefObject<any> = React.createRef();
  const confirmPasswordInputRef: React.RefObject<any> = React.createRef();
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container1}>
          <View style={styles(direction).rectangle}>
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
            <GradientText
              colors={['#03A0E3', '#0D93CD']}
              text={t('Activities Stats')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).Toptext}
            />
          </View>
        </View>
        <View style={styles(direction).container2}>
          <View style={styles(direction).rectangle2}>
          <HorizontalLine width={151} color={'#758DAC'} marginTop={10} />
            <View style={styles(direction).box}>
              <Text style={styles(direction).text2}>{t('Last Week')}</Text>
            </View>
            <Image
              style={styles(direction).image}
              source={require('../../assets/graph3.png')}
            />
            <Image
              style={styles(direction).image1}
              source={require('../../assets/graph2.png')}
            />
            <Image
              style={styles(direction).image2}
              source={require('../../assets/graph1.png')}
            />
          </View>
          <View style={styles(direction).rectangle3}>
            <Text style={styles(direction).text}>
              {t('Total time spent on video')}
            </Text>
            <Image
              style={styles(direction).elipse1}
              source={require('../../assets/white.png')}
            />
            <Image
              style={styles(direction).elipse2}
              source={require('../../assets/Ellipseblue.png')}
            />
            <Text style={styles(direction).insidetext}>{t('50 \nhrs ')}</Text>
          </View>
          <View style={styles(direction).rectangle4}>
            <Text style={styles(direction).text}>
              {t('Total time spent reading')}
            </Text>
            <Image
              style={styles(direction).elipse1}
              source={require('../../assets/white.png')}
            />
            <Image
              style={styles(direction).elipse3}
              source={require('../../assets/Ellipsered.png')}
            />
            <Text style={styles(direction).insidetext}>{t('50 \nhrs ')}</Text>
          </View>
          <View style={styles(direction).rectangle4}>
            <Text style={styles(direction).text}>
              {t('Total time spent on app')}
            </Text>
            <Image
              style={styles(direction).elipse1}
              source={require('../../assets/white.png')}
            />
            <Image
              style={styles(direction).elipse4}
              source={require('../../assets/Ellipse3.png')}
            />
            <Text style={styles(direction).insidetext}>{t('50 \nhrs ')}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ActivitiesStats;
