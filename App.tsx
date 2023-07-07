import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  
  width: 100%;
  height: 100%;
`;

const TopBar = styled.View`
  width: 100%;
  display: flex;
  height: 50px;
  border: 1px solid grey;
`;

export default function App() {
  return (
    <Container>
      <TopBar>
      </TopBar>
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      
    </Container>
  );
}
