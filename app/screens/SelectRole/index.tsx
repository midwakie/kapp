import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import NavigationService from 'app/navigation/NavigationService';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import * as selectedRoleActions from 'app/store/actions/selectedRoleActions';
import { ROLES } from 'app/config/role-config';
const SelectRole: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const dispatch = useDispatch();
  const onRoleSelected = (role: string) => {
    //TODO Need to implement update selected role in redux store
    dispatch(selectedRoleActions.setSelectedRole(role));
    NavigationService.navigate('Welcome');
  };
  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text={t('Select Your Role')}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles(direction).gradientTextStyle}
            />
          </View>
          <TouchableOpacity
            style={styles(direction).rolesContainer}
            onPress={() => {
              onRoleSelected(ROLES.PARENT);
            }}>
            <Text style={styles(direction).titleParent}>
              {t('I am Parent')}
            </Text>
            <HorizontalLine width={scale(38)} />
            <Image
              style={styles(direction).image}
              source={require('../../assets/parent.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles(direction).rolesContainer}
            onPress={() => {
              onRoleSelected(ROLES.STUDENT);
            }}>
            <Image
              style={styles(direction).image}
              source={require('../../assets/student.png')}
            />
            <HorizontalLine width={scale(38)} />
            <Text style={styles(direction).titleStudent}>
              {t('I am Student')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles(direction).rolesContainer}
            onPress={() => {
              onRoleSelected(ROLES.TEACHER);
            }}>
            <Text style={styles(direction).titleTeacher}>
              {t('I am Teacher')}
            </Text>
            <HorizontalLine width={scale(38)} />
            <Image
              style={styles(direction).image}
              source={require('../../assets/teacher.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SelectRole;
