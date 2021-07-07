var t, fastest, fastest1, tim = 0,
  arr = [],
  atim = 0,
  address = ['https://www.5372022.com', 'https://www.5372022.com', 'https://www.5372023.com', 'https://www.5372023.com', 'https://www.5372025.com']

function Index() {
  this.lis = $('.bitem-box ul li a'), this.speed = $('.li-bottom>.speed'), this.init()
}
Index.prototype.init = function () {
  this.speedTest()
}, Index.prototype.speedTest = function () {
  tim = 10, t = setInterval('tim++', 10)
  for (var e = 0; e < this.lis.length; e++) {
    var i = $(this.lis[e]).attr('href')
    $(this.speed[e]).html('测试中...<img src=' + i + ' width="1" height="1" onerror="Index.speedTouch(' + e + ')">')
  }
}, Index.prototype.appTest = function () {
  at = setInterval('atim++', atim = 10)
  for (var e = address, t = 0; t < e.length; t++) {
    var i = e[t]
    $('#m-fanjiec').append('<img src=' + i + ' width="1" height="1" onerror="Index.appTouch(' + t + ')">')
  }
}, Index.AddFavorite = function (e) {
  var t = e || 'pc',
    i = window.location,
    a = document.title,
    n = navigator.userAgent.toLowerCase()
  if (-1 < n.indexOf('360se'))
    'pc' == t ? alert('由于360浏览器功能限制，请按 Ctrl+D 手动收藏！') : alert('浏览器不支持，请手动收藏！')
  else if (-1 < n.indexOf('msie 8')) window.external.AddToFavoritesBar(i, a)
  else if (document.all) try {
    window.external.addFavorite(i, a)
  } catch (e) {
    'pc' == t ? alert('您的浏览器不支持，请按 Ctrl+D 手动收藏！') : alert('浏览器不支持，请手动收藏！')
  } else
    window.sidebar ? window.sidebar.addPanel(a, i, '') : 'pc' == t ? alert('您的浏览器不支持，请按 Ctrl+D 手动收藏！') : alert('浏览器不支持，请手动收藏！')
}, Index.SetHome = function (e) {
  var t = window.location
  try {
    e.style.behavior = 'url(#default#homepage)', e.setHomePage(t)
  } catch (e) {
    if (window.netscape) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect')
      } catch (e) {
        alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。")
      }
      Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch).setCharPref('browser.startup.homepage', t)
    } else alert('此操作被浏览器拒绝！请进行手动设置')
  }
}, Index.speedTouch = function (e) {
  //地址修改
  $('.bitem-box ul a')[e].href = address[e]
  if (window.location.href.indexOf('mobile') !== -1) {
    //移动端
    if (1e3 < tim) {
      var t = '超时'
    } else if (fastest) {
      t = (tim / 100).toFixed(2) + '秒'
    } else {
      fastest = !0
      // t = (tim / 100).toFixed(2) + "ms 最快"
      t = (tim / 100).toFixed(2) + '秒 最快'
      $('.bitem-box ul li').eq(e).addClass('active'),
        $('.bitem-box ul .active .li-icon-text>span').text('最佳线路')
      $('.bitem-box ul .active img').attr('src', './index_files/right.png')
    }
  } else {
    //PC端
    if (1e3 < tim) {
      var t = '超时'
      $('.bitem-box ul li').eq(e).addClass('busy'),
        // $(".bitem-box ul .busy .line-status").text('线路繁忙')
        $('.bitem-box ul .busy img').attr('src', './index_files/line_red.png')
    } else if (fastest) {
      if (parseInt((tim / 100).toFixed(2) * 1000) > 5000) {
        t = 5 + 's'
      } else {
        t = (tim / 100).toFixed(2)  + 's'
      }
      $('.bitem-box ul li').eq(e).addClass('busy'),
        // $(".bitem-box ul .busy .line-status").text('线路繁忙')
        $('.bitem-box ul .busy img').attr('src', './index_files/line_red.png')
    } else {
      fastest = !0
      // t = (tim / 100).toFixed(2) + "ms 最快"
      if (parseInt((tim / 100).toFixed(2) * 1000) > 5000) {
        t = 5 + 's'
      } else {
        t = (tim / 100).toFixed(2) + 's'
      }
      $('.bitem-box ul li').eq(e).addClass('active'),
        $('.bitem-box ul .active .li-icon-text>span').text('最佳线路')

      $('.bitem-box ul .m-li-item .li-icon-text img')[e].src = './index_files/line_green.gif'
    }
  }
  $('.li-bottom>.speed').eq(e).html(t)
}, Index.appTouch = function (e) {
  if (1e3 < atim) $('#m-fanjiec img').eq(e).hide()
  else if (fastest1) $('#m-fanjiec img').eq(e).hide()
  else {
    fastest1 = !0
    var t = $('#m-fanjiec img').eq(e).attr('src')
    $('#m-fanjiec').click(function () {
      location.href = t
    })
  }
}, new Index