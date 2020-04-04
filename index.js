const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = require('./models/index.js');
const config = require('./config.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

app.post('/', (req, res) => {
  req.send('Under construction');
});

app.post('/api/v1/weather', (req, res) => {
  try {
    const {
      temperature,
      humidity,
      soilMoisture,
      rain,
    } = req.body;

    db.environment.create({
      temperature,
      humidity,
      soilMoisture,
      rain,
    })
        .then(() => res.send({
          success: true,
          message: '',
        }))
        .catch((err) => res.send({
          success: false,
          message: err,
        }));
  } catch (ex) {
    res.send({
      success: false,
      message: ex.toString(),
    });
  }
});

app.listen(config.PORT, () => console.log(`started on port ${config.PORT}`));
