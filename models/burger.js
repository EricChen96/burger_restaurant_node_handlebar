const { builtinModules } = require("module");
const { callbackify } = require("util");
const orm = require("../config/orm.js");

const burger = {
    selectAll: (callback) => {
        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },
    insertOne: (newBurger, callback) => {
        orm.insertOne("burgers", newBurger, (res) => {
            callback(res);
        });
    },
    updateOne: (burgerData, criteria, callback) => {
        orm.updateOne("burgers", burgerData, criteria, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;