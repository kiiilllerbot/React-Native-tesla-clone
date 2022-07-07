import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model S"}
        tagLine={"Starting from $99,500"}
        tagLineCTA={"Touchless Delivery"}
        image={require("./assets/images/Model3.jpeg")}
      />
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
