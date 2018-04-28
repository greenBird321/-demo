Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   *  点击开启小程序之旅的触发事件
   */
  onTap: function(){
    // 导航到那个页面 从父级跳转到子集页面 (只能跳转最多5级)
    // wx.navigateTo({
    //   // 跳转页面的相对路径
    //   url: '../post/post',
    // })

    // 跳转到那个页面 平行跳转
    wx.redirectTo({
      url: '../post/post',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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