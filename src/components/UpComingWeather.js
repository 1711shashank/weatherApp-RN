import { FlatList, ImageBackground, SafeAreaView, Text, View } from "react-native"
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";


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


const Item = ({ dt_txt, min, max }) => (
    <View style={{ backgroundColor:'lightgray', border: '1px solid gray', marginVertical: 8, marginHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Feather name="sun" size={50} color="black" style={{ margin: 10 }} />
        <Text style={{ margin: 20 }}>{dt_txt}</Text>
        <Text style={{ margin: 20 }}>{min}</Text>
        <Text style={{ margin: 20 }}>{max}</Text>
    </View>
);

const UpComingWeather = () => {
    const renderItem = ({ item }) => (
        <Item
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    );

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0, backgroundColor: 'royalblue' }}>
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