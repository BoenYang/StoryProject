// pages/write/write.js
var story = require("../../api/story")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    story_content : ""
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  onCreateStory:function(e){
    console.log(this.data.story_content);
  },

  onStoryContentChange:function(e){
    this.setData({
      story_content:e.detail.value
    });

  }
})