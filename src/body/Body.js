import React, { Component } from "react";
import { View, Text, ActivityIndicator, SectionList } from "react-native";
import styles from "./styles/Body.style";
import GameItem from "../gameItem/GameItem";
import CompetitorsService from "../../services/competitorsService/CompetitorsService";
import Code from "./Body.code";

export default class Body extends Component {
  constructor() {
    super();

    this.state = {
      games: null,
      errror: null
    };
  }

  //getting data from server.
  componentWillMount() {
    let _this = this;
    CompetitorsService.getCompetitors()
      .then(response => {
        if (response.status === 200) {
          _this.setState({ games: response.data }, () =>
            this.setState({
              groupedGames: Code.handleData.call(this, this.state.games)
            })
          );
        } else {
          this.setState({
            error: "Failed to get list of games"
          });
        }
      })
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { games, error, groupedGames } = this.state;

    if (error) {
      return (
        <View style={styles.container}>
          <Text>{error}</Text>
        </View>
      );
    } else if (!groupedGames) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size={100} color="#00ff00"/>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SectionList
            sections={groupedGames}
            renderItem={item => <GameItem item={item.item} />}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionText}>{section.title}</Text>
            )}
            keyExtractor={index => index.id}
          />
        </View>
      );
    }
  }
}
