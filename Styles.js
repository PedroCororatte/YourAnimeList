
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
    fontSize: 20,
    color: '#E4FBFF',
    textAlign: 'center'
  },
  modalContainer: {
    backgroundColor: '#212121',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },
  modalTitle: {
    color: '#fff',
    fontSize: 28,
    marginBottom : '5%',
    marginTop:'5%',
    textAlign:'center'
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    marginBottom : '10%',
    maxWidth:'85%',
    maxHeight:'100%'
  },
  modalImg: {
    height: 250,
    width: 160,
    margin: 10,
    marginTop:'5%',
    alignSelf:'center'
  },
  inSearch :{
    fontSize : 16,
    textAlign:'center'
  }
});



