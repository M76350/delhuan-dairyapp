import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Get Started Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
