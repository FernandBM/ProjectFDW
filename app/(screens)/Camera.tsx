import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { styles } from "./_styles";

export default function CameraScreen({ route, navigation }: { route: any, navigation: any }) {
    //const { email } = route.params; // Acessando o parâmetro passado pela navegação

  return (
    <View style={styles.container}>
      <Text>Camera Test</Text>
      <Button title="Database" onPress={() => navigation.navigate("Database")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}