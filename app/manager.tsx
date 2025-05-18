import Header from '@/components/Header';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  InsertTicket: undefined;
};

export default function Manager() {
  const [statusSelecionado, setStatusSelecionado] = useState('Em Aberto');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const chamados = [
    {
      id: 1,
      titulo: 'Erro no sistema',
      data: '16/05/2025',
      usuario: 'João Silva',
      descricao: 'Sistema não carrega após login.',
      status: 'Em Aberto',
    },
    {
      id: 2,
      titulo: 'Erro 2',
      data: '16/05/2025',
      usuario: 'João Silva',
      descricao: 'Sistema não carrega após login.',
      status: 'Em Aberto',
    },
    {
      id: 3,
      titulo: 'Impressora não imprime',
      data: '15/05/2025',
      usuario: 'Maria Souza',
      descricao: 'Documento trava na fila de impressão.',
      status: 'Em Andamento',
    },
    {
      id: 4,
      titulo: 'Impressora 4',
      data: '15/05/2025',
      usuario: 'Maria Souza',
      descricao: 'Documento trava na fila de impressão.',
      status: 'Em Andamento',
    },
    {
      id: 5,
      titulo: 'Alterar senha de acesso',
      data: '10/05/2025',
      usuario: 'Carlos Pereira',
      descricao: 'Solicita troca de senha.',
      status: 'Finalizado',
    },
    {
      id: 6,
      titulo: 'Alterar 6',
      data: '10/05/2025',
      usuario: 'Carlos Pereira',
      descricao: 'Solicita troca de senha.',
      status: 'Finalizado',
    },
  ];

  const chamadosFiltrados = chamados.filter(
    (chamado) => chamado.status === statusSelecionado
  );

  const editarStatus = (id: number) => {
    Alert.alert(`Editar status do chamado #${id}`);
  };

  const finalizarChamado = (id: number) => {
    Alert.alert(`Finalizar chamado #${id}`);
  };

  return (
    <>
      <Header
        showBackButton={true}
        navigation={navigation}
        title="Gerenciar Chamado"
      />
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Gerenciar Chamados</Text>

        <View style={styles.statusBar}>
          {['Em Aberto', 'Em Andamento', 'Finalizado'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.statusButton,
                {
                  backgroundColor: status === statusSelecionado ? '#2563eb' : '#ffffff',
                  borderColor: '#2563eb',
                },
              ]}
              onPress={() => setStatusSelecionado(status)}
            >
              <Text
                style={{
                  color: status === statusSelecionado ? '#fff' : '#2563eb',
                  fontWeight: 'bold',
                }}
              >
                {status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.grid}>
          {chamadosFiltrados.map((chamado) => (
            <View key={chamado.id} style={styles.card}>
              <Text style={styles.cardTitle}>{chamado.titulo}</Text>
              <Text><Text style={styles.bold}>Data:</Text> {chamado.data}</Text>
              <Text><Text style={styles.bold}>Solicitante:</Text> {chamado.usuario}</Text>
              <Text><Text style={styles.bold}>Descrição:</Text> {chamado.descricao}</Text>

              <View style={styles.botoes}>
                <TouchableOpacity
                  style={styles.editBtn}
                  onPress={() => editarStatus(chamado.id)}
                >
                  <Text>Editar Status</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.finalizarBtn}
                  onPress={() => finalizarChamado(chamado.id)}
                >
                  <Text style={{ color: '#fff' }}>Finalizar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b82f6',
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    marginHorizontal: 5,
  },
  grid: {
    gap: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  botoes: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  editBtn: {
    backgroundColor: '#facc15',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  finalizarBtn: {
    backgroundColor: '#22c55e',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});
