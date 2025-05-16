import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';


import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>TecHelp</Text>

            <Text style={styles.label}>Username</Text>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Digite seu nome de usuário"
                value={username}
                onChangeText={setUsername}
                />
                <TouchableOpacity onPress={() => setUsername('')}>
                <MaterialIcons name="close" size={20} color="#888" />
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
                </TouchableOpacity>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox 
                checked={rememberMe} 
                onPress={() => setRememberMe(!rememberMe)} 
                />
                <Text style={styles.checkboxLabel}>Lembrar senha?</Text>
            </View>   

            <TouchableOpacity 
                style={styles.button}
                onPress={() => router.push('/(tabs)')}
            >
                <Text style={styles.buttonText}>LOGIN</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 5 }} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => router.push('/register')}
            >
                <Text style={styles.buttonText}>CRIAR CONTA</Text>                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3399FF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 36,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 40,
    },
    label: {
        alignSelf: 'flex-start',
        color: '#fff',
        fontSize: 14,
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 15,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    checkboxLabel: {
        color: '#fff'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#0057D9',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    createAccountText: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    createAccountButton: {
        marginTop: 15,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
});
