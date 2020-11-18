// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[  

      {url:'/素材/IMG_20200518_174334.png'} ,  
      {url:'/素材/sadj1.jpg'} ,  
      {url:'/素材/552b1999aa4d5a2e75352fa2f6e93d51.jpg'} ,  
      {url:'/素材/005100-1592412660f973.jpg'}   
  
      ]  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let tahat = this
      wx.request({
        url:'http://blog.2004.com/wxgoods',
        success:function(res){
          console.log(res.data);
          tahat.setData({
            goods:res.data
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})