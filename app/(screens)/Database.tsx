import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Button } from "react-native";
import { styles } from "./_styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DatabaseScreen({ route, navigation }: { route: any, navigation: any }) {
  //const { email } = route.params; // Acessando o parâmetro passado pela navegação
  const [placa, setPlaca] = useState("");
  const [placaSalva, setPlacaSalva] = useState("");

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(placa);
      await AsyncStorage.setItem('data', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('data');
      return jsonValue != null ? JSON.parse(jsonValue).toString() : "";
    } catch (e) {
      // error reading value
    }
  };
  useEffect( () => {
    const attPlaca = async () => {
      setPlacaSalva(await getData());
    }
    attPlaca();
  }, [placa]);


  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Placa</Text>
        <TextInput
          style={styles.input}
          placeholder="Placa"
          value={placa}
          onChangeText={setPlaca}
          autoCapitalize="none"

        />
        <Button title="Save" onPress={storeData} />
        <Text style={styles.title}>{placaSalva}</Text>
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