import { Feather } from '@expo/vector-icons';
import { FlatList, ImageBackground, SafeAreaView, Text, View } from "react-native"


const ListItem = ({ dt_txt, min, max }) => {
    return (
        <View style={{ backgroundColor: 'lightgray', border: '1px solid gray', marginVertical: 8, marginHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Feather name="sun" size={50} color="black" style={{ margin: 10 }} />
            <Text style={{ margin: 20 }}>{dt_txt}</Text>
            <Text style={{ margin: 20 }}>{min}</Text>
            <Text style={{ margin: 20 }}>{max}</Text>
        </View>

    )

}

export default ListItem;