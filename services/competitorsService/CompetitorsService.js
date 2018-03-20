import axios from 'axios';

export default {
    getCompetitors: function () {
      return axios.get('http://test.365scores.com/Data/Games/Dashboard/Results/?competitors=132');
    }
}