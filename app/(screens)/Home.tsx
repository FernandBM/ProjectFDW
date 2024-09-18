import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";



export default function HomeScreen({ route, navigation }: { route: any, navigation: any }) {

   // const { email } = route.params; // Acessando o parâmetro passado pela navegação

  return (
    <View style={styles.container}>
      <Text>Home Test</Text>
      <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
      <Button title="Database" onPress={() => navigation.navigate("Database")} /> 
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24
    },
    });
    
