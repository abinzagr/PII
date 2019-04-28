import React from "react";
import { ListItem, SearchBar } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
  Image,
  FlatList,
  Button
} from "react-native";

class Apropos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOption: [
        "Pourquoi être hôte ?",
        "Charte",
        "Conditions générales",
        "Version"
      ]
    };
    //this._displayDetailForFilm = this._displayDetailForFilm.bind(this)
  }
  _displayOption = option => {
    if (option === "Pourquoi être hôte ?")
      this.props.navigation.navigate("Hote");
    if (option === "Charte") this.props.navigation.navigate("Charte");
    if (option === "Conditions générales")
      this.props.navigation.navigate("Conditions");
  };

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.profil_text}>Mon Profil</Text>
        <FlatList
          data={this.state.displayOption}
          // keyExtractor={todo => todo.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this._displayOption(item)}>
              <ListItem
                //title={item.titre}
                subtitle={
                  <View style={styles.container}>
                    <Text
                      //autoCorrect='false'
                      style={styles.textBox}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="black"
                    >
                      {item}
                    </Text>
                  </View>
                }
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  textBox: {
    color: "black",
    width: 300,
    paddingVertical: 20,
    borderRadius: 25,
    fontSize: 16,
    paddingHorizontal: 30,
    color: "black",
    marginVertical: 15,
    paddingBottom: 5,
    paddingTop: 5
  },
  profil_text: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
    paddingHorizontal: 3,
    paddingHorizontal: 7,
    paddingVertical: 20,
    color: "black",
    marginVertical: 10,
    borderBottomWidth: 0.7,
    marginLeft: 0.7,
    textAlign: "center",
    width: 400
  }
});

export default Apropos;
