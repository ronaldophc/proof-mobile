import { View, Text, SectionList, StyleSheet } from "react-native";
import React from "react";
import HeaderWithTitle from "@/src/components/Headers/HeaderWithTitle";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import { DEFAULT_FONT_SIZE, DEFAULT_BACKGROUND_COLOR, DEFAULT_PADDING, DEFAULT_TEXT_COLOR } from "@/constants/globalStyles";

import data from "@/src/services/data";
import transformToSectionList from "@/src/helpers/convertData";

export default function index() {
  const sections = transformToSectionList(data);

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <HeaderWithTitle
          title="Lista por país"
          options={["Cancelar", "Sair", "Sobre"]}
        />
        <SectionList
          sections={sections}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.passenger_name}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{title}</Text>
            </View>
          )}
        />
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8ecae6',
    flex: 1,
    padding: DEFAULT_PADDING,
  },
  card: {
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    borderRadius: 8,
    padding: DEFAULT_PADDING,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: DEFAULT_FONT_SIZE,
  },
  item: {
    padding: DEFAULT_PADDING / 2,
    margin: 1,
    borderWidth: 1,
    borderRadius: 5,
  },
});