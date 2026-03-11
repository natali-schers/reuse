import { Image, StyleSheet } from "react-native";
import ThemedButton from "./ThemedButton";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

function ProductCard() {
    return (
        <ThemedView>
                <Image
                    source={require("../assets/images/default-product.png")}
                    style={styles.image}
                />

            <ThemedView style={styles.cardBody}>
                <ThemedText style={styles.title}>Product Title</ThemedText>
                <ThemedText style={styles.price}>$19.99</ThemedText>
                <ThemedButton title="View Details" onPress={() => alert("Product details viewed!")} />
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({

    cardBody: {
        padding: 16,
        gap: 16,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
    },
    image: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
});

export default ProductCard;