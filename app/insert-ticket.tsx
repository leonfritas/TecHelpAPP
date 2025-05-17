import Header from '@/components/Header'; // Se não estiver usando alias, troque por '../components/Header'
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  InsertTicket: undefined;
};

export default function InsertTicket() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [tipoChamado, setTipoChamado] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('');

  const handleSubmit = () => {
    console.log({ tipoChamado, categoria, descricao, prioridade });
    // navigation.navigate('Home'); // descomente se quiser voltar após envio
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        showBackButton={true}
        navigation={navigation}
        title="Abrir Chamado"
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Preencha os dados do chamado</Text>

        <Text style={styles.label}>Tipo de Chamado</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={tipoChamado}
            onValueChange={(itemValue) => setTipoChamado(itemValue)}
            style={styles.picker}
            dropdownIconColor="#3b82f6"
          >
            <Picker.Item label="Selecione o tipo" value="" />
            <Picker.Item label="Erro no Sistema" value="erro" />
            <Picker.Item label="Suporte Técnico" value="suporte" />
            <Picker.Item label="Dúvida" value="duvida" />
          </Picker>
        </View>

        <Text style={styles.label}>Categoria</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={categoria}
            onValueChange={(itemValue) => setCategoria(itemValue)}
            style={styles.picker}
            dropdownIconColor="#3b82f6"
          >
            <Picker.Item label="Selecione a categoria" value="" />
            <Picker.Item label="Acesso" value="acesso" />
            <Picker.Item label="Financeiro" value="financeiro" />
            <Picker.Item label="Geral" value="geral" />
            <Picker.Item label="Software" value="software" />
            <Picker.Item label="Hardware" value="hardware" />
          </Picker>
        </View>

        <Text style={styles.label}>Prioridade</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={prioridade}
            onValueChange={(itemValue) => setPrioridade(itemValue)}
            style={styles.picker}
            dropdownIconColor="#3b82f6"
          >
            <Picker.Item label="Selecione a prioridade" value="" />
            <Picker.Item label="Baixa" value="baixa" />
            <Picker.Item label="Média" value="media" />
            <Picker.Item label="Alta" value="alta" />
            <Picker.Item label="Urgente" value="urgente" />
          </Picker>
        </View>

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={6}
          placeholder="Descreva detalhadamente o problema..."
          placeholderTextColor="#9ca3af"
          value={descricao}
          onChangeText={setDescricao}
        />

        <TouchableOpacity
          style={[
            styles.button,
            (!tipoChamado || !categoria || !descricao || !prioridade) &&
              styles.disabledButton,
          ]}
          onPress={handleSubmit}
          disabled={!tipoChamado || !categoria || !descricao || !prioridade}
        >
          <Text style={styles.buttonText}>ABRIR CHAMADO</Text>
          <IconSymbol name="chevron.right" color="#fff" size={20} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#3b82f6',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 20,
    gap: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    color: '#1f2937',
  },
  textArea: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#1f2937',
    minHeight: 150,
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#1d4ed8',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#64748b',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 8,
  },
});
