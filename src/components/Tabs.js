import CurrentWeather from '../screens/CurrentWeather';
import UpComingWeather from '../screens/UpComingWeather';
import City from '../screens/City';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';



const Tabs = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerStyle:{
                    backgroundColor:'#f1f1f1',
                },
                headerTitleStyle:{
                    fontSize:25,
                    color  :'tomato',
                },
                tabBarStyle:{
                    backgroundColor:'#f1f1f1',
                },                
            }}
        >
            <Tab.Screen
                name={'Current'}
                component={CurrentWeather}
                options={{ tabBarIcon: ({ focused }) => <Feather name="droplet" size={25} color={focused ? 'tomato' : 'gray'} /> }}
            />
            <Tab.Screen
                name={'UpComing'}
                component={UpComingWeather}
                options={{ tabBarIcon: ({ focused }) => <Feather name="clock" size={25} color={focused ? 'tomato' : 'gray'} /> }}
            />
            <Tab.Screen
                name={'City'}
                component={City}
                options={{ tabBarIcon: ({ focused }) => <Feather name="home" size={25} color={focused ? 'tomato' : 'gray'} /> }}
                
            />
        </Tab.Navigator>


    )
}

export default Tabs;