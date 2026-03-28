import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const UPCOMING_DATA = [
  { id: '1', title: 'سێوی لۆکاڵی', date: 'بەیانی کاتژمێر ١٠:٠٠', price: '٤٥٠ دینار' },
  { id: '2', title: 'مریشکی تازە', date: 'دوو ڕۆژی تر', price: '٣,٢٥٠ دینار' },
];

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>بەمزووانە دەستپێدەکەن</Text>
      <FlatList
        data={UPCOMING_DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>دەستپێدەکات لە: {item.date}</Text>
              <Text style={styles.price}>نرخ: {item.price}</Text>
            </View>
            <TouchableOpacity style={styles.remindButton}>
              <Text style={styles.buttonText}>ئاگادارم بکەرەوە 🔔</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcfcfc', paddingTop: 50, paddingHorizontal: 15 },
  header: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#2c3e50' },
  card: { backgroundColor: '#fff', borderRadius: 15, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#eee', alignItems: 'center' },
  info: { alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  date: { color: '#e67e22', marginVertical: 5 },
  price: { color: '#7f8c8d' },
  remindButton: { backgroundColor: '#3498db', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 25 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});

export default Upcoming;
