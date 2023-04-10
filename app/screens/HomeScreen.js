import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import Screen from "../components/Screen";
import Header from "../components/Header";
import Card from "../components/Card";

import { useSelector, useDispatch } from "react-redux";

const apiKey = "afe632480cf14fa18e48f5beb9acfba0";

const HomeScreen = ({ navigation }) => {
  const [news, setNews] = useState("");

  const fetchUserData = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2023-04-09&to=2023-04-09&sortBy=popularity&apiKey=afe632480cf14fa18e48f5beb9acfba0"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // console.log(news.articles);

  return (
    <Screen style={{ padding: 10 }}>
      <Header
        left_logo={require("../../assets/news2.png")}
        right_logo={require("../../assets/man.png")}
        text={"Latest News"}
      />

      <FlatList
        horizontal
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        data={news.articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
      />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
