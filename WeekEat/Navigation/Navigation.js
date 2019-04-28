import React from "react";
import { Text, View, Image } from "react-native";

// Import the screens
import { fetchUser } from "../Store/actions";
import { connect } from "react-redux";
import Auth from "../components/SignInComponent";
import InscriptionEmail from "../components/SignUpComponent";
import Inscription from "../components/Inscription";
import Search from "../components/Search";
import InscriptionFacebook from "../components/InscriptionFacebook";
import FoodDetail from "../components/FoodDetail";
import Propose from "../components/Propose";
import Chat from "../Chat/Chat";
import Profil from "../Chat/Profil";
import Apropos from "../Chat/Apropos";
import Charte from "../Chat/Charte";
import Hote from "../Chat/Hote";
import Conditions from "../Chat/Conditions";
import MyFoodDetail from "../components/MyFoodDetail";
import {
  createStackNavigator,
  createSwitchNavigator,
  createTabNavigator,
  createBottomTabNavigator
} from "react-navigation";

export const Signed = createBottomTabNavigator(
  {
    Search: {
      screen: createStackNavigator({
        Search: {
          screen: Search,
          navigationOptions: {
            headerVisible: false,
            headerTitleStyle: { alignSelf: "center" },
            title: "WeekEat"
          }
        },
        FoodDetail: { screen: FoodDetail },
        MyFoodDetail: { screen: MyFoodDetail },
        Chat: { screen: Chat },
        Apropos: { screen: Apropos },
        Charte: { screen: Charte },
        Hote: { screen: Hote },
        Conditions: { screen: Conditions }
      }),
      navigationOptions: {
        headerVisible: false,
        title: "Rechercher",
        tabBarIcon: (
          <Image
            source={require("../images/search.png")}
            //resizeMode={Image.resizeMode.contain}
            style={{ height: 30, width: 30, tintColor: "black" }}
          />
        )
      }
    },
    Propose: {
      screen: Propose,
      navigationOptions: {
        headerVisible: false,
        title: "Proposer un repas",
        tabBarIcon: (
          <Image
            source={require("../images/cooking.png")}
            //resizeMode={Image.resizeMode.contain}
            style={{ height: 30, width: 30, tintColor: "black" }}
          />
        )
      }
    },
    Profil: {
      screen: Profil,
      navigationOptions: {
        headerVisible: false,
        title: "Mon profil",
        tabBarIcon: (
          <Image
            source={require("../images/resume.png")}
            //resizeMode={Image.resizeMode.contain}
            style={{ height: 30, width: 30, tintColor: "black" }}
          />
        )
      }
    }
    // Deconnexion: { screen: Deconnexion }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    headerMode: "none",
    navigationOptions: { headerVisible: false }
  }
);

export const SignedOut = createBottomTabNavigator(
  {
    Search: {
      screen: createStackNavigator({
        Search: {
          screen: Search,
          navigationOptions: {
            headerVisible: false,
            headerTitleStyle: { alignSelf: "center" },
            title: "WeekEat"
          }
        },
        FoodDetail: { screen: FoodDetail }
      }),
      navigationOptions: {
        headerVisible: false,
        title: "Rechercher",
        tabBarIcon: (
          <Image
            source={require("../images/search.png")}
            //resizeMode={Image.resizeMode.contain}
            style={{ height: 30, width: 30, tintColor: "black" }}
          />
        )
      }
    },
    Authentification: {
      screen: createStackNavigator({
        Auth: { screen: Auth },
        Inscription: {
          screen: Inscription,
          navigationOptions: {
            headerVisible: false,
            headerTitleStyle: { alignSelf: "center" },
            title: "Inscription"
          }
        },
        InscriptionEmail: {
          screen: InscriptionEmail,
          navigationOptions: {
            headerVisible: false,
            headerTitleStyle: { alignSelf: "center" },
            title: "Votre Profil"
          }
        },
        InscriptionFacebook: { screen: InscriptionFacebook }
      }),
      navigationOptions: {
        headerVisible: false,
        title: "Se connecter",
        tabBarIcon: (
          <Image
            source={require("../images/login.png")}
            //resizeMode={Image.resizeMode.contain}
            style={{ height: 30, width: 30, tintColor: "black" }}
          />
        )
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    headerMode: "none"
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: Signed,
        navigationOptions: {
          title: "Connecté"
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          title: "Déconnecté"
        }
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

// Export it as the root component

/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
*/

// mapper pour avoir le isAuthenticated
