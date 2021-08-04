import React, { useState, useEffect } from 'react'
import Styles from './Styles';
import { Image, ActivityIndicator, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


export default function ApiData(props) {

    const link = 'https://api.jikan.moe/v3/search/anime?q='
    const [Loading, setLoading] = useState(true)

    useEffect(
        () => {
            fetch(link + props.SearchValue)
                .then((resp) => resp.json())
                .then((json) => props.setData(json.results))
                .catch(() => (Alert.alert('Error', 'Verify your connection')))
                .finally(() => setLoading(false))
            console.log(props.SearchValue)
        }, [props.SearchValue]
    )

    return (
        <View style={Styles.container}>
            {
                Loading ? <ActivityIndicator size='large' color='#7868E6' /> : (
                    <FlatList
                        data={props.Data}
                        keyExtractor={item => item.mal_id}
                        renderItem={({ item }) => (
                            <View style={Styles.searchContainer}>
                                <View style={Styles.left}>
                                    <TouchableOpacity onPress={() => {
                                        props.setTarget(item)
                                        props.setVisible(true)
                                    }}>
                                        <Image source={{ uri: item.image_url }} style={Styles.anime} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    props.setTarget(item)
                                    props.setVisible(true)
                                }}>
                                    <View style={Styles.right}>
                                        <Text numberOfLines={2}
                                            style={{ fontSize: 16, color: '#fff', maxWidth: 200, textAlign: 'center', paddingTop: 8 }}>{item.title}</Text>
                                        <View style={Styles.details}>
                                            <View style={Styles.ep}>
                                                <Text style={{ fontSize: 16, color: '#b6b6b6' }}>Ep</Text>
                                                <Text style={{ fontSize: 14, color: '#b6b6b6', paddingTop:5}}>{item.episodes}</Text>
                                            </View>
                                            <View style={Styles.score}>
                                                <Icon
                                                    type='feather'
                                                    name='star'
                                                    color='#b6b6b6'
                                                />
                                                <Text style={{ fontSize: 14, color: '#b6b6b6', paddingTop:3.5 }}>{item.score}</Text>
                                            </View>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )
            }

        </View>
    )
}
