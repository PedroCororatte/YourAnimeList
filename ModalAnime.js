import React from 'react'
import { Modal, View, Text, Button, Image,ScrollView} from 'react-native'
import Styles from './Styles'

export default function ({ Visible, setVisible, Target }) {

    return (
        <Modal
            transparent={true}
            visible={Visible}>
            <View style={Styles.modalContainer}>
                <View>
                    <Text style={Styles.modalTitle}>{Target.title}</Text>
                    <Image source={{ uri: Target.image_url }} style={Styles.modalImg}/>
                </View>
                <ScrollView >
                    <Text style={Styles.modalText}>{Target.synopsis}</Text>
                </ScrollView>
                <View>
                    <Button title="Close"
                        onPress={() => setVisible(false)}
                    />
                </View>
            </View>
        </Modal>
    )
}
