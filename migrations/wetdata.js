module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('environments', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      temperature: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      humidity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      soilMoisture:  {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rain:  {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('environments');
  },
};
