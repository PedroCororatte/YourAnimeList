import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, SafeAreaView, Text, Image, FlatList, ActivityIndicator, StatusBar,TouchableOpacity } from 'react-native';
import Styles from './Styles';
import { Alert } from 'react-native';

export default function App() {

  const [carregando, setCarregando] = useState(true)
  const [dados, setDados] = useState([])
  const link = 'https://api.jikan.moe/v3/search/anime?q='
  const [AnimeName, setAnimeName] = useState('fate')

  const clickInAnime = () => Alert.alert(
    'Alert',
    'Clicked',
    [
      {
        text : 'Back',
      }
    ],
    )
    useEffect(
      () => {
        fetch(link + AnimeName)
          .then((resp) => resp.json())
          .then((json) => setDados(json.results))
          .catch(() => (alert('Erro ao carregar a lista')))
          .finally(() => setCarregando(false))
      },[AnimeName]
    )
  
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#212121"
      />

      <View style={Styles.top}>
        <Text style={Styles.title}>Yal</Text>
        <SearchBar
          searchIcon={{ size: 25 }}
          inputStyle={Styles.barInput}
          inputContainerStyle={Styles.barInput}
          leftIconContainerStyle={Styles.barInput}
          containerStyle={Styles.barContainer}
          onChangeText={(value) => setAnimeName(value)}
          value={AnimeName}
        />
      </View>

      <View style={Styles.container}>
        {
          carregando ? <ActivityIndicator /> : (
            <FlatList
              data={dados}
              numColumns={3}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    onPress={clickInAnime}>
                    <Image source={{ uri: item.image_url }} style={Styles.anime}/>
                  </TouchableOpacity>
                  <Text style={{ color: '#fff', maxWidth: 100, textAlign:'center' }}>{item.title}</Text>
                </View>
              )}
            />
          )
        }

      </View>
    </SafeAreaView>
  );
}


