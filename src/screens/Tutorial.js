import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Tutorial = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ئەپی (هەرزان) چۆن کار دەکات؟</Text>
      
      <View style={styles.stepCard}>
        <Text style={styles.stepNumber}>١</Text>
        <Text style={styles.stepText}>کاڵایەک هەڵبژێرە کە پێویستتە.</Text>
      </View>

      <View style={styles.stepCard}>
        <Text style={styles.stepNumber}>٢</Text>
        <Text style={styles.stepText}>بەشداری گرووپ بکە یان گرووپ دروست بکە.</Text>
      </View>

      <View style={styles.stepCard}>
        <Text style={styles.stepNumber}>٣</Text>
        <Text style={styles.stepText}>کاتێک گرووپەکە پڕ بووەوە، کاڵاکە بە کەمترین نرخ دەگاتە دەستت!</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 50 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  stepCard: { flexDirection: 'row-reverse', alignItems: 'center', backgroundColor: '#f9f9f9', padding: 20, borderRadius: 12, marginBottom: 15 },
  stepNumber: { backgroundColor: '#2ecc71', width: 40, height: 40, borderRadius: 20, color: '#fff', textAlign: 'center', lineHeight: 40, fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
  stepText: { flex: 1, fontSize: 16, textAlign: 'right', color: '#34495e' }
});

export default Tutorial;
