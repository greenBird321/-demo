var postsData = require('../../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.postId
    var postData = postsData.postList[postId]
    // 数据绑定
    this.setData({
      postData : postData
    })
    // 持久化保存数据
    wx.setStorageSync('key', "这是一个测试")
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
    
  },

  /**
   * 用户点击文章详情头图的时候触发点击事件
   */
  onHeadImageTap: function(event) {
    // console.log(event.currentTarget.dataset.imageinfo)
    var imageSrc = event.currentTarget.dataset.imageinfo
    wx.navigateTo({
      url: 'post-image/post-image?src=' + imageSrc,
    })
  }
})