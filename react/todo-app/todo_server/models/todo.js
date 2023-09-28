//visitor에 대한 테이블 정의
const { DataTypes } = require('sequelize');
const Todo = function (sequelize) {
  //sezuelize는 models/index.js에 있는 sequelize
  //DataTypes는 models/index.js에 있는 Sequelize
  const Todo = sequelize.define(
    'todo',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.INTEGER(1),
      },
    }
    // {tableName:'visitor',freezeTableName:true,timestamps:false}
  );
  return Todo;
};
module.exports = Todo;
