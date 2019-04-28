import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";

export default class Hote extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} autoplayTimeout={1.5} showsButtons>
        <ImageBackground
          source={require("../images/acc1.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>
              Gagner de l'argent en complément de vos revenus mensuels
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../images/acc2.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.slide2}>
            <Text style={styles.text}>
              Pour faire decouvrir vos petites recettes
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../images/acc3.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.slide2}>
            <Text style={styles.text}>
              Accueillez des voyageurs du monde entier dans votre quartier
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../images/acc4.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.slide3}>
            <Text style={styles.text}>
              Rejoignez une communauté d'hôtes passionnés
            </Text>
          </View>
        </ImageBackground>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    //backgroundImage: source={require("../images/tacos.jpeg")}
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonTextPublier: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 10
  },
  buttonPublier: {
    backgroundColor: "rgb(255,90,95)",
    width: 393,
    borderRadius: 15,
    marginVertical: 535
  }
});
