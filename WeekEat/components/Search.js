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
  "https://www.verytacos.com/oktThemes/ra138-s/images/principale.jpg",
  "https://assets.afcdn.com/recipe/20160419/14652_w1024h768c1cx2420cy1872.jpg",
  "https://assets.afcdn.com/recipe/20151003/20052_w1024h768c1cx480cy300.jpg"
];
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      displayFood: null,
      displayPicture: null
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
          ville: child.val().ville,
          userId: child.val().userId
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
    ville,
    userId
  ) => {
    if (Fire.shared.uid !== userId)
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
    else
      this.props.navigation.navigate("MyFoodDetail", {
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
  onChangePicture(item) {
    if (item === Tacos) {
      this.state.displayPicture = [
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Image4_tacos_de_grenoble.png",
        "https://assets.afcdn.com/recipe/20160419/14652_w1024h768c1cx2420cy1872.jpg",
        "https://assets.afcdn.com/recipe/20151003/20052_w1024h768c1cx480cy300.jpg"
      ];
      console.log(this.state.displayPicture);
    }
    if (item === Couscous)
      this.state.displayPicture = [
        "http://www.canalvie.com/polopoly_fs/1.3774469!/image/Couscousgarni.jpg_gen/derivatives/max_568/Couscousgarni.jpg",
        "https://assets.afcdn.com/recipe/20160419/14652_w1024h768c1cx2420cy1872.jpg",
        "https://assets.afcdn.com/recipe/20151003/20052_w1024h768c1cx480cy300.jpg"
      ];
  }
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
                    item.ville,
                    item.userId
                  )
                }
              >
                <ListItem
                  title={item.titre}
                  subtitle={
                    <View style={styles.container}>
                      <ImagesSwiper
                        onChangePicture={item.titre}
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
