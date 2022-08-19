import React, { useState } from "react";
import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';
import RadioButton from './UI/RadioButton.jsx';
import { convert_from } from '../utils/braille-conversion.js';

export default function BrailleInput(props) {
  const EMPTY_VALUE = [0,0,0,0,0,0];
  const [value, setValue] = useState(props.value || EMPTY_VALUE);
  const toggleRadio = (index) => {
    setValue(previousValue => previousValue.map((e, i) => { return i === index ? (e + 1) % 2 : e }));
  }
  const nextHandler = () => {
    props.onReady(value);
    setValue(EMPTY_VALUE);
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 50, color: "grey" }}>{convert_from(value.join(""))}</Text>
      </Text>
      <View  style={styles.row}>
        {[...value.keys()].map((index) => (
          <TouchableOpacity
              onPress={() => toggleRadio(index)}
            >
            <RadioButton selected={value[index]} />
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Next" onPress={nextHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ff1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 156,
    padding: 10,
  }
});
