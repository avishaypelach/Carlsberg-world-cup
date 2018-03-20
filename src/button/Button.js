import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import BackgroundImage from "../backgroundImage/BackgroundImage";
import styles from "./styles/Button.style";

const Button = props => {
  const { action, source, text, size, disabled } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { width: size, height: size }]}
        onPress={action && action}
        disabled={disabled && disabled}
      >
        <BackgroundImage source={source} />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Button;
