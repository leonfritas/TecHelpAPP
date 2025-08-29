import Header from '@/components/Header';
import type { TicketType } from '@/service/ticket-select';
import { getTickets } from '@/service/ticket-select'; 
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  InsertTicket: undefined;
};

export default function Manager() {
  const [statusSelecionado, setStatusSelecionado] = useState('Em Aberto');
  const [chamados, setChamados] = useState<TicketType[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const carregarChamados = async (status: string) => {
    
    try {
      setLoading(true);
      const data = await getTickets({
        idTicket: null,
        dateTicket: null,
        status: status,
      });
      console.log('Chamados carregados:', data);
      setChamados(data);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível carregar os chamados.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarChamados(statusSelecionado);
  }, [statusSelecionado]);

  const editarStatus = (id: number) => {
    alert(`Editar status do chamado #${id}`);
  };

  const finalizarChamado = (id: number) => {
    alert(`Finalizar chamado #${id}`);
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
          {['Aberto', 'Em andamento'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.statusButton,
                {
                  backgroundColor:
                    status === statusSelecionado ? '#2563eb' : '#ffffff',
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

        {loading ? (
          <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
        ) : (
          <View style={styles.grid}>
            {chamados.map((chamado) => (
              <View key={chamado.idTicket} style={styles.card}>
                <Text style={styles.cardTitle}>{chamado.nameTicket}</Text>
                <Text>
                  <Text style={styles.bold}>Data:</Text> {chamado.dateTicket}
                </Text>
                <Text>
                  <Text style={styles.bold}>Solicitante:</Text> {chamado.nameUser}
                </Text>
                <Text>
                  <Text style={styles.bold}>Categoria:</Text> {chamado.nameCategory}
                </Text>
                <Text>
                  <Text style={styles.bold}>Descrição:</Text> {chamado.description}
                </Text>

                <View style={styles.botoes}>
                  <TouchableOpacity
                    style={styles.editBtn}
                    onPress={() => editarStatus(chamado.idTicket)}
                  >
                    <Text>Editar Status</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.finalizarBtn}
                    onPress={() => finalizarChamado(chamado.idTicket)}
                  >
                    <Text style={{ color: '#fff' }}>Finalizar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
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
