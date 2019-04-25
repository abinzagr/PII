import React from "react";
import { StyleSheet, View, Text } from "react-native";

class Chat extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>chat! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
});

export default Chat;
