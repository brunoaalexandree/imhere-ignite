import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #131016;
`;

export const EventName = styled.Text`
  font-size: 24px;
  color: #fdfcfe;
  font-weight: bold;
  margin-top: 48px;
`;

export const EventDate = styled.Text`
  font-size: 16px;
  color: #6b6b6b;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 56px;
  background-color: #1f1e25;
  border-radius: 5px;
  color: #fff;
  padding: 16px;
  font-size: 16px;
  margin-right: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 5px;
  background-color: #31cf67;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const FormBox = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 36px;
  margin-bottom: 42px;
`;

export const EmptyText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;
