import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Login from "./components/Login";
import TabBar from "./components/TabBar"
import { removeFromAsync } from './components/AsyncService';

const Root = createStackNavigator(
  {
    Login: Login,
    TabBar: TabBar
  });

export default class App extends React.Component {

  logout = async (props) => {
    try {
      const result = await removeFromAsync('store');
      props.replace('Login');
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return <Root screenProps={{ logout: this.logout }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
