/**
 * 开发工具箱类库封装
 *
 * 开发者：范家鹏  E-mail：fanjiapeng@126.com
 * 上次更新时间：2022-06-12
 */

/* baidu JS-API  */
var _hmt = _hmt || []

/* localStorage封装 */
var storage = {
	'define': {
		'DEFINE_BTN_STYLE_NAME': 'btn-style',
		'DEFINE_CUSTOM_FUNCTION': 'custom-func',
		'DEFINE_BORDER_COLOR': 'border-color'
	},
	"init": function () {
		return window.localStorage ? true : false;
	},
	"get": function (key) {
		if (!this.init()) {
			return key ? $.trim(cookie.get(storage.pre(key))) : '';
		}
		return key ? $.trim(window.localStorage.getItem(storage.pre(key))) : '';
	},
	"set": function (key, val) {
		if (!this.init()) {
			return key ? $.trim(cookie.set(storage.pre(key), $.trim(val))) : '';
		}
		return (key && val) ? window.localStorage.setItem(storage.pre(key), $.trim(val)) : '';
	},
	"del": function (key) {
		if (!this.init()) {
			return key ? cookie.del(storage.pre(key)) : '';
		}
		if (key) $.trim(window.localStorage.removeItem(storage.pre(key)));
	},
	"pre": function (key) {
		return typeof key != "undefind" ? 'developtoolbox_' + key : '';
	}
};

/* 优先采用localStorage, 其次采用cookie存储 */
var cookie = {
	"get": function (key) {
		return $.cookie(key);
	},
	"set": function (key, val) {
		return $.cookie(key, val);
	},
	"del": function (key) {
		$.removeCookie(key);
	}
}

/* 动态加载文件 */
$.extend({
	includePath: '',
	include: function (file) {
		var files = typeof file == "string" ? [file] : file;
		for (var i = 0; i < files.length; i++) {
			var name = files[i].replace(/^\s|\s$/g, "");
			$("<link>").attr({
				rel: "stylesheet",
				type: "text/css",
				href: name
			}).appendTo("head");
		}
	}
});

/* 获取URL参数函数 */
// $.extend({
// 	getUrlVars: function () {
// 		var vars = [], hash;
// 		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
// 		for (var i = 0; i < hashes.length; i++) {
// 			hash = hashes[i].split('=');
// 			vars.push(hash[0]);
// 			vars[hash[0]] = hash[1];
// 		}
// 		return vars;
// 	},
// 	getUrlVar: function (name) {
// 		return $.getUrlVars()[name];
// 	}
// });

// $.extend({
// 	getUrlShareId: function () {
// 		var urlpath = window.location.pathname;
// 		if (urlpath.length > 1 && urlpath.indexOf('/share/') != -1) {
// 			return urlpath.replace('/share/', '');
// 		}
// 		return false;
// 	}
// })

/* utf8-size封装 */
// String.prototype.utf8_size = function (str_charset) {
// 	var int_len = this.length;
// 	var int_total = 0;

// 	str_charset = str_charset ? str_charset.toLowerCase() : '';

// 	if (int_len < 1) return int_total;

// 	if (str_charset === 'utf-16' || str_charset === 'utf16') {
// 		for (i = 0; i < int_len; i++) {
// 			str_charcode = this.charCodeAt(i);
// 			if (str_charcode <= 0xffff) {
// 				int_total += 2;
// 			} else {
// 				int_total += 4;
// 			}
// 		}

// 		return int_total;
// 	}

// 	for (i = 0; i < int_len; i++) {
// 		str_charcode = this.charCodeAt(i);
// 		if (str_charcode <= 0x007f) {
// 			int_total += 1;
// 		} else if (str_charcode <= 0x07ff) {
// 			int_total += 2;
// 		} else if (str_charcode <= 0xffff) {
// 			int_total += 3;
// 		} else {
// 			int_total += 4;
// 		}
// 	}

// 	return int_total;
// };

var isMobile = function () {
	return navigator.userAgent.match(/mobile/i);
}

var resize_page = function () {
	if (isMobile() || $(window).width() < 1200) {
		$('.container').width('auto').css('padding', '50px 20px 40px 20px')
		$('#box3-nav').width('auto').css('padding-left', '20px')
	} else {
		$('.container').width(1200).css('padding', '50px 0 40px 0')
		$('#box3-nav').width(1200).css('padding-left', '')
	}
}

/* 检测浏览器类型 */
function UAMatch() {
	var userAgent = navigator.userAgent,
		rEdge = /(edge)\/([\w.]+)/,
		rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
		rFirefox = /(firefox)\/([\w.]+)/,
		rOpera = /(opera).+version\/([\w.]+)/,
		rChrome = /(chrome)\/([\w.]+)/,
		rSafari = /version\/([\w.]+).*(safari)/;
	var ua = userAgent.toLowerCase();

	var match = rEdge.exec(ua);
	if (match != null) {
		return { browser: "EDGE", version: match[2] || "0" };
	}
	var match = rMsie.exec(ua);
	if (match != null) {
		return { browser: "IE", version: match[2] || "0" };
	}
	var match = rFirefox.exec(ua);
	if (match != null) {
		return { browser: match[1] || "", version: match[2] || "0" };
	}
	var match = rOpera.exec(ua);
	if (match != null) {
		return { browser: match[1] || "", version: match[2] || "0" };
	}
	var match = rChrome.exec(ua);
	if (match != null) {
		return { browser: match[1] || "", version: match[2] || "0" };
	}
	var match = rSafari.exec(ua);
	if (match != null) {
		return { browser: match[2] || "", version: match[1] || "0" };
	}
	if (match != null) {
		return { browser: "", version: "0" };
	}
}



// var Box3Copyright = function () {
// 	$("body").append('<nav class="blog-footer navbar-fixed-bottom">' +
// 		'<div class="container">' +
// 		'	©2012-2022 <a href="https://www.box3.cn">box3.cn</a> Ver: 2.3.2.4 UpTime: 2022-07-01' +
// 		'</div>' +
// 		'</nav>');
// 	$('body>.container').css('margin-bottom', "60px")
// }

function validateUrl(value) {
	var strRegex = "^((https|http)://)?[a-z0-9A-Z]{3}\.[a-z0-9A-Z][a-z0-9A-Z]{0,61}?[a-z0-9A-Z]\.com|net|cn|cc (:s[0-9]{1-4})?/$";
	return new RegExp(strRegex).test(value);
}

/* tool.box3.cn */
// var Tools = {
// 	timeoutIds: [],
// 	alertZIndex: 11110,
// 	'Init': function () {
// 		if (storage.init()) {
// 			var bgUrl = storage.get("box3-user-page-bg")
// 			if (validateUrl(bgUrl)) {
// 				var point = bgUrl.lastIndexOf(".")
// 				if (bgUrl.substr(point) == ".png" && bgUrl.indexOf("//cdn.box3.cn") == 0) {
// 					$('body').css('background-image', 'url(' + bgUrl + ')')
// 				}
// 			}
// 		}
// 		if ($(".copy-txt-btn").length) {
// 			Tools.CopyTxt()
// 		}
// 		if (isMobile()) {
// 			$('.blog-footer').hide()
// 			Box3Copyright()
// 		}
// 		Tools.BaiduTongJi()
// 		if (window.location.href.indexOf("https://tool.box3.cn") == 0) {
// 			$('.blog-nav a').eq(2).addClass('active')
// 		}
// 	},
// 	'POST': function (url, formData, callFuncSucc, callFuncErr) {
// 		$.ajax({
// 			url: url,
// 			type: "POST",
// 			dataType: "json",
// 			timeout: 10000,
// 			data: formData,
// 			cache: false,
// 			success: function (resp) {
// 				if (resp.errno > 0) {
// 					Tools.Alert(resp.errmsg)
// 					if (callFuncErr) {
// 						callFuncErr()
// 					}
// 				} else {
// 					callFuncSucc && callFuncSucc(resp)
// 				}
// 			},
// 			error: function (xhr, status, error) {
// 				if (callFuncErr) {
// 					callFuncErr()
// 				} else {
// 					Tools.Alert(status)
// 				}
// 			}
// 		})
// 	},
// 	'Box3Copyright': function () {
// 		Box3Copyright()
// 	},
// 	'TipsInit': function () {
// 		var top = 100
// 		if ($('.copy-txt-btn').length > 0) {
// 			top = $('.copy-txt-btn').offset().top - 100
// 		}
// 		if (top < 100) { top = 100 }
// 		return top
// 	},
// 	'Alert': function (errMsg, timeout=2000) {
// 		var id = new Date().getTime()
// 		errMsg = errMsg || "出错啦"
// 		center = ($(window).width() - errMsg.utf8_size()*6)/2
// 		$('body').prepend('<div id=' + (id) + ' class="alert alert-danger alert-dismissible box3-alert in" style="z-index:' + (this.alertZIndex++) + ';position:absolute;left:' + center + 'px; top: ' + (Tools.TipsInit()) + 'px;" role="alert">' +
// 			'<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
// 			'<span aria-hidden="true">&times;</span></button>' +
// 			"<strong>提示：</strong> " + errMsg + "" +
// 			'</div>'),
// 			this.timeoutIds[id] = window.setTimeout(function () {
// 				$('#' + id).alert('close');
// 				delete Tools.timeoutIds[id]
// 			}, timeout);
// 	},
// 	'SuccessTips': function (SuccMsg) {
// 		SuccMsg = SuccMsg || "复制成功"
// 		var id = new Date().getTime()
// 		$('body').prepend('<div id=' + (id) + ' class="alert alert-success alert-dismissible box3-success in" style="z-index:' + (this.alertZIndex++) + ';position:absolute;left:' + ($(window).width() / 2 - 80) + 'px; top: ' + (Tools.TipsInit()) + 'px;" role="alert">' +
// 			'<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
// 			'<span aria-hidden="true">&times;</span></button>' +
// 			"<strong>提示：</strong> " + SuccMsg + "" +
// 			'</div>'),
// 			this.timeoutIds[id] = window.setTimeout(function () {
// 				$('#' + id).alert('close');
// 				delete Tools.timeoutIds[id]
// 			}, 2000);
// 	},
// 	'BaiduTongJi': function () {
// 		var hm = document.createElement("script");
// 		hm.src = "https://hm.baidu.com/hm.js?8a7d0fe9adf5a36a154c8fc0eba3132a";
// 		var s = document.getElementsByTagName("script")[0];
// 		s.parentNode.insertBefore(hm, s);
// 	},
// 	'CopyTxt': function () {
// 		var clipboard = new ClipboardJS(".copy-txt-btn");
// 		clipboard.on("success", function (e) {
// 			Tools.SuccessTips()
// 		}), clipboard.on("error", function (e) { })
// 	},
// 	'fileDown': function (filename, content, filetype) {
// 		var blob = new Blob([content], { type: filetype });
// 		var url = window.URL.createObjectURL(blob);
// 		var a = document.createElement('a');
// 		a.style = "display: none";
// 		a.href = url;
// 		a.download = filename;
// 		document.body.appendChild(a);
// 		a.click();
// 		setTimeout(function () {
// 			document.body.removeChild(a);
// 			window.URL.revokeObjectURL(url);
// 		}, 5);
// 	}
// }

var Box3Resize = function (callback) {
	callback()
	$(window).resize(function () {
		callback()
	});
}

var box3_rotateY_360 = function (id) {
	var deg = 0
	var timer = null
	var rotatey = function () {
		deg++
		id.css("transform", "rotateY(" + deg + "deg)")
		id.css("webkitTransform", "rotateY(" + deg + "deg)")
		id.css("MozTransform", "rotateY(" + deg + "deg)")
		id.css("OTransform", "rotateY(" + deg + "deg)")
		if (deg >= 360) {
			clearInterval(timer)
			deg = 0
		}
	}
	timer = setInterval(rotatey, 10)
}
var Dark = 0
if(new Date().getHours()>=22){
	console.log(1)
	dark()
}else{
	if(Dark){
		dark()
	}
}

function setdark() {
	// var dark_colcr = 'background-color: #414141';
	
	

	for (var key of document.getElementsByTagName("textarea")) {
		key.setAttribute('style', "background-color: #484747");
		key.style.color='#fff'
	}
	for (key of document.getElementsByTagName("input")) {
		key.setAttribute('style', "background-color: #484747")
	}
	for (key of document.getElementsByTagName('select')) {
		key.setAttribute('style', "background-color: #484747")
	}
	
	document.body.setAttribute('style', "background-color: black")
	document.body.setAttribute('style', "background: black")
	

	$('.box3-h3').css("color",'#fff')
	$('.box3-box-def').css("border-color","#fff")
	$("body").css('color','#fff')
	$('.box3-box-def>a').css('color',"#fff")
}
function setlight() {
	
	document.body.setAttribute('style', "background-color: #fff")
	document.body.setAttribute('style', "background: #fff")

	for (var key of document.getElementsByTagName("textarea")) {
		key.setAttribute('style', "background-color: #fff");
		
	}
	for (key of document.getElementsByTagName("input")) {
		key.setAttribute('style', "background-color: #fff")
	}
	for (key of document.getElementsByTagName('select')) {
		key.setAttribute('style', "background-color: #fff")
	}
	document.body.style.color='#555'
	$('.box3-h3').css("color",'black')
	// $('.box3-h3').css("color",'#fff')
	$('.box3-box-def').css("border-color","#555")
	$("body").css('color','#fff')
	$('.box3-box-def>a').css('color',"black")
	// document.bady.setAttribute('style',"color: rgba(0,0,0,0)")
}

function dark() {
	Dark = 1
	$("#dark").detach()
	$('.deg').prepend('<svg t="1668591878557" onclick="light()" class="icon" id="light" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3379" width="16" height="16"><path d="M512 192c179.2 0 320 140.8 320 320s-140.8 320-320 320-320-140.8-320-320S332.8 192 512 192M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128L512 128z" p-id="3380"></path><path d="M544 416l236.8 0C774.4 403.2 768 384 761.6 371.2L544 371.2 544 416z" p-id="3381"></path><path d="M544 608l0 44.8 217.6 0c6.4-12.8 12.8-32 19.2-44.8L544 608z" p-id="3382"></path><path d="M544 723.2 544 768 640 768c25.6-12.8 44.8-25.6 64-44.8L544 723.2z" p-id="3383"></path><path d="M800 492.8l-256 0 0 44.8 256 0c0-6.4 0-12.8 0-25.6S800 499.2 800 492.8z" p-id="3384"></path><path d="M544 300.8 704 300.8c-19.2-19.2-38.4-32-64-44.8L544 256 544 300.8z" p-id="3385"></path></svg>')
	setdark()
}
function light() {
	Dark = 0
	$("#light").detach()
	$('.deg').prepend('<svg t="1668591119963" onclick="dark()" class="icon" id="dark" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2424" width="16" height="16"><path d="M593.054 120.217C483.656 148.739 402.91 248.212 402.91 366.546c0 140.582 113.962 254.544 254.544 254.544 118.334 0 217.808-80.746 246.328-190.144C909.17 457.12 912 484.23 912 512c0 220.914-179.086 400-400 400S112 732.914 112 512s179.086-400 400-400c27.77 0 54.88 2.83 81.054 8.217z" fill="#000000" fill-opacity=".65" p-id="2425"></path></svg>')
	setlight()
}


