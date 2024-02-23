module.exports = {
    mutipleSequelizeToObject: function(sequelizes) {
        if (!sequelizes) {
            return [];
        }
        if (!Array.isArray(sequelizes)) {
            return [sequelizes];
        }
        return sequelizes.map(sequelize => sequelize.get({ plain: true }));
    },

    sequelizeToObject: function(sequelize) {
        return sequelize ? sequelize.get({ plain: true }) : sequelize;
    }
}