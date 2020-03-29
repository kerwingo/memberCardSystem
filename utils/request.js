/*
  Author:kerwin
  Date:2020/03/29
  Description:"Universal ajax package"
*/
import api from "../api/index"
const ajax = (ajaxData, method) => {
  wx.showLoading({
      title: '加载中',
      mask: true
  });
  console.log('use ajax', ajaxData.url)
  return new Promise((resolve, reject) => wx.request({
      url: ajaxData.url,
      method: method || 'GET',
      data: ajaxData.data,
      success(e) {
          // console.log('ajax',e);
          if(e.data.retcode == 0) {
              resolve(e)
              wx.hideLoading();
          } else {
              wx.showToast({
                  title: e.data.message,
                  icon: 'none'
              })
              reject(e)
          }
      },
      fail(e) {
          wx.showLoading({
              title: '网络错误'
          })
      }
  }))
}

