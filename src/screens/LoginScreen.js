import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

const LoginScreen = ({ lang, onLoginSuccess }) => {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // لێرە تەنها پشکنین بۆ دروستی ژمارەکە دەکەین و دەچینە ژوورەوە
    if (phone.length >= 10) {
      onLoginSuccess();
    } else {
      alert(lang === 'ku' ? 'تکایە ژمارەیەکی دروست بنووسە' : 'يرجى إدخال رقم صالح');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>
          {lang === 'ku' ? 'بەخێرهاتی' : 'أهلاً بك'}
        </Text>
        <Text style={styles.subtitle}>
          {lang === 'ku' ? 'بۆ بەردەوامبوون ژمارەی مۆبایلەکەت بنووسە' : 'أدخل رقم هاتفك للاستمرار'}
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.prefix}>+964</Text>
          <TextInput 
            style={styles.input}
            placeholder="7XX XXX XXXX"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            maxLength={11}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>
            {lang === 'ku' ? 'چوونەژوورەوە' : 'تسجيل الدخول'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 40, textAlign: 'center' },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 12, 
    paddingHorizontal: 15,
    width: '100%',
    height: 60,
    marginBottom: 25
  },
  prefix: { fontSize: 18, fontWeight: 'bold', color: '#333', borderRightWidth: 1, borderRightColor: '#ddd', paddingRight: 10, marginRight: 10 },
  input: { flex: 1, fontSize: 18, letterSpacing: 1 },
  button: { 
    backgroundColor: '#2ecc71', 
    width: '100%', 
    paddingVertical: 18, 
    borderRadius: 12, 
    alignItems: 'center',
    elevation: 3
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default LoginScreen;
