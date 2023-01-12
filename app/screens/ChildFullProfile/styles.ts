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
        paddingHorizontal:s(10),
        
      },
      marginView:{marginBottom:'20@s'},
      marginViewRow:{
        marginLeft:'20@s'
      },
   
      
   
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
        alignItems:'flex-start',
        
        
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
          resizeMode: 'contain',
          width: '14@s',
          height: '14@s',
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
      height: '167@s',
      borderRadius: 15,
      backgroundColor: '#EBEEF0',
      alignItems:'flex-start',
      paddingHorizontal:'20@s',
      
     
     },
     activityTextContainer:{
      justifyContent:'center',
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
      textAlign:'center',
      fontSize: '15@s',
      fontFamily: 'Nunito-Regular',
      top:'12@s',
       right:'15@ms',
       position: 'absolute',
      alignSelf: 'auto',
    },
    insideText2: {
      color: '#EC4D61',
      fontWeight: '600',
      fontSize: '15@s',
      textAlign:'center',
       top:'12@s',
       right:'15@ms',
      fontFamily: 'Nunito-Regular',
       position: 'absolute',
       alignSelf: 'auto',
    },
    insideText3: {
      color: '#03A0E3',
      fontWeight: '600',
      top:'12@s',
       right:'15@ms',
      fontSize: '15@s',
      textAlign:'center',
      
      fontFamily: 'Nunito-Regular',
      position: 'absolute',
      alignSelf: 'auto',
      
  
  

   },
   progressChartContainer:{
   flexDirection:'row',
   width:'100%',
    right:'7@ms',
  alignItems:'center',
 
   justifyContent:'space-between',
 
   },
   progressChartContainer1:{
   alignItems:'center',
  height:'72@s',
  width:'72@s',
  textAlign:'center',
  
    
    //backgroundColor:'red',
    
    },
    progressChartContainer2:{
      alignItems:'center',
     height:'72@s',
     width:'72@s',
     textAlign:'center',
     
      
       //backgroundColor:'red',
       
       },
       progressChartContainer3:{
        alignItems:'center',
       height:'72@s',
       width:'72@s',
       textAlign:'center',
      
      },
   textContainer:{
    flexDirection:'row',
    width:'100%',

   
    right:'7@ms',
  alignItems:'center',
 
   justifyContent:'space-between',
   //height:'100%',
  // marginRight:'15@s',
  // marginStart:'10@s',
  //  alignItems:'center',
  //  justifyContent:'space-between',
   },
   activityText1:{
    color:'#455157',
   
    marginStart:'22@s',
    alignItems:'center',
    marginTop:'7@s',
    fontFamily:'Nunito-Regular',
    fontWeight:'600',
    justifyContent:'center', 
    
  },
   activityText2:{
    color:'#455157',
   
right:'10@s',
    alignItems:'center',
    marginTop:'7@s',
    fontFamily:'Nunito-Regular',
    fontWeight:'600',
    justifyContent:'center', 
    
  },
  activityText3:{
    color:'#455157',
   marginTop:'7@s',
    right:'10@ms',
    alignItems:'center',
    fontFamily:'Nunito-Regular',
    fontWeight:'600',
    alignSelf:'auto',
    
  justifyContent:'center', 
  },
  rectangle4: {
    width: width - s(40),
    height: '313@s',
    borderRadius: 15,
    backgroundColor: '#EBEEF0',
   
    justifyContent:'center',
    paddingLeft:'5@s',
    paddingEnd:'5@s',
  
   
  },
  bookShelfContainer:{
  height:'199@s',
  width:'123@s',
  borderRadius:14,
  
  
 
   },
   bookShelfMainContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   },
   bookShelfTextContainer:{
   marginBottom:'25@s',
   marginRight:'18@s',
   flexDirection:'row',
   
 },
 bookShelfText:{
  fontFamily:'Nunito-Regular',
  fontWeight:'800',
  fontSize:'16@s',
  height:'22@s',
  width:'84@s',
  marginLeft:'20@s',
  marginRight:'165@s',
  
 },
 bookShelfImage1:{
  resizeMode:'contain',
  width:'123@s',
  height:'112@s',
   },
   bookTitle:{
 color:'#2F4868',
 fontWeight:'600',
 fontSize:'14@s',
 fontFamily:'Nunito-regular',
 marginStart:'11@s',
 marginEnd:'11@s',
 marginTop:'10@s',
   },
   bookAuthor:{
    color:'#758DAC',
 fontWeight:'600',
 fontSize:'12@s',
 fontFamily:'Nunito-regular',
 marginStart:'11@s',
 marginEnd:'11@s',
 marginTop:'10@s',
   },
   rectangle5: {
    width: width - s(40),
    height: '350@s',
    borderRadius: 15,
    backgroundColor: '#EBEEF0',
   
   },
   subContainer:{
    flexDirection:'row',
   },
   channelImageContainer:{
    alignItems:'flex-start',
  },
  channelImage:{
    height:'60@s',
    width:'60@s',
    marginLeft:'20@s',
    marginTop:'20@s',
    radius:'150@s',
  },
  channelTextContainer:{
alignItems:'flex-start',
  },
  channelNameText:{
    fontFamily:'Nunito-Regular',
    fontSize:'14@s',
   
    fontWeight:'700',
    color:'#455157',
    marginLeft:'23@s',
    marginTop:'22@s',
  },
  channelSubscribersText:{
    fontFamily:'Nunito-Regular',
    fontSize:'12@s',
    fontWeight:'600',
    color:'#03A0E3',
    marginLeft:'23@s',
    marginTop:'3@s',
  },
  channelVideosText:{
    fontFamily:'Nunito-Regular',
    fontSize:'12@s',
    fontWeight:'600',
    color:'#455157',
    marginLeft:'23@s',
    marginTop:'3@s',
  },
  subContainerText:{
    paddingHorizontal:'20@ms',
  },
  moreVertIcon:{
    marginTop:'20@s',
   
    marginLeft:'55@s',
   
  },
  rectangle5SubContainer:{
    width: width - s(100),
    height:'222@s',
    borderRadius:14,
    backgroundColor:'#EBEEF0',
    borderColor:'#758DAC',
    marginLeft:'30@s',
    borderWidth:'0.5@s',
    marginTop:'28@s',
  
   
   
  },
  pdfImageContainer:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
  },
  videoContainer:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
  },
  pdfImage:{
    resizeMode:'contain',
    width:'100%',
    marginTop:'14@s',
  },
  videoImage:{
    resizeMode:'contain',
    width:'100%',
    marginTop:'14@s',
  },
  pdfLogoImage:{
    position:'absolute',
    
   
    },
    videoLogoImage:{
      position:'absolute',
      
     
      },
    pdfLogoContainer:{
      position:'absolute',
      alignItems:'center',
      justifyContent:'center',
      marginTop:'50@s',
      marginLeft:'110@s',
    },
    videoLogoContainer:{
      position:'absolute',
      alignItems:'center',
      justifyContent:'center',
      marginTop:'50@s',
      marginLeft:'110@s',
    },
  pdfNameText:{
    color:'#2F4868',
    fontFamily:'Nunito-Regular',
    fontSize:'14@s',
    fontWeight:'600',
    marginTop:'14@s',
   marginLeft:'17@s',
  },
  videoNameText:{
    color:'#2F4868',
    fontFamily:'Nunito-Regular',
    fontSize:'14@s',
    fontWeight:'600',
    marginTop:'14@s',
   marginLeft:'17@s',
  },
  timeText:{
    color:'#758DAC',
    fontFamily:'Nunito-Regular',
    fontSize:'12@s',
    fontWeight:'600',
    marginTop:'1@s',
   marginLeft:'17@s',
  },
  vectorContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:'20@s',
   
    paddingHorizontal:'20@s',
  },
  vectorImage:{
    width:'16@s',
    height:'13@s',
   

  },
  vectorImage1:{
    width:'18@s',
    height:'13@s',
   

  },
  numberText:{
    color:'#758DAC',
    fontFamily:'Nunito-Regular',
    fontSize:'14@s',
    fontWeight:'600',
    bottom:'4@s',
    right:'3@s',


  },
  rectangle6: {
    width: width - s(40),
    height: '376@s',
    borderRadius: 15,
    backgroundColor: '#EBEEF0',
   
   },
   rectangle7: {
    width: width - s(40),
    height: '186@s',
    borderRadius: 15,
    backgroundColor: '#EBEEF0',
   
   },
   activityWorkText:{
    width:'121@s',
      height:'25@s',
      fontFamily:'Nunito-Regular',
      fontSize:'18@s',
      fontWeight:'800', 
      marginLeft:'25@s',
         

     

   },
   activityWorkContainer:{
    top:'17@s',
    flexDirection:'row',
},
activityWorkIcon:{
  marginLeft:'128@s',

},
activityWorkText2Container:{
  paddingHorizontal:'20@ms',
  marginTop:'40@s',
  alignItems:'flex-start',
  
},
activityWorkText2:{
  color:'#758DAC',
  fontFamily:'Nunito-Regular',
  fontSize:'12@s',
  alignSelf:'auto',
  fontWeight:'600',


},

activityWorkText3:{
  color:'#03A0E3',
  fontFamily:'Nunito-Regular',
  fontSize:'14@s',
  fontWeight:'600',
  top:'3@s',
  
  
},
activityImage:{
resizeMode:'contain',
height:'40@s',
width:'40@s',
left:'25@s',
top:'20@s',
borderRadius:'150@s',

},
activityWorkBottomContainer:{
  flexDirection:'row',
  alignItems:'flex-start',
},
activityWorkText2MainContainer:{
  flexDirection:'row',
  paddingHorizontal:'20@s',
  alignItems:'flex-start',
},
activityWorkBottomTextContainer:{
  marginLeft:'20@s',
},
teacherText:{
  color:'#758DAC',
  fontFamily:'Nunito-Regular',
  fontSize:'12@s',
  fontWeight:'600',
  marginLeft:'20@s',
  top:'20@s',
 
 
  

},
teacherNameText:{
  color:'#455157',
  fontFamily:'Nunito-Regular',
  fontSize:'14@s',
  fontWeight:'600',
 marginLeft:'20@s',
 top:'20@s',
 
  
 
  

},
dateText:{
  color:'#758DAC',
  fontFamily:'Nunito-Regular',
  fontSize:'12@s',
  fontWeight:'600',
  
  top:'20@s',

},
dateText2:{
  color:'#455157',
  fontFamily:'Nunito-Regular',
  fontSize:'14@s',
  fontWeight:'600',

 top:'20@s',

},
activityWorkBottomProgressBar:{
  flexDirection:'row-reverse',
  right:'15@s',
  bottom:'85@s',
},
insideTextActivityWork:{
 fontWeight:'600',
  fontSize:'10@s',
  color:'#84BD47',
  alignSelf:'center',
  right:'47@s',

},
  
  
  
  });

export default styles;
