import { Dimensions, StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

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
      alignSelf: 'stretch' ,
      alignItems:"center",
      justifyContent:"center",
      paddingBottom:20,
    },
    safeAreaView: { alignSelf: 'stretch' , 
   },

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
      alignItems:"center",
      marginLeft:10,
      marginTop:12,
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
    inputTextContainer2:{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20,
      marginBottom:20,
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
    radioButtonContainer: {

        width: '100%',
        width: width - 60,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#EBEEF0",
 },

      radioButtonViewContainer: {
        flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
        height: '65@ms0.75',
        width: '100%',
        },
   
    touchableOpacity: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      height: 65,
      width: '100%',
      
    },
    regularContainer :{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 38,
      marginLeft: 20,
      marginTop: 16,
       },

coinContainer2:{
  
    width:102,
    height:40,
    borderRadius:50,
    flexDirection:"row",
    },
coinImage:{
  
   marginTop:7,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:12,
    height:26,
    width:26,
},
coinText:{
  fontFamily:"Nunito-Regular",
  fontSize:16,
  fontWeight:"600",
  width:30,
  color:"#455157",
  marginTop:9,
  marginLeft:12,

},
coinContainer1:{
    alignContent: 'center',
    justifyContent: 'center',
   
    flexDirection: 'row',
    height:45,
    marginTop:22,
    paddingBottom:5,
},
schoolInputTextContainer:{
  width: '100%',
  width: width - 60,
  height: 50,
borderRadius: 50,
alignItems: "center",
backgroundColor:"#EBEEF0",
flexDirection:"row",
paddingLeft:25,
},
marginView:{ marginTop:20,
},

interestContainer:{
  width: '100%',
  width: width - 60,
  height: 86,
  borderRadius:12,
  backgroundColor:"#EBEEF0",
 
  },
  schoolText:{
    fontFamily:"Nunito-Regular",
    fontWeight:"600",
    fontSize:14,
    lineHeight:19,
    color:"#455157",
    marginRight:62,
},
changeText1:{
  color:"#03A0E3",
  width:47,
  lineHeight:16.2,
  fontWeight:"600",
  marginLeft:6,
 
},
interestText:{
  color:"#455157",
  fontFamily:"Nunito-Regular",
  fontWeight:"600",
  fontSize:12,
  paddingLeft:25,
  marginTop:10,
  lineHeight:16,
 },

changeText2:{
  color:"#03A0E3",
  width:47,
  lineHeight:16.2,
  fontWeight:"600",
  marginTop:22,
  marginLeft:113,

},
regularButtonContainer:{
width:"100%",
width:width-60,
marginTop:30,

},
interestIconContainer:{
flexDirection:"row",
lineHeight:14,

},
interestIcon1:{
 height: 25,
width: 25,
 borderRadius: 25,
marginTop: 12,
marginLeft:25,
},
interestIcons:{
height: 25,
width: 25,
borderRadius: 25,
 marginTop: 12,
marginLeft:-9,

},
plusFourImage:{
  marginTop: -17,marginLeft: 4,
},
 });

export default styles;
