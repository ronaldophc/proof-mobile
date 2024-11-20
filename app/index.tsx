import { View, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";
import ImageButton from "@/src/components/login/ImageButton";
import HeaderHidden from "@/src/components/Headers/HeaderHidden";
import { router } from "expo-router";

import { DEFAULT_FONT_SIZE, DEFAULT_BACKGROUND_COLOR, DEFAULT_PADDING, DEFAULT_TEXT_COLOR } from "@/constants/globalStyles";

export default function index() {
    const [username, onChangeUsername] = useState("fulano");
    const [password, onChangePassword] = useState("123");

    const onPress = () => {
        if (username.toLowerCase() != "fulano" || password != "123") {
            alert("Usuário ou senha inválidos");
            return;
        }
        router.push("/list");
        // onChangeUsername('');
        // onChangePassword('');
    };

    const imageUri =
        "https://www.jornalopcao.com.br/assets/2024/06/boom-60ka-16x9-v2.webp";

    return (
        <View style={styles.container}>
            <HeaderHidden />
            <Image source={require("@/assets/images/favicon.png")} />
            <TextInput
                style={[styles.input, { marginTop: 100 }]}
                placeholder="Seu Email"
                placeholderTextColor="black"
                onChangeText={onChangeUsername}
                value={username}
            />
            <TextInput
                secureTextEntry
                placeholder="Sua senha"
                placeholderTextColor="black"
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
            />
            <ImageButton source={imageUri} onPress={() => onPress()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
    },
    input: {
        height: 60,
        width: "90%",
        margin: 5,
        padding: DEFAULT_PADDING,
        borderRadius: 5,
        backgroundColor: "#8ecae6",
        color: DEFAULT_TEXT_COLOR,
        fontSize: DEFAULT_FONT_SIZE,
        fontWeight: "bold",
    },
});
