import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C',
    ];

    return buttons.map((button) => (
      <TouchableOpacity
        key={button}
        style={styles.button}
        onPress={() => handleButtonPress(button)}
      >
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    ));
  };

  return (

    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text>CALCULADORA</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000ff',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#fff',
  },
  resultText: {
    fontSize: 32,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#fff',
  },
  inputText: {
    fontSize: 24,
  },
  buttonsContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: '20%',
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: '#ff5930',
  },
  buttonText: {
    fontSize: 20,
  },
});              
