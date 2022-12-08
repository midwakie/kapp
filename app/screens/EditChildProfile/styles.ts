import { Dimensions, StyleSheet } from 'react-native';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = (direction: string) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#E5E5E5',
     

    },
    container2: {
      paddingHorizontal: 30,
      marginTop: 2,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
      alignItems:"center",
      justifyContent:"center",
    },
    safeAreaView: { alignSelf: 'stretch' },
    gradientTextStyle: {
      fontSize: 16,
      fontFamily: 'Nunito-Regular',
      fontStyle: 'normal',
      fontWeight: "700",
      lineHeight: 22,
     
      
    },
    gradientTextContainer: {
      width: "100%",
      justifyContent:"center",
      height: 80,
      marginBottom: 38,
      marginTop: 50,
      marginLeft:80,
     
     
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      marginBottom:20,
    },
    inputTextContainer1:{
        width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,

    },
    labelTextContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      marginBottom: 20,
      width: width - 60,
    },
    forgotPasswordContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 39,
    },
    forgotPassword: {
      color: '#FE4C3E',
      textAlign: 'right',
      fontSize: 12,
      fontWeight: '600',
      backgroundColor: 'transparent',
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20.33 : undefined,
      right: direction === 'rtl' ? undefined : 20.33,
      position: 'absolute',
    },
    imageStyle: {
      justifyContent: 'center',
      resizeMode: 'contain',
      width: 100,
      height: 100,
    },
    imageContainer: {
     alignItems:"center",
     justifyContent:"center",
     marginTop:40,
     width:"100%",
     
     
    },
    imageContainer2:{ marginTop:-38,
        height:30,
        width:30,
        marginLeft:68,

    },
    neomorphContainer: {
      marginTop: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: width - 60,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DADEE0',
    },
    socialContainer: {
      width: width - 60,
      height: 50,
      flexDirection: 'row',
      marginTop: 40,
      marginBottom: 30,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    socialButtonContainer: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialButtonStyle: {
      width: 23,
      height: 23,
      resizeMode: 'contain',
    },
    bottomContainer: {
      height: 20,
      width: width - 60,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    bottomText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: 12,
      fontFamily: 'Nunito-Regular',
    },
    agreeDisagreeText: {
      color: '#758DAC',
      fontWeight: '600',
      fontSize: 12,
      fontFamily: 'Nunito-Regular',
      lineHeight: 16,
    },
    agreeDisagreeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 22,
      width: width - 60,
    },
    signUpButton: {
      color: '#03A0E3',
      fontSize: 12,
      fontWeight: '700',
      backgroundColor: 'transparent',
      fontFamily: 'Nunito-Regular',
    },
    signUpButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 20,
    },
    bottom: {
      marginTop: 10,
    },
    radioButtonContainer: {

        width: '100%',
        marginBottom: 21,
        width: width - 60,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DADEE0'
      },
   
    touchableOpacity: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      height: 65,
      width: '100%',
    },
    topContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: "100%",
      height:110,
    //   borderBottomEndRadius:25,
    //   borderBottomStartRadius:25,
    //   shadowColor:"#A8A8A8",
    //   shadowOpacity:0,
    //   shadowOffset:{width: 20,height:10},
    //   textShadowRadius:2,
    //   elevation:2,
    },
    regularContainer :{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 38,
      marginLeft: 20,
      marginTop: 40,
      marginBottom:30,
     
     
},

coinContainer2:{
  
    width:102,
    height:40,
    borderRadius:50,
    
    
   

},
coinImage:{
  
   marginTop:7,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:12,
    height:26,
    width:26,
},
coinContainer1:{
    alignContent: 'center',
    justifyContent: 'center',
   
    flexDirection: 'row',
    height:45,
    marginTop:22,
    paddingBottom:5,
},

   
  });

export default styles;