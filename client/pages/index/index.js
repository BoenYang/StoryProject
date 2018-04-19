//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()

Page({
    data: {
        userInfo: {},
        logged:false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },

    onLoad: function(){
      this.login();
    },

    // 用户登录示例
    login: function() {
      if(app.globalData.userInfo){
        this.setData({
          userInfo: app.globalData.userInfo,
          logged: app.globalData.logged
        });
      }else if(this.data.canIUse){
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res,
            logged: app.globalData.logged
          })
        }
      }        
    },

    onWriteClick: function () {
      wx.navigateTo({
        url: '../write/write'
      })
    },
})
