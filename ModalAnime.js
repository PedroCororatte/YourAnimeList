import React from 'react'
import { Modal, View, Text, StyleSheet,Button } from 'react-native'
import Styles from './Styles';

export default function({Visible,setVisible,Target}) {
    
    return (
        <Modal style = {styles.modal}
        transparent = {true}
        visible = {Visible}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalText}>YesBaby</Text>
                <Button title="Close"
                onPress={ () => setVisible(false)}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
    },
    modalContainer:{
        backgroundColor : '#212121',
        justifyContent : 'center',
        alignItems : 'center'
        
    },
    modalText:{
        color:'#fff',
        fontSize : 18,
        textAlign : 'center'
    }
})