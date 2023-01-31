import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GlobalSearch from 'app/screens/GlobalSearch';
import { useSelector } from 'react-redux';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { ROLES } from 'app/config/role-config';
import MyFeeds from 'app/screens/MyFeeds';
import FeedDetail from 'app/screens/FeedDetail';
import MyChannel from 'app/screens/MyChannel';
import MyStudentList from 'app/screens/MyStudentList';
import ClassFilter from 'app/screens/ClassFilter';
import ChildFullProfile from 'app/screens/ChildFullProfile';
import Child from 'app/screens/Child';
import AccountAction from 'app/screens/AccountAction';
import EditChildProfile from 'app/screens/EditChildProfile';
import ChangeSchool from 'app/screens/ChangeSchool';
import HobbiesAndInterest from 'app/screens/HobbiesAndInterests';
import ManageActivitiesDetail from 'app/screens/ManageActivitiesDetail';
import ManagePeople from 'app/screens/ManagePeople';
import ManageActivities from 'app/screens/ManageActivities';
import PublishNewDocument from 'app/screens/PublishNewDocument';
import PublishNewVideo from 'app/screens/PublishNewVideo';
import Publish from 'app/screens/Publish';
import ActivitiesStats from 'app/screens/ActivityStatus';
import ActivityFilter from 'app/screens/ActivityFilter';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();
interface IState {
  currentCustomerReducer: ICurrentCustomer;
}
const ChildStack = () => {
  const selectedRole = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );
  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="Child"
        component={Child}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AccountAction"
        component={AccountAction}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          //   animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
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
        name="MyChannel"
        component={MyChannel}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
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
        name="HobbiesAndInterest"
        component={HobbiesAndInterest}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          //   animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
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
    </LoggedInStack.Navigator>
  );
};

export default ChildStack;
