import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Pop up!" onPress={() => console.log("happening")} />
        <Modal></Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
