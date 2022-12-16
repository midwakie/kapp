import { ScaledSheet } from 'react-native-size-matters';

const styles = (direction: string) =>
  ScaledSheet.create({
    container: {
      width: '100%',
      height: '90%',
      backgroundColor: '#EBEEF0',
    },
    safeAreaView: { alignSelf: 'stretch' },
    topContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      marginBottom:"24@s",
      marginLeft:"31@s",
      
    },
    TextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoImageStyle:{
     position:"absolute",
     height:"74@s",
     resizeMode:"contain",
     
    },
    homeTextStyle :{
      fontSize: '18@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '700',
      textAlign: 'center',
      color:"#455157",
    },
    homeTextContainer:{
       alignItems:"center",
      justifyContent:"center",
    },
    iconContainer:{
        flexDirection:"row",
      alignItems:"center",
        justifyContent:"center",
     },
   
    searchContainer:{ height:"46@s",
    width:"47@s",
    // backgroundColor:"#EBEEF0",
    borderTopRightRadius:52,
    borderBottomRightRadius:52,
    backgroundColor:"yellow",
    alignItems:"center",
    justifyContent:"center",
   
    },
    menuContainer:{
        height:"46@s",
        width:"47@s",
        // backgroundColor:"#EBEEF0",
        borderTopLeftRadius:52,
        borderBottomLeftRadius:52,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
        
       
    },
    imageBackground:{
      resizeMode:"contain",
      height:"800@s",
      
     
      
     
    },
  
    container1: {
      paddingHorizontal: '30@s',
      marginTop: 137,
      width: '100%',
      height: '100%',
      paddingBottom: 25,
    },
    gradientTextContainer2: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '33@s',
      marginBottom: 100,
    },
    gradientTextStyle2: {
      fontSize: '24@s',
      fontFamily: 'Nunito-Regular',
      fontWeight: '600',
      textAlign: 'center',
    },
    inputTextContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    rightComponent: {
      flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
      left: direction === 'rtl' ? 20 : undefined,
      right: direction === 'rtl' ? undefined : 20,
      position: 'absolute',
    },
  });

export default styles;
