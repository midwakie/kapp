import React, { useEffect, useState } from 'react';
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
import { useTranslation } from 'react-i18next';
import { retrieveSelectedLanguage } from 'app/utils/storageUtils';
import RegularButton from 'app/components/buttons/RegularButton';
import { s, ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { DrawerStacksList } from './DrawerStack';

const Drawer = createDrawerNavigator();

interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
export interface IDrawerChildItem {
  name: string;
  component: React.ComponentType<any>;
  drawerLabel: string;
  isChild: boolean;
  parentName: string;
  headerStyle: { backgroundColor: string };
  gestureEnabled: boolean;
  availableRoles?: ('Guest' | 'Parent' | 'Student' | 'Teacher')[];
}
export interface IDrawerItem {
  index: number;
  name: string;
  component: React.ComponentType<any>;
  drawerLabel: string;
  iconImage?: any;
  isParent?: boolean;
  collapsed?: boolean;
  isChild?: boolean;
  parentName?: string;
  headerStyle: { backgroundColor: string };
  gestureEnabled: boolean;
  childrens?: IDrawerChildItem[];
  availableRoles?: ('Guest' | 'Parent' | 'Student' | 'Teacher')[];
}

const AppStack = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const setLanguage = async () => {
    let lang: string = (await retrieveSelectedLanguage()) as string;
    i18n.changeLanguage(lang);
  };
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );

  useEffect(() => {
    setLanguage();
  }, []);

  const signOut = () => {
    dispatch(loginActions.logOut());
  };

  const toggleExpand = (route: { key: string }) => {
    if (expandedItems.includes(route.key)) {
      setExpandedItems(expandedItems.filter(item => item !== route.key));
    } else {
      setExpandedItems([...expandedItems, route.key]);
    }
  };

  const isItemExpanded = (route: { key: string }) => {
    return expandedItems.includes(route.key);
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
            {props.state.routes.map(route => {
              const {
                index,
                drawerLabel,
                activeTintColor,
                iconImage,
                isParent,
                isChild,
                childrens,
                availableRoles,
              } = props.descriptors[route.key].options;
              if (availableRoles?.includes(selectedRole)) {
                if (isParent) {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => toggleExpand(route)}>
                        <Image
                          source={require('../assets/sideMenuItem.png')}
                          style={[styles.bg, { tintColor: activeTintColor }]}
                        />
                        <View style={styles.side_menu_item}>
                          <Image source={iconImage} style={styles.itemImage} />
                          <Text style={styles.side_menu_item_label}>
                            {drawerLabel}
                          </Text>
                          {!isItemExpanded(route) ? (
                            <MaterialIcon
                              name="keyboard-arrow-down"
                              size={s(26)}
                              color={'#9CA8AF'}
                              style={{ marginLeft: s(20) }}
                            />
                          ) : (
                            <MaterialIcon
                              name="keyboard-arrow-up"
                              size={s(26)}
                              color={'#9CA8AF'}
                              style={{ marginLeft: s(20) }}
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                      {isItemExpanded(route) &&
                        childrens.map(
                          (
                            childRoute: IDrawerChildItem,
                            childIndex: number,
                          ) => {
                            if (
                              childRoute?.availableRoles?.includes(selectedRole)
                            ) {
                              return (
                                <TouchableOpacity
                                  key={childIndex}
                                  style={styles.itemContainer}
                                  onPress={() => {
                                    // props.navigation.dispatch(
                                    //   DrawerActions.closeDrawer(),
                                    // );
                                    props.navigation.navigate(childRoute.name);
                                  }}>
                                  <Image
                                    source={require('../assets/sideMenuItem.png')}
                                    style={[
                                      styles.bg,
                                      { tintColor: activeTintColor },
                                    ]}
                                  />
                                  <View style={styles.side_menu_item}>
                                    <Image
                                      source={childRoute.iconImage}
                                      style={styles.itemImage}
                                      resizeMode="contain"
                                    />
                                    <Text style={styles.side_menu_item_label}>
                                      {childRoute.drawerLabel}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              );
                            }
                          },
                        )}
                    </View>
                  );
                } else if (!isChild) {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.itemContainer}
                      onPress={() => {
                        props.navigation.dispatch(DrawerActions.closeDrawer());
                        props.navigation.navigate(route.name);
                      }}>
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
                }
              }
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
      {DrawerStacksList?.map((drawers, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={drawers?.name}
            component={drawers.component}
            options={{
              index: drawers.index,
              drawerLabel: drawers?.drawerLabel,
              iconImage: drawers.iconImage,
              headerStyle: drawers?.headerStyle,
              gestureEnabled: drawers?.gestureEnabled,
              isParent: drawers?.isParent,
              collapsed: drawers?.collapsed,
              isChild: drawers?.isChild,
              childrens: drawers?.childrens,
              availableRoles: drawers?.availableRoles,
            }}
          />
        );
      })}
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
