var config = require('../config')
var qcloud = require('../vendor/wafer2-client-sdk/index')

function create_story(story_content){
  qcloud.request({
    url: config.service.createStoryUrl,
    header: { 'content-type': 'application/json' },
    data:{content:story_content}
  });
}

module.exports = {
  create_story:create_story
}