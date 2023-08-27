import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {

    return (
        <SafeAreaView style={styles.wrapper}>

            <View style={styles.container}>
                <Feather name={weatherType[weatherData.weather[0].main].icon} size={100} color="black" />
                <Text style={styles.temp}>
                {`${weatherData.main.temp}° `}
                </Text>
                <Text style={styles.feelsLike}>
                    {`Feels like: ${weatherData.main.feels_like}° `}
                </Text>

                <View style={styles.highLowWrapper}>
                    <Text style={styles.high}>
                        {`High: ${weatherData.main.temp_max}° `}

                    </Text>
                    <Text style={styles.low}>
                        {`Low: ${weatherData.main.temp_min}° `}
                    </Text>
                </View>

            </View>

            <View style={styles.bodyWrapper}>
                <Text style={{ fontSize: 40, textTransform: 'capitalize' }}>
                    {weatherData.weather[0].description}
                </Text>
                <Text style={{ fontSize: 25 }}>
                    {weatherType[weatherData.weather[0].main].message}
                </Text>
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
        marginBottom: 40,
        marginLeft: 20
    }
});

export default CurrentWeather;