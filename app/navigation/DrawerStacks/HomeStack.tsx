import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'app/screens/Home';
import History from 'app/screens/EBooks/History';
import Biology from 'app/screens/EBooks/Biology';
import WhatsNew from 'app/screens/EBooks/WhatsNew';
import Painting from 'app/screens/EBooks/Painting';
import Sports from 'app/screens/EBooks/Sports';
import Trending from 'app/screens/EBooks/Trending';
import ContinueReading from 'app/screens/EBooks/ContinueReading';
import Favorites from 'app/screens/EBooks/Favorites';
import BookDetails from 'app/screens/BookDetails';
import GlobalSearch from 'app/screens/GlobalSearch';
import RecommendedVideos from 'app/screens/RecommendedVideos';
import BookReview from 'app/screens/BookReview';
import AddReview from 'app/screens/AddReview';
import EbookDetail from 'app/screens/EbookDetail';
import BookSeries from 'app/screens/BookSeries';
import FinishBook from 'app/screens/FinishBook';
import EBookReader from 'app/screens/EbookReader';
import BookShelf from 'app/screens/BookShelf';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions: any = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerRight: () => <ThemeController />,
  headerShown: false,
};

const HomeStack = () => {
  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="LoggedInNavigator"
        component={Home}
        options={homeOptions}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Biology"
        component={Biology}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Painting"
        component={Painting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sports"
        component={Sports}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WhatsNew"
        component={WhatsNew}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Trending"
        component={Trending}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Continue Reading"
        component={ContinueReading}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EbookDetail"
        component={EbookDetail}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GlobalSearch"
        component={GlobalSearch}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RecommendedVideos"
        component={RecommendedVideos}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Book Review"
        component={BookReview}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Review"
        component={AddReview}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookSeries"
        component={BookSeries}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FinishBook"
        component={FinishBook}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EBookReader"
        component={EBookReader}
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

export default HomeStack;
