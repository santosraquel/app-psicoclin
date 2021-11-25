import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Consultations from './pages/Consultations/consultations';
import newConsultations from './pages/NewConsultation/newConsultation';


const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="home"
                    component={Home} 
                    options={{
                        title: 'Início',
                        headerTintColor:"#0066FF",
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 15}}>
                                <Feather
                                    name="plus-square"
                                    size={24}
                                    color="#0066FF"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen 
                    name="consultations" 
                    component={Consultations} 
                    options={{
                        title: 'Minhas Consultas',
                        headerTintColor:"#0066FF",
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 15}}>
                                <Feather
                                    name="plus-square"
                                    size={24}
                                    color="#0066FF"

                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen 
                    name="newConsultations" 
                    component={newConsultations} 
                    options={{
                        title: 'Nova Consulta',
                        headerTintColor:"#0066FF",
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 15}}>
                                <Feather
                                    name="plus-square"
                                    size={24}
                                    color="#0066FF"

                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
