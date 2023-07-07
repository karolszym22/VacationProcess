import styled from "styled-components/native";


const VacationContainer = styled.View`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  width: 80%;
  margin: 20px
  border: 1px solid black;

`;


export default function VacationRaport()  {
    return (
       <VacationContainer>
          <Container></Container>
      </VacationContainer>
    );
  }


