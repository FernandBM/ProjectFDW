import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Use 'react-native-vector-icons/Ionicons' if not using Expo
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen({ route, navigation }: { route: any, navigation: any }) {
  // const { email } = route.params; // Accessing the navigation parameter

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Home Test</Text>
      </View>

      {/* Bottom Bar */}
      <SafeAreaView edges={['bottom']} style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Camera")}
        >
          <Ionicons name="camera-outline" size={24} color="#222222" />
          <Text style={styles.bottomBarLabel}>Camera</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, // Ensures the content takes up available space above the bottom bar
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    elevation: 2,
  },
  bottomBarItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  bottomBarLabel: {
    fontSize: 12,
    color: "#222222",
  },
});
