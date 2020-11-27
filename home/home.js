// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[  

      {url:'/图片/3.jpg'} ,  
      {url:'/图片/6.jpg'} ,  
      {url:'/图片/4.jpg'} ,  
      {url:'/图片/5.jpg'}   
  
      ]  
  },
  //跳转详情页
  getdatalist:function(s){
    // let _this=(this);
    // console.log(s);
    var id=s.currentTarget.id
    //跳转页面
    wx.navigateTo({
      url: '/pages/details/details?goods_id='+id
    })
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