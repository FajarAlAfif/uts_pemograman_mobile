import { useState } from 'react';
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import InfoCard from './components/InfoCard';

// 1. Data Statis Mahasiswa (Min 5 Items)
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alexander Smith', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Charlotte Brown', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Daniel Johnson', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Emily Davis', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'James Wilson', prodi: 'Sistem Informasi' },
  { id: '6', nama: 'Liam Miller', prodi: 'Teknologi Informasi' },
  { id: '7', nama: 'Olivia Taylor', prodi: 'Teknik Informatika' },
  { id: '8', nama: 'Sophia Anderson', prodi: 'Sistem Informasi' },
  { id: '9', nama: 'Thomas White', prodi: 'Teknologi Informasi' },
  { id: '10', nama: 'William Thomas', prodi: 'Teknik Informatika' },
];

const App = () => {
  // 2. State untuk Input Pencarian
  const [keyword, setKeyword] = useState('');

  // 4. Logika Real-Time Filtering berdasarkan Nama
  const filteredMahasiswa = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* SECTION 1: SOAL 1 (Custom Component InfoCard) */}
      <Text style={styles.sectionTitle}>1. Info Cards (Reusable Props)</Text>
      <InfoCard
        title="Tugas 1: Pengenalan React Native"
        status="selesai"
        onPress={() => Alert.alert('Detail', 'Tugas 1 telah diselesaikan!')}
      />
      <InfoCard
        title="Tugas 2: State & Props Component"
        status="proses"
        onPress={() => Alert.alert('Detail', 'Tugas 2 masih dalam proses!')}
      />

      {/* SECTION 2: SOAL 2 (Real-Time Search & FlatList) */}
      <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
        2. Direktori Mahasiswa
      </Text>

      {/* 3. Controlled Input (TextInput) */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={(text) => setKeyword(text)}
      />

      {/* 5. Rendred FlatList */}
      <FlatList
        data={filteredMahasiswa}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.mhsCard}>
            <Text style={styles.mhsNama}>{item.nama}</Text>
            <Text style={styles.mhsProdi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  mhsCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  mhsNama: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  mhsProdi: {
    fontSize: 13,
    color: '#666',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: '#888',
    fontStyle: 'italic',
  },
});
