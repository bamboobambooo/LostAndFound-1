$(function () {
  mypublicLost();
  mypublicFind();
  allLost();
  allFind()
});
//查看所有的失物招领
function allLost(){	
	var books = findOwnerData;
	var $oResultBox = $('#tab_allLost');
	
	$('#paging').paging({
	nowPage: 1,
	allPages: Math.ceil(books.length / 10),
	displayPage: 7,
	callBack: function (now) {
	  var currentPages = now * 7 < books.length ? 7 : books.length - (now - 1) * 7;
	
	  $oResultBox.html('');
	  for (var i = 0; i < currentPages; i++) {
		var num = (now - 1) * 7 + i;
		var number = num+1;
		var create_div = '<tr><td>'+ number +'</td><td class="title">'+ books[num].fabuTitlt +'</td><td>'+ books[num].thingsName +'</td><td>'+ books[num].fabuTime +'</td><td>'+ books[num].location +'</td><td>'+ books[num].fabuPerson +'</td><td>'+ books[num].findPerson +'</td><td>'+ books[num].Contact +'</td><td></td><td><button class="btn btn-warning" onclick="checkLost('+ num +');">查看</button></td></tr>';
	
		$('#tab_Lost').addClass('animated fadeIn');
		$oResultBox.append(create_div);
	  }
	}
	});
	function checkLost(p){	
		setCookie('infoFindOwnerNum',p);//记录是从哪个失物招领列表跳转进来的
		location.href = "1findOwner_detail.html";
	}

}
//查看所有的寻物启事
function allFind(){
    var books = findThingData;
    var $oResultBox = $('#tab_allFind');

    $('#paging1').paging({
        nowPage: 1,
        allPages: Math.ceil(books.length / 10),
        displayPage: 7,
        callBack: function (now) {
            var currentPages = now * 7 < books.length ? 7 : books.length - (now - 1) * 7;

            $oResultBox.html('');
            for (var i = 0; i < currentPages; i++) {
                var num = (now - 1) * 7 + i;
                var number = num+1;
                var create_div = '<tr><td>'+ number +'</td><td class="title">'+ books[num].fabuTitlt +'</td><td>'+ books[num].thingsName +'</td><td>'+ books[num].fabuTime +'</td><td>'+ books[num].location +'</td><td>'+ books[num].fabuPerson +'</td><td>'+ books[num].Contact +'</td><td></td><td><button class="btn btn-warning" onclick="checkLost('+ num +');">查看</button></td></tr>';

                $('#tab_allFind').addClass('animated fadeIn');
                $oResultBox.append(create_div);
            }
        }
    });
    function checkLost(p){
        setCookie('infoFindOwnerNum',p);//记录是从哪个失物招领列表跳转进来的
        location.href = "1findOwner_detail.html";
    }

}
//我发布的失物招领统计表
function mypublicLost(){	
	var books = [	
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/penbag.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 1, thingsType: '文具类', thingsName: '笔袋'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/shuibei.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '生活用品类', thingsName: '水杯' },
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/unbrella.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 1, thingsType: '雨具类', thingsName: '折叠伞'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/watch.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '电子产品类', thingsName: '手表'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/moneybag.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '包类', thingsName: '钱包'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/penbag.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 1, thingsType: '文具类', thingsName: '笔袋'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/shuibei.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '生活用品类', thingsName: '水杯' },
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/unbrella.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 1, thingsType: '雨具类', thingsName: '折叠伞'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/watch.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '电子产品类', thingsName: '手表'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/moneybag.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '包类', thingsName: '钱包'}
	];
	var $oResultBox = $('#tab_Lost');
	
	$('#paging').paging({
	nowPage: 1,
	allPages: Math.ceil(books.length / 5),
	displayPage: 7,
	callBack: function (now) {
	  var currentPages = now * 5 < books.length ? 5 : books.length - (now - 1) * 5;
	
	  $oResultBox.html('');
	
	  for (var i = 0; i < currentPages; i++) {
		var num = (now - 1) * 5 + i;
		var number = num+1;
		var create_div = '<tr><td>'+ number +'</td><td class="title">'+ books[num].title +'</td><td>'+ books[num].thingsType +'</td><td>'+ books[num].thingsName +'</td><td>'+ books[num].fabuTime +'</td><td class="image"><img src="'+ books[num].imgUrl +'" width="100%" alt=""></td><td class="status"><label><input type="radio" checked>&nbsp;招领中<br><input type="radio">&nbsp;已认领</label></td></tr>';
	
		$('#tab_Lost').addClass('animated fadeIn');
		$oResultBox.append(create_div);
	  }
	}
	});
}
//我发布的寻物启事统计表
function mypublicFind(){	
	var Find = [	
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/penbag.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 1, thingsType: '文具类', thingsName: '笔袋'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/shuibei.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '生活用品类', thingsName: '水杯' },
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/unbrella.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 1, thingsType: '雨具类', thingsName: '折叠伞'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/watch.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '电子产品类', thingsName: '手表'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/moneybag.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '包类', thingsName: '钱包'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/penbag.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 1, thingsType: '文具类', thingsName: '笔袋'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/shuibei.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '生活用品类', thingsName: '水杯' },
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/unbrella.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 1, thingsType: '雨具类', thingsName: '折叠伞'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/watch.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '电子产品类', thingsName: '手表'},
		{ imgUrl: 'E:/2.Code/HTML/image/things_type/moneybag.jpg',title:'于一教106拾取到一笔袋', fabuTime: '2018-05-02  21:00', state: 0, thingsType: '包类', thingsName: '钱包'}
	];
	var $oResultBox = $('#tab_Find');
	
	$('#paging2').paging({
	nowPage: 1,
	allPages: Math.ceil(Find.length / 5),
	displayPage: 7,
	callBack: function (now) {
	  var currentPages = now * 5 < Find.length ? 5 : Find.length - (now - 1) * 5;
	
	  $oResultBox.html('');
	
	  for (var i = 0; i < currentPages; i++) {
		var num = (now - 1) * 5 + i;
		var number = num+1;
		var create_div = '<tr><td>'+ number +'</td><td class="title">'+ Find[num].title +'</td><td>'+ Find[num].thingsType +'</td><td>'+ Find[num].thingsName +'</td><td>'+ Find[num].fabuTime +'</td><td class="image"><img src="'+ Find[num].imgUrl +'" width="100%" alt=""></td><td class="status"><label><input type="radio" checked>&nbsp;寻找中<br><input type="radio">&nbsp;已找到</label></td></tr>';
	
		$('#tab_Lost').addClass('animated fadeIn');
		$oResultBox.append(create_div);
	  }
	}
	});
}

$('.aside_navbar li').click(function(e) {
    var index = $(this).index()+1;
	$(this).addClass('act').siblings().removeClass('act');
	$('.aside_content .content').eq(index).addClass('current').siblings().removeClass('current');
});