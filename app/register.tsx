import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleRegister = () => {
    
    console.log({ username, department, password });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>TecHelp</Text>

        <Text style={styles.label}>Username</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={18} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Digite seu nome de usuário"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <Text style={styles.label}>Departamento</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="building" size={18} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Digite seu departamento"
            style={styles.input}
            value={department}
            onChangeText={setDepartment}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={18} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Digite sua senha"
            secureTextEntry={hidePassword}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons
              name={hidePassword ? 'eye-off' : 'eye'}
              size={20}
              color="#aaa"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
          <Ionicons name="arrow-forward" size={18} color="white" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#2D8EFF',
    padding: 20,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  label: {
    color: 'white',
    fontSize: 14,
    marginBottom: 4,
    marginLeft: 4,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
    paddingLeft: 6,
  },
  icon: {
    marginRight: 5,
  },
  button: {
    backgroundColor: '#004FC6',
    padding: 14,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
