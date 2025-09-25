import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-web';


const Stack = createNativeStackNavigator();

const livros = [
    {id: "1", titulo: "O Senhor dos Anéis", autor: "J.R.R Tolkien"},
    {id: "2", titulo: "1984", autor: "George Orwell"},
    {id: "3", titulo: "O Pequeno Príncipe", autor: "Antoine de Sint-Exupéry"},
    {id: "4", titulo: "Dom Quixote", autor: "Miguel de Cervantes"}
  ];

function ListaDeLivros({ navigation }) {

  return (
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#fff', width: 300, padding: 10, borderWidth: 1, borderColor: 'lightgray', margin: 5, borderRadius: 8 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.titulo}</Text>
            <Text style={{ marginBottom: 10 }}>{item.autor}</Text>
            <Button title='Ver Detalhes' onPress={() => navigation.navigate('DetalhesDoLivro', { livro: item })} />
          </View>
        )}
      />
  );
}

function DetalhesDoLivro({ route, navigation }) {

  const { livro } = route.params;

  return (
    <View style={{ backgroundColor: 'white', padding: 20, alignItems: 'center', marginTop: 20, marginHorizontal: '35%', borderWidth: 1, borderColor: 'lightgray', borderRadius: 8 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>{livro.titulo}</Text>
      <Text style={{ fontSize: 15, marginBottom: 10 }}>{livro.autor}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListaDeLivros" component={ListaDeLivros} options={{ title: 'Lista de Livros' }}/>
        <Stack.Screen name="DetalhesDoLivro" component={DetalhesDoLivro} options={{ title: 'Detalhes do Livro' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
