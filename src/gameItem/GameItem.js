import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import styles from "./styles/GameItem.style";
import Code from "./GameItem.code";

export default class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeTeamScore: "",
      awayTeamScore: "",
      compation: {}
    };
  }

  componentWillMount() {
    const compation = {
      time: this.props.item.STime,
      homeTeam: this.props.item.Comps[0].Name,
      awayTeam: this.props.item.Comps[1].Name,
      homeTeamId: this.props.item.Comps[0].ID,
      awayTeamId: this.props.item.Comps[1].ID
    };

    this.setState({ compation });
  }

  render() {
    const { compation } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Text style={styles.text}>{Code.returnHour(compation.time)}</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.teamContainer}>
            <Image
              style={styles.teamImg}
              source={{
                uri: `http://imagescache.365scores.com/image/upload/w_200,h_200,c_limit,q_90,d_Competitors:default1.png,f_webp/Competitors/${
                  compation.awayTeamId
                }`
              }}
            />
            <Text style={styles.text}>{compation.awayTeam}</Text>
          </View>

          <View style={styles.bettingArea}>
            <TextInput
              keyboardType="numeric"
              maxLength={2}
              style={styles.input}
              onChangeText={value => this.setState({ awayTeamScore: value })}
            />
            <TouchableOpacity style={styles.carlsbergLeaf} />
            <TextInput
              keyboardType="numeric"
              maxLength={2}
              style={styles.input}
              onChangeText={value => this.setState({ homeTeamScore: value })}
            />
          </View>

          <View style={styles.teamContainer}>
            <Image
              style={styles.teamImg}
              source={{
                uri: `http://imagescache.365scores.com/image/upload/w_200,h_200,c_limit,q_90,d_Competitors:default1.png,f_webp/Competitors/${
                  compation.homeTeamId
                }`
              }}
            />
            <Text style={styles.text}>{compation.homeTeam}</Text>
          </View>
        </View>
      </View>
    );
  }
}
