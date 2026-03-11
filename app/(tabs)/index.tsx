import ProductCard from '@/components/ProductCard';
import { ScrollView, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <ProductCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});