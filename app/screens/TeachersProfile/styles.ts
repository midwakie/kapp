import { Dimensions } from 'react-native';
import { s, ScaledSheet } from 'react-native-size-matters';

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
      zIndex: -10,
    },
    container2: {
      paddingHorizontal: '20@s',
      width: '100%',
      paddingBottom: 20,
      marginTop: '20@s',
    },
    safeAreaView: { alignSelf: 'stretch' },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22@s',
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
    },
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

    rectangle: {
      width: '100%',
      height: '132@s',
      borderRadius: 14,
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
    },
    neumorphic: {
      marginLeft: '30@s',
    },
    neumorphic1: {
      marginTop: '30@s',
    },
    rectangle2: {
      width: '100%',
      height: '93@s',
      borderRadius: 14,
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
    },
    margin: {
      marginLeft: '22@s',
    },
    rectangle3: {
      width: '100%',
      height: '70@s',
      borderRadius: '14@s',
      paddingHorizontal: '17@s',
      flexDirection: 'row',
      backgroundColor: '#EBEEF0',
    },
    text: {
      fontSize: '14@ms',
      color: '#2F4868',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      top: '24@s',
    },
    direction: {
      flexDirection: 'row',
    },
    text5: {
      fontSize: '14@ms',
      color: '#2F4868',
      fontWeight: '700',
      fontFamily: 'Nunito-Regular',
      top: '24@s',
      marginLeft: '40@s',
    },
    text2: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@s',
      color: '#455157',
      top: '29@s',
      marginLeft: '40@s',
    },
    status: {
      width: '97@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@ms',
      color: '#03A0E3',
      top: '22@s',
    },
    container3: {
      position: 'absolute',
      right: '20@s',
      top: '20@s',
    },
    container4: {
      position: 'absolute',
      right: '20@s',
    },
    itemMenu: {
      height: '16@s',
      width: '4@s',
      resizeMode: 'contain',
    },
    editContainer: {
      justifyContent: direction === 'rtl' ? 'flex-start' : 'flex-end',
      alignItems: 'center',
      marginBottom: 98,
    },
    text4: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@ms',
      color: '#455157',
      top: '22@s',
      marginLeft: '10@s',
    },
    text6: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@ms',
      color: '#455157',
      top: '22@s',
    },
    bottomText: {
      marginLeft: '10@s',
      fontSize: '16@s',
      color: '#2F4868',
      fontWeight: '600',
      marginTop: '26@s',
      fontFamily: 'Nunito-Regular',
      flexDirection: 'row',
    },

    inputText: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
      color: '#758DAC',
    },
    profileImageStyle: {
      width: '60@s',
      height: '50@s',
      marginTop: '20@s',
    },
    imageStyle: {
      width: '60@s',
      height: '60@s',
      marginLeft: '20@s',
      marginTop: '17@s',
    },
    imageStyle1: {
      width: '18@s',
      height: '18@s',
      marginTop: '11@s',
    },
    box: {
      width: '60@s',
      height: '28@s',
      backgroundColor: '#EBEEF0',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    insideText: {
      fontSize: '10@s',
      color: '#84BD47',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
      marginTop: '6@s',
    },
    menu: {
      height: '16@s',
      width: '4@s',
      top: '39@s',
      resizeMode: 'contain',
    },
    menuImage: {
      height: '20@s',
      width: '20@s',
      resizeMode: 'contain',
    },
    optionTitleStyleColor: {
      color: '#EC4D61',
      fontSize: '14@s',
    },
    optionTitleStyle: {
      color: '#758DAC',
      fontSize: '14@s',
    },
    optionTitleStyle2: {
      color: '#FD4449',
      fontSize: '14@s',
    },
    leftContainer: {
      marginLeft: '10@s',
      marginTop: '15@s',
      flex: 1,
    },
    neomorphContainer2: {
      width: '40@s',
      height: '40@s',
    },
    container8: {
      width: '40@s',
      height: '40@s',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
    },
    rightContainer: {
      flex: 4,
      marginLeft: '20@s',
      alignSelf: 'center',
    },
  });

export default styles;
