import ThemedButton from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.button}>
        <ThemedButton title="Press me" onPress={() => alert('Button pressed!')} />
      </ThemedView>

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
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    marginTop: 8,
  },
  button: {
    marginBottom: 16,
  },
});