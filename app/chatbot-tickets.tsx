    // app/chatbot-tickets.tsx
    import Header from '@/components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

    interface ChatTicket {
    id: number;
    nome: string;
    email: string;
    status: 'Ativo' | 'Finalizado' | 'Em Andamento';
    }

    const mockChatTickets: ChatTicket[] = [

    { id: 1, nome: 'Matteo Andrade', email: 'AndreoHenrique@gmail.com', status: 'Finalizado' },
    { id: 2, nome: 'Leonardo Ribeiro', email: 'LeonardoRibeiro@gmail.com', status: 'Em Andamento' },
    { id: 3, nome: 'Andreo Henrique', email: 'MatteoAndrade@gmail.com', status: 'Ativo' },
    { id: 4, nome: 'Alexandre Expedito', email: 'AlexandreExpedito@gmail.com', status: 'Finalizado' },
    ];

    export default function ChatbotTickets() {
    const navigation = useNavigation<NavigationProp<any>>();

    const iniciarNovoChat = () => {
        alert('Iniciando novo chamado via chatbot...');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
        <Header title="Atendimento por Chatbot" showBackButton navigation={navigation} />
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.newChatButton} onPress={iniciarNovoChat}>
            <MaterialIcons name="add-circle" size={20} color="#fff" />
            <Text style={styles.newChatText}>Novo Atendimento com Chatbot</Text>
            </TouchableOpacity>

            {mockChatTickets.length > 0 && (
            <Text style={styles.subtitle}>Meus Chamados com Chatbot</Text>
            )}

            {mockChatTickets.map((ticket) => (
            <View key={ticket.id} style={styles.ticketCard}>
                <View>
                <Text style={styles.userName}>{ticket.nome}</Text>
                <Text style={styles.email}>{ticket.email}</Text>
                </View>
                <View
                style={[
                    styles.status,
                    ticket.status === 'Ativo' ? styles.statusAtivo : styles.statusFinalizado,
                ]}
                >
                <Text style={styles.statusText}>{ticket.status}</Text>
                </View>
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
        gap: 16,
    },
    newChatButton: {
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
    },
    newChatText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff',
        marginTop: 10,
        textAlign: 'center',
    },
    ticketCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 14,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userName: {
        fontWeight: '600',
        fontSize: 16,
        color: '#111',
    },
    email: {
        color: '#6b7280',
    },
    status: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusAtivo: {
        backgroundColor: '#dcfce7',
    },
    statusFinalizado: {
        backgroundColor: '#fee2e2',
    },
    statusEmAndamento:{
        backgroundColor: '#b59f31',
    },
    statusText: {
        color: '#111827',
        fontWeight: 'bold',
    },
    });
