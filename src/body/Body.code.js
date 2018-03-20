import _ from "underscore";
import moment from "moment";

const Code = {
  handleData: data => {
    const games = _.map(data.Games, game =>
      _.extend(game, { time: moment(game.STime, "DD-MM-YYYY HH:mm") })
    );

    const gamesGroupedDate = _.groupBy(
      _.sortBy(games, game => game.time),
      game => game.time.format("DD-MM-YYYY")
    );

    const gamesGrouped = Object.keys(gamesGroupedDate).map(function(e) {
      return { data: gamesGroupedDate[e], title: e };
    });

    return gamesGrouped;
  }
};

export default Code;
