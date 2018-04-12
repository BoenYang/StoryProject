// pages/write/write.js
var story = require("../../api/story")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    story_content : ""
  },

  onCreateStory:function(e){
    console.log(this.data.story_content);
    story.create_story(this.data.story_content,
      function(result){
        var data = result.data.data;
        console.log(result.data.data);
        wx.navigateTo({
          url: '../share/share?story_id=' + data.story_id + "&price=" + data.story_price + "&create_user=" + JSON.stringify(data.create_user),
        });
      },
      function(){

      }
    );
  },

  onStoryContentChange:function(e){
    this.setData({
      story_content:e.detail.value
    });
    
  }
})