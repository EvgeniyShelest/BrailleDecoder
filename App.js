import React, { useState } from "react";
import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';
import BrailleInput from './components/BrailleInput.jsx';
import { convert_from } from './utils/braille-conversion.js';

export default function App() {
  const [array, setArray] = useState([]);
  const grabInput = (symbol) => {
    setArray(previousState => [...previousState, symbol]);
  }
  const resetHandler = () => {
    setArray([]);
  }
  const deleteHandler = () => {
    setArray(previousState => previousState.slice(0,-1));
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="Clear" onPress={resetHandler} />
        <Button title=" <- " onPress={deleteHandler} />
      </View>
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
  buttonRow: {
    width: 150,
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
