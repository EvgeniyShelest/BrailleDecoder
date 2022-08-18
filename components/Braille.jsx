import React, { useState } from "react";
import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';
import RadioButton from './UI/RadioButton.jsx';
import { convert_from } from '../utils/braille-conversion.js';

export default function Braille(props) {
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
      <Text style={{marginBottom: 20, alignItems: 'center',}}>
        <Text style={{fontSize: 50}}>{convert_from(value.join(""))}</Text>
      </Text>
      <View  style={styles.row}>
        <TouchableOpacity
            onPress={() => toggleRadio(0)}
          >
          <RadioButton selected={value[0]} />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => toggleRadio(1)}
          >
          <RadioButton selected={value[1]} />
        </TouchableOpacity>
      </View>
      <View  style={styles.row}>
        <TouchableOpacity
            onPress={() => toggleRadio(2)}
          >
          <RadioButton selected={value[2]} />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => toggleRadio(3)}
          >
          <RadioButton selected={value[3]} />
        </TouchableOpacity>
      </View>
      <View  style={styles.row}>
        <TouchableOpacity
            onPress={() => toggleRadio(4)}
          >
          <RadioButton selected={value[4]} />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => toggleRadio(5)}
          >
          <RadioButton selected={value[5]} />
        </TouchableOpacity>
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
  }
});
