import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutApp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ECEFF1' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sobre o TecHelp</Text>

        <Text style={styles.sectionTitle}>📱 O que é o TecHelp?</Text>
        <Text style={styles.text}>
          O TecHelp é um sistema de help desk desenvolvido para facilitar a comunicação entre usuários e técnicos de suporte. 
          Através da plataforma, é possível abrir chamados, acompanhar o andamento dos atendimentos e visualizar o histórico completo de interações.
        </Text>

        <Text style={styles.sectionTitle}>🎯 Objetivo do Projeto</Text>
        <Text style={styles.text}>
          Criar uma solução simples e eficiente para gerenciamento de chamados técnicos, oferecendo praticidade tanto para usuários finais quanto para os profissionais de suporte.
        </Text>

        <Text style={styles.sectionTitle}>👨‍💻 Desenvolvedores</Text>
        <Text style={styles.text}>
          Este projeto foi desenvolvido pelos alunos:
          {'\n\n'}• Alexandre Expedito
          {'\n'}• Andreo Henrique
          {'\n'}• Gabriel Lucas
          {'\n'}• Guilherme
          {'\n'}• Leonardo Ribeiro
          {'\n'}• Mateus
        </Text>

        <Text style={styles.sectionTitle}>🏫 Instituição de Ensino</Text>
        <Text style={styles.text}>
          Universidade Paulista (UNIP)
        </Text>

        <Text style={styles.sectionTitle}>📅 Data de Entrega</Text>
        <Text style={styles.text}>
          Dezembro de 2025
        </Text>

        <Text style={styles.sectionTitle}>🔧 Tecnologias Utilizadas</Text>
        <Text style={styles.text}>
          • React Native com TypeScript{'\n'}
          • Backend em JAVA com Spring Boot{'\n'}
          • Banco de dados SQL Server{'\n'}
          • Figma para prototipação{'\n'}        
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#263238',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    color: '#37474F',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#424242',
    marginTop: 5,
  },
});

export default AboutApp;
