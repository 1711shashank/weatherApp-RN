import { View, StyleSheet } from 'react-native';
import CurrentWeather from './src/components/CurrentWeather';
import UpComingWeather from './src/components/UpComingWeather';

const App = () => {

    console.log('ji');
    return (
        <View style={styles.wrapper}>
            {/* <CurrentWeather /> */}
            <UpComingWeather/>
        </View>
    );
};


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
});

export default App;
