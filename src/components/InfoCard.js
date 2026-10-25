import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InfoCard = ({ title, status, onPress }) => {
  // Menentukan warna badge/teks secara kondisional sesuai status
  const isSelesai = status === 'selesai';
  const statusStyle = isSelesai ? styles.statusSelesai : styles.statusProses;

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titleText}>{title}</Text>
      
      {/* Badge Status */}
      <View style={[styles.badge, statusStyle]}>
        <Text style={styles.badgeText}>
          {isSelesai ? 'Selesai' : 'Proses'}
        </Text>
      </View>

      {/* Tombol Interaktif */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  statusSelesai: {
    backgroundColor: '#d4edda', // Background hijau muda
  },
  statusProses: {
    backgroundColor: '#ffe8cc', // Background oranye muda
  },
  badgeText: {
    fontWeight: '600',
    fontSize: 12,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default InfoCard;