import { FlatList, ImageBackground, SafeAreaView, Text, View } from "react-native"
import ListItem from "../components/ListItem";
import { weatherType } from '../utilities/weatherType';



const UpComingWeather = ({ weatherData }) => {

    const renderItem = ({ item }) => (

        <ListItem
            iconName={weatherType[item.weather[0].main].icon}
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
                    data={weatherData}
                    renderItem={renderItem}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default UpComingWeather;