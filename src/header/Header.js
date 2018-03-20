import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "./styles/Header.style";
import Button from "../button/Button";

const TOP_SCORER = "מלך השערים";
const USER = "שם המשתמש";
const WINNING_TEAM = "הזוכה";

const memberImage = require("../../utils/assets/images/header/malmilian.jpg");
const carlsbergBanner = require("../../utils/assets/images/header/carlsbergBanner.png");

const Header = props => {
  const { toggleSidebar } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.container} />
      <View style={styles.imgsContainer}>
        <Button source={memberImage} size={38} text={TOP_SCORER} />
        <Button source={memberImage} size={68} text={USER} action={toggleSidebar}/>
        <Button source={memberImage} size={38} text={WINNING_TEAM} />
      </View>
      <Image source={carlsbergBanner} />
    </View>
  );
};

export default Header;
