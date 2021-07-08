import React, { useEffect } from 'react'
import Styles from './Styles';
import { Image, ActivityIndicator, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function ApiData({ userInput, Loading, setLoading, Data, setData, setVisible, setTarget }) {
    const link = 'https://api.jikan.moe/v3/search/anime?q='

    useEffect(
        () => {
            fetch(link + userInput)
                .then((resp) => resp.json())
                .then((json) => setData(json.results))
                .catch(() => (alert('Erro ao carregar a lista')))
                .finally(() => setLoading(false))
        }, [userInput]
    )

    return (
        <View style={Styles.container}>
            {
                Loading ? <ActivityIndicator /> : (
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
                                    <Text style={{ color: '#fff', maxWidth: 100, textAlign: 'center' }}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )
            }

        </View>
    )
}
