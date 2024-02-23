const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost:3306/student')

async function connect(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { connect }