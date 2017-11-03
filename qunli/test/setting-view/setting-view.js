// test/setting-view/setting-view.js
import { firstName, lastName, year } from 'aaa';

console.log(firstName, lastName, year)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attestationType: 'owner' // 认证方式  owner  name  profession
  },
  // 选择认证方式
  checkAttestationType: function(e){
    // console.log(e.currentTarget.dataset.type)
    this.setData({
      attestationType: e.currentTarget.dataset.type
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