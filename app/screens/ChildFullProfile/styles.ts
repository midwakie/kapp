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
      backgroundColor:'#EBEEF0',
    },
    container2: {
      paddingHorizontal: '20@s',
      width: '100%',
      paddingBottom: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '25@s',
     
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
      height: '22@s',
    },
    imageContainer: {
        alignItems:'flex-start',
        justifyContent: 'flex-start',
        bottom:'80@s',
        width: '100@s',
        height: '100@s',
  
      },
      imageContainer2: {
        height: '30@s',
        alignItems:'flex-start',
        justifyContent: 'flex-start',
        width: '30@s',
        position: 'absolute',
        bottom: '10@s',
        right: '15@s',
        
      },
      avatarImage: { width: '75@s', height: '90@s', resizeMode: 'cover' },
      editAvatarImage:{ width: '22@s', height: '22@s', resizeMode: 'cover' 

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
    
  
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 38,
      marginLeft: '20@s',
      
    },
    rectangle: {
        width: width - s(40),
        height: '163@s',
        borderRadius: 15,
        backgroundColor: '#EBEEF0',
        paddingLeft:s(10),
        
      },
      marginView:{marginBottom:'20@s'},
   
      
   
    coinContainer2: {
        width: '75@ms',
        height: '29@ms',
        borderRadius: 50,
        justifyContent: 'space-around',
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
        bottom:'80@s',
        flexDirection: 'row',
        height: '29@s',
        marginTop: '5@s',
        marginLeft:'5@s',
      },
      editButton:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:'15@s',
        marginRight:'30@s',
      },
     editText:{
        color:'#FB595D',
        fontSize:'12@s',
        fontFamily:'Nunito-Regular',
        fontWeight:'700'
     },
     
      changeText1: {
        color: '#03A0E3',
        fontFamily: 'Nunito-Regular',
        fontWeight: '600',
        fontSize: '14@s',
      },
      mainTextContainer:{
        lineHeight:'19@s',
        marginLeft:'100@s',
        
        
      },
      nameText:{
        color:'#455157',
        fontSize:'14@s',
        fontWeight:'700',
        fontFamily:'Nunito-regular',
        marginTop:'2@s',
      },
      schoolText:{
        fontSize:'14@s',
        fontWeight:'600',
        fontFamily:'Nunito-regular',
        color:'#758DAC',
        marginTop:'2@s',

      },
      ageText :{
        fontSize:'14@s',
        fontWeight:'600',
        fontFamily:'Nunito-regular',
        color:'#758DAC',
       

      },
  
      

      iconContainer: {
        justifyContent: 'center',
        backgroundColor:'#EBEEF0',
        marginVertical: '17@s',
      },
      iconMainContainer: {
        flexDirection: 'row',
        height: '30@s',
        justifyContent:'flex-end',
        marginLeft:'105@s',
        
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
      },
     rectangle2: {
      width: width - s(40),
      flexDirection:"row",
      height: '163@s',
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
      paddingLeft:s(10),
      alignItems:'center',
      
      
     },
     scanTextContainer:{
      alignItems:'center',
      justifyContent:'center',
     },
    
     scanText:{
      width:'110@s',
      height:'22@s',
      fontFamily:'Nunito-Regular',
      fontSize:'16@s',
      fontWeight:'800', 
      marginLeft:'15@s',
         

     },
     
     qrImageContainer:{
        justifyContent:'center',
       marginTop:'18@s',
},
     qrImage: { //width: '100%',
      ////height: '100%',
       resizeMode: 'contain',
       marginEnd:'34@s',
       marginLeft:'60@s',
       marginBottom:'20@s',
     },
     rectangle3: {
      width: width - s(40),
      height: '163@s',
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
      alignItems:'flex-start',
      
     
     },
     activityTextContainer:{
      justifyContent:'center',
      paddingLeft:s(25),
      marginTop:'20@s',
      marginBottom:'25@ms',
      flexDirection:'row',

     },
     activityText:{
      fontFamily:'Nunito-Regular',
      fontSize:'16@s',
      fontWeight:'800',
      lineHeight:'22@s',
     },
     text:{
      fontSize:'12@s',
      fontFamily:'Nunito-Regular',
      width:'43@s',
      fontWeight:'600',
      color:'#455157'
    },
    materialIconView:{
     
      marginLeft:'34@s',
     
    },
    insideText1: {
      color: '#84BD47',
      fontWeight: '600',
      fontSize: '16@s',
      fontFamily: 'Nunito-Regular',
      right:'42@s',
      // position: 'absolute',
      alignSelf: 'auto',
    },
    insideText2: {
      color: '#EC4D61',
      fontWeight: '600',
      fontSize: '16@s',
      right:'42@s',
      fontFamily: 'Nunito-Regular',
      // position: 'absolute',
      // alignSelf: 'auto',
    },
    insideText3: {
      color: '#03A0E3',
      fontWeight: '600',
      fontSize: '16@s',
      right:'45@s',
      fontFamily: 'Nunito-Regular',
     // position: 'absolute',
      alignSelf: 'auto',
      
    },
   chartContainer:{
alignItems:'center',
width:'100%',
justifyContent:'center',

   },
   progressChartContainer:{
   flexDirection:'row',
   width:'100%',
   //height:'100%',
  marginRight:'15@s',
  marginStart:'10@s',
   alignItems:'center',
   justifyContent:'space-between',
   //backgroundColor:'red',
   
   },
   textContainer:{
    flexDirection:'row',
    width:'100%',
   //height:'100%',
  // marginRight:'15@s',
  // marginStart:'10@s',
  //  alignItems:'center',
  //  justifyContent:'space-between',
   },
   activityText2:{
    color:'#455157',
    marginRight:'38@s',
    marginStart:'28@s',
    alignItems:'center',
    marginTop:'7@s',
    fontFamily:'Nunito-Regular',
    fontWeight:'600',
    justifyContent:'center', 
  },
  activityText3:{
    color:'#455157',
   marginTop:'7@s',
    marginStart:'27@s',
    alignItems:'center',
    fontFamily:'Nunito-Regular',
    fontWeight:'600',
  justifyContent:'center', 
  },
  });

export default styles;
