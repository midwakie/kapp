import { Dimensions } from 'react-native';
import { ScaledSheet, s } from 'react-native-size-matters';

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
    gradientTextContainer: {
      width: '126@s',
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
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
    },
    containerRectangle: {
      height: '65@s',
      width: '100%',
      paddingHorizontal: '20@s',
      borderRadius: '14@s',

      flexDirection: 'row',
      alignItems: 'center',
    },
    containerRectangle1: {
      height: '68@s',
      width: '100%',
      paddingHorizontal: '20@s',
      borderRadius: '14@s',
      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'space-between',
    },
    neomorphContainer1: {
      marginTop: '40@s',
      marginBottom: '30@s',
    },
    text1: {
      color: '#3B3B48',
      fontSize: '16@s',
      fontWeight: '600',
      fontFamily: 'Nunito-Regular',
    },
    filterView: {
      height: '38@s',
      width: '38@s',
      borderRadius: '38@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    detailsContainer: {
      marginLeft: '15@s',
    },

    neomorphContainer2: {
      height: '65@s',

      margin: '10@s',
    },

    imageContainer: {
      height: '40@s',
      width: '40@s',
      borderRadius: '40@s',
    },
    imageStyle: {
      height: '40@s',
      width: '40@s',
      resizeMode: 'contain',
    },
    nameText: {
      color: '#323A3D',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '14@s',
    },
    subjectText: {
      color: '#758DAC',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      fontSize: '12@s',
    },

    neomorphContainer3: {
      marginTop: '10@s',

      margin: '1@s',
    },

    container2: {
      width: '100%',
      height: '100%',
      paddingBottom: '25@s',
      marginTop: '85@s',
      justifyContent: 'center',
      paddingHorizontal: '20@s',
    },

    titleBarContainer: {
      position: 'absolute',
      width: '100%',
    },
  });

export default styles;
