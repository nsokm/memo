import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Provider } from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Memo 📝", 
                                          headerStyle:{backgroundColor: '#C39BD3'}}}>
          <Stack.Screen 
          name="Index" 
          component={IndexScreen} 
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Entypo name="plus" size={30} color="#512E5F" />
              </TouchableOpacity>
            ),
          })}/>
          <Stack.Screen 
          name="Show" 
          component={ShowScreen} 
          options={({navigation , route}) => ({
            headerRight: () => (
              <TouchableOpacity 
              onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
                <Entypo 
                name="edit" 
                size={24} color="#512E5F" />
              </TouchableOpacity>
            ),
          })}/>
          <Stack.Screen name="Create" component={CreateScreen}/>
          <Stack.Screen name="Edit" component={EditScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create();
