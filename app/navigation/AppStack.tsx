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
import { s, scale, ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import MyFeeds from 'app/screens/MyFeeds';
import ParentProfileDetail from 'app/screens/ParentProfileDetail';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { ROLES } from 'app/config/role-config';
import ChildFullProfile from 'app/screens/ChildFullProfile';
import TeachersProfile from 'app/screens/TeachersProfile';
import MyChannel from 'app/screens/MyChannel';
import ProfileStack from './DrawerStacks/ProfileStack';
import FeedStack from './DrawerStacks/FeedStack';
import NoChat from 'app/screens/NoChat';
import NoActivity from 'app/screens/NoActivity';
import NoInterestAndHobbies from 'app/screens/NoInterestAndHobbie';
import NoConnection from 'app/screens/NoConnection';
import NoSearch from 'app/screens/Nosearch';
import NoNotification from 'app/screens/NoNotification';
import MyStudentList from 'app/screens/MyStudentList';
import StudentsStack from './DrawerStacks/StudentsStack';
import ChildStack from './DrawerStacks/ChildStack';
import MyChannelStack from './DrawerStacks/MyChannelStack';
import ClubChannel from 'app/screens/ClubChannel';
import SubscribedChannel from 'app/screens/SubscribedChannel';
import PopularFeed from 'app/screens/PopularFeed';
import FeaturedChannel from 'app/screens/FeaturedChannel';
import Shop from 'app/screens/Shop';
import ShopStack from './DrawerStacks/ShopStack';

const Drawer = createDrawerNavigator();

interface IState {
  currentCustomerReducer: ICurrentCustomer;
}

const AppStack = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const setLanguage = async () => {
    let lang: string = (await retrieveSelectedLanguage()) as string;
    i18n.changeLanguage(lang);
  };
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );

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
        drawerStyle: { width: '70%' },
        drawerType: 'front',
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
              const { drawerLabel, activeTintColor, iconImage, isDropDown } =
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
                    {isDropDown && (
                      <MaterialIcon
                        name="keyboard-arrow-down"
                        size={s(26)}
                        color={'#9CA8AF'}
                        style={{ marginLeft: s(20) }}
                      />
                    )}
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
        name="ProfileScreen"
        component={ProfileStack}
        options={{
          drawerLabel: 'Profile',
          iconImage: require('../assets/side_menu/account.png'),
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />

      <Drawer.Screen
        name="MyChannelScreen"
        component={MyChannelStack}
        options={{
          drawerLabel: 'My Channel',
          iconImage: require('../assets/side_menu/myChannel.png'),
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />

      {selectedRole === ROLES.TEACHER && (
        <Drawer.Screen
          name="StudentsScreen"
          component={StudentsStack}
          options={{
            drawerLabel: 'Students',
            iconImage: require('../assets/side_menu/littleKid.png'),
            headerStyle: {
              backgroundColor: '#976a4a',
            },
            gestureEnabled: false,
          }}
        />
      )}
      {selectedRole === ROLES.PARENT && (
        <Drawer.Screen
          name="ChildScreen"
          component={ChildStack}
          options={{
            drawerLabel: 'Child',
            iconImage: require('../assets/side_menu/littleKid.png'),
            headerStyle: {
              backgroundColor: '#976a4a',
            },
            gestureEnabled: false,
          }}
        />
      )}
      <Drawer.Screen
        name="FeedScreen"
        component={FeedStack}
        options={{
          drawerLabel: 'Feeds',
          iconImage: require('../assets/side_menu/feeds.png'),
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="KutubiLibrary"
        component={NoChat}
        options={{
          drawerLabel: 'Kutubi Library',
          iconImage: require('../assets/side_menu/kutubiLibrary.png'),
          isDropDown: true,
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="SubscribedChannel"
        component={SubscribedChannel}
        options={{
          drawerLabel: 'Subscribed',
          // iconImage: require('../assets/side_menu/kutubiLibrary.png'),
          // isDropDown: true,
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Club"
        component={ClubChannel}
        options={{
          drawerLabel: 'Club',
          // iconImage: require('../assets/side_menu/kutubiLibrary.png'),
          // isDropDown: true,
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="FeaturedChannel"
        component={FeaturedChannel}
        options={{
          drawerLabel: 'Featured',
          // iconImage: require('../assets/side_menu/kutubiLibrary.png'),
          // isDropDown: true,
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="PopularFeed"
        component={PopularFeed}
        options={{
          drawerLabel: 'Popular',
          // iconImage: require('../assets/side_menu/kutubiLibrary.png'),
          // isDropDown: true,
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="ActiveWorks"
        component={NoActivity}
        options={{
          drawerLabel: 'Active Works',
          iconImage: require('../assets/side_menu/activeWork.png'),
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Achievements"
        component={NoInterestAndHobbies}
        options={{
          drawerLabel: 'Achievements',
          iconImage: require('../assets/side_menu/award.png'),
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Shop"
        component={ShopStack}
        options={{
          drawerLabel: 'Shop',
          iconImage: require('../assets/side_menu/shop.png'),
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={NoSearch}
        options={{
          drawerLabel: 'Orders',
          iconImage: require('../assets/side_menu/orders.png'),
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={NoChat}
        options={{
          drawerLabel: 'Chat',
          iconImage: require('../assets/side_menu/chat.png'),
          headerStyle: {
            backgroundColor: '#976a4a',
          },
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NoNotification}
        options={{
          drawerLabel: 'Notification',
          iconImage: require('../assets/side_menu/notifications.png'),
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
    paddingLeft: '35@s',
    paddingRight: '30@s',
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
    resizeMode: 'contain',
  },
  itemContainer: {
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF',
  },
  side_menu_item_label: {
    color: '#3B3B48',
    marginLeft: '21@s',
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
