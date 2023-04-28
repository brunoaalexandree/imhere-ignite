import { Text, TouchableOpacity, View } from "react-native";
import { Button, ButtonText, Container, Name } from "./styles";

interface IParticipant {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: IParticipant) {
  return (
    <Container>
      <Name>{name}</Name>

      <Button onPress={onRemove}>
        <ButtonText>-</ButtonText>
      </Button>
    </Container>
  );
}
