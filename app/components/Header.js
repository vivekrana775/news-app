import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const header = ({ left_logo, right_logo, text }) => {
  return (
    <View style={styles.header}>
      <View style={styles.news_logo_container}>
        <Image style={styles.news_logo} source={left_logo} />
      </View>

      <Text style={{ fontSize: 18, fontWeight: "600", letterSpacing: 1 }}>
        {text}
      </Text>

      <View style={styles.user_container}>
        <Image style={styles.user_logo} source={right_logo} />
      </View>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  news_logo_container: {
    height: "100%",
    width: 50,
  },
  user_container: {
    height: "100%",
    width: 50,
  },
  news_logo: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  user_logo: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
