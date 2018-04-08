const debug = require("debug")("[story service]")
const config = require("../config.js")

function create_story(ctx,next){
  debug(" test create story");
}

module.exports = {
  create_story:create_story
}