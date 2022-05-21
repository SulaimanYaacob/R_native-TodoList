import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Task = ({ text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 48,
    height: 48,
    backgroundColor: "#fdad5c",
    borderRadius: 10,
    marginRight: 15,
  },
  itemText: {
    fontSize: 24,
    maxWidth: "80%",
  },
  circular: {
    width: 24,
    height: 24,
    borderColor: "#fdad5c",
    borderWidth: 4,
    borderRadius: 10,
  },
});
