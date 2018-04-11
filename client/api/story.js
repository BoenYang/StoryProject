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

module.exports = {
  create_story:create_story
}