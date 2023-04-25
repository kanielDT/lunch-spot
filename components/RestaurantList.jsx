import { View,Text, StyleSheet, ScrollView } from "react-native"

export default function RestaurantList() {
    return(
        <View styles={styles.Container}>
        <Text styles={styles.title} >Restaurant List</Text>
        <ScrollView style={styles.list}></ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight:700,
        color:"#151854",
    },

    list: {
        width:"100%",
        borderColor:"red",
    },

    Container:{
        flex: 1,
        backgroundColor:"pink",
        marginTop: 56, //margin vertical, margin horizontal
        marginBottom:24,
        width:"90%",
        alignItems:"center",
        justifyContent:"flex-start",
    },
})