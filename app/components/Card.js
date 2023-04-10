import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Card = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewsDetailsScreen")}
      style={{
        height: 250,
        width: 320,
        margin: 20,
      }}
    >
      <View
        style={{ height: "30%", width: "100%", marginBottom: 20, padding: 15 }}
      >
        <Text
          style={{
            fontSize: 20,

            fontWeight: "500",
            letterSpacing: 1,
            textAlignVertical: "auto",
          }}
        >
          {item.title}
        </Text>
      </View>

      <Image
        source={{ uri: item.urlToImage }}
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "cover",
          borderRadius: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
