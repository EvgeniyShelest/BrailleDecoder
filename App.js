import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RadioButton from './components/UI/RadioButton.jsx';
import { convert_from } from './utils/braille-conversion.js';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleRadio = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text>{convert_from("100000")} to start working on my</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={toggleRadio}
        >
        <RadioButton style={{}} selected={isEnabled} />
      </TouchableOpacity>
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
});
