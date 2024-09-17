import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ route }: { route: any }) {

    const { email } = route.params; // Acessando o parâmetro passado pela navegação

  return (
    <View style={styles.container}>
      <Text>Home Test</Text>
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
    
