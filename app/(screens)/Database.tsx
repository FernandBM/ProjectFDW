import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { styles } from "./_styles";

export default function DatabaseScreen({ route, navigation }: { route: any, navigation: any }) {
    //const { email } = route.params; // Acessando o parâmetro passado pela navegação

  return (
    <View style={styles.container}>
      <Text>Data Test</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
    </View>
  );
}