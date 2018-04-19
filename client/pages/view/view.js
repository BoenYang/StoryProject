const app = getApp()

// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cc.log(options);
    if(app.globalData.userInfo){
      story.get_story("f57f0c4b-06db-4ff7-8fec-40e4d38ad4b5", function (result) {
        console.log(result.data.data);
      })
    }else if(this.data.canIUse){
      app.userInfoReadyCallback = res => {
        story.get_story("f57f0c4b-06db-4ff7-8fec-40e4d38ad4b5", function (result) {
          console.log(result.data.data);
        })
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})