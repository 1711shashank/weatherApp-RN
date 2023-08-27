const { View, SafeAreaView, ImageBackground, Text } = require("react-native")
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import IconText from "../components/IconText";



const City = ({weatherData}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'royalblue' }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../imges/sunset.jpg')}
            >
                <Text style={{ fontSize: 40, textAlign: 'center', color: 'white', marginTop: 50 }}>Jamshedpur</Text>
                <Text style={{ fontSize: 40, textAlign: 'center', color: 'white', marginBottom: 50 }}>India</Text>
                <IconText iconName={"user"} text={"8000"} fontSize={24} iconFontSize={50} color={'red'} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 30 }}>
                    <IconText iconName={"sunrise"} text={"07:25 AM"} fontSize={20} iconFontSize={50} color={'white'} />
                    <IconText iconName={"sunset"} text={"05:45 PM"} fontSize={20} iconFontSize={50} color={'white'} />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default City;