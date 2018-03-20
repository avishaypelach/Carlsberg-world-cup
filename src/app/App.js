import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles/App.style";
import BackgroundImage from "../backgroundImage/BackgroundImage";
import Header from "../header/Header";
import Body from "../body/Body";
import Sidebar from "../sidebar/Sidebar";
import SideMenu from "react-native-side-menu";

const appBackground = require("../../utils/assets/images/header/bg1.png");

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <View style={styles.container}>
        <SideMenu
          menu={<Sidebar />}
          menuPosition="right"
          isOpen={isOpen}
          bounceBackOnOverdraw={false}
          onChange={isOpen => this.updateMenuState(isOpen)}
        >
          <BackgroundImage source={appBackground} opacity={true}>
            <Header toggleSidebar={() => this.setState({ isOpen: true })} />
            <Body />
          </BackgroundImage>
        </SideMenu>
      </View>
    );
  }
}
