import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RadioButton from './UI/RadioButton.jsx';

export default function Braille() {
  const [value, setValue] = useState([0,0,0,0,0,0]);
  const toggleRadio = (index) => {
    setValue(previousValue => previousValue.map((e, i) => { return i === index ? (e + 1) % 2 : e }));
  }

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20}}>The value is: {value.join(" ")}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
  }
});
