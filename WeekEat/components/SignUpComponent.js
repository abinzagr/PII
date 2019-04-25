import React from "react";
import {
  View,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Fire from "../Fire";

export default class InscriptionEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      pseudo: "",
      mail: "",
      pass: ""
    };

    this.onPressRegister = this.onPressRegister.bind(this);
  }

  componentDidMount() {}

  onPressRegister = () => {
    Fire.shared.inscription(
      this.state.nom,
      this.state.prenom,
      this.state.pseudo,
      this.state.mail,
      this.state.pass
    );

    Alert.alert(
      "Bienvenue !",
      this.state.pseudo,
      [
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("SignedIn")
        }
      ],
      { cancelable: false }
    );
  };

  // .then(() => navigation.navigate("SignedIn"));
  render() {
    //const {secureInput}=this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.VotreProfil_text}>Votre Profil</Text>
          <Text style={styles.MessageProfile_text}>
            Création de votre Compte
          </Text>
          <TextInput
            //autoCorrect='false'
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={nom => this.setState({ nom })}
            placeholder="Nom"
            placeholderTextColor="black"
          />
          <TextInput
            //autoCorrect='false'
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={prenom => this.setState({ prenom })}
            placeholder="Prénom"
            placeholderTextColor="black"
          />
          <TextInput
            //autoCorrect='false'
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={pseudo => this.setState({ pseudo })}
            placeholder="Pseudo"
            placeholderTextColor="black"
          />
          <TextInput
            //autoCorrect='false'
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={mail => this.setState({ mail })}
            placeholder="E-mail"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={pass => this.setState({ pass })}
            placeholder="Mot de passe"
            secureTextEntry={true}
            placeholderTextColor="black"
          />
          <TouchableOpacity
            style={styles.buttonEmail}
            onPress={this.onPressRegister}
          >
            <Text style={styles.buttonTextEmail}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  VotreProfil_text: {
    fontSize: 20,
    lineHeight: 36,
    fontWeight: "bold",
    paddingHorizontal: 5,
    color: "black"
  },
  MessageProfile_text: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "bold",
    paddingHorizontal: 5,
    color: "black",
    textAlign: "center"
  },
  inputBox: {
    backgroundColor: "rgba(255,255,255,0.3)",
    color: "black",
    width: 300,
    paddingVertical: 20,
    borderRadius: 25,
    fontSize: 16,
    paddingHorizontal: 30,
    color: "black",
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5
  },
  buttonEmail: {
    backgroundColor: "rgb(255,90,95)",
    width: 300,
    borderRadius: 25,
    marginVertical: 10,
    marginTop: 10
  },
  buttonFacebook: {
    backgroundColor: "rgb(66,103,178)",
    width: 300,
    borderRadius: 25,
    marginVertical: 10,
    marginTop: 10
  },
  buttonGoogle: {
    backgroundColor: "rgb(230,230,230)",
    width: 300,
    borderRadius: 25,
    marginVertical: 10,
    marginTop: 10
  },
  show: {
    color: "black",
    paddingVertical: 13,
    borderRadius: 25,
    fontSize: 16,
    paddingHorizontal: 20,
    color: "black",
    marginVertical: 10,
    paddingBottom: 5,
    paddingTop: 5
  },
  buttonTextEmail: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 13
  },
  buttonTextFacebook: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 13
  },
  buttonTextGoogle: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
    paddingVertical: 13
  }
});
