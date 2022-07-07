import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = (props) => {
  const { footerTxt } = props;
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{footerTxt}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    height: 25,
    marginBottom: 25,
    width: "100%",
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#EEEEEE",
    fontSize: 10,
  },
});

export default Footer;
