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

    function deleteConsultations(id){
        database.collection("Consultations").doc(id).delete()
    }

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
                    return(
                      <View style={styles.Consultations}>
                           <TouchableOpacity 
                                style={styles.deleteConsultation}
                                onPress={() => {
                                    deleteConsultations(item.id)
                                }}
                            >
                                <FontAwesome
                                    name="fa-circle-minus"
                                    size={23}
                                    color="#F92e6"
                                >
                                    
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.DescriptionConsultation}
                                onPress={() => 
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        description: item.description
                                    })
                                }
                            >
                                {item.description}
                            </Text>
                      </View>
                    )
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