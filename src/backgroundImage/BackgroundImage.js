import React from "react";
import { ImageBackground, View } from "react-native";
import styles from "./styles/BackgroungImage.style";

const BackgroundImage = props => {
  const { source, children, opacity } = props;

  return (
    <ImageBackground style={styles.container} source={source}>
      {opacity ? <View style={styles.opacity}>{children}</View> : children}
    </ImageBackground>
  );
};

export default BackgroundImage;
