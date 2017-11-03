// pages/admin-authstr/admin-authstr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    star: 3, // 顶部社区影响力，满分五星
    tabIndex: 0, // tab切换
    images: {},
    groupStar: 3, // 群列表 社区影响力 满分5星
    actionSheetHidden: true,
    actionSheetItems: ['取消认证']
  },
  // tab 切换
  tab: function(e){
    var _this = this
    _this.setData({
      tabIndex: e.currentTarget.dataset.tabindex
    })
  },
  // 自适应图片
  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth;     
    if ($width < 700){
      viewWidth = $width
    }else{
      viewWidth = 700
    }
    var viewHeight = viewWidth / ratio;    //计算的高度值
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  },


  // action-sheet
  listenerButton: function (e) {
    var _this =this
    var state;
    if (e.currentTarget.dataset.index % 2 != 0){
      state = ['取消认证']
    } else {
      state = ['帮他一键认证']
    }

    _this.setData({
      actionSheetItems: state
    })

    this.setData({
      //取反
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },

  listenerActionSheet: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
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