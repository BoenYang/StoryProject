var config = require('../config')
var qcloud = require('../vendor/wafer2-client-sdk/index')

function create_story(story_content,success,fail){
  qcloud.request({
    url: config.service.createStoryUrl,
    header: { 'content-type': 'application/json' },
    data:{content:story_content},
    success:success,
    fail:fail
  });
}

function get_story(story_id,success,fail){
  qcloud.request({
    url: config.service.getStoryUrl,
    header: { 'content-type': 'application/json' },
    data: { id: story_id },
    success: success,
    fail: fail
  });
}

function get_full_story(story_id,success,fail){
  
}

module.exports = {
  create_story:create_story,
  get_story:get_story
}