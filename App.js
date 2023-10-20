import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

export default function App() {
  async function getUserLocationHandler() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg(
        "Permiso para accesar la localización del dispositivo denegada"
      );
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("Mi localización es: ",location);
  }

  return (
    <View style={styles.container}>
      <Text>Obtener la localización actual del dipositivo</Text>
      <Button title="Localizar Móvil" onPress={getUserLocationHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
