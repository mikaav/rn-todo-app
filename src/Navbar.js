import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>ToDo APP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "blue",
    paddingBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
