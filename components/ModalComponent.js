import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export default function ModalComponent({
  isModalVisible,
  defaultvalue,
  closeModal
}) {
  return (
    <View>
      <Modal isVisible={isModalVisible}>
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
          <Text style={styles.text}>Hier wird mit Avocados gehandelt.</Text>
          <Text style={styles.text}>Kurz: Avos </Text>
          <View style={styles.avoPointsView}>
            <Image
              source={require(".././assets/avoInput.png")}
              style={styles.avoInput}
              resizeMode="contain"
            />
            <Text style={styles.avoPointsText}>+{defaultvalue}</Text>
          </View>
          <Text style={styles.text}>
            Zum start erhältst du 100 Avos, damit kannst du schon mal 100
            Dokumente sehen.
          </Text>
          <Text style={styles.text}>
            Avocados kannst du dir über das Hochladen von Dokumenten verdienen{" "}
          </Text>
          <TouchableOpacity onPress={closeModal}>
            <View style={styles.modalButton}>
              <Text>Los geht's!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
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
    overflow: "hidden",
    paddingLeft: 32,
    paddingRight: 32,
    textAlign: "left"
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
  text: { marginBottom: 20 },
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
  },
  avoInput: { position: "absolute" },
  avoPointsView: {
    position: "relative",
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25
  },
  avoPointsText: {
    position: "absolute",
    left: -12,
    fontWeight: "bold",
    fontSize: 20
  }
});
