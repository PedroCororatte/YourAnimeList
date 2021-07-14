
import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  anime: {
    height: 150,
    width: 100,
    margin: 10
  },
  top: {
    backgroundColor: '#212121',
    width: screen.width,
    height: screen.height / 8
  },
  barInput: {
    backgroundColor: '#000000',
    borderRadius: 15
  },
  barContainer: {
    backgroundColor: '#212121',
    borderWidth: 0,
    shadowColor: 'white',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
  title: {
    fontSize: 22,
    color: '#E4FBFF',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    color: '#E4FBFF',
    textAlign: 'left',
    paddingBottom:'5%'
  },
  Modaltop:{
    flexDirection:'row',
    justifyContent:'center',
  },
  modalBottom:{
   alignContent:'center',
   alignSelf:'center',
   textAlign:'center'
  },
  modalContainer: {
    backgroundColor: '#212121',
    height: '100%',
    width: '100%',
    alignContent:'space-between',
  },
  modalTitle: {
    justifyContent:'flex-start',
    color: '#fff',
    fontSize: 20,
    marginTop:'10%',
    textAlign:'center'
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    marginBottom : '10%',
    maxWidth:'95%',
    marginTop:'5%'
  },
  modalDetails:{
    alignSelf:'flex-end',
    flexDirection:'column',
    alignItems:'center',
    width:'50%',
    height:'95%',
  },
  modalImg: {
    alignContent:'flex-start',
    height: 250,
    width: 160,
    margin:'2%',
    marginTop:'6%'
  },
  inSearch :{
    fontSize : 16,
    textAlign:'center'
  }
});



