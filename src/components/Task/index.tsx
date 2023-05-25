import { View, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons"

import { styles } from "./styles";
import { theme } from "../../theme";
import { TaskDTO } from "../../dtos/TaskDTO";

export type TaskProps = TaskDTO & {
    onTaskDone : () => void
    onTaskDeleted : () => void
}

export function Task ({title, isCompleted, id, onTaskDeleted, onTaskDone} : TaskProps) {
    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity onPress={onTaskDone}>
                <MaterialCommunityIcons  
                    name={
						isCompleted
							? 'checkbox-marked-circle-outline'
							: 'checkbox-blank-circle-outline'
					}
                    size={22}
                    color={
						isCompleted
							? theme.colors.brand.purple
							: theme.colors.brand.blue
					}
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text 
                    style=
                    { isCompleted
                        ? styles.textDone
                        : styles.textCreated
                    }
                
                >
                    {title}
                </Text>
            </View>
            <TouchableOpacity onPress={onTaskDeleted}>
                <MaterialCommunityIcons  
                    name="trash-can-outline"
                    size={22}
                    color={theme.colors.base.gray300}
                />
            </TouchableOpacity>
        </View>
    )
}