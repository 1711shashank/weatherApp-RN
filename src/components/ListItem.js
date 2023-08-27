import { Feather } from '@expo/vector-icons';
import moment from 'moment';
import { StyleSheet, Text, View } from "react-native"


const ListItem = ({ iconName, dt_txt, min, max }) => {

    return (
        <View style={styles.item}>

            <Feather name={iconName} size={50} color="black" style={{ margin: 10 }} />

            <View style={styles.dateTextWrapper}>
                <Text style={styles.date}>
                    {moment(dt_txt).format('dddd')}
                </Text>
                <Text style={styles.date}>
                    {moment(dt_txt).format('hh:mm a')}
                </Text>
            </View>

            <Text style={styles.temp}>
                {`${Math.round(min)}° / ${Math.round(max)}°`}
            </Text>

        </View>
    )

}



const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightgray',
        border: '1px solid gray',
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    temp: {
        color: 'black',
        fontSize: 20
    },
    date: {
        color: 'black',
        fontSize: 15
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
})

export default ListItem;