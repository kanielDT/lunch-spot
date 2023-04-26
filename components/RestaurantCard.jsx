import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

export default function RestaurantCard({ food, navigation }) {

    const chooseRestaurant = () => {
        navigation.navigate("details")
    }

    return (
        <TouchableOpacity onPress={chooseRestaurant}>
            <View style={styles.card}>
                <Text style={styles.name}>{food.name}</Text>
                <Image style={styles.img} source={{ uri: food.image }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "white",
        marginVertical: 8,
        alignItems: "center",
        padding: 16,
        borderRadius: 10,
        borderColor: "#646D7E",
        borderWidth: 2,
    },

    name: {
        fontSize: 24,
        marginBottom: 4,
    },
    img: {
        width: 340,
        height: 200,
        borderRadius: 6,
    }
})