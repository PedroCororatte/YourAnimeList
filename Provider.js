import React, { useEffect} from 'react'
import Styles from './Styles';
import { Image,ActivityIndicator,Text,View,FlatList } from 'react-native';

export default function ApiData({ userInput, Loading, setLoading, Data, setData }) {
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
                        renderItem={({ item }) => (
                            <View>
                                <Image source={{ uri: item.image_url }} style={Styles.anime} />
                                <Text style={{ color: '#fff', maxWidth: 100, textAlign: 'center' }}>{item.title}</Text>
                            </View>
                        )}
                    />
                )
            }

        </View>
    )
}
