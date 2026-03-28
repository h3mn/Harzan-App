import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OnboardingScreen = ({ onFinish, lang }) => {
  const handleStart = () => {
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <View style={styles.container}>
      {/* لێرە دەتوانیت دیزاینی سلایدەکانت دابنێیت */}
      <Text style={styles.welcomeText}>
        {lang === 'ku' ? 'بەخێرهاتی بۆ هەرزان' : 'أهلاً بك في هرزان'}
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>
          {lang === 'ku' ? 'دەستپێکردن' : 'ابدأ'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff' 
  },
  welcomeText: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  button: { 
    backgroundColor: '#2ecc71', 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    borderRadius: 10 
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default OnboardingScreen;
