import React from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { TouchableOpacity } from "react-native";

type HeaderWithTitleProps = {
    title: string;
    options: string[];
};

export default function HeaderWithTitle({
    title,
    options,
}: HeaderWithTitleProps) {
    const { showActionSheetWithOptions } = useActionSheet();

    const cancelButtonIndex = 0;

    const handleOpen = () => {
        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
            },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 1:
                        router.push("/");
                        router.dismissAll();
                        break;
                    case 2:
                        router.push("/about");
                }
            }
        );
    };

    return (
        <Stack.Screen
            options={{
                title: title,
                headerBackVisible: false,
                headerStyle: { backgroundColor: "#023047" },
                headerTintColor: "#ffb703",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerRight: () => (
                    <TouchableOpacity onPress={handleOpen}>
                        <Ionicons name="list" size={32} color="#ffb703" />
                    </TouchableOpacity>
                ),
            }}
        />
    );
}
