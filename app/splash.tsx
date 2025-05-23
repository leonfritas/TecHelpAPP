import React, { useEffect, useRef } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import LoginPage from './login';

const { width } = Dimensions.get('window');

export default function SplashScreen() {
  const logoTranslateX = useRef(new Animated.Value(0)).current;
  const loginTranslateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.parallel([
        Animated.timing(logoTranslateX, {
          toValue: -width,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(loginTranslateX, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>

      <Animated.View style={[styles.loginContainer, { transform: [{ translateX: loginTranslateX }] }]}>
        <LoginPage />
      </Animated.View>

      <Animated.Image
        source={require('../assets/images/logotechelp.png')} 
        style={[styles.logo, { transform: [{ translateX: logoTranslateX }] }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3399FF',
    overflow: 'hidden',
  },
  logo: {
    position: 'absolute',
    width: 200,
    height: 200,
    top: '30%',
    left: '25%',
    zIndex: 10,
  },
  loginContainer: {
    flex: 1,
  },
});
