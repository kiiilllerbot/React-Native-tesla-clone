import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const carItem = (props) => {
  return (
    <View style={styles.carContainer}>
      {/* Start Background Image */}
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      {/* End Of Background Image */}
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <StyledButton
        type={"primary"}
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom Order Was Pressed.");
        }}
      />
      <StyledButton
        type={"secondary"}
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory Was Pressed.");
        }}
      />
    </View>
  );
};

export default carItem;
