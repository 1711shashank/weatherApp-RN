import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feelsLike}>Feels like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.high}>High: 8</Text>
                    <Text style={styles.low}>Low: 3</Text>
                </View>
            </View>


            <View style={styles.bodyWrapper}>
                <Text style={{ fontSize: 48 }}>Its Sunny</Text>
                <Text style={{ fontSize: 30 }}>It's a perfect T-shirt weather</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        heigth: 100,
        width: 100
    },
    temp: {
        fontSize: 48,
        color: 'black'
    },
    feelsLike: {
        fontSize: 30,
    },
    high: {
        fontSize: 20,
    },
    low: {
        fontSize: 20,
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginBottom: 40
    }
});

export default CurrentWeather;