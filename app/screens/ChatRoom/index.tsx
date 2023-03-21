import React, { useEffect, useState, useCallback, useRef } from 'react';
import styles from './styles';
import GradientText from 'app/components/texts/GradientText';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TextStyle,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import TitleBar from 'app/components/buttons/TitleBar';
import Neumorphism from 'react-native-neumorphism';
import { ms, scale } from 'react-native-size-matters';
import { TwilioService } from 'app/services/twilio-service';
import {
  Bubble,
  Composer,
  GiftedChat,
  InputToolbar,
  Message,
  Send,
} from 'react-native-gifted-chat';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import { showMessage } from 'react-native-flash-message';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChatRoom: React.FC = props => {
  const channelId = (props && props?.route?.params?.channelId) || '';
  const username = (props && props?.route?.params?.username) || '';
  const channelName = (props && props?.route?.params?.channelName) || '';
  const profileImage = (props && props?.route?.params?.profileImage) || '';
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [messages, setMessages] = useState([]);
  const chatClientChannel = useRef();
  const chatMessagesPaginator = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [messageCoordinates, setMessageCoordinates] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const setChannelEvents = useCallback(channel => {
    chatClientChannel.current = channel;
    chatClientChannel.current.on('messageAdded', message => {
      const newMessage = TwilioService.getInstance().parseMessage(message);
      const { giftedId } = message.attributes;
      if (giftedId) {
        setMessages(prevMessages =>
          prevMessages.map(m => (m._id === giftedId ? newMessage : m)),
        );
      } else {
        setMessages(prevMessages => [newMessage, ...prevMessages]);
      }
    });
    return chatClientChannel.current;
  }, []);

  useEffect(() => {
    console.log('useEffect --------------------------');
    TwilioService.getInstance()
      .getChatClient()
      .then(client => client.getChannelBySid(channelId))
      .then(channel => {
        console.log('--------', channel);
        setChannelEvents(channel);
        return channel.getMessages();
      })
      .then(paginator => {
        chatMessagesPaginator.current = paginator;
        const newMessages = TwilioService.getInstance().parseMessages(
          paginator.items,
        );
        setMessages(newMessages);
      })
      .catch(err => showMessage({ message: err.message, type: 'danger' }));
  }, [channelId, setChannelEvents]);

  const onSend = useCallback((newMessages = []) => {
    const attributes = { giftedId: newMessages[0]._id };
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
    chatClientChannel.current
      ?.sendMessage(newMessages[0].text, attributes)
      .catch(error => {
        console.error('An error occurred:', JSON.stringify(error));
      });
  }, []);

  const [topOptions, settopOptions] = useState([
    {
      title: 'Mute Notification',
      image: require('../../assets/muteNotification.png'),
    },
    {
      title: 'Report User',
      image: require('../../assets/userReport.png'),
    },
    {
      title: 'Block User',
      image: require('../../assets/block.png'),
    },
  ]);

  const renderInputToolbar1 = props => {
    return (
      <>
        <Neumorphism
          lightColor={'#ffffff'}
          darkColor={'#A8A8A8'}
          shapeType={'flat'}
          radius={10}
          style={styles(direction).neumorphContainer1}>
          <InputToolbar
            {...props}
            containerStyle={{ backgroundColor: 'transparent' }}
          />
          <Neumorphism
            lightColor={'#ffffff'}
            darkColor={'#A8A8A8'}
            shapeType={'pressed'}
            radius={52}
            style={styles(direction).neomorphContainer2}>
            <Composer {...props} />
          </Neumorphism>
        </Neumorphism>
      </>
    );
  };

  const CustomMessage = props => {
    const right = styles(direction).rightBubble;
    const left = styles(direction).leftBubble;
    return (
      <View style={styles(direction).messageWidth}>
        <Message
          {...props}
          renderBubble={props => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{ right, left }}
                textStyle={{
                  right: {
                    color: 'white',
                  },
                  left: {
                    color: 'black',
                  },
                }}
              />
            );
          }}
        />
      </View>
    );
  };
  const handleLongPress = (context, message) => {
    const { x, y, width, height } = context.touchables[0].measure();
    setMessageCoordinates({ x, y, width, height });
    setModalVisible(true);
  };
  return (
    <>
      <GiftedChat
        messagesContainerStyle={styles(direction).messageContainer}
        messages={messages}
        renderAvatarOnTop
        alwaysShowSend
        placeholder={''}
        renderChatFooter={() => <View style={styles(direction).footerHeight} />}
        onSend={messages => onSend(messages)}
        user={{ _id: username }}
        renderInputToolbar={renderInputToolbar1}
        renderMessage={props => <CustomMessage {...props} />}
        renderAccessory={() => (
          <Image
            source={require('../../assets/plus.png')}
            style={styles(direction).addIcon}
            resizeMode="contain"
          />
        )}
        renderSend={props => (
          <Send {...props}>
            <Image
              source={require('../../assets/sendIcon.png')}
              style={styles(direction).sendIcon}
              resizeMode="contain"
            />
          </Send>
        )}
        onLongPress={handleLongPress}
      />
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles(direction).modalContainer}>
            <View
              style={[
                styles(direction).modalView,
                {
                  top: messageCoordinates.y + messageCoordinates.height,
                  left: messageCoordinates.x + messageCoordinates.width / 2,
                },
              ]}>
              <View style={styles(direction).optionContainer}>
                <View style={styles(direction).messageOptions}>
                  <Text style={styles(direction).optionText}>Forward</Text>
                  <Image
                    source={require('../../assets/replyIcon.png')}
                    style={styles(direction).icon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles(direction).messageOptions}>
                  <Text style={styles(direction).optionText}>Copy</Text>
                  <Image
                    source={require('../../assets/copyIcon.png')}
                    style={styles(direction).icon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles(direction).messageOptions}>
                  <Text style={styles(direction).optionText}>Delivered to</Text>
                  <Image
                    source={require('../../assets/checkMark.png')}
                    style={styles(direction).icon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles(direction).messageOptions}>
                  <Text style={styles(direction).optionText}>Viewed by</Text>
                  <Image
                    source={require('../../assets/viewLogo.png')}
                    style={styles(direction).icon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles(direction).messageOptions}>
                  <Text style={styles(direction).optionDelete}> Delete </Text>
                  <Image
                    source={require('../../assets/trash.png')}
                    style={styles(direction).icon}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles(direction).titleBarContainer}>
        <TitleBar
          leftComponent={
            <View style={styles(direction).topContainer}>
              <RegularButton
                onPress={() => {
                  NavigationService.goBack();
                }}
                icon={'arrow-back'}
                radius={38}
                height={38}
                width={38}
                colors={['#EBECF0', '#EBECF0']}
              />
            </View>
          }
          middleComponent={
            <View style={styles(direction).gradientTextContainer}>
              <TouchableOpacity
                onPress={() => {
                  NavigationService.navigate('ChatGroupDetail', {
                    profileImage: profileImage,
                    title: channelName,
                  });
                }}>
                <Image
                  source={{ uri: profileImage }}
                  style={styles(direction).topImage}
                />
              </TouchableOpacity>
              <GradientText
                colors={['#2AA7DD', '#2AA7DD']}
                text={channelName}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                textStyle={styles(direction).gradientTextStyle as TextStyle}
              />
            </View>
          }
          rightComponent={
            <View style={{ marginLeft: 50 }}>
              <Menu>
                <MenuTrigger>
                  <Image
                    source={require('../../assets/menu.png')}
                    style={styles(direction).menu}
                  />
                </MenuTrigger>
                <MenuOptions
                  customStyles={{
                    optionsContainer: {
                      borderRadius: scale(14),
                      width: scale(198),
                      paddingVertical: scale(10),
                      marginLeft: -6,
                      backgroundColor: '#EBEEF0',
                    },
                  }}>
                  {topOptions.map((op, i) => (
                    <MenuOption
                      onSelect={''}
                      customStyles={{
                        optionWrapper: {
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingHorizontal: scale(15),
                          paddingVertical: scale(10),
                        },
                      }}>
                      <Text style={styles(direction).optionTitleStyle}>
                        {op.title}{' '}
                      </Text>
                      <Image
                        source={op.image}
                        style={styles(direction).menuImage}
                      />
                    </MenuOption>
                  ))}
                </MenuOptions>
              </Menu>
            </View>
          }
        />
      </View>
    </>
  );
};
export default ChatRoom;
