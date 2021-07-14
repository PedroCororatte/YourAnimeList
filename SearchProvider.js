import React, { useState, useEffect } from 'react'
import Styles from './Styles';
import { Image, ActivityIndicator, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function ApiData({ userInput, Data, setData, setVisible, setTarget }) {

    const link = 'https://api.jikan.moe/v3/search/anime?q='
    const [Loading, setLoading] = useState(true)
    
    useEffect(
        () => {
            fetch(link + userInput)
                .then((resp) => resp.json())
                .then((json) => setData(json.results))
                .catch(() => (Alert.alert('Error', 'Verify your connection')))
                .finally(() => setLoading(false))
        }, [userInput]
    )

    return (
        <View style={Styles.container}>
            {
                Loading ? <ActivityIndicator size='large' color='#7868E6' /> : (
                    <FlatList
                        data={Data}
                        numColumns={3}
                        keyExtractor={item => item.mal_id}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity onPress={() => {
                                    setTarget(item)
                                    setVisible(true)
                                }}>
                                    <Image source={{ uri: item.image_url }} style={Styles.anime} />
                                    <Text numberOfLines={2}
                                    style={{ color: '#fff', maxWidth: 100, textAlign: 'center' }}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )
            }

        </View>
    )
}
