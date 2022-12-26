import React, { useEffect } from 'react';
import { DrawerActions } from '@react-navigation/routers';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Neumorphism from 'react-native-neumorphism';
import HomeStack from './DrawerStacks/HomeStack';
import { useTranslation } from 'react-i18next';
import { retrieveSelectedLanguage } from 'app/utils/storageUtils';
import RegularButton from 'app/components/buttons/RegularButton';
import { ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  let lastGroupName = '';
  let newGroup = false;
  const { i18n } = useTranslation();
  const setLanguage = async () => {
    let lang: string = (await retrieveSelectedLanguage()) as string;
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLanguage();
  }, []);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerTintColor: '#EDF2F4', headerShown: false }}
      drawerContent={props => (
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.side_menu_container}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logoStyle}
            />
            <RegularButton
              onPress={() => {
                props.navigation.dispatch(DrawerActions.toggleDrawer());
              }}
              icon={'close'}
              radius={42}
              height={42}
              width={42}
              colors={['#EBECF0', '#EBECF0']}
            />
          </View>
          <DrawerContentScrollView {...props}>
            {props.state.routes.map((route, index) => {
              const { drawerLabel, activeTintColor, groupName } =
                props.descriptors[route.key].options;
              // if (lastGroupName !== groupName) {
              //   newGroup = true;
              //   lastGroupName = groupName;
              // } else newGroup = false;

              return (
                <View key={index}>
                  {/* {newGroup ? (
                    <View style={styles.sectionView}>
                      <Text
                        key={groupName}
                        style={{ marginLeft: 10, color: '#3B3B48' }}>
                        {groupName}
                      </Text>
                      <View style={styles.separatorLine} />
                    </View>
                  ) : null} */}
                  {/* <DrawerItem
                    key={route.key}
                    label={({ color }) => (
                      <Text style={{ color: '#3B3B48' }}>{drawerLabel}</Text>
                    )}
                    focused={
                      props.state.routes.findIndex(
                        e => e.name === route.name,
                      ) === props.state.index
                    }
                    activeTintColor={'transparent'}
                    onPress={() => props.navigation.navigate(route.name)}
                  /> */}
                  <LinearGradient
                    colors={['#EBEEF0', '#E1E8ED']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                    <View style={styles.side_menu_item}>
                      <MaterialIcon name="home" size={24} color={'#84BD47'} />
                      <Text style={styles.side_menu_item_label}>
                        {drawerLabel}
                      </Text>
                    </View>
                  </LinearGradient>
                </View>
              );
            })}
          </DrawerContentScrollView>
        </SafeAreaView>
      )}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          drawerLabel: 'Home',
          groupName: 'Home',
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = ScaledSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  side_menu_item: {
    width: '100%',
    height: '60@ms',
    alignItems: 'center',
    paddingHorizontal: '59@ms',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF',
  },
  side_menu_item_label: {
    color: '#3B3B48',
    marginLeft: '34@ms',
    fontFamily: 'Nunito-Regular',
    fontSize: '16@s',
    fontWeight: '600',
  },
  safeAreaView: { flex: 1, backgroundColor: '#E5E5E5' },
  side_menu_container: {
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoStyle: { width: 60, height: 60 },
  sectionView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  separatorLine: {
    flex: 1,
    backgroundColor: '#3B3B48',
    height: 1.2,
    marginLeft: 12,
    marginRight: 24,
  },
  menu_btn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  side_menu_btn: {
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppStack;
