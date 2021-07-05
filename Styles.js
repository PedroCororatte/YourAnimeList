
import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("screen");
export default StyleSheet.create({
  container: {
   alignItems : 'center',
   backgroundColor : '#000000'
  },
  anime: {
    height: 150,
    width: 100,
    margin  : 10
  },
  top: {
    backgroundColor : '#212121',
    width : screen.width,
    height : screen.height/8
  },  
  barInput : {
    backgroundColor :'#000000' ,
    borderRadius : 15
  },
  barContainer:{
    backgroundColor : '#212121',
    borderWidth: 0, 
    shadowColor: 'white',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
  title :{
    fontSize:20,
    color : '#E4FBFF',
    textAlign : 'center'
  }
});


    
