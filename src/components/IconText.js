import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const IconText = ({ icon, iconSize, text, fontSize, color }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Feather name={icon} size={parseInt(iconSize)} color={color} />
            <Text style={{ fontSize: parseInt(fontSize), color: color }}>{text}</Text>
        </View>
    )
}

export default IconText;