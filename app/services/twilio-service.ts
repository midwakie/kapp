/* eslint-disable prettier/prettier */
import { Client} from 'twilio-chat';


export class TwilioService {
  static serviceInstance;
  static chatClient;


  constructor() {}

  static getInstance() {
    if (!TwilioService.serviceInstance) {
      TwilioService.serviceInstance = new TwilioService();
    }
    return TwilioService.serviceInstance;
  }

  async getChatClient(twilioToken) {
    if (!TwilioService.chatClient && !twilioToken)
    {
      throw new Error('Twilio token is null or undefined');
    }
    if (!TwilioService.chatClient && twilioToken) {
      return Client.create(twilioToken).then((client) => {
        console.log('client created:-',client);
        TwilioService.chatClient = client;
        return TwilioService.chatClient;
      });
    }
    return Promise.resolve().then(() => TwilioService.chatClient);
  }

  clientShutdown() {
    console.log('clientShutdown : -');
    TwilioService.chatClient?.shutdown();
    TwilioService.chatClient = null;
  }

  addTokenListener(getToken) {
    if (!TwilioService.chatClient) {
      throw new Error('Twilio client is null or undefined');
    }
    TwilioService.chatClient.on('tokenAboutToExpire', () => {
      getToken().then(TwilioService.chatClient.updateToken);
    });

    TwilioService.chatClient.on('tokenExpired', () => {
      getToken().then(TwilioService.chatClient.updateToken);
    });
    return TwilioService.chatClient;
  }

  parseChannels(channels) {
    console.log('parseChannels : -', channels);
    return channels.map(this.parseChannel);
  }


  parseChannel(channel) {
    console.log('parseChanneldetails--------------', channel);
    const extraData = [
      { id: 'CH824c73c98d63477f853fa1ec3ead4f97', name: 'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/Ellipse_5.png' },
      { id: 'CH21da2d3900a74bc186c04931edaa22e6', name: 'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/Rectangle_135.png' },
      { id: 'CHa103696e0bf949adba7f93e7229e4d64', name: 'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/Rectangle_135.png' },
      { id: 'CH68d68e165efc48b59cb63d6449cfbf74', name: 'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/Rectangle_136.png' },
      { id: 'CHab5b0250c59b49f280c1d8ef0db37af3', name: 'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/Rectangle_137.png' },
      { id: 'CHa3fc66a371824a419326dc32f3028bc0', name: 'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/Rectangle_138.png' },
      { id: 'CHf93971871a494c4287aef960936ac89f', name: 'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/Rectangle_139.png' },
      { id: 'CH7056efefd12240d08a43e1778b59000c', name: 'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/Rectangle_139.png' },
    ];
    const extra = extraData.find(fav => fav.id === channel.sid);
    return {
      id: channel.sid,
      name: channel.friendlyName,
      createdAt: channel.dateCreated,
      updatedAt: channel.dateUpdated,
      lastMessageTime:
        channel.lastMessage?.dateCreated ??
        channel.dateUpdated ??
        channel.dateCreated,
      customAttribute: extra?.name,
    };
  }

 parseMessages(messages) {
    console.log('parseMessages : -', messages);

    return messages.map(this.parseMessage).reverse();
  }

parseMessage(message) {
    console.log('parseMessage : -', message);
    return {
      _id: message.sid,
      text: message.body,
      createdAt: message.dateCreated,
      user: {
        _id: message.author,
        name: message.author,
      },
      received: true,
    };
  }
}
