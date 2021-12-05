import React, { useState } from "react";
import { View, Text} from "react-native";
import { styles } from "../styles";


export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.alertMgs}>Home Gerenciador</Text>
        </View>  
    );
}