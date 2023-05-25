import { View, Text, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { useState } from "react";
import { TaskDTO } from "../dtos/TaskDTO";
import { Empty } from "../components/Empty";
import { uuid } from "../utils/uuid";


export function Home () {

    const [tasks, setTasks] = useState<TaskDTO[]>([])
    const [newTask, setNewTask] = useState("")

    function handleNewTask () {
        if(newTask !== "" && newTask.length > 5) {
            setTasks((tasks) => [
                ...tasks, 
                { id: uuid(), isCompleted : false, title: newTask}
            ])

            setNewTask("")

        } else {
            Alert.alert("Titulo da Tarefa Vazio", "Por favor Preencha o campo da Tarefa")
        }

    }

    function handleTaskDone (id : string) {
        setTasks((tasks) => 
          tasks.map((task) => 
          { task.id == id ? task.isCompleted = !task.isCompleted : null
          return task
          })
        )
    }

    function handleTaskDeleted (id: string) {
        Alert.alert("Excluir Tarefa ? ", "Certeza de excluir essa tarefa?", [
            {
                text : "Sim",
                style: "default",
                onPress : () => setTasks((tasks) => tasks.filter((task) => task.id !== id))
            },
            {
                text: "Não",
                style: 'cancel',
            }
        ])
   
    }

    const tasksCreated = tasks.length
    const tasksCompleted = tasks.filter(({ isCompleted }) => isCompleted).length
    
    return (
        <View style={styles.container}>
            <Header 
                task={newTask} 
                onChangeText={setNewTask} 
                onPress={handleNewTask}
            />
            <View style={styles.tasksContainer}>
                <View style={styles.info}>
                    <View style={styles.row}>
                        <Text style={styles.tasksCreated}>
                            Criadas
                        </Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counterText}>{tasksCreated}</Text>
                        </View>
                </View>
                    <View style={styles.row}>
                        <Text style={styles.tasksDone}>
                            Concluidas
                        </Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counterText}>{tasksCompleted}</Text>
                        </View>
                    </View>
                </View>

                <FlatList 
                    data={tasks}
                    keyExtractor={(tasks) => tasks.id}
                    renderItem={({ item }) => (
                        <Task 
                            key={item.id}                           
                            {...item}   
                            onTaskDone={() => handleTaskDone(item.id)}
                            onTaskDeleted={() => handleTaskDeleted(item.id)}                    
                        />
                    )}
                    ListEmptyComponent={<Empty />}
                />
                

            </View>
        </View>
    )
}