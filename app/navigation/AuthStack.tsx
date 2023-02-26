/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { ILoginState } from 'app/models/reducers/login';
import Landing from 'app/screens/Landing';
import SignUp from 'app/screens/SignUp';
import SignIn from 'app/screens/SignIn';
import SelectRole from 'app/screens/SelectRole';
import VerifyEmail from 'app/screens/VerifyEmail';
import VerifyMobile from 'app/screens/VerifyMobile';
import NewPassword from 'app/screens/NewPasswordVerification';
import AvatarCreation from 'app/screens/AvatarCreation';
import ForgotPassword from 'app/screens/ForgotPassword';
import ChangePassword from 'app/screens/ChangePassword';
import { useTranslation } from 'react-i18next';
import { retrieveSelectedLanguage } from 'app/utils/storageUtils';
import AvatarModifier from 'app/screens/AvatarModifier';
import HobbiesAndInterest from 'app/screens/HobbiesAndInterests';
import AccountAction from 'app/screens/AccountAction';
import LinkChild from 'app/screens/LinkChild';
import ChangeSchool from 'app/screens/ChangeSchool';
import DeliveryAddress from 'app/screens/DeliveryAddress';
import CreateChannel from 'app/screens/CreateChannel';
import MyChannel from 'app/screens/MyChannel';
import BookDetails from 'app/screens/BookDetails';
import ChildAccount from 'app/screens/ChildAccount';
import ActivitiesStats from 'app/screens/ActivityStatus';
import FeedDetailReport from 'app/screens/FeedDetailReport';
import Publish from 'app/screens/Publish';
import RewardPointFilter from 'app/screens/RewardPointFilter';
import EditTeacherProfile from 'app/screens/EditTeacherProfile';
import MyFeeds from 'app/screens/MyFeeds';
import BookReview from 'app/screens/BookReview';
import ChildFullProfile from 'app/screens/ChildFullProfile';
import FeedDetail from 'app/screens/FeedDetail';
import EditChildProfile from 'app/screens/EditChildProfile';
import RecommendedVideos from 'app/screens/RecommendedVideos';
import ManageActivities from 'app/screens/ManageActivities';
import { ILoading } from 'app/models/reducers/loading';
import ChildProfile from 'app/screens/ChildProfile';
import Home from 'app/screens/Home';
import SuggestionsForYou from 'app/screens/SuggestionsForYou';
import ClassFilter from 'app/screens/ClassFilter';
import MyStudentList from 'app/screens/MyStudentList';
import ManagePeople from 'app/screens/ManagePeople';
import AddReview from 'app/screens/AddReview';
import ActivityFilter from 'app/screens/ActivityFilter';
import ParentProfileDetail from 'app/screens/ParentProfileDetail';
import TeachersProfile from 'app/screens/TeachersProfile';
import CreateActivity from 'app/screens/CreateActivity';
import ClubChannel from 'app/screens/ClubChannel';
import PublishNewDocument from 'app/screens/PublishNewDocument';
import TestHardness from 'app/screens/TestHardness';
import GlobalSearch from 'app/screens/GlobalSearch';
import SubscribedChannel from 'app/screens/SubscribedChannel';
import ManageActivitiesDetail from 'app/screens/ManageActivitiesDetail';
import PublishNewVideo from 'app/screens/PublishNewVideo';
import AssignActivity from 'app/screens/AssignActivity';
import Child from 'app/screens/Child';
import EbookDetail from 'app/screens/EbookDetail';
import PopularFeed from 'app/screens/PopularFeed';
import FeedPostDetail from 'app/screens/FeedPostDetail';
import FeaturedChannel from 'app/screens/FeaturedChannel';
import BookSeries from 'app/screens/BookSeries';
import FinishBook from 'app/screens/FinishBook';
import SelectEBook from 'app/screens/SelectEBook';
import PublishDocument from 'app/screens/PublishDocument';
import ContinueReading from 'app/screens/EBooks/ContinueReading';
import WhatsNew from 'app/screens/EBooks/WhatsNew';
import Favorites from 'app/screens/EBooks/Favorites';
import MakePayment from 'app/screens/MakePayment';
import CardPayment from 'app/screens/CardPayment';
import ShoppingCart from 'app/screens/ShoppingCart';
import ChatList from 'app/screens/ChatList';
import CreateChat from 'app/screens/CreateChat';
import CreateGroup from 'app/screens/CreateGroup';
import Shop from 'app/screens/Shop';

import ActivitiesWorkDetail from 'app/screens/ActivitiesWorkDetail';
import ToyDetail from 'app/screens/ToyDetail';
import OrderDetail from 'app/screens/OrderDetail';
import OrderList from 'app/screens/OrderList';
import RewardPointHistory from 'app/screens/RewardPointHistory';
import ActivitiesWork from 'app/screens/ActivitiesWork';
import ChatGroupDetail from 'app/screens/ChatGroupDetail';
const Stack = createStackNavigator();
const AuthenticationStack = createStackNavigator();
interface IState {
  loginReducer: ILoginState;
  loadingReducer: ILoading;
}

const AuthStack = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  const initialRouteName = useSelector(
    (state: IState) => state.loadingReducer.initialRouteName,
  );
  const { i18n } = useTranslation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setLanguage = async () => {
    let lang: string = (await retrieveSelectedLanguage()) as string;
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLanguage();
  }, []);

  return (
    <AuthenticationStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Select Role"
        component={SelectRole}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Landing}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActivitiesWorkDetail"
        component={ActivitiesWorkDetail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Child"
        component={Child}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuggestionsForYou"
        component={SuggestionsForYou}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditChildProfile"
        component={EditChildProfile}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Child Account"
        component={ChildAccount}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateGroup"
        component={CreateGroup}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateChat"
        component={CreateChat}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Child Profile"
        component={ChildProfile}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActivitiesStats"
        component={ActivitiesStats}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyFeeds"
        component={MyFeeds}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TeachersProfile"
        component={TeachersProfile}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PublishNewVideo"
        component={PublishNewVideo}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AssignActivity"
        component={AssignActivity}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeedDetailReport"
        component={FeedDetailReport}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeedDetail"
        component={FeedDetail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EbookDetail"
        component={EbookDetail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CreateChannel"
        component={CreateChannel}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign In"
        component={SignIn}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Link Child"
        component={LinkChild}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Delivery Address"
        component={DeliveryAddress}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Change School"
        component={ChangeSchool}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verify Email"
        component={VerifyEmail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verify Mobile"
        component={VerifyMobile}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AvatarCreation"
        component={AvatarCreation}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AvatarModifier"
        component={AvatarModifier}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AccountAction"
        component={AccountAction}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditTeacherProfile"
        component={EditTeacherProfile}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookDetails"
        component={BookDetails}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RewardPointFilter"
        component={RewardPointFilter}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HobbiesAndInterest"
        component={HobbiesAndInterest}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Publish"
        component={Publish}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Book Review"
        component={BookReview}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Continue Reading"
        component={ContinueReading}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WhatsNew"
        component={WhatsNew}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RecommendedVideos"
        component={RecommendedVideos}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Manage Activities"
        component={ManageActivities}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChildFullProfile"
        component={ChildFullProfile}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManagePeople"
        component={ManagePeople}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Review"
        component={AddReview}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Activity Filter"
        component={ActivityFilter}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ParentProfileDetail"
        component={ParentProfileDetail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateActivity"
        component={CreateActivity}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PublishNewDocument"
        component={PublishNewDocument}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TestHardness"
        component={TestHardness}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SubscribedChannel"
        component={SubscribedChannel}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GlobalSearch"
        component={GlobalSearch}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Club Channel"
        component={ClubChannel}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ManageActivitiesDetail"
        component={ManageActivitiesDetail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PopularFeed"
        component={PopularFeed}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeedPostDetail"
        component={FeedPostDetail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeaturedChannel"
        component={FeaturedChannel}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectEBook"
        component={SelectEBook}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookSeries"
        component={BookSeries}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PublishDocument"
        component={PublishDocument}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClassFilter"
        component={ClassFilter}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyStudentList"
        component={MyStudentList}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MakePayment"
        component={MakePayment}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FinishBook"
        component={FinishBook}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ToyDetail"
        component={ToyDetail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RewardPointHistory"
        component={RewardPointHistory}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActivitiesWork"
        component={ActivitiesWork}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatGroupDetail"
        component={ChatGroupDetail}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CardPayment"
        component={CardPayment}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthStack;
