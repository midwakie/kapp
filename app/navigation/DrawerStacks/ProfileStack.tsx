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
        name="ActivitiesStats"
        component={ActivitiesStats}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Publish"
        component={Publish}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PublishNewVideo"
        component={PublishNewVideo}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PublishNewDocument"
        component={PublishNewDocument}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Manage Activities"
        component={ManageActivities}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManagePeople"
        component={ManagePeople}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManageActivitiesDetail"
        component={ManageActivitiesDetail}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Activity Filter"
        component={ActivityFilter}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeedDetail"
        component={FeedDetail}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChildFullProfile"
        component={ChildFullProfile}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditTeacherProfile"
        component={EditTeacherProfile}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Change School"
        component={ChangeSchool}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyChannel"
        component={MyChannel}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
    </LoggedInStack.Navigator>
  );
};

export default ProfileStack;