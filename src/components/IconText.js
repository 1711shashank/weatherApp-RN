import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const IconText = ({ iconName, iconFontSize, text, fontSize, color }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Feather name={iconName} size={iconFontSize} color={color} />
            <Text style={{ fontSize: fontSize, color: color, fontWeight: 500, }}>{text}</Text>
        </View>
    )
}

export default IconText;