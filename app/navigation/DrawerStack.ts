import NoChat from 'app/screens/NoChat';
import ChildStack from './DrawerStacks/ChildStack';
import FeedStack from './DrawerStacks/FeedStack';
import HomeStack from './DrawerStacks/HomeStack';
import MyChannelStack from './DrawerStacks/MyChannelStack';
import ProfileStack from './DrawerStacks/ProfileStack';
import SubscribedChannel from 'app/screens/SubscribedChannel';
import ClubChannel from 'app/screens/ClubChannel';
import FeaturedChannel from 'app/screens/FeaturedChannel';
import PopularFeed from 'app/screens/PopularFeed';
import NoActivity from 'app/screens/NoActivity';
import NoInterestAndHobbies from 'app/screens/NoInterestAndHobbie';
import NoSearch from 'app/screens/Nosearch';
import NoNotification from 'app/screens/NoNotification';
import { IDrawerItem } from './AppStack';
import StudentsStack from './DrawerStacks/StudentsStack';

export const DrawerStacksList: IDrawerItem[] = [
  {
    index: 1,
    name: 'HomeScreen',
    component: HomeStack,
    drawerLabel: 'Home',
    iconImage: require('../assets/side_menu/home.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 2,
    name: 'ProfileScreen',
    component: ProfileStack,
    drawerLabel: 'Profile',
    iconImage: require('../assets/side_menu/account.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 3,
    name: 'MyChannelScreen',
    component: MyChannelStack,
    drawerLabel: 'My Channel',
    iconImage: require('../assets/side_menu/myChannel.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 4,
    name: 'StudentsScreen',
    component: StudentsStack,
    drawerLabel: 'Students',
    iconImage: require('../assets/side_menu/littleKid.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Teacher'],
  },
  {
    index: 5,
    name: 'ChildScreen',
    component: ChildStack,
    drawerLabel: 'Child',
    iconImage: require('../assets/side_menu/littleKid.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Parent'],
  },
  {
    index: 6,
    name: 'FeedScreen',
    component: FeedStack,
    drawerLabel: 'Feeds',
    iconImage: require('../assets/side_menu/feeds.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 7,
    name: 'KutubiLibrary',
    component: NoChat,
    drawerLabel: 'Kutubi Library',
    iconImage: require('../assets/side_menu/kutubiLibrary.png'),
    isParent: true,
    collapsed: true,
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
    childrens: [
      {
        name: 'SubscribedChannel',
        component: SubscribedChannel,
        drawerLabel: 'Subscribed',
        isChild: true,
        parentName: 'Kutubi Library',
        headerStyle: {
          backgroundColor: '#976a4a',
        },
        gestureEnabled: false,
        availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
      },
      {
        name: 'Club',
        component: ClubChannel,
        drawerLabel: 'Club',
        isChild: true,
        parentName: 'Kutubi Library',
        headerStyle: {
          backgroundColor: '#976a4a',
        },
        gestureEnabled: false,
        availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
      },
      {
        name: 'FeaturedChannel',
        component: FeaturedChannel,
        drawerLabel: 'Featured',
        isChild: true,
        parentName: 'Kutubi Library',
        headerStyle: {
          backgroundColor: '#976a4a',
        },
        gestureEnabled: false,
        availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
      },
      {
        name: 'PopularFeed',
        component: PopularFeed,
        drawerLabel: 'Popular',
        isChild: true,
        parentName: 'Kutubi Library',
        headerStyle: {
          backgroundColor: '#976a4a',
        },
        gestureEnabled: false,
        availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
      },
    ],
  },
  {
    index: 14,
    name: 'SubscribedChannel',
    component: SubscribedChannel,
    drawerLabel: 'Subscribed',
    isChild: true,
    parentName: 'Kutubi Library',
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 15,
    name: 'Club',
    component: ClubChannel,
    drawerLabel: 'Club',
    isChild: true,
    parentName: 'Kutubi Library',
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 16,
    name: 'FeaturedChannel',
    component: FeaturedChannel,
    drawerLabel: 'Featured',
    isChild: true,
    parentName: 'Kutubi Library',
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 17,
    name: 'PopularFeed',
    component: PopularFeed,
    drawerLabel: 'Popular',
    isChild: true,
    parentName: 'Kutubi Library',
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 8,
    name: 'ActiveWorks',
    component: NoActivity,
    drawerLabel: 'Active Works',
    iconImage: require('../assets/side_menu/activeWork.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 9,
    name: 'Achievements',
    component: NoInterestAndHobbies,
    drawerLabel: 'Achievements',
    iconImage: require('../assets/side_menu/award.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 10,
    name: 'Shop',
    component: NoSearch,
    drawerLabel: 'Shop',
    iconImage: require('../assets/side_menu/shop.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 11,
    name: 'Orders',
    component: NoSearch,
    drawerLabel: 'Orders',
    iconImage: require('../assets/side_menu/orders.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 12,
    name: 'Chat',
    component: NoChat,
    drawerLabel: 'Chat',
    iconImage: require('../assets/side_menu/chat.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
  {
    index: 13,
    name: 'Notification',
    component: NoNotification,
    drawerLabel: 'Notification',
    iconImage: require('../assets/side_menu/notifications.png'),
    headerStyle: {
      backgroundColor: '#976a4a',
    },
    gestureEnabled: false,
    availableRoles: ['Guest', 'Parent', 'Student', 'Teacher'],
  },
];
