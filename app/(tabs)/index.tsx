import ButtonHome from '@/components/ButtonHome';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/login'); 
  };

  const goToManager = () => {
    router.replace('/manager'); 
  };  

  const goToInsert= () => {
    router.replace('/insert-ticket');
  }; 
  
    const goToHistory= () => {
    router.replace('/history-tickets');
  }; 
  const goToChatBot= () => {
    router.replace('/chatbot-tickets');
  }; 
  return (
      <SafeAreaView style={styles.container}>
        

        <View style={styles.buttonContainer}>

          <ButtonHome 
            text="ABERTURA DE CHAMADOS"
            icon="add-task"
            onPress={goToInsert}/>
          <ButtonHome 
            text="GERENCIAR CHAMADOS"
            icon="list-alt"
            onPress={goToManager}/>            
          <ButtonHome 
            text="HISTÓRICO"
            icon="history"
            onPress={goToHistory}/>
          <ButtonHome 
            text="CHATBOX"
            icon="chat"
            onPress={goToChatBot}/>
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

  },
  buttonContainer: {
    flex: 1,    
    gap: 20,
    marginVertical: 30,
    paddingHorizontal: 20,
  }
});