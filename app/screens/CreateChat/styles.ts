import { Dimensions } from 'react-native';
import { ms, scale, ScaledSheet, s } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#EBEEF0',
    },
    safeAreaView: { alignSelf: 'stretch' },
    container2: {
      paddingHorizontal: '10@ms',
      marginTop: '85@s',
      width: '100%',
      height: '100%',
      paddingBottom: '25@s',

      backgroundColor: '#EBEEF0',
    },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '38@s',
      marginLeft: '20@s',
    },
    topImage: {
      width: '50@s',
      height: '50@s',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      paddingHorizontal: '30@s',
    },
    gradientTextStyle: {
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    gridViewContainer: {
      marginTop: '85@s',
      padding: '10@s',
      backgroundColor: '#EBEEF0',
    },
    gridView: {
      paddingHorizontal: '10@ms',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '138@s',
      height: '40@s',
      backgroundColor: '#EBEEF0',
    },
    chatName: {
      color: '#323A3D',
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    card: {
      height: '199@ms',
      width: '148@ms',
      backgroundColor: '#EBEEF0',
    },
    cardListStyle: {
      height: '65@s',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '14@s',
    },
    cardListStyleTwo: {
      paddingHorizontal: '20@s',
      height: '65@s',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '14@s',
    },

    imageViewContainer: {
      height: '40@ms',
      width: '40@ms',
      borderRadius: '150@ms',
    },
    chatImage: {
      height: '40@ms',
      width: '40@ms',
      borderRadius: '13@ms',
    },
    chatInfo: {
      flexDirection: 'row',

      width: '70%',
    },
    unreadImage: {
      height: '22@s',
      width: '22@s',
    },
    onlineViewContainer: {
      width: '12@s',
      height: '12@s',
      borderRadius: '12@s',
      top: '38@s',
      left: '35@s',
      position: 'absolute',
    },
    onlineImage: {
      width: '12@s',
      height: '12@s',
      position: 'absolute',
    },
    blueImageContainer: {
      height: '22@s',
      width: '22@s',
      marginTop: '15@s',
      resizeMode: 'contain',
    },
    newChatMainContainer: {
      position: 'absolute',
      justifyContent: 'flex-end',
      bottom: '50@s',
      right: '30@s',
    },
    thirdContainer: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    textTimeContainer: {
      width: '70@s',
    },
    timeText: {
      color: '#03A0E3',
      fontSize: '12@s',
      fontWeight: '400',
    },

    innerDirection: {
      paddingHorizontal: '15@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContainer: {
      marginTop: '20@s',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    neomorphListContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20@s',
    },
    neomorphMargin: { margin: '10@ms' },
    cardImage: {
      height: '118@ms',
      width: '100%',
    },
    cardListImage: {
      height: '40@ms',
      width: '40@ms',
      borderRadius: '13@ms',
      margin: '5@ms',
    },
    cardContent: {
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: '11@s',
      marginTop: '8@s',
    },
    detailsContainer: {
      alignItems: 'flex-start',
      flexDirection: 'column',
      left: '20@s',
      top: '5@s',
      width: '80%',
    },

    chatText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      top: '8@s',
      maxHeight: '16@s',
      maxWidth: '80%',
      width: '100%',
      color: '#758DAC',
    },

    menuContainer: {
      height: '44@s',
      width: '44@s',
      backgroundColor: '#EBEEF0',
      borderTopLeftRadius: '50@s',
      borderBottomLeftRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconImageStyle: {
      width: '20@s',
      height: '20@s',
    },
    unreadTextContainer: {
      borderRadius: '20@s',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'justify',
      bottom: '20@s',
    },
    unreadText: {
      color: '#EBEEF0',
      fontSize: '12@s',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '44@s',
      width: '88@s',
    },
    searchContainer: {
      backgroundColor: '#EBEEF0',
      height: '44@s',
      width: '44@s',
      borderTopRightRadius: '50@s',
      borderBottomRightRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleBarContainer: {
      position: 'absolute',
      width: '100%',
    },
    newChatContainer: {
      width: '60@s',
      height: '60@s',

      borderRadius: '60@s',
    },
    newChatImage: {
      width: '60@s',
      height: '60@s',
      resizeMode: 'contain',
    },
  });

export default styles;
