import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function Home(){
    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#FFF', }}
        >
            <View styles={styles.header}>
                <View style={styles.inputArea}>
                    <Text>Seja Bem-Vindo(a)!</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

});

export default Home;