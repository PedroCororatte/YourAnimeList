import React,{useState,useEffect} from 'react';
import {View,SafeAreaView,Text,Image,FlatList,ActivityIndicator} from 'react-native';

export default function App()
{	
	const[carregando,setCarregando] = useState(true)
	const[dados,setDados] = useState([])
	let AnimeName = 'Naruto'
	const link = 'https://api.jikan.moe/v3/search/anime?q='

	useEffect(
		()=>{
			fetch(link+AnimeName)
				.then((resp)=>resp.json())
				.then((json)=>setDados(json.results))
				.catch( ()=>(alert('Erro ao carregar a lista')))
				.finally( ()=>setCarregando(false) )

		},[]
	)
	return(
		<SafeAreaView>
			{
				carregando? <ActivityIndicator/> : (
					<FlatList
					data = {dados}
					keyExtractor={({url},index)=>id}
					renderItem = {({item}) => (
					<Text>{item.title}</Text>
					//<Image source={item.image_url}/>
					)}
					/>
				)
			}
		</SafeAreaView>
	)
}

