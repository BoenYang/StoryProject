const debug = require("debug")("[story service]")
const config = require("../config.js")
const qcloud = require('wafer-node-sdk')
const uuidGenerator = require('uuid/v4')
const { auth: {validation} } = require('../qcloud')
const {mysql} = require('../qcloud')

function create_story(ctx,next){
  debug(ctx.request.query);
  return validation(ctx.req).then(({loginState,userinfo})=>{
      const id = uuidGenerator();
      const content = ctx.request.query.content;
      const user_id = userinfo.openId;
      const price = 1;

      return mysql('t_story').insert({content,price,user_id,id}).then((res)=>{
          debug("create story success");
      }).then(()=> {
        const create_user = {};
        create_user.avatarUrl = userinfo.avatarUrl;
        create_user.nickName = userinfo.nickName;
        ctx.state.data = {story_id:id,story_price:price,create_user:create_user};
        return next();
      });
  });
}

module.exports = {
  create_story:create_story
}