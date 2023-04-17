import React, { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, FlatList, StyleSheet, Dimensions, Alert } from 'react-native';

export default function PhoneInput(){
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleKeyPress = (item) => {
    if (item === 'del') {
      setPhoneNumber(phoneNumber.slice(0, -1));
    } else if (phoneNumber.length < 3) {
      setPhoneNumber(phoneNumber + item);
    }
  };

  const callPhoneNumber = () => {
    if (phoneNumber === '110' || phoneNumber === '112') {
      Alert.alert('Juhu', `Du hast die Nummer ${phoneNumber} gewählt`);
      setPhoneNumber('');
    } else if (phoneNumber === '') {
      Alert.alert('Keine Nummer', 'Bitte wähle eine Nummer');
    } else {
      setPhoneNumber('');
      Alert.alert('Falsche Nummer', 'Leider ist dies falsch. Wähle bitte die 110 oder 112');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => handleKeyPress(item)}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{item}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Telefonnummer eingeben"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.textInput}
        editable={false} // Textfeld nicht editierbar
        maxLength={3} // maximale Länge auf 3 beschränken
        fontSize={24}
      />
      <FlatList
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#', 'del']}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        scrollEnabled={false}
        contentContainerStyle={styles.flatList}
      />
      <TouchableWithoutFeedback onPress={callPhoneNumber}>
        <View style={styles.callButton}>
          <Text style={styles.callButtonText}>Anrufen</Text>
        </View>
      </TouchableWithoutFeedback>
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
  textInput: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: Dimensions.get('window').height * 0.05,
    textAlign: 'center',
    fontSize: 24,
  },
  flatList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
  },
  callButton: {
    clickEvents: true,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  callButtonText: {
    color: 'white',
    fontSize: 24,
  },
});