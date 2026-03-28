import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  Image 
} from 'react-native';

const { width } = Dimensions.get('window');

const LanguageScreen = ({ onLanguageSelect }) => {
  return (
    <View style={styles.container}>
      {/* لۆگۆ یان ناوی ئەپەکە */}
      <View style={styles.header}>
        <Text style={styles.appName}>Harzan / هەرزان</Text>
        <Text style={styles.subtitle}>کڕینی بەکۆمەڵ و داشکاندنی ڕاستەقینە</Text>
      </View>

      <Text style={styles.instruction}>Select Language / زمان هەڵبژێرە</Text>

      <View style={styles.buttonContainer}>
        {/* دوگمەی زمانی کوردی */}
        <TouchableOpacity 
          style={[styles.btn, { backgroundColor: '#2ecc71' }]} 
          onPress={() => onLanguageSelect('ku')}
        >
          <Text style={styles.text}>کوردی (Kurdî)</Text>
        </TouchableOpacity>

        {/* دوگمەی زمانی عەرەبی */}
        <TouchableOpacity 
          style={[styles.btn, { backgroundColor: '#3498db' }]} 
          onPress={() => onLanguageSelect('ar')}
        >
          <Text style={styles.text}>العربية (Arabi)</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>V 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    alignItems: 'center',
    marginBottom: 50
  },
  appName: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    color: '#2ecc71',
    letterSpacing: 1
  },
  subtitle: {
    fontSize: 14,
    color: '#95a5a6',
    marginTop: 5
  },
  instruction: { 
    fontSize: 18, 
    color: '#34495e', 
    marginBottom: 30,
    fontWeight: '500'
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  btn: { 
    width: width * 0.85, 
    padding: 18, 
    borderRadius: 15, 
    marginVertical: 10, 
    alignItems: 'center', 
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  text: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    color: '#bdc3c7',
    fontSize: 12
  }
});

export default LanguageScreen;
