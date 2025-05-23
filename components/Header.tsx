import logoTecHelp from '@/assets/images/logotechelp.png';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'expo-router';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  navigation?: NavigationProp<any>;
}

const router = useRouter();
const pathname = usePathname();
const Header: React.FC<HeaderProps> = ({
  title = 'TecHelp',
  showBackButton = false,  
}) => {

  function handleNavigation() {
    router.push('/(tabs)');
  }
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.leftContent}>
          <Image
            source={logoTecHelp}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.title}>{title}</Text>
        </View>

        {showBackButton && (
          <TouchableOpacity onPress={() => handleNavigation()}>
            <MaterialIcons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 12,
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});
