import React from "react";
import { StyleSheet, View, Text } from "react-native";

class Deconnexion extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Vous êtes déconnecter </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
});

export default Deconnexion;
