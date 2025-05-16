import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import ButtonHome from '@/components/ButtonHome';
import Header from '@/components/Header';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/login'); // Caminho relativo ao arquivo na pasta `app`
  };


  return (
      <SafeAreaView style={styles.container}>
        <Header />

        <View style={styles.buttonContainer}>

          <ButtonHome 
            text="ABERTURA DE CHAMADOS"
            icon="add-task"/>
          <ButtonHome 
            text="GERENCIAR CHAMADOS"
            icon="list-alt"/>            
          <ButtonHome 
            text="HISTÓRICO"
            icon="history"/>
          <ButtonHome 
            text="CHATBOX"
            icon="chat"/>
          <ButtonHome 
            text="SAIR"
            icon="exit-to-app"
            onPress={handleLogout}/>            

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
    gap: 20,
    marginVertical: 30,
    paddingHorizontal: 20,
  }
});