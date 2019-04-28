import React from "react";
import { StyleSheet, View, Text } from "react-native";

class Charte extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Charte! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
});

export default Charte;
