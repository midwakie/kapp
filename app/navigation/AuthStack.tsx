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
import ChildHome from 'app/screens/ChildHome';
import MyFeeds from 'app/screens/MyFeeds';
import BookReview from 'app/screens/BookReview';
import ChildFullProfile from 'app/screens/ChildFullProfile';
import FeedDetail from 'app/screens/FeedDetail';
import RecommendedVideos from 'app/screens/RecommendedVideos';
import ManageActivities from 'app/screens/ManageActivities';
import { ILoading } from 'app/models/reducers/loading';
import History from 'app/screens/EBooks/History';
import ChildProfile from 'app/screens/ChildProfile';
import Home from 'app/screens/Home';
import ChildFullProfileNoChannel from 'app/screens/ChildFullProfile-NoChannel';
import ManagePeople from 'app/screens/ManagePeople';
import AddReview from 'app/screens/AddReview';
import ActivityFilter from 'app/screens/ActivityFilter';
import ParentProfileDetail from 'app/screens/ParentProfileDetail';
import TeachersProfile from 'app/screens/TeachersProfile';
import ClubChannel from 'app/screens/ClubChannel';
import PublishNewDocument from 'app/screens/PublishNewDocument';
import TestHardness from 'app/screens/TestHardness';
import GlobalSearch from 'app/screens/GlobalSearch';
import SubscribedChannel from 'app/screens/SubscribedChannel';
import ManageActivitiesDetail from 'app/screens/ManageActivitiesDetail';
import PublishNewVideo from 'app/screens/PublishNewVideo';
import AssignActivity from 'app/screens/AssignActivity';
import Child from 'app/screens/Child';
import FinishBook from 'app/screens/FinishBook';
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
        name="Welcome"
        component={Landing}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Child"
        component={Child}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Child Account"
        component={ChildAccount}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Child Profile"
        component={ChildProfile}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyChannel"
        component={MyChannel}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActivitiesStats"
        component={ActivitiesStats}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyFeeds"
        component={MyFeeds}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TeachersProfile"
        component={TeachersProfile}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PublishNewVideo"
        component={PublishNewVideo}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AssignActivity"
        component={AssignActivity}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeedDetailReport"
        component={FeedDetailReport}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeedDetail"
        component={FeedDetail}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CreateChannel"
        component={CreateChannel}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign In"
        component={SignIn}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Link Child"
        component={LinkChild}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Delivery Address"
        component={DeliveryAddress}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Change School"
        component={ChangeSchool}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verify Email"
        component={VerifyEmail}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verify Mobile"
        component={VerifyMobile}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AvatarCreation"
        component={AvatarCreation}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AvatarModifier"
        component={AvatarModifier}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AccountAction"
        component={AccountAction}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditTeacherProfile"
        component={EditTeacherProfile}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookDetails"
        component={BookDetails}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RewardPointFilter"
        component={RewardPointFilter}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HobbiesAndInterest"
        component={HobbiesAndInterest}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Publish"
        component={Publish}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Book Review"
        component={BookReview}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RecommendedVideos"
        component={RecommendedVideos}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Manage Activities"
        component={ManageActivities}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChildFullProfile"
        component={ChildFullProfile}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManagePeople"
        component={ManagePeople}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Review"
        component={AddReview}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChildFullProfileNoChannel"
        component={ChildFullProfileNoChannel}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Activity Filter"
        component={ActivityFilter}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ParentProfileDetail"
        component={ParentProfileDetail}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PublishNewDocument"
        component={PublishNewDocument}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TestHardness"
        component={TestHardness}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SubscribedChannel"
        component={SubscribedChannel}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GlobalSearch"
        component={GlobalSearch}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Club Channel"
        component={ClubChannel}
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
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManageActivitiesDetail"
        component={ManageActivitiesDetail}
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
