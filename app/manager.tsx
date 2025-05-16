import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

export default function Manager() {
  const [statusSelecionado, setStatusSelecionado] = useState('Em Aberto');

  const chamados = [
    {
      id: 1,
      titulo: 'Erro no sistema',
      data: '16/05/2025',
      usuario: 'João Silva',
      descricao: 'Sistema não carrega após login.',
      status: 'Em Aberto',
    },
    {
      id: 1,
      titulo: 'Erro no sistema',
      data: '16/05/2025',
      usuario: 'João Silva',
      descricao: 'Sistema não carrega após login.',
      status: 'Em Aberto',
    },    
    {
      id: 2,
      titulo: 'Impressora não imprime',
      data: '15/05/2025',
      usuario: 'Maria Souza',
      descricao: 'Documento trava na fila de impressão.',
      status: 'Em Andamento',
    },
    {
      id: 2,
      titulo: 'Impressora não imprime',
      data: '15/05/2025',
      usuario: 'Maria Souza',
      descricao: 'Documento trava na fila de impressão.',
      status: 'Em Andamento',
    },    
    {
      id: 3,
      titulo: 'Alterar senha de acesso',
      data: '10/05/2025',
      usuario: 'Carlos Pereira',
      descricao: 'Solicita troca de senha.',
      status: 'Finalizado',
    },
    {
      id: 4,
      titulo: 'Alterar senha de acesso',
      data: '10/05/2025',
      usuario: 'Carlos Pereira',
      descricao: 'Solicita troca de senha.',
      status: 'Finalizado',
    },    
  ];

  const chamadosFiltrados = chamados.filter(
    (chamado) => chamado.status === statusSelecionado
  );

  const editarStatus = (id: any) => {
    alert(`Editar status do chamado #${id}`);
  };

  const finalizarChamado = (id: any) => {
    alert(`Finalizar chamado #${id}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Gerenciar Chamados</h2>

      <div style={styles.statusBar}>
        {['Em Aberto', 'Em Andamento', 'Finalizado'].map((status) => (
          <button
            key={status}
            style={{
              ...styles.statusButton,
              backgroundColor: status === statusSelecionado ? '#2563eb' : '#ffffff',
              color: status === statusSelecionado ? '#fff' : '#2563eb',
              borderColor: '#2563eb',
            }}
            onClick={() => setStatusSelecionado(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {chamadosFiltrados.map((chamado) => (
          <div key={chamado.id} style={styles.card}>
            <h3>{chamado.titulo}</h3>
            <p><strong>Data:</strong> {chamado.data}</p>
            <p><strong>Solicitante:</strong> {chamado.usuario}</p>
            <p><strong>Descrição:</strong> {chamado.descricao}</p>

            <div style={styles.botoes}>
              <button style={styles.editBtn} onClick={() => editarStatus(chamado.id)}>
                Editar Status
              </button>
              <button style={styles.finalizarBtn} onClick={() => finalizarChamado(chamado.id)}>
                Finalizar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b82f6',
    minHeight: 100,
    padding: 20,
    color: '#fff',
    fontFamily: 'sans-serif',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
  },
  statusBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: '8px',
    // border: '2px solid',
    cursor: 'pointer',
    fontWeight: 'bold',
    // transition: 'all 0.2s ease-in-out',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  card: {
    backgroundColor: '#ffffff',
    color: '#000',
    borderRadius: '10px',
    padding: 15,
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  },
  botoes: {
    marginTop: 10,
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
  },
  editBtn: {
    backgroundColor: '#facc15',
    // border: none,
    // padding: 8 12,
    borderRadius: '6px',
    cursor: 'pointer',
  },
  finalizarBtn: {
    backgroundColor: '#22c55e',
    // border: 'none',
    // padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    color: '#fff',
  },
});