import { Image, Text, View } from 'react-native'

import { styles } from './styles'

export function Empty() {
	return (
		<View style={styles.emptyContainer}>
			<Image source={require("../../assets/clipboard.png")} style={styles.image} />
			<Text style={styles.textBold}>
				Você ainda não tem tarefas cadastradas
			</Text>
			<Text style={[styles.textBold, styles.textRegular]}>
				Crie tarefas e organize seus itens a fazer
			</Text>
		</View>
	)
}