import React, { useState, useEffect } from 'react'
import Styles from './Styles';
import { Image, ActivityIndicator, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function AnimeList({ setTarget, setVisible }) {

    let id = Math.floor(Math.random() * 43 + 1)
    const link = `https://api.jikan.moe/v3/genre/anime/${id}`
    const [Loading, setLoading] = useState(true)
    const [GenreName, setGenreName] = useState()
    const [GenreList, setGenreList] = useState([])

    useEffect(
        () => {
            fetch(link)
            .then((resp) => resp.json())
            .then((json) => {
                setGenreList(json.anime)
                setGenreName(json.mal_url.name)
            })
            .catch(() => (Alert.alert('Error', 'Verify your connection')))
            .finally(() => setLoading(false))
        }, []
    )

    return (
        <View style={{ backgroundColor: '#000000', marginTop: 20 }} horizontal>
            <Text style={Styles.subtitle}>{GenreName}</Text>
            {
                Loading ? <ActivityIndicator size='large' color='#7868E6' /> : (
                    <FlatList horizontal
                        data={GenreList}
                        keyExtractor={item => item.mal_id}
                        renderItem={({ item }) => (
                            <View horizontal>
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