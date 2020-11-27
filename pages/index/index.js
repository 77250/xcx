//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    name:'77',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
    //页面上拉触底事件的处理函数
    onReachBottom:function(){
      console.log(111)
      this.data.page++;
      this.grtGoodsList();
    },

  //点击登录
  btnlogin:function(q){
    // console.log('77');
    wx.login({
      success(res){
        if(res.code){
          //发起网络请求
          wx.request({
            url:'http://blog.2004.com/wxlogin',
            data:{
              code:res.code
            },
            success:function(res){
              console.log("获取token" + res.data.data.token)
            }
          })
        }else{
          console.log('登录失败' + res.errMsg)
        }
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let _this = (this);
    wx.request({
      url: 'http://blog.2004.com/goods', //仅为示例，并非真实的接口地址
      data: {
        x: 'xxx',
        y: 'yyy'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        _this.setData({
          qwe:res.data.name,
          ert:res.data.age
        })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})
