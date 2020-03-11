import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Modal from "react-native-modal";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true
    };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Text>Whizz Coding Challenge</Text>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal style={{}} isVisible={this.state.isModalVisible}>
          <View style={{ flex: 0.8, backgroundColor: "#fff", borderRadius: 5 }}>
            <Text>Willkommen zu Whizz</Text>
            <Text>Hier wird mit Avocados gehandelt. </Text>
            <Text>Kurz: Avos </Text>
            {/* <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            /> */}
            <Image
              source={require(".././assets/100avos.png")}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
            <Text>
              Zum start erhalst du 100 Avos, damit kannst du schon mal 100
              Dokumente sehen.
            </Text>
            <Text>
              Avocados kannst du dir iber das Hochladen von Dokumenten verdienen{" "}
            </Text>
            <Button title="Lohs gehts" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
