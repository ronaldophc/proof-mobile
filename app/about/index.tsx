import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import HeaderWithTitle from "@/src/components/Headers/HeaderWithTitle";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import Card from "@/src/Card/Card";
import LinkText from "@/src/components/LinkText";

import { DEFAULT_FONT_SIZE, DEFAULT_BACKGROUND_COLOR, DEFAULT_PADDING, DEFAULT_TEXT_COLOR } from "@/constants/globalStyles";


export default function index() {


    return (
        <ActionSheetProvider>
            <View style={styles.container}>
                <HeaderWithTitle title="About" options={["Cancelar", "Sair"]} />
                <Text style={styles.title}>Sobre o aplicativo</Text>
                <Card>
                    <Text style={styles.text}>Version: 1.0</Text>
                    <Text style={styles.text}>Developed by: Ronaldo P H Campos</Text>
                    <Text style={styles.text}>Links:</Text>
                    <LinkText url="https://github.com/ronaldophc" text="GitHub"/>
                </Card>
            </View>
        </ActionSheetProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        flex: 1,
        padding: DEFAULT_PADDING,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center",
        color: DEFAULT_TEXT_COLOR
    },
    text: {
        fontSize: DEFAULT_FONT_SIZE,
        color: DEFAULT_TEXT_COLOR
    }
});
