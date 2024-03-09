import { StyleSheet, Text, View } from "react-native";

export default function Header() {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const today = new Date();
    let day = weekday[today.getDay()];

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{day} Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 10,
    },
    title: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
});