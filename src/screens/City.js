const { View, SafeAreaView, ImageBackground, Text } = require("react-native")
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
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

                <IconText icon='user' iconSize='50' text={weatherData.population} fontSize='24' color='#A31F34' />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 80 }}>
                    <IconText icon='sunrise' iconSize='50' text={moment(weatherData.sunrise).format('hh:mm A')} fontSize='20' color='white' />
                    <IconText icon='sunset' iconSize='50' text={moment(weatherData.sunset).format('hh:mm A')} fontSize='20' color='white' />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default City;