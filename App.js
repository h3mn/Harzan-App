import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, FlatList, Image, ScrollView } from 'react-native';

const DEMO_PRODUCTS = [
  { id: '1', name: 'مۆبایل ئایفۆن ١٥', price: '١,٢٠٠,٠٠٠', city: 'هەولێر', image: 'https://picsum.photos/200' },
  { id: '2', name: 'لاپتۆپ ئەسوس', price: '٨٥٠,٠٠٠', city: 'سلێمانی', image: 'https://picsum.photos/201' },
];

export default function App() {
  const [lang, setLang] = useState(null);
  const [step, setStep] = useState('language');
  const [activeTab, setActiveTab] = useState('Home');
  
  // State بۆ زانیارییە نوێیەکانی کاڵا
  const [pName, setPName] = useState('');
  const [pPrice, setPPrice] = useState('');

  if (step === 'language') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.logo}>هەرزان</Text>
          <TouchableOpacity style={styles.btnRed} onPress={() => { setLang('ku'); setStep('login'); }}>
            <Text style={styles.btnText}>کوردی</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBlack} onPress={() => { setLang('ar'); setStep('login'); }}>
            <Text style={styles.btnText}>العربية</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (step === 'login') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{lang === 'ku' ? 'چوونەژوورەوە' : 'تسجيل الدخول'}</Text>
          <TextInput style={styles.input} placeholder="0750 XXX XXXX" keyboardType="phone-pad" />
          <TouchableOpacity style={styles.btnRed} onPress={() => setStep('main')}>
            <Text style={styles.btnText}>{lang === 'ku' ? 'چوونە ژوورەوە' : 'دخول'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1 }}>
        {activeTab === 'Home' ? (
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>هەرزان</Text>
              <TextInput style={styles.searchBar} placeholder={lang === 'ku' ? 'بگەڕێ...' : 'ابحث...'} />
            </View>
            <FlatList
              data={DEMO_PRODUCTS}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={styles.productCard}>
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price} د.ع</Text>
                </View>
              )}
              contentContainerStyle={{ padding: 10 }}
            />
          </View>
        ) : activeTab === 'Add' ? (
          <ScrollView contentContainerStyle={styles.addForm}>
            <Text style={styles.title}>{lang === 'ku' ? 'زیادکردنی کاڵای نوێ' : 'إضافة سلعة جديدة'}</Text>
            
            <TouchableOpacity style={styles.imagePicker}>
              <Text style={{ color: '#888' }}>📷 {lang === 'ku' ? 'وێنەی کاڵا دابنێ' : 'أضف صورة السلعة'}</Text>
            </TouchableOpacity>

            <TextInput 
              style={styles.formInput} 
              placeholder={lang === 'ku' ? 'ناوی کاڵا' : 'اسم السلعة'} 
              value={pName}
              onChangeText={setPName}
            />
            
            <TextInput 
              style={styles.formInput} 
              placeholder={lang === 'ku' ? 'نرخ (د.ع)' : 'السعر (د.ع)'} 
              keyboardType="numeric"
              value={pPrice}
              onChangeText={setPPrice}
            />

            <TouchableOpacity style={styles.btnRed}>
              <Text style={styles.btnText}>{lang === 'ku' ? 'بڵاوکردنەوە' : 'نشر'}</Text>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <View style={styles.center}>
            <Text style={styles.title}>{lang === 'ku' ? 'هەژمارەکەم' : 'حسابي'}</Text>
            <Text style={{ marginTop: 10 }}>0750 XXX XXXX</Text>
          </View>
        )}
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setActiveTab('Home')} style={styles.tabItem}>
          <Text style={{ color: activeTab === 'Home' ? '#e60000' : '#888' }}>🏠 {lang === 'ku' ? 'سەرەکی' : 'الرئيسية'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Add')} style={styles.tabItem}>
          <Text style={{ color: activeTab === 'Add' ? '#e60000' : '#888' }}>➕ {lang === 'ku' ? 'زیادکردن' : 'إضافة'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Profile')} style={styles.tabItem}>
          <Text style={{ color: activeTab === 'Profile' ? '#e60000' : '#888' }}>👤 {lang === 'ku' ? 'هەژمارەکەم' : 'حسابي'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#f2f2f2', padding: 20 },
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  card: { backgroundColor: 'white', padding: 30, borderRadius: 20, alignItems: 'center' },
  logo: { fontSize: 40, fontWeight: 'bold', color: '#e60000', marginBottom: 30 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  btnRed: { backgroundColor: '#e60000', width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  btnBlack: { backgroundColor: '#333', width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  btnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  input: { width: '100%', borderBottomWidth: 2, borderBottomColor: '#ccc', padding: 10, marginBottom: 30, textAlign: 'center' },
  header: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#e60000' },
  searchBar: { backgroundColor: '#f0f0f0', padding: 10, borderRadius: 8, marginTop: 10 },
  productCard: { flex: 1, backgroundColor: '#fff', margin: 5, padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#eee' },
  productImage: { width: '100%', height: 100, borderRadius: 8 },
  productName: { fontSize: 14, fontWeight: 'bold', marginTop: 5 },
  productPrice: { fontSize: 13, color: '#e60000' },
  tabBar: { flexDirection: 'row', height: 60, borderTopWidth: 1, borderTopColor: '#eee', backgroundColor: '#fff' },
  tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  addForm: { padding: 20 },
  imagePicker: { width: '100%', height: 150, backgroundColor: '#f9f9f9', borderRadius: 15, justifyContent: 'center', alignItems: 'center', borderStyle: 'dashed', borderWidth: 2, borderColor: '#ddd', marginBottom: 20, marginTop: 20 },
  formInput: { backgroundColor: '#f5f5f5', padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16 }
});
