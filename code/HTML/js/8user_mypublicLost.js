$(function () {
  mypublicLost(1);
  mypublicFind(1);
  sysInfo(1);
});

$('.aside_navbar li').click(function(e) {
    var index = $(this).index()+1;
	$(this).addClass('act').siblings().removeClass('act');
	$('.aside_content .content').eq(index).addClass('current').siblings().removeClass('current');
});

//修改密码
function userChange(){
	var firstName = $('#firstname').val();
    var password = $('#password').val();
    var repassword = $('#repassword').val();
    var sex = $('input:radio[name="male"]:checked').val();
    var secSchool = $('#erjixueyuan').val();
    var classes = $('#classes').val();
    var phone = $('#contact').val();
    var email = $('#email').val();

    $.ajax({
        type:'post',
        url:'http://119.29.102.236/user/updateUser',
        data:JSON.stringify({
            "username":firstName,
            "password":repassword,
            "sex":sex,
            "secondSchool":secSchool,
            "userClass":classes,
            "tel":phone,
            "mail":email
        }),
        dataType:'json',
        contentType:'application/json; charset=utf-8',
        beforeSend:function(){
//                        判断两次密码是否一致
            if(password != repassword){
                alert('输入的密码不一致，请输入正确的密码');
                return false;
            }
            if(phone != ""){
                //     手机号为11位，以1开头，第二位为3,5,7,8，后9位都是数字
                if(!/^1[3,5,7,8]\d{9}$/.test(phone)){
                    alert('请输入正确的手机号');
                    return false;
                }
            }
        },
        success:function(data){
            alert(data.result);
            res = data.result;
            if(res == "success"){
                alert('修改个人资料成功');
            }else if(res == "fail"){
                alert(data.data);
            }
        },
        error:function(){
            alert('请求不成功');
        }
    })

}

//查看我发布的失物招领
function mypublicLost(n){
    var mypublicLostList;
    var myPublicLostUrl = 'http://119.29.102.236/found/getAllByUser';
    var arr1 = {};
    arr1['currentPage'] = n;
    arr1['pageSize']= 10;
    $.get(myPublicLostUrl, arr1, function (data) {
        // 发送并显示返回内容
        //res = JSON.stringify(data.result);
        res = data.result;
        resData = JSON.stringify(data.data);
        //resData = data.data.foundList;
        //alert(res+resData);
        if (res === "success") {
            mypublicLostList = resData;
            $('#tab_Lost').empty();
            //alert(findOwner);
            for (var i = 0; i < data.data.count; i++) {
                var num = i;
                var number = i+1;
                var _html = '<tr><td>'+number+'</td><td>'+mypublicLostList[num].title+'</td><td>'+mypublicLostList[num].goodType+'</td><td>'+mypublicLostList[num].goodName+'</td><td>'+formatDateTime(mypublicLostList[num].createTime)+'</td><td><img src="'+mypublicLostList[num].pictureUrl+'" alt="" width="130" height="auto" </img></td><td><label><input type="radio" name="lostState" value="1"> 招领中</label><br><label><input type="radio" name="lostState" value="2">认领成功</label></td>';

                $('#tab_Lost').addClass('animated fadeIn');
                $('#tab_Lost').append(_html);
            }
        }else{
            alert(resData);
        }
    }, 'json');
}

//查看我发布的寻物启事
function mypublicFind(n){
    var mypublicFindList;
    var myPublicFindUrl = 'http://119.29.102.236/lost/getAllByUser';
    var arr2 = {};
    arr2['currentPage'] = n;
    arr2['pageSize']= 10;
    $.get(myPublicFindUrl, arr2, function (data) {
        // 发送并显示返回内容
        //res = JSON.stringify(data.result);
        res = data.result;
        resData = JSON.stringify(data.data);
        //resData = data.data.foundList;
        //alert(res+resData);
        if (res === "success") {
            mypublicFindList = resData;
            $('#tab_Lost').empty();
            //alert(findOwner);
            for (var i = 0; i < data.data.count; i++) {
                var num = i;
                var number = i+1;
                var _html = '<tr><td>'+number+'</td><td>'+mypublicFindList[num].title+'</td><td>'+mypublicFindList[num].goodType+'</td><td>'+mypublicFindList[num].goodName+'</td><td>'+formatDateTime(mypublicFindList[num].createTime)+'</td><td><img src="\'+mypublicList[num].pictureUrl+\'" alt="" width="130" height="auto" </img></td><td><label><input type="radio" name="findState" value="1"> 招领中</label><br><label><input type="radio" name="findState" value="2">认领成功</label></td>';

                $('#tab_Lost').addClass('animated fadeIn');
                $('#tab_Lost').append(_html);
            }
        }else{
            alert(resData);
        }
    }, 'json');
}

//查看系统消息
function sysInfo(n){
    var systemInfo;
    var systemInfoUrl = 'http://119.29.102.236/pushMessage/getAll';
    var arr3 = {};
    arr3['currentPage'] = n;
    arr3['pageSize']= 10;
    $.get(systemInfoUrl, arr3, function (data) {
        // 发送并显示返回内容
        res = data.result;
        resData = JSON.stringify(data.data);
        //alert(res+resData);
        if (res === "success") {
            systemInfo = resData;
            $('#tab_inform').empty();
            //alert(findOwner);
            for (var i = 0; i < data.data.length; i++) {
                var num = i;
                var number = i+1;
                var _html = '<td>'+number+'</td><td>\'+formatDateTime(systemInfo[num].receiveTime)+\'</td><td>'+systemInfo[num].informDetail+'</td><td><button class="btn btn-primary">删除</button></td>';

                $('#tab_inform').addClass('animated fadeIn');
                $('#tab_inform').append(_html);
            }
        }else{
            alert(resData);
        }
    }, 'json');
}