module.exports = (sequelize, DataTypes) => {
  const environment = sequelize.define('environment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    temperature: DataTypes.INTEGER,
    humidity: DataTypes.INTEGER,
    soilMoisture: DataTypes.INTEGER,
    rain: DataTypes.INTEGER,
  }, {});
  environment.associate = function(models) {
    // associations can be defined here
  };
  return environment;
};
