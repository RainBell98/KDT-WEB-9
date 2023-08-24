//visitor에 대한 테이블 정의
const{DataTypes} = require("sequelize")
const UserModel = function(sequelize){
    //sezuelize는 models/index.js에 있는 sequelize
    //DataTypes는 models/index.js에 있는 Sequelize
    const User = sequelize.define(
        'user',
        {
            id:{
                type:DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            
            pw:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            name:{
                type:DataTypes.STRING(15),
                allowNull:false,
            },
            userid:{
                type:DataTypes.STRING(15),
                allowNull: false
            },
            
        },
        // {tableName:'visitor',freezeTableName:true,timestamps:false}
        )
    return User
    }
module.exports = UserModel