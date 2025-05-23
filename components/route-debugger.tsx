import { Text, View } from 'react-native';
import { usePathname } from 'expo-router';

export default function RouteDebugger () {
  const pathname = usePathname();
  return (
    <View style={{ position: 'absolute', top: 50, left: 10, backgroundColor: 'white', padding: 10 }}>
      <Text>Rota atual: {pathname}</Text>
    </View>
  );
};