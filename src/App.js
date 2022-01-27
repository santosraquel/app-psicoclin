import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ConsultationList from './views/ConsultationList'
import ConsultationForm from './views/ConsultationForm'

const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='ConsultationList'
            >
                <Stack.Screen
                    name="ConsultationList"
                    component={ConsultationList}
                />
                <Stack.Screen
                    name="ConsultationForm"
                    component={ConsultationForm}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}