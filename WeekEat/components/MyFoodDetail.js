import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
class MyFoodDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text
            style={{
              marginLeft: 15,
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center"
            }}
          >
            {this.props.navigation.state.params.titre}
          </Text>
          <Image
            source={require("../images/tacos.jpeg")}
            style={styles.image}
          />
          <View style={styles.horaire}>
            <Image
              source={require("../images/clock.png")}
              //resizeMode={Image.resizeMode.contain}
              style={{ height: 20, width: 20, tintColor: "black" }}
            />
            <Text style={styles.text_horaire}>
              De {this.props.navigation.state.params.heureD}:
              {this.props.navigation.state.params.minutesD} à{" "}
              {this.props.navigation.state.params.heureF}:
              {this.props.navigation.state.params.minutesF}
            </Text>
          </View>
          <View style={styles.desc}>
            <Text style={styles.text_desc}>Description du plat:</Text>
            <Text style={styles.text_description}>
              {this.props.navigation.state.params.description}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  desc: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    width: 398,
    height: 300
  },
  horaire: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    marginLeft: 5
  },
  text_horaire: { fontSize: 16, fontWeight: "bold", marginLeft: 7 },
  desc: {
    flex: 1,
    flexDirection: "column"
  },
  text_desc: { fontSize: 16, fontWeight: "bold", marginLeft: 5 },
  chat: { marginLeft: 130 },
  text_description: { fontSize: 14, marginLeft: 5 }
});
export default MyFoodDetail;
