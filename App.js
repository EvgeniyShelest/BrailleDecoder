import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BrailleInput from './components/BrailleInput.jsx';
import { convert_from } from './utils/braille-conversion.js';

export default function App() {
  const [array, setArray] = useState([]);
  const grabInput = (symbol) => {
    setArray(previousState => [...previousState, symbol]);
  }

  return (
    <View style={styles.container}>
      <View style={{ minHeight: 50 }}>
        <Text style={{ fontSize: 50, color: "grey" }}>
          {array.map(e => { return convert_from(e); })}
        </Text>
      </View>
      <BrailleInput onReady={grabInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
