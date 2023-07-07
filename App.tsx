import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";
import VacationRaport from "./Components/Views/VacationRaport";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #ebeaea;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TopBar = styled.View`
  width: 100%;
  display: flex;
  height: 80px;
  -webkit-box-shadow: 1px 10px 9px -14px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 10px 9px -14px rgba(66, 68, 90, 1);
  background-color: #393240;
  border-bottom: 1px solid grey;
`;
const TopBarContainer = styled.View`
  width: 100%;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  
`;

const ButtonContainer = styled.TouchableOpacity`
   display: flex;
   width: 25%;
 
`;
const ButtonText = styled.Text`
  font-size: 12px;
  padding-top: 35px
  font-weight: bold;
  text-align: center;
  color: white;
`;

export default function App() {
  return (
    <Container>
      <TopBar>
        <TopBarContainer>
          <ButtonContainer>
            <ButtonText>Główna</ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonText>Urlopy</ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonText>FAQ</ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonText>Zaloguj się</ButtonText>
          </ButtonContainer>
        </TopBarContainer>
      </TopBar>
      <View>
        <StatusBar style="auto" />
      </View>
      <VacationRaport></VacationRaport>
    </Container>
  );
}
