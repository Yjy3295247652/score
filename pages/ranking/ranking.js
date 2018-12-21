// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getname() {
    var score = getApp().globalData.host;
    this.setData({
      score: score
    })
  },
  getranking() {
    wx.request({
      url: this.data.score + '/uektrain/speech/uekSpeechPerson/list',
      data: {
        limit: 20,
        offset: 0,
        speechId: wx.getStorageSync('speechId'),
        sort: 'last_score',
        order: 'desc'
      },
      success: res => {
        if (res.data.total > 0) {
          this.setData({
            ranking: res.data.rows
          })
        } else {
          wx.showToast({
            title: '暂无排名',
            icon: 'none',
            duration: 2000
          })
        }
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
    this.getranking();
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
    this.getranking();
    setTimeout(function () {
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