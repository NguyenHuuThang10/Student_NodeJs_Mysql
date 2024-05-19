const { Sequelize, DataTypes  } = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost:3306/student')

const Students = sequelize.define('students', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    msv: {
        type: DataTypes.STRING,
        allowNull: true
    },
    courseId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tk: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    gk: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    ck: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    timestamps: false,
})

module.exports = Students