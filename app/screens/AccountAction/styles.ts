import { Dimensions, StyleSheet } from 'react-native';

const width =
  Dimensions.get('window').width >= Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

    const styles = StyleSheet.create({
        container: {
          width: '100%',
          height: '100%',
          backgroundColor: '#E5E5E5',
           },
    
        topContainer: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width:45,
          marginHorizontal: 29,
          marginTop: 40,
       },

        container3:{   
         alignItems:"center",
         marginTop:50,
         paddingHorizontal: 30,
         width: '100%',
         backgroundColor:"Red",
         },
       
     
      
    container2: {
      alignItems:"center",
     paddingHorizontal: 30,
     width: '100%',
      height: '100%',
      },
         
       
    container4:{ 
      alignItems:"center",
      marginTop:50,
      paddingHorizontal: 30,
       width: '100%',
      },
        
   safeAreaView: {
     alignSelf: 'stretch'
     },
      
   bottomText: {
    color: '#758DAC',
    fontWeight: '600',
    fontSize: 12,
    },
      
       
  imageOneContainer:{
            alignItems:"center",
           justifyContent:"center",
           borderRadius:50,
           backgroundColor:"#EC4D61",
           width:140,
           height:140,

        },
        textOneContainer:{
            alignItems:"center",
            marginTop:30,
            width:203,
            height:25,
            
        },
        textOne:{
            alignItems:"center",
            color:"#EC4D61",
            fontSize:18,
            fontWeight:"700",
            fontFamily: 'Nunito-Regular'

        },
        textTwoContainer:{
            alignItems:"center",
            marginTop:30,
            width:215,
            height:25,
            fontSize:18,
            fontWeight:"700",
            

        },
        imageTwoContainer:{ alignItems:"center",
        justifyContent:"center",
        width:140,
        height:140,
        borderRadius:50,
        
       
        },
      
        textTwo:{ 
        alignItems:"center",
        color:"#84BD47",
        fontSize:18,
        fontWeight:"700",
        fontFamily: 'Nunito-Regular'

        },
        imageThreeContainer:{
            alignItems:"center",
           justifyContent:"center",
            borderRadius:50,
            backgroundColor:"#2AA7DD",
            width:140,
            height:140,
            },

        textThree:{
          alignItems:"center",
        color:"#2AA7DD",
        fontSize:18,
        fontWeight:"700",
        fontFamily: 'Nunito-Regular',
       },

      });
      
      export default styles;
      