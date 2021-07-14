import React from 'react'
import { Modal, View, Text, Button, Image, SafeAreaView } from 'react-native'
import Styles from './Styles'

export default function ({ Visible, setVisible, Target }) {

    return (
        <Modal
            transparent={true}
            visible={Visible}>
            <View style={Styles.modalContainer}>
                <View style={Styles.Modaltop}>
                    <Image source={{ uri: Target.image_url }} style={Styles.modalImg} />
                    <View style={Styles.modalDetails}>
                        <Text style={Styles.modalTitle}>{Target.title}</Text>
                        <Text style={Styles.modalTitle}>Score</Text>
                        <Text style={Styles.subtitle}>{Target.score}</Text>
                        <Text style={Styles.modalTitle}>Episodes</Text>
                        <Text style={Styles.subtitle}>{Target.episodes}</Text>
                    </View>
                </View>

                <View style={Styles.modalBottom}>
                    <Text numberOfLines={10}
                        style={Styles.modalText}>{Target.synopsis}</Text>
                </View>
                <View>
                    <Button title="Close"
                        onPress={() => setVisible(false)}
                    />
                </View>
            </View>
        </Modal>
    )
}
