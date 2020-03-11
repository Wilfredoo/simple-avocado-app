import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./components/Main.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      {/* <Text>aaa</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
