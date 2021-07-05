'use strict'; //더나은 오류검사를 위한 도구

module.exports = (sequelize,DataTypes) => {
  var user = sequelize.define('user',{
    name : {
      type:DataTypes.String,
      allowNull:false
    },
    email : {
      type:DataTypes.String,
      allowNull:false,
      validate:{
        isEmail:true
      },
      primaryKey:true
    },
    password : {
      type : DataTypes.String,
      allowNull : false
    },
    salt:{
      type : DataTypes.String
    }
  })

  return user;
} 