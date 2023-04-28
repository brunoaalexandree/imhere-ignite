import { Alert, FlatList } from "react-native";
import { Participant } from "../../components/Participant";
import {
  Container,
  EventName,
  EventDate,
  Input,
  Button,
  ButtonText,
  FormBox,
  EmptyText,
} from "./styles";
import { useState } from "react";

export function Home() {
  const [participantsList, setParticipantsList] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participantsList.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "O participante já foi adicionado"
      );
    }

    setParticipantsList([...participantsList, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipantsList((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
        style: "destructive",
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <Container>
      <EventName>Meu Aniversário</EventName>
      <EventDate>Segunda-feira, 20 de Fevereiro de 2023.</EventDate>

      <FormBox>
        <Input
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <Button onPress={handleParticipantAdd}>
          <ButtonText>+</ButtonText>
        </Button>
      </FormBox>

      <FlatList
        data={participantsList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyText>
            Ninguém chegou no evento ainda? Adicione participantes a sua de
            presença.
          </EmptyText>
        )}
      />
    </Container>
  );
}
