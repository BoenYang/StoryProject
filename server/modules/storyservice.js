const debug = require("debug")("[story service]")
const config = require("../config.js")
const qcloud = require('wafer-node-sdk')
const mysql = qcloud.mysql

function create_story(ctx,next){
  debug(" test create story");
}

module.exports = {
  create_story:create_story
}