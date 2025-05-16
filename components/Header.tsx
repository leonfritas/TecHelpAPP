import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ou use react-native-vector-icons

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'TecHelp' }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <SafeAreaView >
        <View style={styles.header}>
          <Text style={styles.logo}>{title}</Text>
          {/* <TouchableOpacity onPress={toggleMenu}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>

      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={menuVisible}
        onRequestClose={toggleMenu}
      > */}
        {/* <TouchableOpacity style={styles.modalOverlay} onPress={toggleMenu}>
          <SafeAreaView style={styles.menuContainer}>
            {['ABERTURA DE CHAMADAS', 'HISTORICO DE CHAMADAS', 'CHATBOT', 'CONHEÇA NOSSO PROJETO', 'NOSSO APLICATIVO'].map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem} onPress={() => {}}>
                <Text style={styles.menuText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </SafeAreaView>
        </TouchableOpacity> */}
      {/* </Modal> */}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#111827',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'flex-start'
  },
  menuContainer: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center'
  },
  menuText: {
    fontWeight: 'bold',
    color: '#000'
  }
});

export default Header;
