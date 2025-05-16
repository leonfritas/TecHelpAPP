import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ButtonHomeProps {
  text: string;
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  onPress?: () => void; // Nova prop para ação de clique
}

export default function ButtonHome({ text, icon, onPress }: ButtonHomeProps) {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress} // Adiciona a prop onPress aqui
    >
      <MaterialIcons name={icon} size={28} color="#000" />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 25,
        borderRadius: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 15,
        textAlign: 'center',
    },
});