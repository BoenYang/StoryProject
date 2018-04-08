var config = require('../config')

function create_story(options){

  wx.request({
    url: config.service.createStoryUrl,
    method: 'Get',
    success: function (result) {
      var data = result.data;
    },

    // 响应错误
    fail: function (loginResponseError) {

    },
  });
}

module.exports = {
  create_story:create_story
}