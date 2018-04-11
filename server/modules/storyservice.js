const debug = require("debug")("[story service]")
const config = require("../config.js")
const qcloud = require('wafer-node-sdk')
const { auth: {validation} } = require('../qcloud')
const mysql = qcloud.mysql

function create_story(ctx,next){
  debug(ctx.request.query);
  return validation(ctx.req).then(({loginState,userinfo})=>{
    debug(JSON.stringify(userinfo));
  });
}

module.exports = {
  create_story:create_story
}