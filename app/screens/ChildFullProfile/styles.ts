import { Dimensions } from 'react-native';
import { s, scale, ScaledSheet } from 'react-native-size-matters';

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
    container2: {
      paddingHorizontal: '20@s',
      width: '100%',
      paddingBottom: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '105@s',
    },
    iconContainer1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // height: '44@s',
      width: '88@s',
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
    searchContainer: {
      backgroundColor: '#EBEEF0',
      height: '44@s',
      width: '44@s',
      borderTopRightRadius: '50@s',
      borderBottomRightRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconImageStyle: {
      width: '20@s',
      height: '20@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    labelTextContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      marginBottom: 20,
      width: width - 60,
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // height: '22@s',
    },
    imageContainer: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      // bottom: '80@s',
      width: '100@s',
      height: '100@s',
    },
    imageContainer2: {
      height: '30@s',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '30@s',
      position: 'absolute',
      bottom: '10@s',
      right: '15@s',
    },
    avatarImage: { width: '75@s', height: '90@s', resizeMode: 'cover' },
    editAvatarImage: { width: '22@s', height: '22@s', resizeMode: 'cover' },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20 : undefined,
      right: direction === 'rtl' ? undefined : 20,
      position: 'absolute',
    },
    neomorphContainer: {
      marginTop: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },

    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    rectangle: {
      width: width - s(40),
      height: '480@s',
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
      paddingHorizontal: s(10),
      paddingVertical: '10@s',
    },
    marginView: { marginBottom: '20@s' },
    marginViewRow: {
      marginLeft: '20@s',
    },
    marginViewRow1: {
      marginLeft: '10@s',
    },
    statContainer: {
      width: '275@s',
      height: '41@s',
      borderRadius: '9@s',
      alignItems: 'center',
      paddingHorizontal: '20@s',
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: '#EBEEF0',
    },

    coinContainer2: {
      width: '75@ms',
      height: '29@ms',
      borderRadius: 50,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '12@ms',
      flexDirection: 'row',
      backgroundColor: '#EBEEF0',
    },
    coinContainer3: {
      width: '75@ms',
      height: '29@ms',
      borderRadius: 50,

      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '12@ms',
      flexDirection: 'row',
      backgroundColor: '#EBEEF0',
    },
    coinImage: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '14@ms',
      width: '14@ms',
    },
    coinText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#455157',
    },
    coinContainer1: {
      flexDirection: 'row',
      height: '29@s',
      marginTop: '5@s',
      width: '100%',
      marginBottom: 10,
    },
    editButton: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: '15@s',
      marginRight: '30@s',
    },
    editText: {
      color: '#FB595D',
      fontSize: '12@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },

    changeText1: {
      color: '#03A0E3',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
    },
    innerContainerOne: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    mainTextContainer: {
      lineHeight: '19@s',
      bottom: '10@s',
      // marginLeft: '100@s',
    },
    nameText: {
      color: '#455157',
      fontSize: '14@s',
      fontWeight: '700',

      fontFamily: 'Nunito-regular',
      marginTop: '2@s',
    },
    schoolText: {
      fontSize: '14@s',
      fontWeight: '600',

      fontFamily: 'Nunito-regular',
      color: '#758DAC',
      marginTop: '2@s',
    },
    ageText: {
      fontSize: '14@s',

      fontWeight: '600',
      fontFamily: 'Nunito-regular',
      color: '#758DAC',
    },

    iconContainer: {
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
      marginVertical: '17@s',
    },
    iconMainContainer: {
      flexDirection: 'row',
      height: '30@s',
      justifyContent: 'flex-end',
      marginLeft: '28@s',
    },
    icon1: {
      height: '25@s',
      width: '25@s',
      borderRadius: '25@s',
    },
    icons: {
      height: '25@s',
      width: '25@s',
      borderRadius: '25@s',
      marginLeft: '-9@s',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    imageRound: { width: '100%', height: '100%', resizeMode: 'cover' },

    plusFourImage: {
      position: 'absolute',
      alignSelf: 'center',
      resizeMode: 'contain',
      width: '14@s',
      height: '14@s',
    },
    rectangle2: {
      width: width - s(40),
      flexDirection: 'row',
      height: '163@s',
      borderRadius: '15@s',
      backgroundColor: '#EBEEF0',
      paddingHorizontal: '30@s',
      alignItems: 'center',
    },
    scanTextContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '110@s',
    },

    scanText: {
      height: '22@s',
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '800',
    },
    qrImage: {
      width: '100@s',
      height: '100@s',
      resizeMode: 'contain',
      marginLeft: '40@s',
    },
    rectangle3: {
      width: width - scale(40),
      height: '167@s',
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
      alignItems: 'flex-start',
      paddingHorizontal: '20@s',
    },
    activityTextContainer: {
      justifyContent: 'center',
      marginTop: '20@s',
      marginBottom: '25@ms',
      flexDirection: 'row',
    },
    activityText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '800',
      lineHeight: '22@s',
    },
    text: {
      fontSize: '12@s',
      fontFamily: 'Nunito-Regular',
      width: '43@s',
      fontWeight: '600',
      color: '#455157',
    },
    materialIconView: {
      marginLeft: '34@s',
    },
    insideText1: {
      color: '#84BD47',
      fontWeight: '600',
      textAlign: 'center',
      fontSize: '15@s',
      fontFamily: 'Nunito-Regular',
      position: 'absolute',
      alignSelf: 'center',
    },
    insideText2: {
      color: '#EC4D61',
      fontWeight: '600',
      fontSize: '15@s',
      textAlign: 'center',
      fontFamily: 'Nunito-Regular',
      position: 'absolute',
      alignSelf: 'center',
    },
    insideText3: {
      color: '#03A0E3',
      fontWeight: '600',
      fontSize: '15@s',
      textAlign: 'center',
      fontFamily: 'Nunito-Regular',
      position: 'absolute',
      alignSelf: 'auto',
    },
    progressChartContainer: {
      flexDirection: 'row',
      width: '100%',
      right: '7@ms',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    progressChartContainer1: {
      alignItems: 'center',
      height: '68@s',
      width: '68@s',
      justifyContent: 'center',
    },
    progressChartContainer2: {
      alignItems: 'center',
      height: '91@s',
      width: '103@s',
      justifyContent: 'center',
    },
    textContainer: {
      flexDirection: 'row',
      width: '100%',
      right: '7@ms',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    activityText1: {
      color: '#455157',
      alignItems: 'center',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      justifyContent: 'center',
      fontSize: '12@s',
    },
    rectangle4: {
      width: width - s(40),
      height: '313@s',
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
      justifyContent: 'center',
      paddingLeft: '5@s',
      paddingEnd: '5@s',
    },
    myBadgesContainer: {
      height: '214@s',
      width: width - s(40),
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
      justifyContent: 'center',
      paddingLeft: '5@s',
      paddingEnd: '5@s',
    },
    myBadgesSubContainer: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      top: '40@s',
    },
    bookShelfContainer: {
      height: '199@s',
      width: '123@s',
      borderRadius: '14@s',
      backgroundColor: '#EBEEF0',
    },
    bookShelfMainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
    },
    bookShelfTextContainer: {
      marginBottom: '10@s',
      marginRight: '18@s',
      flexDirection: 'row',
    },
    bookShelfText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      fontSize: '16@s',
      height: '22@s',
      width: '84@s',
      marginLeft: '20@s',
      marginRight: '165@s',
    },
    badgeText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      fontSize: '16@s',
      height: '22@s',
      width: '84@s',
      marginLeft: '20@s',
    },
    teacherText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@s',
      height: '22@s',
      width: '172@s',
      color: '#758DAC',
      marginLeft: '20@s',
    },
    bookShelfImage1: {
      resizeMode: 'cover',
      height: '199@s',
      width: '123@s',
    },
    walkThroughContainer: {
      // marginBottom: 28,
      height: 260,
    },
    walkThroughContainer2: {
      // marginBottom: 28,
      height: 350,
    },
    paginationContainer: {
      marginTop: 10,
      justifyContent: 'center',
    },
    paginationContainerPdf: {
      marginTop: 10,
      justifyContent: 'center',
      bottom: '10@s',
    },
    paginationDots: {
      height: '16@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    paginationDotsBadge: {
      height: '16@s',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: '40@s',
    },
    dot: {
      width: '24@s',
      height: '24@s',
      marginHorizontal: 4,
    },
    mainContent: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    mainContent2: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },

    image: {
      resizeMode: 'contain',
      height: '199@s',
      width: '133@s',
    },
    badge: {
      resizeMode: 'contain',
      height: '199@s',
      width: '100@s',
    },
    bookNameContainer: {
      position: 'absolute',
      alignItems: 'flex-start',
      justifyContent: 'center',
      left: '35@s',
      bottom: '30@s',
    },
    bookNameContainer2: {
      position: 'absolute',
      bottom: '30@s',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      right: '12@s',
      width: '120@s',
      marginStart: '55@s',
      textAlign: 'center',
    },

    bookTitle: {
      color: '#EBEEF0',
      fontWeight: '600',
      fontSize: '14@s',
      textAlign: 'auto',
      fontFamily: 'Nunito-regular',
    },

    bookPrice: {
      color: '#03A0E3',
      fontWeight: '600',
      fontSize: '14@s',
      top: '5@s',
      fontFamily: 'Nunito-regular',
    },
    bookAuthor: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: '12@s',
      fontFamily: 'Nunito-regular',
      marginStart: '11@s',
      marginEnd: '11@s',
      marginTop: '10@s',
    },
    rectangle5: {
      width: width - s(40),
      height: '356@s',
      borderRadius: '15@s',
      backgroundColor: '#EBEEF0',
    },
    rectangleNoChannel: {
      width: width - s(40),

      height: '263@s',
      borderRadius: '15@s',
      backgroundColor: '#EBEEF0',
      alignItems: 'center',
    },
    noChannelText: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      color: '#455157',
      top: '60@s',
    },
    buttonContainer: {
      top: '80@s',
    },
    noChannelImage: {
      height: '90@s',
      width: '100@ms',
      resizeMode: 'contain',
      top: '50@s',
    },
    subContainer: {
      width: '100%',
      top: '20@s',
    },
    subContainer2: {
      width: '100%',
      flexDirection: 'row',
    },
    channelImageContainer: {
      alignItems: 'flex-start',
    },
    channelImage: {
      height: '60@s',
      width: '60@s',
      marginLeft: '20@s',
      marginTop: '20@s',
      radius: '150@s',
    },
    channelTextContainer: {
      alignItems: 'flex-start',
    },
    channelNameText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',

      fontWeight: '700',
      color: '#455157',
      marginLeft: '23@s',
      marginTop: '22@s',
    },
    channelSubscribersText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      color: '#03A0E3',
      marginLeft: '23@s',
      marginTop: '3@s',
    },
    channelVideosText: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      color: '#455157',
      marginLeft: '23@s',
      marginTop: '3@s',
    },
    subContainerText: {
      width: '100%',
    },
    moreVertIcon: {
      marginTop: '20@s',

      marginLeft: '55@s',
    },
    rectangle5SubContainer: {
      width: '285@s',
      height: '229@s',
      borderRadius: '14@s',
      backgroundColor: '#EBEEF0',
      borderColor: '#758DAC',
      borderWidth: '0.5@s',
      marginTop: '20@s',
      justifyContent: 'center',

      alignItems: 'center',
      alignSelf: 'center',
    },
    pdfSubContainer: {
      width: '285@s',
      height: '229@s',
      borderRadius: '14@s',
      backgroundColor: '#EBEEF0',
      borderColor: '#758DAC',
      borderWidth: '0.5@s',
      marginTop: '35@s',
      justifyContent: 'center',

      alignItems: 'center',
      alignSelf: 'center',
    },
    pdfImageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    videoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    pdfImage: {
      resizeMode: 'contain',
      width: '247@s',
      height: '114@s',
      marginTop: '14@s',
    },
    videoImage: {
      resizeMode: 'contain',
      width: '247@s',
      height: '114@s',
    },
    pdfLogoImage: {
      width: '46@s',
      height: '46@s',
    },
    videoLogoImage: {
      width: '46@s',
      height: '46@s',
      alignSelf: 'center',
    },
    pdfLogoContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    videoLogoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
    pdfNameText: {
      color: '#2F4868',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      marginTop: '14@s',
      marginLeft: '17@s',
    },
    videoNameText: {
      color: '#2F4868',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      marginTop: '14@s',
      marginLeft: '17@s',
    },
    timeText: {
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      marginTop: '1@s',
      marginLeft: '17@s',
    },
    vectorContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: '20@s',
      width: '100%',
    },
    vectorImage: {
      width: '16@s',
      height: '13@s',
    },
    vectorImage1: {
      width: '18@s',
      height: '13@s',
    },
    numberText: {
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      bottom: '4@s',
      right: '3@s',
    },
    rectangle6: {
      width: width - s(40),
      height: '340@s',
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
    },
    rectangle7: {
      width: width - s(40),
      height: '186@s',
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
    },
    activityWorkText: {
      width: '121@s',
      height: '25@s',
      fontFamily: 'Nunito-Regular',
      fontSize: '18@s',
      fontWeight: '800',
      marginLeft: '25@s',
    },
    activityWorkContainer: {
      top: '17@s',
      flexDirection: 'row',
    },
    activityWorkIcon: {
      marginLeft: '128@s',
    },
    activityWorkText2Container: {
      paddingHorizontal: '20@ms',
      marginTop: '40@s',
      alignItems: 'flex-start',
    },
    activityWorkText2: {
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      alignSelf: 'auto',
      fontWeight: '600',
    },

    activityWorkText3: {
      color: '#03A0E3',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      top: '3@s',
    },
    activityImage: {
      resizeMode: 'contain',
      height: '40@s',
      width: '40@s',

      left: '25@s',

      borderRadius: '150@s',
    },
    activityWorkImageContainer: {
      width: '40@s',
      height: '40@s',
    },
    activityWorkBottomContainer: {
      flexDirection: 'row',
      top: '20@s',
      alignItems: 'flex-start',
    },
    activityWorkText2MainContainer: {
      flexDirection: 'row',
      paddingHorizontal: '20@s',
      alignItems: 'flex-start',
    },
    activityWorkBottomTextContainer: {
      marginLeft: '20@s',

      width: '50%',
    },
    activityWorkBottomTextContainer2: {
      marginLeft: '2@s',
    },
    teacherRecommendedText: {
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '800',

      marginLeft: '20@s',
    },
    teacherNameText: {
      color: '#455157',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      marginLeft: '20@s',
    },
    dateText: {
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
    },
    dateText2: {
      color: '#455157',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      top: '5@s',
      fontWeight: '600',
    },
    activityWorkBottomProgressBar: {
      flexDirection: 'row-reverse',
      right: '15@s',
      bottom: '85@s',
    },
    activityWorkBottomProgressBarView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    insideTextActivityWork: {
      fontWeight: '600',
      fontSize: '10@s',
      color: '#84BD47',
      alignSelf: 'center',
      position: 'absolute',
      marginRight: 15,
    },
    neomorphContainerCard: {
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
    cardListContent: {
      paddingLeft: '10@s',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    title: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#323A3D',
    },
    author: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      color: '#758DAC',
      marginBottom: '4@s',
    },
    price: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@ms',
      fontWeight: '700',
      color: '#03A0E3',
    },
    statContainerTitle: {
      fontFamily: 'Nunito-Regular',
      fontSize: '18@ms',
      fontWeight: '800',
      color: '#3B4568',
    },
    statContainerStat: {
      fontFamily: 'Nunito-Regular',
      fontSize: '24@ms',
      fontWeight: '600',
      color: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`,
    },
    titleBarContainer: { position: 'absolute', width: '100%' },
  });

export default styles;
