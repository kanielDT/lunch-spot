import { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { RestaurantContext } from "../App";

export default function RestaurantDetailList() {

    const { selectedRestaurant } = useContext(RestaurantContext)

    return (
        <View style={styles.main}>
            <Image source={{ uri: selectedRestaurant.Image }} />
            <Text style={styles.title}>{selectedRestaurant.name}</Text>
            <View style={styles.meta}>
                <Text>Cuisine: {selectedRestaurant.cuisine}</Text>
                <Text>Rating: {selectedRestaurant.rating.toFixed(1)}⭐️</Text>
            </View>
            <Text style={styles.addr}>{selectedRestaurant.address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "tan",
        width: "100%",
        alignItems: "center",
        padding: 16
    },
    title: {
        fontSize: 32,
        fontWeight: 700,
        marginVertical: 16
    },
    img: {
        width: 420,
        height: 280,
        borderRadius: 6
    },
    addr: {
        fontSize: 16
    },
    meta: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16
    }
})