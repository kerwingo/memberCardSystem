//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    TabCur: 0,
    scrollLeft:0
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  onLoad: function () {
    
  }
})
