import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  InputField
} from "react-native";
export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      pass: ""
    };
  }

  showPass() {
    //this.setState({secureInput: !this.state.secureInput});
  }
  static navigationOptions = {
    headerTitleStyle: { alignSelf: "center" },
    title: "WeekEat"
  };
  render() {
    //const {secureInput}=this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.MessageProfile_text}>
          Connectez-vous pour vivre une expérience hors du commun !
        </Text>
        <TouchableOpacity
          style={styles.buttonEmail}
          onPress={() => this.props.navigation.navigate("InscriptionEmail")}
        >
          <Text style={styles.buttonTextEmail}>
            Continuer avec votre E-mail
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFacebook}
          onPress={() => this.props.navigation.navigate("InscriptionFacebook")}
        >
          <Text style={styles.buttonTextFacebook}>Continuer avec Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGoogle}
          onPress={() => this.inscription(this.state.mail, this.state.pass)}
        >
          <Text style={styles.buttonTextGoogle}>Continuer avec Google</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 23,
    lineHeight: 36,
    fontWeight: "bold",
    paddingHorizontal: 5,
    color: "black"
  },
  MessageProfile_text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    paddingHorizontal: 5,
    color: "black",
    textAlign: "center",
    marginVertical: 15
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
    backgroundColor: "rgb(255,155,89)",
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
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 13
  }
});
