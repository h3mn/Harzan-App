import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// هێنانەناوەی شاشەکان
import LanguageScreen from './src/screens/LanguageScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import Home from './src/screens/Home';
import Upcoming from './src/screens/Upcoming';
import Tutorial from './src/screens/Tutorial';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();

function MainTabs({ route }) {
  const lang = route?.params?.lang || 'ku'; 
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'flash';
          else if (route.name === 'Upcoming') iconName = 'time';
          else if (route.name === 'Tutorial') iconName = 'help-circle';
          else if (route.name === 'Profile') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2ecc71',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: { height: 60, paddingBottom: 10 },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: lang === 'ku' ? 'هەرزان' : 'عروض' }} />
      <Tab.Screen name="Upcoming" component={Upcoming} options={{ title: lang === 'ku' ? 'بەمزووانە' : 'قريباً' }} />
      <Tab.Screen name="Tutorial" component={Tutorial} options={{ title: lang === 'ku' ? 'ڕێنمایی' : 'تعليمات' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: lang === 'ku' ? 'پڕۆفایل' : 'حسابي' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [locale, setLocale] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('language'); 

  const handleLanguageSelect = (selectedLang) => {
    setIsLoading(true);
    setTimeout(() => {
      setLocale(selectedLang);
      setIsLoading(false);
      setCurrentStep('onboarding'); 
    }, 600);
  };

  const handleFinishOnboarding = () => {
    setCurrentStep('login');
  };

  const handleLoginSuccess = () => {
    setCurrentStep('main');
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {currentStep === 'language' && <LanguageScreen onLanguageSelect={handleLanguageSelect} />}
      {currentStep === 'onboarding' && <OnboardingScreen lang={locale} onFinish={handleFinishOnboarding} />}
      {currentStep === 'login' && <LoginScreen lang={locale} onLoginSuccess={handleLoginSuccess} />}
      {currentStep === 'main' && (
        <NavigationContainer>
          <MainTabs route={{ params: { lang: locale } }} />
        </NavigationContainer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
});
