import Tabs from './src/components/Tabs';
import { ActivityIndicator, View } from 'react-native';
import { useGetWeather } from './src/hooks/useGetWeather'
import { NavigationContainer } from '@react-navigation/native';
import ErrorItem from './src/components/ErrorItem'

const App = () => {
    const [loading, error, weather] = useGetWeather();

    if (weather && weather.list && !loading) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        )
    }

    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            {
                error
                    ? <ErrorItem />
                    : <ActivityIndicator size={'large'} color={'blue'} />
            }
        </View>
    )
}

export default App