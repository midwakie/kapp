import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GlobalSearch from 'app/screens/GlobalSearch';
import ParentProfileDetail from 'app/screens/ParentProfileDetail';
import ChildFullProfile from 'app/screens/ChildFullProfile';
import TeachersProfile from 'app/screens/TeachersProfile';
import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { ROLES } from 'app/config/role-config';
import EditChildProfile from 'app/screens/EditChildProfile';
import ActivitiesStats from 'app/screens/ActivityStatus';
import Publish from 'app/screens/Publish';
import PublishNewVideo from 'app/screens/PublishNewVideo';
import PublishNewDocument from 'app/screens/PublishNewDocument';
import ManageActivities from 'app/screens/ManageActivities';
import ManagePeople from 'app/screens/ManagePeople';
import ManageActivitiesDetail from 'app/screens/ManageActivitiesDetail';
import ActivityFilter from 'app/screens/ActivityFilter';
import FeedDetail from 'app/screens/FeedDetail';
import EditTeacherProfile from 'app/screens/EditTeacherProfile';
import ChangeSchool from 'app/screens/ChangeSchool';
import MyChannel from 'app/screens/MyChannel';
import ClassFilter from 'app/screens/ClassFilter';
import CreateChannel from 'app/screens/CreateChannel';
import CreateActivity from 'app/screens/CreateActivity';
import AddReview from 'app/screens/AddReview';
import EbookDetail from 'app/screens/EbookDetail';
import ActivitiesWork from 'app/screens/ActivitiesWork';
import ActivitiesWorkDetail from 'app/screens/ActivitiesWorkDetail';
import RewardPointHistory from 'app/screens/RewardPointHistory';
import RewardPointFilter from 'app/screens/RewardPointFilter';
import BookShelf from 'app/screens/BookShelf';
import EditParentProfile from 'app/screens/EditParentProfile';
import HobbiesAndInterest from 'app/screens/HobbiesAndInterests';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const ProfileStack = () => {
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  return (
    <LoggedInStack.Navigator>
      {selectedRole === ROLES.PARENT && (
        <Stack.Screen
          name="ParentProfileDetail"
          component={ParentProfileDetail}
          options={{
            headerShown: false,
          }}
        />
      )}
      {selectedRole === ROLES.STUDENT && (
        <Stack.Screen
          name="ChildFullProfile"
          component={ChildFullProfile}
          options={{
            headerShown: false,
          }}
        />
      )}
      {selectedRole === ROLES.TEACHER && (
        <Stack.Screen
          name="TeachersProfile"
          component={TeachersProfile}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Stack.Screen
        name="GlobalSearch"
        component={GlobalSearch}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditChildProfile"
        component={EditChildProfile}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditParentProfile"
        component={EditParentProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActivitiesStats"
        component={ActivitiesStats}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Publish"
        component={Publish}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PublishNewVideo"
        component={PublishNewVideo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PublishNewDocument"
        component={PublishNewDocument}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Manage Activities"
        component={ManageActivities}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManagePeople"
        component={ManagePeople}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManageActivitiesDetail"
        component={ManageActivitiesDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HobbiesAndInterest"
        component={HobbiesAndInterest}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Activity Filter"
        component={ActivityFilter}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeedDetail"
        component={FeedDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditTeacherProfile"
        component={EditTeacherProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Change School"
        component={ChangeSchool}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyChannel"
        component={MyChannel}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateChannel"
        component={CreateChannel}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateActivity"
        component={CreateActivity}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EbookDetail"
        component={EbookDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Review"
        component={AddReview}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActivitiesWork"
        component={ActivitiesWork}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActivitiesWorkDetail"
        component={ActivitiesWorkDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RewardPointHistory"
        component={RewardPointHistory}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RewardPointFilter"
        component={RewardPointFilter}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookShelf"
        component={BookShelf}
        options={{
          headerShown: false,
        }}
      />
    </LoggedInStack.Navigator>
  );
};

export default ProfileStack;
