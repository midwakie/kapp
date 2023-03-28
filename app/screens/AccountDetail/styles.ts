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
      marginTop: '80@s',
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
    gradientTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      paddingHorizontal: '30@s',
    },
    gradientTextStyle: {
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
    },
    cardListAccountText: {
      color: '#455157',
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    cardListLanguageText: {
      color: '#758DAC',
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    cardListAccountTextTwo: {
      color: '#EC4D61',
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    chatName: {
      color: '#FB595D',
      fontSize: '14@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
    },
    cardListStyleTwo: {
      paddingHorizontal: '20@s',
      height: '70@s',
      width: Dimensions.get('window').width - scale(45),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '14@s',
    },
    cardListStyleThree: {
      paddingHorizontal: '20@s',
      height: '70@s',
      width: Dimensions.get('window').width - scale(45),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '14@s',
    },
    cardListStyleFour: {
      paddingHorizontal: '20@s',
      height: '70@s',
      width: Dimensions.get('window').width - scale(45),
      backgroundColor: '#EBEEF0',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: '14@s',
    },
    filterViewContainer: {
      height: '38@s',
      width: '38@s',
      borderRadius: '38@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addProfileText: {
      marginLeft: '20@s',
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      lineHeight: '19@s',
      color: '#758DAC',
    },
    itemMenu: {
      height: '16@s',
      width: '4@s',
      resizeMode: 'contain',
    },
    filterImage: {
      height: '17@s',
      width: '17@s',
      resizeMode: 'contain',
    },
    accountInfo: {
      paddingVertical: '15@s',
      paddingHorizontal: '20@s',
      height: '208@s',
      width: Dimensions.get('window').width - scale(45),
      backgroundColor: '#EBEEF0',
      borderRadius: '14@s',
    },
    parentInfo: {
      marginBottom: '10@s',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    studentInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10@s',
    },
    cardListContent: {
      paddingLeft: '10@s',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    chatInfo: { flexDirection: 'row' },
    innerDirection: {
      flexDirection: 'row',
    },
    modalContainer: {
      flex: 1,
      borderWidth: 2,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(44, 57, 66, 0.69)',
    },
    modalView: {
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '14@s',
      backgroundColor: '#EBEEF0',
      height: '265@s',
      width: width - 50,
    },
    radioButtonViewContainer: {
      borderWidth: 1,
      borderColor: 'rgb(255, 255, 255)',
      paddingTop: '10@s',
      borderRadius: '14@s',
      height: '55@s',
      width: width - 80,
      backgroundColor: '#EBEEF0',
    },
    innerDirectionThree: {
      flexDirection: 'row',
      paddingLeft: '45@s',
    },
    innerDirectionTwo: {
      flexDirection: 'row',
      paddingTop: '10@s',
    },
    optionTitleStyleColor: {
      color: '#EC4D61',
      fontSize: '14@s',
    },
    optionTitleStyle: {
      color: '#758DAC',
      fontSize: '14@s',
    },
    menuImage: {
      height: '20@s',
      width: '20@s',
      resizeMode: 'contain',
    },
    cardContainer: {
      marginTop: '20@s',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    neomorphContainerBottom: {
      marginTop: '30@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontFamily: 'Nunito-Regular',
      fontSize: '14@s',
      fontWeight: '600',
      color: '#323A3D',
    },
    role: {
      fontFamily: 'Nunito-Regular',
      fontSize: '12@s',
      fontWeight: '600',
      color: '#758DAC',
    },
    neomorphMargin: { margin: '15@ms' },
    cardListImage: {
      height: '50@s',
      width: '50@s',
      borderRadius: '13@ms',
    },
    titleBarContainer: {
      position: 'absolute',
      width: '100%',
    },
  });

export default styles;
