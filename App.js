import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, StatusBar } from 'react-native';
import Styles from './Styles';
import ModalAnime from './ModalAnime';
import Provider from './SearchProvider'
import List from './AnimeList'
import { ScrollView } from 'react-native';

export default function App() {

  const [Data, setData] = useState([])
  const [userInput, setUserInput] = useState()
  const [Visible, setVisible] = useState(false)
  const [Target, setTarget] = useState()
  const [SearchValue,setSearchValue] = useState()

  const title = 'Yal'

  return (
    <ScrollView style={{backgroundColor:'#000'}} >

      <StatusBar
        barStyle="light-content"
        backgroundColor="#212121"
      />

      <View style={Styles.top}>

        <Text style={Styles.title}>{title}</Text>

        <SearchBar
          returnKeyType='search'
          multiline={false}
          searchIcon={{ size: 25 }}
          inputStyle={Styles.barInput}
          inputContainerStyle={Styles.barInput}
          leftIconContainerStyle={Styles.barInput}
          containerStyle={Styles.barContainer}
          onChangeText={(value) => setUserInput(value)}
          value={userInput}
          onSubmitEditing={() => setSearchValue(userInput)}
          onClear={()=> setSearchValue(null) }
        />
      </View>
     
      {
       !SearchValue ?
        <View>
            <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
             <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
             <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
             <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
             <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
             <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
             <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
             <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
             <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
            <List
              setTarget={setTarget}
              setVisible={setVisible}
            />
          </View>
          :  
          <Provider 
            Data={Data}
            setData={setData} 
            SearchValue={SearchValue}
            setTarget={setTarget}
            setVisible={setVisible}/>
      }
      {
        Target ?
          <ModalAnime
            Visible={Visible}
            setVisible={setVisible}
            Target={Target}
          />
          :
          <View style={{backgroundColor:'#000'}}>
          </View>
      }
    </ScrollView>
  );
}


