import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  if (!loaded) {
    return <></>; 
  }

  const [currentRoute, setCurrentRoute] = useState('/');
  const pathname = usePathname();
  useEffect(() => {
    setCurrentRoute(pathname || '/');
    console.log('Rota atual:', pathname); 
  }, [pathname]);


  return (
    <SafeAreaProvider>
      
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaView style={{ flex: 1 }}>
        <Stack   initialRouteName="login"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#3b82f6' }            
          }}
        >
          <Stack.Screen name="login" options={{headerShown: false, animation: currentRoute == '/splash' ? 'slide_from_right' : 'slide_from_left' }}/>
          <Stack.Screen name="register" options={{ headerShown: false  }}  />        
          <Stack.Screen name="(tabs)" options={{headerShown: false, animation: currentRoute == '/' || currentRoute == '/login' || currentRoute == '/splash' ? 'slide_from_right' : 'slide_from_left' }}  />
          <Stack.Screen name="manager" options={{headerShown: false, animation: 'slide_from_right' }} />
          <Stack.Screen name="insert-ticket" options={{headerShown: false, animation: 'slide_from_right' }}/>
          <Stack.Screen name="history-tickets" options={{headerShown: false, animation: 'slide_from_right' }}/>
          <Stack.Screen name="chatbot-tickets" options={{headerShown: false, animation: 'slide_from_right' }}/>
          <Stack.Screen name="splash" options={{headerShown: false}}/>
          <Stack.Screen name="index" options={{headerShown: false}}/>
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}