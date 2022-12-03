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
import FaIcon from 'react-native-vector-icons/FontAwesome';

import HomeStack from './DrawerStacks/HomeStack';
import { useTranslation } from 'react-i18next';
import { retrieveSelectedLanguage } from 'app/utils/storageUtils';

const Drawer = createDrawerNavigator();

const AppStack = props => {
  let lastGroupName = '';
  let newGroup = false;
  const { i18n } = useTranslation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setLanguage = async () => {
    let lang: string = (await retrieveSelectedLanguage()) as string;
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLanguage();
  },[]);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerTintColor: '#FFFFFF' }}
      drawerContent={props => (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#976a4a' }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableHighlight
              style={styles.side_menu_btn}
              activeOpacity={0.5}
              underlayColor={'#976a4a'}
              onPress={() => {
                props.navigation.dispatch(DrawerActions.toggleDrawer());
              }}>
              <FaIcon size={24} name={'navicon'} color="#FFFFFF" />
            </TouchableHighlight>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 75, height: 75 }}
            />
            <View style={{ width: '20%' }} />
          </View>
          <DrawerContentScrollView {...props}>
            {props.state.routes.map((route, index) => {
              const { drawerLabel, activeTintColor, groupName } =
                props.descriptors[route.key].options;
              if (lastGroupName !== groupName) {
                newGroup = true;
                lastGroupName = groupName;
              } else newGroup = false;

              return (
                <View key={index}>
                  {newGroup ? (
                    <View style={styles.sectionView}>
                      <Text
                        key={groupName}
                        style={{ marginLeft: 10, color: '#FFFFFF' }}>
                        {groupName}
                      </Text>
                      <View style={styles.separatorLine} />
                    </View>
                  ) : null}
                  <DrawerItem
                    key={route.key}
                    label={({ color }) => (
                      <Text style={{ color: '#FFFFFF' }}>{drawerLabel}</Text>
                    )}
                    focused={
                      props.state.routes.findIndex(
                        e => e.name === route.name,
                      ) === props.state.index
                    }
                    activeTintColor={activeTintColor}
                    onPress={() => props.navigation.navigate(route.name)}
                  />
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

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  sectionView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  separatorLine: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: 5,
    height: '100%',
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default AppStack;
