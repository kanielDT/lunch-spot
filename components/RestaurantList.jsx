import { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import RestaurantCard from "./RestaurantCard"

export default function RestaurantList({ navigation }) {

    const [foodList, setFoodList] = useState()

    useEffect(() => {
        fetch("https://my-first-firestore-bc.web.app/restaurants")
            .then(resp => resp.json())
            .then(setFoodList)
            .catch(alert)
    }, [])

    return (
        <View styles={styles.container}>
            <Text styles={styles.title} >Restaurant List</Text>
            <ScrollView style={styles.list}>
                {foodList && foodList.map(food => (
                    <RestaurantCard food={food} key={food.id} navigation={navigation} />
                ))}</ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 700,
        marginVertical: 8,
        color: "#151854",
    },

    container: {
        flex: 1,
        backgroundColor: "pink",
        width: "90%",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 6,
    },

    list: {
        width: "100%",
        //  borderColor:"red",
        //  borderWidth:2,
    }
})