import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, StatusBar } from 'react-native';
import Styles from './Styles';
import { Alert } from 'react-native';
import ModalAnime from './ModalAnime';
import Provider from './Provider'

export default function App() {

  const [Loading, setLoading] = useState(true)
  const [Data, setData] = useState([])
  const [userInput, setUserInput] = useState('fate')
  const [Visible, setVisible] = useState(false)
  const [Target, setTarget] = useState()
  return (
    <View>

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
          onChangeText={(value) => setUserInput(value)}
          value={userInput}
        />
      </View>

      <Provider
        userInput={userInput}
        Loading={Loading}
        setLoading={setLoading}
        Data={Data}
        setData={setData}
        setVisible={setVisible}
        setTarget={setTarget}
      />

      {
        Target ?
          <ModalAnime
            Visible={Visible}
            setVisible={setVisible}
            Target={Target}
          />
          : <Text>ol</Text>
       }

    </View>
  );
}


