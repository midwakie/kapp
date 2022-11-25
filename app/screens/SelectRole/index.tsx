import React from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import GradientText from 'app/components/texts/GradientText';
import HorizontalLine from 'app/components/lines/HorizontalLine';
import NavigationService from 'app/navigation/NavigationService';
const SelectRole: React.FC = () => {
  const dispatch = useDispatch();

  const onDashboard = () => dispatch(loginActions.onLoginResponse({ id: '' }));
  const onLogin = async (data: any) => {
    // NavigationService.navigate('Login');
    Keyboard.dismiss();
    const { email } = data;
    dispatch(loginActions.requestLogin(email));
  };

  return (
    <ScrollView style={styles.container} bounces={false}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container2}>
          <View style={styles.gradientTextContainer}>
            <GradientText
              colors={['#0EAFF4', '#0D93CD']}
              text="Select Your Role"
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              textStyle={styles.gradientTextStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.rolesContainer}
            onPress={() => {
              NavigationService.navigate('Sign In');
            }}>
            <Text style={styles.titleParent}>I am Parent</Text>
            <HorizontalLine width={38} />
            <Image
              style={styles.image}
              source={require('../../assets/parent.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rolesContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/student.png')}
            />
            <HorizontalLine width={38} />
            <Text style={styles.titleStudent}>I am Student</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rolesContainer}>
            <Text style={styles.titleTeacher}>I am Teacher</Text>
            <HorizontalLine width={38} />
            <Image
              style={styles.image}
              source={require('../../assets/teacher.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SelectRole;
