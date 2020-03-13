import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ModalComponent from ".././components/ModalComponent.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  callAPI = async () => {
    (async () => {
      const rawResponse = await fetch(
        "https://staging.api.whizz.app/api/v1/client/coin/price/get",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: "registration" })
        }
      );
      const content = await rawResponse.json();

      this.setState({ defaultvalue: content.data.defaultvalue }, () => {});
    })();
  };

  openModal = () => {
    this.callAPI();
    this.setState({ isModalVisible: true });
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { isModalVisible, defaultvalue } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Isardigital Coding Challenge</Text>
        <Text style={styles.text}>Author - Wilfredo Casas</Text>
        <TouchableOpacity onPress={this.openModal}>
          <View style={styles.mainButton}>
            <Text>Show Modal</Text>
          </View>
        </TouchableOpacity>
        <ModalComponent
          isModalVisible={isModalVisible}
          defaultvalue={defaultvalue}
          closeModal={this.closeModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  mainButton: {
    backgroundColor: "#97d27f",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderColor: "#773b12",
    borderWidth: 2
  },

  title: { fontWeight: "bold", marginBottom: 20, fontSize: 20 },
  text: { marginBottom: 25 }
});
