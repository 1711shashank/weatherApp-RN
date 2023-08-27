const { View, SafeAreaView, ImageBackground, Text } = require("react-native")
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';



const City = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'royalblue' }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../imges/sunset.jpg')}
            >
                <Text style={{fontSize:40, textAlign:'center', color:'white', marginTop:50}}>Jamshedpur</Text>
                <Text style={{fontSize:40, textAlign:'center', color:'white'}}>India</Text>
                <View style={{ alignItems:'center', marginTop:40}} >
                    <Feather name="user" size={50} color={'red'}/>
                    <Text style={{fontSize:24, color:'red'}}>80000</Text>
                </View>
                <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
                    <Feather name="sunrise" size={50} color={'white'}/>
                    <Text style={{fontSize:20, fontWeight:500, color:'white'}}>07:25 AM</Text>
                    <Feather name="sunset" size={50} color={'white'}/>
                    <Text style={{fontSize:20, fontWeight:500, color:'white'}}>05:45 PM</Text>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default City;