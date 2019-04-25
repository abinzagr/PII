import firebase from "firebase";
import { connect } from "react-redux";
class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAi9iu19icyEGqqfWN8rNf_MHO-cZug2RQ",
      authDomain: "weekeat-c681a.firebaseapp.com",
      databaseURL: "https://weekeat-c681a.firebaseio.com",
      projectId: "weekeat-c681a",
      storageBucket: "weekeat-c681a.appspot.com",
      messagingSenderId: "816326724543"
    };
    firebase.initializeApp(config);
  };

  // check si on est connecté
  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  // appel pour la connexion
  onAuthStateChanged = user => {
    if (!user) {
      try {
        // si on était pas connecté nous connecte en mode anonyme
        //firebase.auth().signInAnonymously();
        console.log("pas connecté");
      } catch ({ message }) {
        alert(message);
      }
      return null;
    } else {
      return user;
    }
  };

  get isConnected() {
    var status = false;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("connecté !");
        status = true;
      } else {
        console.log("pas connecté !");
      }
    });
    return status;
  }

  // inscription
  inscription = (nom, prenom, pseudo, mail, pass) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, pass)
      .then(users => {
        newUser = {
          nom: nom,
          prenom: prenom,
          pseudo: pseudo,
          mail: mail,
          pass: pass,
          id: Fire.shared.uid
        };

        console.log(Fire.shared.refProfil.push(newUser));
      })

      .catch(error => {
        const { code, message } = error;
        console.log("/////////////////////////////");
        console.log(message);
        console.log(code);
        console.log(pass);
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  };

  // connexion
  onLogin = (mail, pass) => {
    Fire.shared.authRef
      .signInWithEmailAndPassword(mail, pass)
      .then(user => {})
      .catch(error => {
        const { code, message } = error;
        console.log(message);
        console.log(code);
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  };

  get refFood() {
    return firebase.database().ref("Food");
  }

  get refProfil() {
    return firebase.database().ref("users");
  }

  get authRef() {
    return firebase.auth();
  }

  get provider() {
    return new firebase.auth.GoogleAuthProvider();
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

Fire.shared = new Fire();

export default Fire;
