import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles/Sidebar.style";
import Button from "../button/Button";

const memberImage = require("../../utils/assets/images/header/malmilian.jpg");
const USER = "שם המשתמש";

const Sidebar = () => {
  return (
    <View style={styles.container}>
      <Button source={memberImage} size={68} text={USER} disabled={true} />
    </View>
  );
};

export default Sidebar;
