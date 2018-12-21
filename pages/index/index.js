// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: '',
    index: 0
  },
  getname() {
    var score = getApp().globalData.host;
    this.setData({
      score: score
    })
  },

  // 登录
  login() {
    var openId = wx.getStorageSync('openId')
    if (openId) {
      return;
    } else {
      wx.login({
        success: res => {
          if (res.code) {
            wx.request({
              url: this.data.score + '/uektrain/speech/uekSpeechInfo/afterWeChatLogin',
              data: {
                code: res.code
              },
              success: res => {
                if (res.data.code == 0) {
                  wx.setStorageSync('openId', res.data.openId)
                  wx.setStorageSync('speechId', 5)
                } else {
                  wx.showToast({
                    title: '服务器错误',
                    icon: 'none',
                    duration: 2000
                  })
                }
              }
            })
          }
        }
      })
    }
  },
  // 根据speechid查看当前是否可以投票
  findFlagBySpeechId() {
    wx.showLoading({
      title: '加载中',
    })
    if(this.data.scoreFlag){
      wx.request({
        url: this.data.score + '/uektrain/speech/uekSpeechInfo/findFlagBySpeechId?speechId=' + wx.getStorageSync('speechId'),
        success: res => {
          if (res.data.code == 0) {
            if (res.data.flag == true) {
              wx.navigateTo({
                url: '../userscore/userscore?userId=' + this.data.classList[this.data.index].userId + '&userSpeechId=' + this.data.classList[this.data.index].id + '&userSpeechName=' + this.data.classList[this.data.index].userSpeechName + '&userName=' + this.data.classList[this.data.index].userName + '&deptName=' + this.data.classList[this.data.index].deptName + '&plance=' + this.data.classList[this.data.index].plance
              })
              wx.hideLoading();
            } else if (res.data.flag == false) {
              wx.showModal({
                title: '优逸客演讲比赛',
                content: '该选手的投票通道暂未开启，投票需等待通道开启之后才能进行',
                showCancel: false
              })
              wx.hideLoading();
            }
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000,
              mask: true
            })
            wx.hideLoading();
          }
        }
      })
    }else{
      wx.showModal({
        title: '优逸客演讲比赛',
        content: '你已为该选手评分',
        showCancel: false
      })
      wx.hideLoading();
    }
  },
  // 根据speechid查看演讲者相关信息
  getUser() {
    wx.request({
      url: this.data.score + '/uektrain/speech/uekSpeechPerson/searchperson/?speechId=' + wx.getStorageSync('speechId'),
      success: res => {
        this.setData({
          classList: res.data
        })
        this.findRater();
      }
    })
  },
  // 切换演讲人
  speechManChange(e) {
    this.setData({
      index: e.detail.value,
    })
    this.findRater();
  },
  // 查询当前微信用户是否已对演讲者进行评分
  findRater() {
    wx.request({
      url: this.data.score + '/uektrain/speech/uekSpeechRater/findRaterByUserSpeechIdAndOpenId',
      data: {
        userSpeechId: this.data.classList[this.data.index].id,
        userId: this.data.classList[this.data.index].userId,
        openId: wx.getStorageSync('openId')
      },
      success: res => {
        if (res.data.code == 0) {
          this.setData({
            scoreFlag: res.data.flag
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
    this.login();
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
    this.getUser();
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