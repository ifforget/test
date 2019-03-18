$(function(){
    init();
    function init(){
        getNav();
        getPro();
    }
   
    function getNav(){
        $.ajax({
            type:"get",
            url:"http://193.112.55.79:9090/api/getindexmenu",
            dataType:"json",
            success:function(res){
                let data=res.result
                let html=template("navTpl",{arr:data});
                $('.mmm_nav ul').html(html)
            console.log(data)
            }
        });
    };

    function getPro(){
        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getmoneyctrl",
            dataType: "json",
            success: function (res) {
                let data=res.result
                var html = template("proTpl",{arr:data});
                $('.pro_list ul').html(html);
                console.log(data)
            }
        });
    };

    $('.mmm_nav ul').on('click','li',function(){
        if($(this).attr('indexmenuid')==7){
            var flag = $('.mmm_nav ul').hasClass('more');
            if(flag){
                $('.mmm_nav ul').removeClass('more');
            }else{
                $('.mmm_nav ul').addClass('more');
            }         
        }      
    })

})