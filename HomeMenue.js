import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PhoneInput from './App';
import {useNavigation} from 'react-native';


export default function MainMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notruf-Training-App V.0.2</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PhoneDial')}
      >
        <Text style={styles.buttonText}>Ziffernblock</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HelpAndTutorial')}
      >
        <Text style={styles.buttonText}>Hilfe und Tutorial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6ffe6',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});