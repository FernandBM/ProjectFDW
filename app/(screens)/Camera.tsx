import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./_styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CameraButton from "@/components/CameraButton"; // Importando o componente CameraButton
import { CameraView } from "expo-camera";
import CameraComponent  from "@/components/CameraComponent"; // Importando o componente Camera

export default function CameraScreen({ route, navigation }: { route: any, navigation: any }) {
  

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        <CameraComponent />
        <CameraButton />
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
          onPress={() => navigation.navigate("Database")}
        >
          <Ionicons name="document-text-outline" size={24} color="#222222" />
          <Text style={styles.bottomBarLabel}>Database</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}