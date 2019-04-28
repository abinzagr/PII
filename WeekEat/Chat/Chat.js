import React, { Component } from "react";
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
  ImageBackground
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Fire from "../Fire";
import * as firebase from "firebase";
import * as ImagePicker from "react-native-image-picker";
import { Icon, CheckBox } from "react-native-elements";
import Swiper from "react-native-swiper";
import ImagesSwiper from "react-native-image-swiper";
const customImg = [
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
];
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      displayFood: null
    };
    //this._displayDetailForFilm = this._displayDetailForFilm.bind(this)
  }
  /*Recupère les foods */
  componentDidMount() {
    Fire.shared.refFood.on("value", snapshot => {
      var items = [];
      snapshot.forEach(child => {
        items.push({
          typePlat: child.val().typePlat,
          titre: child.val().titre,
          prix: child.val().prix,
          nbCouvert: child.val().nbCouvert,
          description: child.val().description,
          conso: child.val().conso,
          heureD: child.val().selectedHoursD,
          minutesD: child.val().selectedMinutesD,
          heureF: child.val().selectedHoursF,
          minutesF: child.val().selectedMinutesF,
          ville: child.val().ville
        });
      });

      this.setState({ foods: items });
      console.log(this.state.foods);
    });
  }
  searchRequest = text => {
    this.setState(
      {
        search: text,
        displayFood: this.state.foods.filter(item => {
          if (item) {
            item.ville.toString().startsWith(text) ||
              item.titre.toString().startsWith(text);
            return item.titre.toString().startsWith(text);
          }
        })
      },
      () => {}
    );
  };

  _displayFood = (
    titre,
    typePlat,
    description,
    nbCouvert,
    prix,
    conso,
    heureD,
    minutesD,
    heureF,
    minutesF,
    ville
  ) => {
    this.props.navigation.navigate("FoodDetail", {
      typePlat: typePlat,
      titre: titre,
      prix: prix,
      nbCouvert: nbCouvert,
      description: description,
      conso: conso,
      heureD: heureD,
      minutesD: minutesD,
      heureF: heureF,
      minutesF: minutesF,
      ville: ville
    });
  };

  _searchFood() {}

  _searchTextInputChanged(text) {
    this.searchedText = text; //modification du texte recherché
  }
  render() {
    return (
      <View style={styles.main_container}>
        <SearchBar
          placeholder="Renseigner l'élément de votre recherche"
          lightTheme
          round
          value={this.state.search}
          onChangeText={text => this.searchRequest(text)}
        />

        <ScrollView>
          <FlatList
            data={
              this.state.displayFood ? this.state.displayFood : this.state.foods
            }
            // keyExtractor={todo => todo.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  this._displayFood(
                    item.titre,
                    item.typePlat,
                    item.description,
                    item.nbCouvert,
                    item.prix,
                    item.conso,
                    item.heureD,
                    item.minutesD,
                    item.heureF,
                    item.minutesF,
                    item.ville
                  )
                }
              >
                <ListItem
                  title={item.titre}
                  subtitle={
                    <View style={styles.container}>
                      <ImagesSwiper
                        images={customImg}
                        autoplay={true}
                        autoplayTimeout={1.5}
                        showsPagination={false}
                        width={370}
                        height={200}
                      />
                      <View style={styles.header_container_spot}>
                        <Image
                          source={require("../images/specialite.png")}
                          //resizeMode={Image.resizeMode.contain}
                          style={{ height: 20, width: 20, tintColor: "black" }}
                        />
                        <Text style={styles.title_text}>
                          {" "}
                          {" " + item.typePlat}
                        </Text>

                        <Text style={styles.ville_text}>
                          Ville: {item.ville}
                        </Text>
                      </View>
                      <View style={styles.header_container_spot}>
                        <Image
                          source={require("../images/people.png")}
                          //resizeMode={Image.resizeMode.contain}
                          style={{ height: 20, width: 20, tintColor: "black" }}
                        />
                        <Text style={styles.title_text}>
                          {" " + item.nbCouvert} couverts disponibles
                        </Text>
                      </View>
                      <View style={styles.header_container_spot}>
                        <Image
                          source={require("../images/bag.png")}
                          //resizeMode={Image.resizeMode.contain}
                          style={{ height: 20, width: 20, tintColor: "black" }}
                        />
                        <Text style={styles.title_text}>
                          {" " + item.conso}
                        </Text>
                      </View>

                      <View style={styles.date_container}>
                        <Text style={styles.date_text}>Prix: {item.prix}€</Text>
                      </View>
                    </View>
                  }
                  //leftAvatar={{ source: { uri: item.avatar_url } }}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {},
  main_container: {
    marginTop: 20,
    flex: 1
  },
  container: {
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5
  },
  image: {
    width: 370,
    height: 200,
    margin: 5,
    paddingVertical: 7
    //backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },

  header_container: {
    flex: 1,
    flexDirection: "column"
  },
  header_container_spot: {
    flex: 1,
    flexDirection: "row"
  },
  title_text: {
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666"
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold"
  },
  ville_text: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Search;
