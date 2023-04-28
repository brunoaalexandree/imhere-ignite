import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: #1f1e25;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10;
`;

export const Name = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #fff;
  margin-left: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 5px;
  background-color: #e23c44;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
`;
