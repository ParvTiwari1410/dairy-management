// app/index.tsx
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginScreen from '../screens/LoginScreen';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </SafeAreaView>
  );
}
