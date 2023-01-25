import { StyleSheet, View, FlatList } from "react-native";;
import ListItem from "./src/ListItem";

export default function App() {
  const tarefas = [
    { id: "1", tarefa: "Estudar" },
    { id: "2", tarefa: "Ir ao mercado" },
    { id: "3", tarefa: "Fazer o almoço" },
    { id: "4", tarefa: "Jantar" },
  ];
  return (
 <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <ListItem 
        data={item}
        handleLeft={() => alert ("Tarefa concluída com sucesso!")}
        handleRight={() => alert ("Tarefa foi excluída !")}
        />
        )}
        ItemSeparatorComponent={() => <Separator/>}
      />
    </View>
  );
}

const Separator =() => <View style={{flex:1, height:1, backgroundColor: "#DDD"}}></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
