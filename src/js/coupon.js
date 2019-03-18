$(function(){
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getcoupon",
        dataType: "json",
        success: function (res) {
            console.log(res);
            var html = template('menusTemp',{data:res.result});
            $('.pro_list ul').html(html);
        }
    });
})