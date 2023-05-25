import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";


export function Loading () {
    return (
        <View style={styles.Loading}>
            <ActivityIndicator  size={60} color={theme.colors.brand.blue_dark}/>
        </View>
    )
}