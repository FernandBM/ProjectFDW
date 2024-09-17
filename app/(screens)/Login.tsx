import React, { useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function LoginScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wrongInput, setWrongInput] = useState(false);

    const handleLogin = () => {
        const validEmail = "fernando@senac.com";
        const validPassword = "123456";

        if(email === validEmail && password === validPassword){
            navigation.navigate("Home", {email});
        } else {
            setWrongInput(true);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                onSubmitEditing={handleLogin}
            />
            <Button title="Entrar" onPress={handleLogin} />
            {wrongInput && <Text style={styles.error}>E-mail ou senha inválidos</Text>}
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
    input: {
        width: "80%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    error: {
        color: "red",
        marginTop: 10
    }
});