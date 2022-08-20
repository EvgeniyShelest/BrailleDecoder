import React, { useState } from "react";
import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';
import RadioButton from './UI/RadioButton.jsx';
import { convert_from } from '../utils/braille-conversion.js';

const EMPTY_VALUE = [0,0,0,0,0,0];

export default function BrailleInput(props) {
  const [value, setValue] = useState(props.value || EMPTY_VALUE);
  const toggleRadio = (index) => {
    setValue(previousValue => previousValue.map((e, i) => { return i === index ? (e + 1) % 2 : e }));
  }
  const nextHandler = () => {
    props.onReady(value);
    setValue(EMPTY_VALUE);
  }
  const isEmptyOrInvalid = (v) => {
    return v === EMPTY_VALUE || !convert_from(v)
  }

  return (
    <View style={styles.container}>
      <Text style={{ lineHeight: 50, color: "grey" }}>
        {
           isEmptyOrInvalid(value) ?
            "Type braille symbol"
            :
            <Text style={{ fontSize: 50 }}>{convert_from(value)}</Text>
        }
      </Text>
      <View style={styles.row}>
        {[...value.keys()].map((index) => (
          <TouchableOpacity
              key={index}
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
    backgroundColor: '#ff1',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    borderRadius: 24,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 156,
    padding: 10,
  }
});
