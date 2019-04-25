import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
  Image
} from "react-native";
import { Icon, CheckBox } from "react-native-elements";
import Fire from "../Fire";
import * as ImagePicker from "react-native-image-picker";
import TimePicker from "react-native-simple-time-picker";
class UselessTextInput extends React.Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable={true}
        maxLength={40}
      />
    );
  }
}
class UselessTextInputMultiline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "Useless Multiline Placeholder"
    };
  }
}
const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class Propose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      pic: null ? titre : "",
      description: "",
      typePlat: "",
      prix: "",
      nbCouvert: "",
      conso: "",
      selectedHoursD: 0,
      selectedMinutesD: 0,
      selectedHoursF: 0,
      selectedMinutesF: 0,
      ville: "",
      codePostale: "",
      adresse: "",
      complementAdresse: "",
      telephone: "",
      charte: false,
      userId: "",
      foods: []
    };
  }

  sendFood = (
    titre,
    description,
    typePlat,
    prix,
    nbCouvert,
    conso,
    hDebut,
    mDebut,
    hFin,
    mFin,
    ville,
    codePostale,
    adresse,
    complementAdresse,
    telephone,
    charte
  ) => {
    const food = {
      titre: titre,
      description: description,
      typePlat: typePlat,
      prix: prix,
      nbCouvert: nbCouvert,
      conso: conso,
      selectedHoursD: hDebut,
      selectedMinutesD: mDebut,
      selectedHoursF: hFin,
      selectedMinutesF: mFin,
      ville: ville,
      codePostale: codePostale,
      adresse: adresse,
      complementAdresse: complementAdresse,
      telephone: telephone,
      charte: charte
    };
    Fire.shared.refFood.push(food);
    /*if (
      titre === "" ||
      description === "" ||
      typePlat === "" ||
      prix === "" ||
      nbCouvert === "" ||
      conso === "" ||
      ville === "" ||
      codePostale === "" ||
      adresse === "" ||
      selectedMinutesD === "" ||
      selectedMinutesD === "" ||
      selectedMinutesF === "" ||
      selectedMinutesF === "" ||
      charte === false
    )
      alert(
        "veuillez cocher le respect de nos conditions d'utilisation et la charte de qualité de WeekEat ou veuillez verifier les champs renseignés "
      );
    else {
      Fire.shared.refFood.push(food);
    }*/
  };

  componentDidMount() {
    this.setState({ userId: Fire.shared.uid }, () => {
      // console.log(Fire.shared.getidUser);
      // console.log("hh");
    });
  }
  myfun = () => {
    //alert('clicked');

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  };
  static navigationOptions = {
    headerTitleStyle: { textAlign: "center", flex: 1 },
    title: "Proposer votre repas"
  };

  ModifPlat = typePlat => {
    this.setState({ typePlat: typePlat });
  };
  ModifConso = conso => {
    this.setState({ conso: conso });
  };

  render() {
    const {
      selectedHoursD,
      selectedMinutesD,
      selectedHoursF,
      selectedMinutesF
    } = this.state;

    //const { people} = this.state.foods;
    //let ArrayOfPeopleObject = Object.values(people);
    //console.log(ArrayOfPeopleObject);

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.Repas_text}>Informations générales</Text>
            <Text
              style={{
                marginLeft: 5,
                marginRight: 5,
                fontWeight: "bold"
              }}
            >
              Titre de votre repas
            </Text>
            <TextInput
              style={styles.textinputTitre}
              placeholder="Exemple: Paella"
              onChangeText={titre => this.setState({ titre })}
            />
            <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
              Description de votre repas
            </Text>
            <UselessTextInput
              style={styles.textinputDesc}
              multiline={true}
              numberOfLines={4}
              placeholder="Decrivez votre repas en quelques lignes"
              onChangeText={description => this.setState({ description })}
            />
            <Text
              style={{
                marginLeft: 5,
                marginRight: 5,
                fontWeight: "bold",
                paddingVertical: 5,
                marginVertical: 5
              }}
            >
              Importer des photes de votre plat (jusqu'à 3 photos autorisées)
            </Text>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",

                marginLeft: 5,
                marginRight: 5
              }}
              onPress={this.myfun}
            >
              <Image
                source={require("../images/photo.png")}
                //resizeMode={Image.resizeMode.contain}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: "black",
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
              <Image
                source={require("../images/photo.png")}
                //resizeMode={Image.resizeMode.contain}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: "black",
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
              <Image
                source={require("../images/photo.png")}
                //resizeMode={Image.resizeMode.contain}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: "black",
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginLeft: 5,
              marginRight: 5,
              fontWeight: "bold",
              paddingVertical: 7
            }}
          >
            La spécialité de votre plat
          </Text>
          <Picker
            selectedValue={this.state.typePlat}
            onValueChange={this.ModifPlat}
          >
            <Picker.Item label="Française" value="française" />
            <Picker.Item label="Italienne" value="italienne" />
            <Picker.Item label="Espagnole" value="espagnole" />
            <Picker.Item label="Portugaise" value="portugaise" />
            <Picker.Item label="Espagnole" value="espagnole" />
            <Picker.Item label="Maghrebine" value="maghrebine" />
            <Picker.Item label="Africaine" value="africaine" />
            <Picker.Item label="Autre" value="autre" />
          </Picker>
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            Prix/personne
          </Text>
          <TextInput
            style={styles.textinputTitre}
            placeholder="0.00€"
            onChangeText={prix => this.setState({ prix })}
          />
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            Nombre de couverts
          </Text>
          <TextInput
            style={styles.textinputTitre}
            placeholder="1"
            onChangeText={nbCouvert => this.setState({ nbCouvert })}
          />
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            A consommer
          </Text>
          <Picker
            selectedValue={this.state.conso}
            onValueChange={this.ModifConso}
          >
            <Picker.Item label="Sur place" value="place" />
            <Picker.Item label="A emporter" value="emporter" />
          </Picker>
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            Début du service
          </Text>
          <View>
            <Text
              style={{ marginLeft: 150, marginRight: 5, fontWeight: "bold" }}
            >
              {selectedHoursD}:{selectedMinutesD}
            </Text>
            <TimePicker
              selectedHours={selectedHoursD}
              selectedMinutes={selectedMinutesD}
              onChange={(hoursD, minutesD) =>
                this.setState({
                  selectedHoursD: hoursD,
                  selectedMinutesD: minutesD
                })
              }
            />
          </View>
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            Fin du service
          </Text>
          <View>
            <Text
              style={{ marginLeft: 150, marginRight: 5, fontWeight: "bold" }}
            >
              {selectedHoursF}:{selectedMinutesF}
            </Text>
            <TimePicker
              selectedHours={selectedHoursF}
              selectedMinutes={selectedMinutesF}
              onChange={(hoursF, minutesF) =>
                this.setState({
                  selectedHoursF: hoursF,
                  selectedMinutesF: minutesF
                })
              }
            />
          </View>
          <View>
            <Text style={styles.Repas_text}>Côté pratique </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Icon name="lock" />
            <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
              Ces informations seront communiquées seulement aux invités que
              vous aurez accepté(e)s
            </Text>
          </View>
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            Ville:
          </Text>
          <TextInput
            style={styles.textinputTitre}
            placeholder="Exemple: Bordeaux"
            onChangeText={ville => this.setState({ ville })}
          />
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            Votre code Postal:
          </Text>
          <TextInput
            style={styles.textinputTitre}
            placeholder="Exemple: 33600"
            onChangeText={codePostale => this.setState({ codePostale })}
          />
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            Votre adresse:
          </Text>
          <TextInput
            style={styles.textinputTitre}
            placeholder="Exemple: 2 Rue Paul Doummer"
            onChangeText={adresse => this.setState({ adresse })}
          />
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            complément d'adresse:
          </Text>
          <TextInput
            style={styles.textinputTitre}
            placeholder="Exemple: 2ème étage"
            onChangeText={complementAdresse =>
              this.setState({ complementAdresse })
            }
          />
          <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}>
            Votre téléphone:
          </Text>
          <TextInput
            style={styles.textinputTitre}
            placeholder="Exemple: 0758989874"
            onChangeText={telephone => this.setState({ telephone })}
          />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <CheckBox
              center
              title="Oui, je m'engage à respecter les conditions d'utilisation ainsi que la charte de qualité de WeekEat"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.state.charte}
              onPress={() => this.setState({ charte: !this.state.charte })}
            />
            <TouchableOpacity>
              <Text
                style={{ marginLeft: 5, marginRight: 5, fontWeight: "bold" }}
              >
                la charte de qualité WeekEat
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonPublier}
            onPress={() =>
              this.sendFood(
                this.state.titre,
                this.state.description,
                this.state.typePlat,
                this.state.prix,
                this.state.nbCouvert,
                this.state.conso,
                this.state.selectedHoursD,
                this.state.selectedMinutesD,
                this.state.selectedHoursF,
                this.state.selectedMinutesF,
                this.state.ville,
                this.state.codePostale,
                this.state.adresse,
                this.state.complementAdresse,
                this.state.telephone,
                this.state.charte
              )
            }
          >
            <Text style={styles.buttonTextPublier}>Publier mon repas</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  DropPlat: {
    fontSize: 30,
    alignSelf: "center",
    color: "red"
  },
  textinputTitre: {
    marginLeft: 5,
    marginRight: 12,
    height: 40,
    borderColor: "grey",
    borderWidth: 0.7,
    paddingLeft: 10,
    borderRadius: 10,
    marginVertical: 7,
    width: 300
  },
  textinputDesc: {
    marginLeft: 5,
    marginRight: 12,
    height: 70,
    borderColor: "grey",
    borderWidth: 0.7,
    paddingLeft: 10,
    borderRadius: 10,
    marginVertical: 7,
    width: 300
  },
  buttonPublier: {
    backgroundColor: "rgb(255,90,95)",
    width: 300,
    borderRadius: 12,
    marginVertical: 7,
    marginTop: 7,
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttonTextPublier: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 13
  },
  Repas_text: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
    paddingHorizontal: 3,
    paddingHorizontal: 7,
    paddingVertical: 15,
    color: "black",
    marginVertical: 10,
    borderBottomWidth: 0.7,
    marginLeft: 0.7,

    width: 228
  }
});

/**/
