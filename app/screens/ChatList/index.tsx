import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import VerticalLine from 'app/components/lines/VerticalLine';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextStyle,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import useDeviceOrientation from 'app/hooks/useDeviceOrientation';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import { useSelector } from 'react-redux';
import { getToken } from 'app/services/twilio-api';
import { TwilioService } from 'app/services/twilio-service';
import { DrawerActions } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { Member } from 'twilio-chat';

interface IState {
  currentCustomerReducer: ICurrentCustomer;
}

const ChatList: React.FC = (props: any) => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const channelPaginator = useRef();
  const [channel, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);

  const role = useSelector(
    (state: IState) => state.currentCustomerReducer.role,
  );

  let identity = '';
  if (role === 'Student') {
    identity = 'Student1';
  } else if (role === 'Teacher') {
    identity = 'Teacher1';
  } else if (role === 'Parent') {
    identity = 'Parent1';
  }
  const username = identity;

  useEffect(() => {
    getToken(username).then(function (token) {
      TwilioService.getInstance().getChatClient(token);
    });

    fetch(`http://192.168.1.7:3001/channels/${identity}`)
      .then(response => response.json())
      .then(Channles => {
        setChannels(Channles);
      });
  }, [identity, username]);

  const CardListItem = ({ book }: any) => {
    return (
      <View style={styles(direction).neomorphContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('ChatRoom', {
              channelName: book.friendlyName,
              channelId: book.sid,
              username: identity,
              profileImage: book.customAttribute,
            });
          }}>
          <Neumorphism
            style={styles(direction).neomorphMargin}
            lightColor={'#ffffff'}
            darkColor={'#C6CEDA'}
            shapeType={'flat'}
            radius={scale(14)}>
            <View style={styles(direction).cardListStyleTwo}>
              <View style={styles(direction).chatInfo}>
                <View style={styles(direction).imageViewContainer}>
                  <Image
                    source={{ uri: book.customAttribute }}
                    style={styles(direction).chatImage}
                  />
                  {book.state === true && (
                    <View style={styles(direction).onlineViewContainer}>
                      <Image
                        source={require('../../assets/chatListOnline.png')}
                        style={styles(direction).onlineImage}
                      />
                    </View>
                  )}
                </View>
                <View style={styles(direction).detailsContainer}>
                  <Text style={styles(direction).chatName}>
                    {book.friendlyName}
                  </Text>
                  <Text style={styles(direction).chatText}>
                    {book.lastMessage}
                  </Text>
                </View>
              </View>
              <View style={styles(direction).thirdContainer}>
                <Text style={styles(direction).timeText}>
                  {book.MessageTime}
                </Text>
                <View style={styles(direction).blueImageContainer}>
                  {book.count && (
                    <Image
                      source={require('../../assets/chatListUnread.png')}
                      style={styles(direction).unreadImage}
                    />
                  )}
                  <View style={styles(direction).unreadTextContainer}>
                    <Text style={styles(direction).unreadText}>
                      {book.count}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Neumorphism>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <ScrollView style={styles(direction).container} bounces={false}>
          <View style={styles(direction).container2}>
            <View style={styles(direction).cardContainer}>
              <FlatList
                numColumns={1}
                data={channel}
                key={`FlatList-${Date.now()}`}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return <CardListItem book={item} />;
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          leftComponent={
            <View style={styles(direction).topContainer}>
              <Image
                source={require('../../assets/ParentShop.png')}
                style={styles(direction).topImage}
              />
            </View>
          }
          middleComponent={
            <View style={styles(direction).gradientTextContainer}>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={t('Chats')}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
            </View>
          }
          rightComponent={
            <Neumorphism
              lightColor={'#ffffff'}
              darkColor={'#A8A8A8'}
              shapeType={'flat'}
              radius={52}>
              <View style={styles(direction).iconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    props?.navigation.dispatch(DrawerActions.toggleDrawer());
                  }}>
                  <View style={styles(direction).menuContainer}>
                    <Image
                      source={require('../../assets/childHomeMenu.png')}
                      style={styles(direction).iconImageStyle}
                    />
                  </View>
                </TouchableOpacity>
                <VerticalLine
                  stroke={1}
                  opacity={0.3}
                  height={'100%'}
                  color={'#A8A8A8'}
                />
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.navigate('GlobalSearch');
                  }}>
                  <View style={styles(direction).searchContainer}>
                    <Image
                      source={require('../../assets/searchIcon.png')}
                      style={styles(direction).iconImageStyle}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Neumorphism>
          }
        />
      </View>

      <View style={styles(direction).newChatMainContainer}>
        <View style={styles(direction).newChatContainer}>
          <TouchableOpacity
            onPress={() => NavigationService.navigate('CreateChat')}>
            <Image
              source={require('../../assets/chatListNewChat.png')}
              style={styles(direction).newChatImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default ChatList;
