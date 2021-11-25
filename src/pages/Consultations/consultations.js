import React, {useState, useEffect} from "react";
import { 
    View, 
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import database from "../../config/firebaseConfig";

import styles from "./styles";

import { FontAwesome} from "@expo/vector-icons"

function Consultations({ navigation }){
    const [consultations, setConsultations] = useState([]);

    useEffect(() => {
        database.collections("consultations").onSnapshot((query) =>{
            const list = [];
            query.forEach((doc) =>{
                list.push({...doc.data(), id: doc.id})
            })
            setConsultations(list);
        });
    }, [])

    return(
        <View style={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={consultation}
                renderItem={(item) => {
                      b 
                }}
            />
            <TouchableOpacity 
                style={styles.buttonNewConsultations}
                onPress={() => navigation.navigate("New Consultation")}
            >
                <Text style={styles.iconButton}> + </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Consultations;