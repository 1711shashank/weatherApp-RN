import { FlatList, ImageBackground, SafeAreaView, Text, View } from "react-native"
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import ListItem from "../components/ListItem";


const upComingWeatherData = [
    {
        dt_txt: "2022-08-30 12:00:00",
        main: {
            temp_min: 296.34,
            temp_max: 298.24
        },
        weather: [
            { main: "Rain" }
        ],
    },
    {
        dt_txt: "2022-08-30 15:00:00",
        main: {
            temp_min: 296.34,
            temp_max: 298.24
        },
        weather: [
            { main: "Clear" }
        ],
    },
    {
        dt_txt: "2022-08-30 18:00:00",
        main: {
            temp_min: 296.34,
            temp_max: 298.24
        },
        weather: [
            { main: "Cloud" }
        ],
    },
];


const UpComingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'royalblue' }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../imges/weatherBackground.jpeg')}
            >
                <Text style={{ fontSize: 30, textAlign: 'center', padding: 10, height: 60, color: 'white' }}>Up Coming Weather</Text>
                <FlatList
                    keyExtractor={item => item.dt_txt}
                    data={upComingWeatherData}
                    renderItem={renderItem}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default UpComingWeather;