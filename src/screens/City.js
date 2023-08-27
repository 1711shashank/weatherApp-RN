const { View, SafeAreaView, ImageBackground, Text } = require("react-native")
import IconText from "../components/IconText";
import moment from "moment";



const City = ({ weatherData }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'royalblue' }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../imges/sunset.jpg')}
            >
                <Text style={{ fontSize: 40, textAlign: 'center', color: 'white', marginTop: 50 }}>
                    {weatherData.name}
                </Text>
                <Text style={{ fontSize: 40, textAlign: 'center', color: 'white', marginBottom: 50 }}>
                    {weatherData.country}
                </Text>
                <IconText iconName={"user"} text={weatherData.population} fontSize={24} iconFontSize={50} color={'white'} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 30 }}>
                    <IconText iconName={"sunrise"} text={moment(weatherData.sunrise).format('hh:mm A')} fontSize={20} iconFontSize={50} color={'white'} />
                    <IconText iconName={"sunset"} text={moment(weatherData.sunset).format('hh:mm A')} fontSize={20} iconFontSize={50} color={'white'} />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default City;