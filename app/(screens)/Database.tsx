import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./_styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";


export default function DatabaseScreen({ route, navigation }: { route: any, navigation: any }) {
    //const { email } = route.params; // Acessando o parâmetro passado pela navegação

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Database Test</Text>
      </View>

      {/* Bottom Bar */}
      <SafeAreaView edges={['bottom']} style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="home-outline" size={24} color="#222222" />
          <Text style={styles.bottomBarLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Camera")}
        >
          <Ionicons name="camera-outline" size={24} color="#222222" />
          <Text style={styles.bottomBarLabel}>Camera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}