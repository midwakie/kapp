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
      paddingBottom: '40@s',
      backgroundColor: '#EBEEF0',
    },

    searchIcon: {
      right: '20@s',
    },

    inputTextContainer: {
      width: '100%',
      marginTop: '40@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    createGroupMainContainer: {
      flexDirection: 'row-reverse',
      right: '15@s',

      top: '20@s',
      marginBottom: '20@s',
    },
    createGroupContainer: {
      width: '140@s',
      height: '40@s',
      borderRadius: '8@s',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '10@s',
    },
    groupIcon: {
      width: '19@s',
      height: '20@s',
      resizeMode: 'contain',
    },
    createGroupText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      fontSize: '14@s',
      color: '#03A0E3',
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
      height: '199@s',
      width: '148@s',
      backgroundColor: '#EBEEF0',
    },
    cardListStyleTwo: {
      paddingHorizontal: '20@s',
      height: '70@s',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '14@s',
    },
    cardListStyleLast: {
      paddingHorizontal: '10@s',
      height: '70@s',
      width: Dimensions.get('window').width - scale(40),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: '14@s',
    },

    imageViewContainer: {
      height: '40@s',
      width: '40@s',
      borderRadius: '40@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chatImage: {
      height: '40@s',
      width: '40@s',
      borderRadius: '40@s',
      resizeMode: 'center',
    },
    plusIcon: {
      width: '18@s',
      height: '18@s',
    },
    addAccountText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: '14@s',
      left: '10@s',
      fontFamily: 'Nunito-Regular',
    },
    refreshIcon: {
      height: '24@s',
      width: '17@s',
    },
    exitIcon: {
      height: '24@s',
      width: '24@s',
    },
    rightContainer: {
      height: '44@s',

      width: '72@s',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    nameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    chatInfo: {
      flexDirection: 'row',
      width: '70%',
    },
    redDotIcon: {
      width: '8@s',
      height: '8@s',
      left: '5@s',
    },
    unreadImage: {
      height: '22@s',
      width: '22@s',
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

    innerDirection: {
      paddingHorizontal: '15@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContainer: {
      marginTop: '40@s',
      justifyContent: 'center',
      alignItems: 'center',
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
      left: '14@s',
      top: '5@s',
      width: '80%',
    },

    chatText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
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
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      marginLeft: '20@s',
    },
    topImage: {
      width: '49@s',
      height: '49@s',
    },
    topIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '44@s',
      width: '88@s',
    },
  });

export default styles;
