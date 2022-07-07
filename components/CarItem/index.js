import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const carItem = (props) => {
  const { name, tagLine, image, tagLineCTA } = props;
  return (
    <View style={styles.carContainer}>
      {/* Start Background Image */}
      <ImageBackground source={image} style={styles.image} />
      {/* End Of Background Image */}
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine} <Text style={styles.tagLineCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
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
    </View>
  );
};

export default carItem;
