import { Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import React from "react";

type LinkTextProps = {
    text: string;
    url: string;
};

export default function LinkText({ url, text }: LinkTextProps) {
    const onPress = () => {
        Linking.openURL(url);
    };

    return <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>;
}

const styles = StyleSheet.create({
    text: {
        color: "blue",
        fontSize: 20,
    },
});