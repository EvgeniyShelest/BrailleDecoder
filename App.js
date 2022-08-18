import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BrailleInput from './components/BrailleInput.jsx';
import { convert_from } from './utils/braille-conversion.js';

export default function App() {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const grabInput = (symbol) => {
    console.log("GrBBED: ", symbol);
    setArray(previousState => [...previousState, symbol]);
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "red" }}>
        <Text style={{fontSize: 50}}>{array.map(e => { return convert_from(e.join('')); })}</Text>
      </View>
      <BrailleInput onReady={grabInput} value={array[currentIndex]} />
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
