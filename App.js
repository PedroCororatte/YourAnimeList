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
  let title = 'Yal'

  return (
    <ScrollView style={{backgroundColor:'#000'}} >

      <StatusBar
        barStyle="light-content"
        backgroundColor="#212121"
      />

      <View style={Styles.top}>

        <Text style={Styles.title}>{title}</Text>

        <SearchBar
          searchIcon={{ size: 25 }}
          inputStyle={Styles.barInput}
          inputContainerStyle={Styles.barInput}
          leftIconContainerStyle={Styles.barInput}
          containerStyle={Styles.barContainer}
          onChangeText={(value) => setUserInput(value)}
          value={userInput}
        />
      </View>

      {
        userInput ?
          <Provider
            userInput={userInput}
            Data={Data}
            setData={setData}
            setVisible={setVisible}
            setTarget={setTarget}
          />
          : 
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
      }

      {
        Target ?
          <ModalAnime
            Visible={Visible}
            setVisible={setVisible}
            Target={Target}
          />
          :
          <View style={{backgroundColor:'#000'}}></View>
      }
    </ScrollView>
  );
}


