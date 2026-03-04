import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Sua página inicial</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card 1</Text>
          <Text style={styles.cardText}>Conteúdo do card</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card 2</Text>
          <Text style={styles.cardText}>Conteúdo do card</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card 3</Text>
          <Text style={styles.cardText}>Conteúdo do card</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  content: {
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});