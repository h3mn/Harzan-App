import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = () => {
  // دروستکردنی پێکهاتەی لیستەکان بە شێوەیەکی ڕێکتر
  const MenuOption = ({ title, icon }) => (
    <TouchableOpacity style={styles.option}>
      <Text style={styles.iconText}>{icon}</Text>
      <Text style={styles.optionText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* بەشی سەرەوە: زانیاری بەکارهێنەر */}
      <View style={styles.userHeader}>
        <View style={styles.avatar}>
          <Text style={{ fontSize: 40 }}>👤</Text>
        </View>
        <Text style={styles.userName}>بەکارهێنەری هەرزان</Text>
        <Text style={styles.userPhone}>+964 7XX XXX XXXX</Text>
      </View>

      {/* لیستی بژاردەکان */}
      <View style={styles.menu}>
        <MenuOption title="کڕینەکانی من" icon="🛍️" />
        <MenuOption title="گرووپە چالاکەکانم" icon="👥" />
        <MenuOption title="ناونیشانی ماڵەوە" icon="📍" />
        
        <TouchableOpacity style={[styles.option, { borderBottomWidth: 0, marginTop: 20 }]}>
          <Text style={styles.iconText}>🚪</Text>
          <Text style={[styles.optionText, { color: '#e74c3c', fontWeight: 'bold' }]}>
            چوونە دەرەوە
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    paddingTop: 60 
  },
  userHeader: { 
    alignItems: 'center', 
    marginBottom: 40 
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    backgroundColor: '#f0f0f0', 
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee'
  },
  userName: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#2c3e50' 
  },
  userPhone: {
    fontSize: 14,
    color: '#95a5a6',
    marginTop: 5
  },
  menu: { 
    paddingHorizontal: 20 
  },
  option: { 
    flexDirection: 'row-reverse', // بۆ ئەوەی ئایکۆن و دەقەکە بە کوردی ڕێک بن
    justifyContent: 'space-between', 
    padding: 18, 
    borderBottomWidth: 1, 
    borderBottomColor: '#f9f9f9', 
    alignItems: 'center' 
  },
  optionText: { 
    fontSize: 16, 
    color: '#34495e',
    textAlign: 'right'
  },
  iconText: {
    fontSize: 20
  }
});

export default Profile;
