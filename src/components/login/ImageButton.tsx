import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { DEFAULT_FONT_SIZE } from "@/constants/globalStyles";

type ImageButtonProps = {
    onPress: () => void;
    source: string;
}

export default function ImageButton({onPress, source}: ImageButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={{uri:source}}/>
        <View style={styles.overlay}>
            <Text style={styles.text}>Entrar</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 16,
        width: '90%',
    },
    image: {
        height: 60,
        width: '100%',
        borderRadius: 5,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: DEFAULT_FONT_SIZE,
        fontWeight: 'bold',
    }
})