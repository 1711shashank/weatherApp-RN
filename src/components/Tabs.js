import CurrentWeather from '../screens/CurrentWeather';
import UpComingWeather from '../screens/UpComingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';



const Tabs = ({ weather }) => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#ED2939',
                tabBarInactiveTintColor: 'gray',
                headerStyle: {
                    backgroundColor: '#f1f1f1',
                },
                headerTitleStyle: {
                    fontSize: 25,
                    color: '#ED2939',
                },
                tabBarStyle: {
                    backgroundColor: '#f1f1f1',
                },
            }}
        >
            <Tab.Screen name={'Current'} options={{ tabBarIcon: ({ focused }) => <Feather name="droplet" size={25} color={focused ? '#ED2939' : 'gray'} /> }}>
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>

            <Tab.Screen name={'Up Coming'} options={{ tabBarIcon: ({ focused }) => <Feather name="clock" size={25} color={focused ? '#ED2939' : 'gray'} /> }}>
                {() => <UpComingWeather weatherData={weather.list} />}
            </Tab.Screen>

            <Tab.Screen name={'City'} options={{ tabBarIcon: ({ focused }) => <Feather name="home" size={25} color={focused ? '#ED2939' : 'gray'} /> }}>
                {() => <City weatherData={weather.city} />}
            </Tab.Screen>

        </Tab.Navigator>


    )
}

export default Tabs;