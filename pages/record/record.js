// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取域名
  getname() {
    var score = getApp().globalData.host;
    this.setData({
      score: score
    })
  },
  // 根据微信openid查询打分信息
  getInfo() {
    wx.request({
      url: this.data.score + '/uektrain/speech/uekSpeechRater/findspeechpersonByOpenId?openId=' + wx.getStorageSync('openId'),
      success: res => {
        this.setData({
          recordInfo: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getname();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getInfo();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.getInfo();
    setTimeout(function() {
      wx.stopPullDownRefresh()
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})