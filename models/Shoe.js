
module.exports = function(sequelize, DataTypes) {
  var Shoe = sequelize.define("Shoe", {
    shoe_name: DataTypes.STRING,
    copped: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false
  });
  return Shoe;
};
