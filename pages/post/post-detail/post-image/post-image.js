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
    var imageSrc = options.src
    this.setData({
      imageSrc : imageSrc
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
    
  },

  /**
   * 用户长时间按压图片触发 应该把图片的src 传递过来 但是由于没有线上资源只能使用假图片
   */
  onLongTap:function(event){
      wx.downloadFile({
        url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
        success: function (res) {
          if (res.statusCode == 200){
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function (result) {
                  wx.showToast({
                    title: '图片保存成功',
                  })
              }
            })  
          }
        }
      })
  }
})