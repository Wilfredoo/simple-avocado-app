import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";

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

      console.log(content.data.defaultvalue);

      this.setState({ defaultvalue: content.data.defaultvalue }, () => {
        console.log("yes", this.state.defaultvalue);
      });
    })();
  };

  toggleModal = () => {
    this.callAPI();
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Text>Whizz Coding Challenge</Text>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal style={{}} isVisible={isModalVisible}>
          <View style={styles.modal}>
            <Image
              source={require(".././assets/border.png")}
              style={styles.border1}
              resizeMode="contain"
            />
            <Image
              source={require(".././assets/border.png")}
              style={styles.border2}
              resizeMode="contain"
            />
            <Text style={styles.title}>Willkommen zu Whizz</Text>
            <Text style={styles.modalText}>
              Hier wird mit Avocados gehandelt.
            </Text>
            <Text style={styles.modalText}>Kurz: Avos </Text>
            <View
              style={{
                position: "relative",
                padding: 25,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require(".././assets/avoInput.png")}
                style={{
                  position: "absolute"
                }}
                resizeMode="contain"
              />
              <Text style={{ position: "absolute" }}>
                {this.state.defaultvalue}
              </Text>
            </View>
            <Text style={styles.modalText}>
              Zum start erhalst du 100 Avos, damit kannst du schon mal 100
              Dokumente sehen.
            </Text>
            <Text style={styles.modalText}>
              Avocados kannst du dir iber das Hochladen von Dokumenten verdienen
            </Text>
            <TouchableOpacity onPress={this.toggleModal}>
              <View style={styles.modalButton}>
                <Text>Lohs geht's!</Text>
              </View>
            </TouchableOpacity>
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
  },
  modal: {
    flex: 0.7,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden"
  },
  modalButton: {
    backgroundColor: "#e0e0e0",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderColor: "#989898",
    borderWidth: 2
  },
  title: { fontWeight: "bold" },
  modalText: { textAlign: "center", marginBottom: 10 },
  border1: {
    width: 60,
    height: 60,
    top: -15,
    right: -15,
    position: "absolute"
  },
  border2: {
    width: 60,
    height: 60,
    bottom: -15,
    left: -15,
    position: "absolute",
    transform: [{ rotate: "180deg" }]
  }
});
