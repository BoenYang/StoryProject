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

function get_story(ctx,next){
  debug(ctx.request.query);
    return validation(ctx.req).then(({loginState,userinfo})=>{
      const id = ctx.request.query.id;
      return mysql('t_story').select('*').where({id}).then(result => {
        const {user_id : userId , price : story_price} = result[0];
        const open_id = userId;
        debug("get story user id " + userId);
        return mysql('cSessionInfo').select('*').where({
          open_id
        }).then(result=>{
          const {user_info : userInfo} = result[0];
          const create_user = {};
          const user = JSON.parse(userInfo);
          create_user.avatarUrl = user.avatarUrl;
          create_user.nickName = user.nickName;
          ctx.state.data = { story_id: id, story_price: story_price, create_user_info: create_user};
          return next();
        });
      });
  });
}

module.exports = {
  create_story:create_story,
  get_story:get_story
}