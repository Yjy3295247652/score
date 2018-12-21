// pages/userscore/userscore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: '',
    Standard: '',
    currentscore5:0,
    currentscore6:0,
    currentscore7:0,
    currentscore12:0,
    currentscore13:0,
    currentscore14:0,
    currentscore15:0,
    currentscore16:0,
    currentscore17:0,
    currentscore18:0,
    currentscore19:0,
    currentscore20:0,
  },
  getname() {
    var score = getApp().globalData.host;
    this.setData({
      score: score
    })
  },
  // 获取评分标准接口
  findStandardBySpeechId() {
    wx.request({
      url: this.data.score + '/uektrain/speech/uekSpeechStandard/findStandardBySpeechId?speechId=' + wx.getStorageSync('speechId'),
      success: res => {
        for (var i = 0; i < res.data.length; i++) {
          for (var j = 0; j < res.data[i].children.length; j++) {
            var arr = [];
            for (var k = 0; k < res.data[i].children[j].score; k++) {
              arr.push(k)
            }
            res.data[i].children[j].arr = arr;
          }
        }
        this.setData({
          Standard: res.data
        })
      }
    })
  },
  // 选择某一方向的评分标准
  chooseStandard(e) {
    if (this.data.currentIdx == e.currentTarget.dataset.idx) {
      return;
    } else {
      this.setData({
        currentIdx: e.currentTarget.dataset.idx
      })
    }
  },
  shouqi() {
    this.setData({
      currentIdx: 0
    })
  },
  // 用户进行评分
  userScore(e) {
    if (e.currentTarget.dataset.idx == 5) {
      this.setData({
        currentscore5: e.currentTarget.dataset.currentstar,
        currentscoreIdx5: e.currentTarget.dataset.idx,
      })
      this.setData({
        currentscore4: this.data.currentscore5 * 1 + this.data.currentscore6 * 1 + this.data.currentscore7 * 1
      })
    } else if (e.currentTarget.dataset.idx == 6) {
      this.setData({
        currentscore6: e.currentTarget.dataset.currentstar,
        currentscoreIdx6: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore4: this.data.currentscore5 * 1 + this.data.currentscore6 * 1 + this.data.currentscore7 * 1
      })
    } else if (e.currentTarget.dataset.idx == 7) {
      this.setData({
        currentscore7: e.currentTarget.dataset.currentstar,
        currentscoreIdx7: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore4: this.data.currentscore5 * 1 + this.data.currentscore6 * 1 + this.data.currentscore7 * 1
      })
    } else if (e.currentTarget.dataset.idx == 12) {
      this.setData({
        currentscore12: e.currentTarget.dataset.currentstar,
        currentscoreIdx12: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore8: this.data.currentscore12 * 1 + this.data.currentscore13 * 1 + this.data.currentscore14 * 1
      })
    } else if (e.currentTarget.dataset.idx == 13) {
      this.setData({
        currentscore13: e.currentTarget.dataset.currentstar,
        currentscoreIdx13: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore8: this.data.currentscore12 * 1 + this.data.currentscore13 * 1 + this.data.currentscore14 * 1
      })
    } else if (e.currentTarget.dataset.idx == 14) {
      this.setData({
        currentscore14: e.currentTarget.dataset.currentstar,
        currentscoreIdx14: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore8: this.data.currentscore12 * 1 + this.data.currentscore13 * 1 + this.data.currentscore14 * 1
      })
    } else if (e.currentTarget.dataset.idx == 15) {
      this.setData({
        currentscore15: e.currentTarget.dataset.currentstar,
        currentscoreIdx15: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore9: this.data.currentscore15 * 1 + this.data.currentscore16 * 1 + this.data.currentscore17 * 1
      })
    } else if (e.currentTarget.dataset.idx == 16) {
      this.setData({
        currentscore16: e.currentTarget.dataset.currentstar,
        currentscoreIdx16: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore9: this.data.currentscore15 * 1 + this.data.currentscore16 * 1 + this.data.currentscore17 * 1
      })
    } else if (e.currentTarget.dataset.idx == 17) {
      this.setData({
        currentscore17: e.currentTarget.dataset.currentstar,
        currentscoreIdx17: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore9: this.data.currentscore15 * 1 + this.data.currentscore16 * 1 + this.data.currentscore17 * 1
      })
    } else if (e.currentTarget.dataset.idx == 18) {
      this.setData({
        currentscore18: e.currentTarget.dataset.currentstar,
        currentscoreIdx18: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore10: this.data.currentscore18 * 1 + this.data.currentscore19 * 1
      })
    } else if (e.currentTarget.dataset.idx == 19) {
      this.setData({
        currentscore19: e.currentTarget.dataset.currentstar,
        currentscoreIdx19: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore10: this.data.currentscore18 * 1 + this.data.currentscore19 * 1
      })
    } else if (e.currentTarget.dataset.idx == 20) {
      this.setData({
        currentscore20: e.currentTarget.dataset.currentstar,
        currentscoreIdx20: e.currentTarget.dataset.idx
      })
      this.setData({
        currentscore11: this.data.currentscore20 * 1
      })
    }
  },
  // 提交打分
  submitInfo() {
    wx.showLoading({
      title: '提交中',
    })
    if (this.data.currentscore5 && this.data.currentscore6 && this.data.currentscore7 && this.data.currentscore12 && this.data.currentscore13 && this.data.currentscore14 && this.data.currentscore15 && this.data.currentscore16 && this.data.currentscore17 && this.data.currentscore18 && this.data.currentscore19 && this.data.currentscore20) {
      var openId = wx.getStorageSync('openId');
      var children = [{
          "grade_nape": this.data.currentscoreIdx5,
          "nape_score": this.data.currentscore5
        },
        {
          "grade_nape": this.data.currentscoreIdx6,
          "nape_score": this.data.currentscore6
        },
        {
          "grade_nape": this.data.currentscoreIdx7,
          "nape_score": this.data.currentscore7
        },
        {
          "grade_nape": this.data.currentscoreIdx12,
          "nape_score": this.data.currentscore12
        },
        {
          "grade_nape": this.data.currentscoreIdx13,
          "nape_score": this.data.currentscore13
        },
        {
          "grade_nape": this.data.currentscoreIdx14,
          "nape_score": this.data.currentscore14
        },
        {
          "grade_nape": this.data.currentscoreIdx15,
          "nape_score": this.data.currentscore15
        },
        {
          "grade_nape": this.data.currentscoreIdx16,
          "nape_score": this.data.currentscore16
        },
        {
          "grade_nape": this.data.currentscoreIdx17,
          "nape_score": this.data.currentscore17
        },
        {
          "grade_nape": this.data.currentscoreIdx18,
          "nape_score": this.data.currentscore18
        },
        {
          "grade_nape": this.data.currentscoreIdx19,
          "nape_score": this.data.currentscore19
        },
        {
          "grade_nape": this.data.currentscoreIdx20,
          "nape_score": this.data.currentscore20
        },
      ];
      var str = {
        "uek_speech_id": this.data.userSpeechId,
        "user_id": this.data.userId,
        "open_id": openId,
        "children": children
      };
      wx.request({
        url: this.data.score + '/uektrain/speech/uekSpeechRater/saveRater',
        data: {
          jsonStr: JSON.stringify(str)
        },
        success: res => {
          if (res.data.code == 0) {
            wx.reLaunch({
              url: '../ranking/ranking',
              success: res => {
                wx.showToast({
                  title: '评分成功',
                })
              }
            })
            wx.hideLoading();
          } else {
            wx.showToast({
              title: '评分失败',
              icon: 'none'
            })
            wx.hideLoading();
          }
        }
      })
    } else {
      wx.showToast({
        title: '请全部打分完毕再提交',
        icon: 'none',
        duration: 2000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      userId: options.userId,
      userSpeechId: options.userSpeechId,
      userSpeechName: options.userSpeechName,
      userName: options.userName,
      deptName: options.deptName,
      plance: options.plance
    })
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
    this.findStandardBySpeechId();
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