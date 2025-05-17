// app/history-tickets.tsx
import Header from '@/components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  HistoryTickets: undefined;
};

interface Chamado {
  id: number;
  status: string;
  data: string;
  detalhes: string;
}

const mockChamados: Chamado[] = [
  { id: 101, status: 'Aberto', data: '2025-05-16', detalhes: 'Erro ao acessar o sistema' },
  { id: 102, status: 'Em andamento', data: '2025-05-15', detalhes: 'Problema com impressão' },
  { id: 103, status: 'Finalizado', data: '2025-05-14', detalhes: 'Senha redefinida com sucesso' },
];

export default function HistoryTickets() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [abertos, setAbertos] = useState<number[]>([]);

  const toggleDetalhes = (id: number) => {
    setAbertos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Histórico de Chamados" showBackButton navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {mockChamados.map((chamado) => (
          <View key={chamado.id} style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                #{chamado.id} / {chamado.status.toUpperCase()} / {chamado.data}
              </Text>
            </View>
            <TouchableOpacity style={styles.iconBtn} onPress={() => toggleDetalhes(chamado.id)}>
              <MaterialIcons
                name={abertos.includes(chamado.id) ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={24}
                color="#111"
              />
            </TouchableOpacity>
            {abertos.includes(chamado.id) && (
              <View style={styles.detalhes}>
                <Text style={styles.detalheTexto}>{chamado.detalhes}</Text>
                <Text style={styles.detalheTexto}>Status: {chamado.status}</Text>
                <Text style={styles.detalheTexto}>Atendimento em: {chamado.data}</Text>
              </View>
            )}
          </View>
        ))}
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
