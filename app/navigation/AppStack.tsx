import React, { useEffect } from 'react';
import { DrawerActions } from '@react-navigation/routers';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HomeStack from './DrawerStacks/HomeStack';
import { useTranslation } from 'react-i18next';
import { retrieveSelectedLanguage } from 'app/utils/storageUtils';
import RegularButton from 'app/components/buttons/RegularButton';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import MyFeeds from 'app/screens/MyFeeds';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const setLanguage = async () => {
    let lang: string = (await retrieveSelectedLanguage()) as string;
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLanguage();
  }, []);

  const signOut = () => {
    dispatch(loginActions.logOut());
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#E1E8ED',
        headerShown: false,
        drawerStyle: { width: '100%' },
      }}
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
              const { drawerLabel, activeTintColor, iconImage } =
                props.descriptors[route.key].options;
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.itemContainer}
                  onPress={() => props.navigation.navigate(route.name)}>
                  <Image
                    source={require('../assets/sideMenuItem.png')}
                    style={[styles.bg, { tintColor: activeTintColor }]}
                  />
                  <View style={styles.side_menu_item}>
                    <Image source={iconImage} style={styles.itemImage} />
                    <Text style={styles.side_menu_item_label}>
                      {drawerLabel}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity onPress={signOut} style={styles.itemContainer}>
              <Image
                source={require('../assets/sideMenuItem.png')}
                style={styles.bg}
              />
              <View style={styles.side_menu_item}>
                <Image
                  source={require('../assets/side_menu/signout.png')}
                  style={styles.itemImage}
                />
                <Text style={styles.side_menu_item_sign_out_label}>
                  Signout
                </Text>
              </View>
            </TouchableOpacity>
          </DrawerContentScrollView>
        </SafeAreaView>
      )}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          drawerLabel: 'Home',
          iconImage: require('../assets/side_menu/home.png'),
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="FeedScreen"
        component={MyFeeds}
        options={{
          drawerLabel: 'Feeds',
          iconImage: require('../assets/side_menu/feeds.png'),
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
    // borderTopWidth: 1,
    // borderTopColor: '#FFFFFF',
  },
  bg: {
    width: '100%',
    height: '65@s',
    position: 'absolute',
    resizeMode: 'stretch',
  },
  itemImage: {
    width: '24@ms',
    height: '24@ms',
  },
  itemContainer: {
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
  side_menu_item_sign_out_label: {
    color: '#EC4D61',
    marginLeft: '34@ms',
    fontFamily: 'Nunito-Regular',
    fontSize: '16@s',
    fontWeight: '600',
  },
  safeAreaView: { flex: 1, backgroundColor: '#E1E8ED' },
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
