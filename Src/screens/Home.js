import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

// داتای تاقیکاری (ئەمە دواتر لە سێرڤەرەوە دێت)
const ACTIVE_OFFERS = [
  { id: '1', title: 'تەماتەی خۆماڵی', price: '500 دینار', image: 'https://via.placeholder.com/150', groupSize: 5 },
  { id: '2', title: 'خەیاری تازە', price: '750 دینار', image: 'https://via.placeholder.com/150', groupSize: 3 },
];

const Home = () => {
  const renderOffer = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>بەژداری لە گرووپ بکە</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ئۆفەرە چالاکەکان</Text>
      <FlatList
        data={ACTIVE_OFFERS}
        renderItem={renderOffer}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', paddingTop: 50 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  list: { padding: 15 },
  card: { backgroundColor: '#fff', borderRadius: 12, marginBottom: 15, flexDirection: 'row-reverse', overflow: 'hidden', elevation: 3 },
  image: { width: 120, height: 120 },
  info: { flex: 1, padding: 10, justifyContent: 'space-between', alignItems: 'flex-end' },
  title: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: '#2ecc71' },
  button: { backgroundColor: '#2ecc71', padding: 8, borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});

export default Home;
