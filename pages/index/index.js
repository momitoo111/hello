Page({
  data: {
    imagePath: '/assets/images/f-1.jpg'
  },
  chooseImage: function(){
    var _this = this;
    wx.chooseImage({
      success: function () {
        _this.setData({
          imagePath: res.tempFiles[0].path
        });
        wx.uploadFile({
          url: '',
          filePath: res.tempFiles[0].path,
          name: 'image_file',
          success: function(info) {
            var data = JSON.parse(info.data)
          }
        })
      }
    })
  }
})