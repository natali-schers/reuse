import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Card 1</ThemedText>
        <ThemedText style={styles.cardText}>Conteúdo do card</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Card 2</ThemedText>
        <ThemedText style={styles.cardText}>Conteúdo do card</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Card 3</ThemedText>
        <ThemedText style={styles.cardText}>Conteúdo do card</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
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
  },
  cardText: {
    fontSize: 14,
    marginTop: 8,
  },
});