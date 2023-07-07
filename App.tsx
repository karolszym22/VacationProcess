import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
const Container = styled.View`
  flex: 1;
  background-color: #c61d1d;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </Container>
  );
}



