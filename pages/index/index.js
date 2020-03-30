//index.js
//获取应用实例
const app = getApp()
let request = require('../../utils/request')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    PageCur: 'index',
    cardList:[
      {store:'金牛万达',inital:100,balance:50,cardId:625785445247851525},
      {store:'青羊万达',inital:500,balance:200,cardId:625785445247851525}
    ],
    modalName:'',
    checkbox1:[
      {value:50,name:"50元",hot:false},
      {value:100,name:"100元",hot:true},
      {value:150,name:"150元",hot:false},
      {value:200,name:"2000元",hot:false},
      {value:250,name:"250元",hot:false},
      {value:250,name:"300元",hot:false},
    ],
    checkbox:[
      {name:"店铺1",value:'1',checked:false},
      {name:"店铺2",value:'2',checked:false},
      {name:"店铺3",value:'3',checked:false},
      {name:"店铺4",value:'4',checked:false},
      {name:"店铺5",value:'5',checked:false},
      {name:"店铺6",value:'6',checked:false},
    ],
    scanRes:''
  },
  changeStr(val){
    return val.length
  },
  //页面切换
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
    if(e.currentTarget.dataset.cur =='profile'){
      this.selectComponent("#profile").getUserInfo()
    }
  },
  //打开弹窗
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  //关闭弹窗
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  //选择店铺
  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked=false
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
      }
    }
    this.setData({
      checkbox: items
    })
  },
  //扫码
  scanCode(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
        this.setData({
          PageCur:"scan",
          scanRes: res.result,
        })
        wx.requestPayment(
          {
          'timeStamp': '',
          'nonceStr': '',
          'package': '',
          'signType': 'MD5',
          'paySign': '',
          'success':function(res){},
          'fail':function(res){},
          'complete':function(res){}
          })
      },
      fail:(error)=>{
        console.log(error)
      }
    })
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
  getCardList(){
    request.ajax()
  },
  onLoad: function () {
    console.log(1)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
