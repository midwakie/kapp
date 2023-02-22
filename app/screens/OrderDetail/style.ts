import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
    },
    safeAreaView: { alignSelf: 'stretch' },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '38@s',
      height: '38@s',
      marginLeft: '20@s',
      marginTop: '40@s',
    },
    imageContainer: {
      width: '100%',
      height: '461.92@s',
    },
    imageStyle: {
      width: '100%',
      height: '461.92@s',
      resizeMode: 'contain',
      top: '-36@s',
    },
    neumorphicContainer: {
      top: '-95@s',
    },
    neumorphicContainerLandscape: {
      top: '-50@s',
    },
    container2: {
      backgroundColor: '#EBEEF0',
      width: '100%',
      height: '100%',
      paddingHorizontal: '20@s',
    },
    lionKing: {
      fontFamily: 'Nunito-Regular',
      fontSize: '18@s',
      fontWeight: '800',
      color: '#758DAC',
      marginTop: '30@s',
    },
    category: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#758DAC',
    },
    statusOne: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@ms',
      fontWeight: '700',
      color: '#84BD47',
      marginTop: '13@s',
    },
    statusTwo: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@ms',
      fontWeight: '700',
      color: '#EC4D61',
      marginTop: '13@s',
    },
    row: {
      flexDirection: 'row',
      marginTop: '28@s',
    },
    row1: {
      flexDirection: 'row',
      marginTop: '32@s',
    },
    text: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#2F4868',
      marginLeft: '40@s',
    },
    text10: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#2F4868',
      marginTop: '18@s',
    },
    text11: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#2F4868',
    },
    text1: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#2F4868',
      marginLeft: '65@s',
    },
    text2: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#2F4868',
      marginLeft: '48@s',
    },
    text3: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#2F4868',
      marginLeft: '29@s',
    },
    text4: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#2F4868',
      marginLeft: '52@s',
    },
    neumorphicContainer1: {
      width: '132@s',
      height: '52@s',
    },
    container3: {
      width: '132@s',
      height: '52@s',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
    },
    text5: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#758DAC',
    },
    neomorphContainer2: {
      marginLeft: '62@s',
    },
    neomorphContainer3: {
      marginLeft: '26@s',
    },
    neomorphContainer4: {
      height: '38@s',
      width: '38@s',
      position: 'absolute',
      top: '15@s',
      right: '15@s',
    },
    container4: {
      width: '40@s',
      height: '40@s',
      borderRadius: '150@s',
      backgroundColor: '#EBEEF0',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    imageStyle1: {
      resizeMode: 'contain',
      width: '18@s',
      height: '18@s',
    },
    imageStyle2: {
      resizeMode: 'contain',
      width: '80@s',
      height: '80@s',
      marginTop: '50@s',
      alignSelf: 'center',
    },
    text6: {
      fontFamily: 'Nunito-Regular',
      fontSize: '22@s',
      fontWeight: '700',
      color: '#2F4868',
      marginLeft: '26@s',
    },
    text7: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '600',
      color: '#3B3B48',
    },
    container5: {
      flexDirection: 'column',
      marginLeft: '81@s',
    },
    text8: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '600',
      color: '#3B3B48',
    },
    text9: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '700',
      color: '#03A0E3',
      marginTop: '8@s',
    },
    buttonConfirmationView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: '106@s',
    },
    button: {
      height: '50@s',
      width: '141@s',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50@s',
    },
    buttonText: {
      fontSize: '18@ms',
      fontFamily: 'Nunito-Regular',
      fontWeight: '800',
      textAlign: 'center',
      margin: '10@ms',
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    modalContainer: {
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
      backgroundColor: ' rgba(0, 0, 0, 0.71)',
    },
    modalView: {
      backgroundColor: '#EBEEF0',
      width: 335,
      height: 282,
      borderRadius: 14,
    },
    closeButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EBEEF0',
      height: '38@s',
      width: '38@s',
      borderRadius: 50,
    },
    closeButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    coinImage: {
      height: '18@ms',
      width: '18@ms',
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
    },
    numbersContainer: {
      backgroundColor: '#EBEEF0',
      width: '132@s',
      height: '52@s',
      position: 'absolute',
      top: 60,
    },
    number: {
      fontFamily: 'Nunito-Regular',
      fontSize: '22@s',
      fontWeight: '700',
      color: '#2F4868',
      textAlign: 'center',
    },
  });

export default styles;
