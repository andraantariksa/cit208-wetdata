const axios = require('axios');

const HOSTNAME = 'https://api.thingspeak.com';

/* eslint-disable require-jsdoc */
class ThinkSpeak {
  constructor(channelID) {
    this.channelID = channelID;
    this.apiUrl = `/channels/${channelID}/`;
  }

  getDaily() {
    return this.fetch('feeds.json', {
      average: 'daily',
    });
  }

  fetch(endpoint, data) {
    console.log(HOSTNAME + this.apiUrl + endpoint);
    return axios.get(HOSTNAME + this.apiUrl + endpoint, data);
  }
};

module.exports = ThinkSpeak;
