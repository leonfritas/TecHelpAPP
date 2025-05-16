import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import ButtonHome from '@/components/ButtonHome';
import Header from '@/components/Header';

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <Header />

        <View style={styles.buttonContainer}>

          <ButtonHome 
            text="ABERTURA DE CHAMADOS"
            icon="add-task"/>
          <ButtonHome 
            text="HISTÓRICO"
            icon="history"/>
          <ButtonHome 
            text="CHATBOX"
            icon="chat"/>
          <ButtonHome 
            text="CONHEÇA NOSSO PROJETO"
            icon="info"/>
          <ButtonHome 
            text="NOSSO APLICATIVO"
            icon="smartphone"/> 

        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    gap: 1,
    marginBottom: 30,
    paddingHorizontal: 20,
  }
});