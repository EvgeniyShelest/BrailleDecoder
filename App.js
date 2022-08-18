import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Braille from './components/Braille.jsx';
import { convert_from } from './utils/braille-conversion.js';

export default function App() {
  const [array, setArray] = useState([]);
  const grabInput = (symbol) => {
    console.log("GrBBED: ", symbol);
    setArray(previousState => [...previousState, symbol]);
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>{array.map(e => { return convert_from(e.join('')); })}</Text>
      </View>
      <Braille onReady={grabInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
});
