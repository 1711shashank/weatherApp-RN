import { View, StyleSheet } from 'react-native';
import CurrentWeather from './src/screens/CurrentWeather';
import UpComingWeather from './src/screens/UpComingWeather';
import City from './src/screens/City';

const App = () => {

    console.log('ji');
    return (
        <View style={styles.wrapper}>
            {/* <CurrentWeather /> */}
            {/* <UpComingWeather/> */}
            <City/>
        </View>
    );
};


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
});

export default App;
