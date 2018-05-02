// 接收 posts-data.js 导出的数据 相对路径
var post_data = require("../../data/posts-data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载 首先调用到
   */
  onLoad: function (options) {
    // 相当于 把 post_data 的数据 直接添加到 data 中
    this.setData({
      post_data: post_data.postList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成  第三个调用到
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示 第二个调用到
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

  },

  /**
   *  自定义点击事件
   */
  templateOnTap: function(event){
    // console.log(event)
    var postId = event.currentTarget.dataset.postid
    wx.navigateTo({
      // 向 post-detail 传递参数 在app的url后拼接 ? xxx= 
      url: 'post-detail/post-detail?postId=' + postId,
    })
  }
})