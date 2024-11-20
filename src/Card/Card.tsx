import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

import { DEFAULT_PADDING } from "@/constants/globalStyles";

type CardProps = {
    children: ReactNode;
};

export default function Card({ children }: CardProps) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8ecae6',
        gap: 8,
        padding: DEFAULT_PADDING,
        width: "100%",
        borderRadius: 8,
    }
});
