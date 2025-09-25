import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function ListaDeLivros({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>🏠 Lista de Livros</Text>
      <Button title="Ver detalhes" onPress={() => navigation.navigate('Ver Detalhes', { produtoId: 101 })}>
      </Button>
    </View>
  );
}

export default function App() {

  const livros = [
      {id: "1", titulo: "O Senhor dos Anéis", autor: "J.R.R Tolkien"},
      {id: "2", titulo: "1984", autor: "George Orwell"},
      {id: "3", titulo: "O Pequeno Príncipe", autor: "Antoine de Sint-Exupéry"},
      {id: "4", titulo: "Dom Quixote", autor: "Miguel de Cervantes"}
    ]

  return (
    <FlatList data={livros} keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={{ padding: 10, borderWidth: 1 }}>
        <Text>{item.titulo}</Text>
        <Text>{item.autor}</Text>
      </View>
    )}  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
