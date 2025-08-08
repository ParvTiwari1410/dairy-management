import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
  const [workerId, setWorkerId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!workerId.trim() || !password.trim()) {
    alert('Please enter both Worker ID and Password.');
    return;
  }
    console.log('Worker ID:', workerId);
    console.log('Password/PIN:', password);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.heading}>दूध वितरण</Text>

        <TextInput
          placeholder="Worker ID"
          placeholderTextColor="#999"
          value={workerId}
         onChangeText={(text) => {
    const cleanedText = text.replace(/[^a-zA-Z.]/g, '');
    setWorkerId(cleanedText);
  }}
          style={styles.input}
        />

        <TextInput
          placeholder="Password / PIN"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0f4',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: '#eef0f4',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 28,
    color: '#111',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
