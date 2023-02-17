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
    neumorphicContainer3: {
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
    description: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '600',
      color: '#758DAC',
      marginTop: '15@s',
    },
    row: {
      flexDirection: 'row',
      marginTop: '30@s',
    },
    row1: {
      flexDirection: 'row',
      marginTop: '23@s',
    },
    text: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#758DAC',
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
    text10: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#2F4868',
      marginLeft: '68@s',
    },
    neumorphicContainer1: {
      marginTop: '43@s',
    },
    container3: {
      width: '100%',
      height: '70@s',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#EBEEF0',
      paddingHorizontal: '15@s',
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
    neomorphContainer5: {
      marginLeft: '140@s',
    },
    neomorphContainer3: {
      marginLeft: '26@s',
    },
    neomorphContainer6: {
      marginLeft: '46@s',
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
    text11: {
      fontFamily: 'Nunito-Regular',
      fontSize: '22@s',
      fontWeight: '700',
      color: '#2F4868',
      marginLeft: '46@s',
    },
    text7: {
      fontFamily: 'Nunito-Regular',
      fontSize: '16@s',
      fontWeight: '600',
      color: '#FEA521',
      marginTop: '10@s',
      alignSelf: 'center',
    },
    container5: {
      marginTop: '15@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text8: {
      fontFamily: 'Nunito-Regular',
      fontSize: '15@s',
      fontWeight: '600',
      color: '#2F4868',
      textAlign: 'center',
    },
    text9: {
      fontFamily: 'Nunito-Regular',
      fontSize: '15@s',
      fontWeight: '600',
      color: '#2F4868',
      textAlign: 'center',
    },
    buttonConfirmationView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: '40@s',
    },
    button: {
      height: '50@s',
      width: '141@s',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50@s',
    },
    button1: {
      height: '50@s',
      width: '191@s',
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
  });

export default styles;
