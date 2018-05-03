var postsData = require('../../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareBtn: 'mini',
    btnType: 'primary',
    playMusic: false,
    //  动画数据
    animationData: {},
    // 旋转角度
    rotateCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.postId
    var postData = postsData.postList[postId]
    // 数据绑定
    this.setData({
      postData: postData,
      post_id: postId
    })

    /**
     *  Storage: {
     *    '1': true,
     *    '2': false,
     *    '3': false,
     *    ....
     *  }
     * 
     */
    // 获取 collected 的值
    var collectedValue = wx.getStorageSync('post_collected')

    if (collectedValue) {
      var collect = collectedValue[postId] == undefined ? false : collectedValue[postId]
      this.setData({
        'collected': collect
      })
    } else {
      collectedValue = {}
      collectedValue[postId] = false
      wx.setStorageSync('post_collected', collectedValue)
    }
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
  onShareAppMessage: res => {
    if (res.from == 'button') {
      // 来自页面内抓发按钮
      console.log(res.target)
    }
  },

  /**
   * 用户点击文章详情头图的时候触发点击事件
   */
  onHeadImageTap: function (event) {
    var imageSrc = event.currentTarget.dataset.imageinfo
    wx.navigateTo({
      url: 'post-image/post-image?src=' + imageSrc,
    })
  },

  /**
   *  用户点击收藏按钮触发的事件
   */
  onCollectionTap: function (event) {
    var is_collection = wx.getStorageSync('post_collected')
    var collection = is_collection[this.data.post_id]
    collection = !collection
    is_collection[this.data.post_id] = collection
    wx.setStorageSync('post_collected', is_collection)
    this.setData({
      'collected': collection
    })

    // 弹窗提示
    wx.showToast({
      title: collection ? '收藏成功' : '取消成功',
      duration: 1000
    })
  },

  /**
   * 用户点击分享按钮触发事件
   */
  onShareTap: function (event) {
    this.onShareAppMessage()
  },

  /**
   * 用户点击音乐播放按钮
   */
  onMusicTap: function (event) {
    var isPlay = this.data.playMusic
    if (isPlay) {
      clearInterval(this.data.animationIntervalId)
      wx.pauseBackgroundAudio()
      this.setData({
        playMusic: false,
        animationIntervalId: null
      })

    } else {
      wx.playBackgroundAudio({
        // 音乐源
        dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
        // 音乐标题
        title: '此时此刻',
        // 音乐封面
        coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
      })
      this.setData({
        playMusic: true
      })
      var that = this
      var animation = wx.createAnimation({
        duration: 100,
        // 匀速
        timingFunction: 'linear'
      })
      var animationIntervalId  = setInterval(function () {
        animation.rotate((++that.data.rotateCount) * 2).step()
        that.setData({
          animationData: animation.export()
        })
      }, 100)
      // this.animation = animation
      this.setData({
        animationIntervalId: animationIntervalId
      })  
    }
  }

})  