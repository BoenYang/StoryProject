// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    story_id:""
  },

  /**k
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      userInfo:JSON.parse(options.create_user),
      story_id:options.story_id
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '故事的标题',
      path: '/pages/view/view?story_id=' + this.data.story_id,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    };
  }
})