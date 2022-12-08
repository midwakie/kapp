import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from 'app/navigation/NavigationService';
import { useTranslation } from 'react-i18next';
import RegularButton from 'app/components/buttons/RegularButton';
import Neumorphism from 'react-native-neumorphism';

const AccountAction: React.FC = () => {
  //   const { control } = useForm();
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.topContainer}>
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
          <View style={styles.container2}>
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={50}>
              <TouchableOpacity
                onPress={() => {
                  NavigationService.navigate('EditChildProfile');
                }}>
                <View style={styles.imageOneContainer}>
                  <Image
                    source={require('../../assets/linkchildaccount.png')}></Image>
                </View>
              </TouchableOpacity>
            </Neumorphism>
            <View style={styles.textOneContainer}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.textOne}>Link Your Child Account</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container3}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={50}>
                <View style={styles.imageTwoContainer}>
                  <TouchableOpacity onPress={() => {}}>
                    <Image
                      source={require('../../assets/createchildaccount.png')}></Image>
                  </TouchableOpacity>
                </View>
              </Neumorphism>
              <View style={styles.textTwoContainer}>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.textTwo}>Create Your Child Account</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container4}>
              <Neumorphism
                lightColor={'#ffffff'}
                darkColor={'#A8A8A8'}
                shapeType={'flat'}
                radius={50}>
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.imageThreeContainer}>
                    <Image
                      source={require('../../assets/createchildprofile2.png')}></Image>
                  </View>
                </TouchableOpacity>
              </Neumorphism>
              <View style={styles.textTwoContainer}>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.textThree}>
                    Create Your Child Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
export default AccountAction;
