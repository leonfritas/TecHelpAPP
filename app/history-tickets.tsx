import Header from '@/components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';
import { getTickets, TicketType } from '@/service/ticket-service';

type RootStackParamList = {
  Home: undefined;
  HistoryTickets: undefined;
};

export default function HistoryTickets() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [abertos, setAbertos] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleDetalhes = (id: number) => {
    setAbertos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const carregarTicketsFinalizados = async () => {
    try {
      setLoading(true);
      const data = await getTickets({ idTicket: null, dateTicket: null, status: 'Fechado' });
      setTickets(data);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível carregar os tickets finalizados.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarTicketsFinalizados();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Histórico de Chamados" showBackButton navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          tickets.map((ticket) => (
            <View key={ticket.idTicket} style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>
                  #{ticket.idTicket} / {ticket.status.toUpperCase()} / {ticket.dateTicket}
                </Text>
              </View>
              <TouchableOpacity style={styles.iconBtn} onPress={() => toggleDetalhes(ticket.idTicket)}>
                <MaterialIcons
                  name={abertos.includes(ticket.idTicket) ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={24}
                  color="#111"
                />
              </TouchableOpacity>
              {abertos.includes(ticket.idTicket) && (
                <View style={styles.detalhes}>
                  <Text style={styles.detalheTexto}>Título: {ticket.nameTicket}</Text>
                  <Text style={styles.detalheTexto}>Descrição: {ticket.description}</Text>
                  <Text style={styles.detalheTexto}>Solicitante: {ticket.nameUser}</Text>
                  <Text style={styles.detalheTexto}>Categoria: {ticket.nameCategory}</Text>
                  <Text style={styles.detalheTexto}>Status: {ticket.status}</Text>
                  <Text style={styles.detalheTexto}>Atendimento em: {ticket.dateTicket}</Text>
                </View>
              )}
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
     backgroundColor: '#3b82f6',
  },
  container: {
    padding: 16,
    gap: 12,
    paddingBottom: 40,
  },
  cardContainer: {
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,   
    width: '100%',
    alignItems: 'center',
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#000',
  },
  iconBtn: {
    marginVertical: 6,
  },
  detalhes: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  detalheTexto: {
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
  },
});
