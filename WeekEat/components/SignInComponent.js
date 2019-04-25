import React from "react";
import Fire from "../Fire";
import { connect } from "react-redux";
import { fetchUser } from "../Store/actions";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  InputField
} from "react-native";
import * as firebase from "firebase";
class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      pseudo: ""
    };
    this._toggleFavorite = this._toggleFavorite.bind(this);
  }

  _toggleFavorite() {
    Fire.shared.authRef
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        const action = { type: "FETCH_USER", value: "Fire.shared.isConnected" };
        this.props.dispatch(action);
        console.log("success");
        this.props.navigation.navigate("SignedIn");
      })
      .catch(error => {
        const { code, message } = error;
        console.log(message);
        console.log(code);
        console.log("coucou bin");
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
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
          Connectez-vous pour continuer
        </Text>
        <ScrollView style={styles.ScrollView}>
          <TextInput
            //autoCorrect='false'
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={mail => this.setState({ email: mail })}
            placeholder="E-mail"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={pass => this.setState({ password: pass })}
            placeholder="Mot de passe"
            secureTextEntry={true}
            placeholderTextColor="black"
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonCon}
          onPress={() => this._toggleFavorite()}
        >
          <Text style={styles.buttonTextCon}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIns}
          onPress={() => this.props.navigation.navigate("Inscription")}
        >
          <Text style={styles.buttonTextIns}>Inscription</Text>
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
  MessageProfile_text: {
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "bold",
    paddingHorizontal: 5,
    color: "black",
    textAlign: "center"
  },
  ScrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  inputBox: {
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
  buttonCon: {
    backgroundColor: "rgb(255,90,95)",
    width: 300,
    borderRadius: 25,
    marginVertical: 10,
    marginTop: 10
  },
  buttonIns: {
    backgroundColor: "rgb(66,103,178)",
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
  buttonTextCon: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 13
  },
  buttonTextIns: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 13
  }
});
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(mapStateToProps)(Auth);
