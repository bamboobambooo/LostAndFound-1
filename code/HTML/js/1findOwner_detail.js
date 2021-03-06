var num = getCookie('infoFindOwnerNum');
//alert(num);
var pageNum = getCookie('currentPageNum');
//alert(pageNum);
var info;
$(document).ready(function(e) {
    findOwnerDatas(pageNum);
    $('.fabuTitlt').html("");
    $('.fabuTime').html("");
    $('.checkNum').html("");
    $('.fabuContact').html("");
    $('.fabuPerson').html("");
    $('#fabuPerson').html("");
    $('#thingsType').html("");
    $('#tingsName').html("");
    $('#location').html("");
    $('#findPerson').html("");
    $('#contactNum').html("");
    $('#pickupTime').html("");
    $('#detailDesc').html("");
    $('#keyWord').html("");
});
function findOwnerDatas(n) {
    var url = "http://119.29.102.236/found/getAll";
    var param = {}; // 组装发送参数
    param['currentPage'] = n;
    param['pageSize'] = 5;
    //alert(JSON.stringify(param));
    $.get(url, param, function (data) {
        // 发送并显示返回内容
        //res = JSON.stringify(data.result);
        var res = data.result;
        var resData = data.data.foundList;
        //alert(resData);
        if (res === "success") {
            info = resData;
            //alert(info[num].title);
            detail();
        }
    }, 'json');
}
function detail(){
    var btns = document.getElementById('btnState');
    var state = info[num].state;
    if(state === 2){
        btns.innerHTML = "招领成功";
        btns.setAttribute("class","btn btn-lg btn-warning");
    }else if(state === 1){
        btns.innerHTML = "招领中…";
        btns.setAttribute("class","btn btn-lg btn-danger");
    }

        $('.fabuTitlt').html(info[num].title);
        $('.fabuTime').html(formatDateTime(info[num].createTime));
        $('.checkNum').html(info[num].clickNum);
        $('.fabuContact').html(info[num].linkPhone);
        $('.fabuPerson').html(info[num].linkName);
        $('#fabuPerson').html(userInfoRes.username);
        $('#thingsType').html(info[num].goodType);
        $('#tingsName').html(info[num].goodName);
    $('#keyWord').html(info[num].keyWord01+'    '+info[num].keyWord02+'    '+info[num].keyWord03);
        $('#location').html(info[num].foundAddress+info[num].foundAddressDetail);
        $('#findPerson').html();

        $('#contactNum').html(info[num].linkPhone);
        $('#pickupTime').html(formatDateTime(info[num].foundTime));
        $('#thingsImage').attr('src',info[num].pictureUrl);
        $('#detailDesc').html(info[num].descriptionDetail);
};

