const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config.js');

const ThinkSpeak = require('./helpers/thinkspeak.js');
const thinkspeak = new ThinkSpeak('1031832');

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

app.use(express.static(path.resolve(__dirname, 'ui/build')));

app.get('/api/v1/weather/today', (req, res) => {
  thinkspeak.getTodayAverage()
      .then((resp) => res.send({
        success: true,
        message: '',
        data: resp.data,
      }))
      .catch((err) => res.send({
        success: false,
        message: err.toString(),
        data: {},
      }));
});

app.get('/api/v1/weather/last/:num', (req, res) => {
  thinkspeak.getLast(req.params.num)
      .then((resp) => res.send({
        success: true,
        message: '',
        data: resp.data,
      }))
      .catch((err) => res.send({
        success: false,
        message: err.toString(),
        data: {},
      }));
});

app.listen(config.PORT, () => console.log(`started on port ${config.PORT}`));
