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

app.get('/api/v1/weather/today', (req, res) => {
  db.environment.findAll({
    where: db.sequelize.where(
        db.sequelize.fn('DATE', db.sequelize.col('createdAt')),
        '=',
        db.sequelize.literal('CURRENT_DATE'),
    ),
  })
      .then((data) => {
        res.send({
          success: true,
          message: '',
          data,
        });
      })
      .catch((err) => res.send({
        success: false,
        message: err,
        data: {},
      }));
});

app.listen(config.PORT, () => console.log(`started on port ${config.PORT}`));
