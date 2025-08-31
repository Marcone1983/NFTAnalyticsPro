import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [contract, setContract] = useState('');
  const [volume, setVolume] = useState('');

  const analyze = () => {
    const randomVolume = (Math.random() * 100000).toFixed(2);
    setVolume(`€${randomVolume}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFT Analytics Pro</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Contract Address" 
        value={contract} 
        onChangeText={setContract} 
        placeholderTextColor="#666" 
      />
      <TouchableOpacity style={styles.button} onPress={analyze}>
        <Text style={styles.buttonText}>ANALYZE</Text>
      </TouchableOpacity>
      {volume ? <Text style={styles.volume}>{volume}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#1a1a2e', 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 32, 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 30, 
    fontWeight: 'bold' 
  },
  input: { 
    backgroundColor: 'rgba(255,255,255,0.1)', 
    padding: 15, 
    borderRadius: 10, 
    color: '#fff', 
    marginBottom: 20, 
    fontSize: 16 
  },
  button: { 
    backgroundColor: '#00d4ff', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  volume: { 
    fontSize: 36, 
    color: '#00d4ff', 
    textAlign: 'center', 
    marginTop: 30 
  }
});
