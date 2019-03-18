

$(function () {

    let sortId,areaId;
    init()
    function init() {
        getPopsort()
        getPoparea()
        getGoods()
        eventList()
    }

    function eventList() {

        $(".filter ul").on("tap", "li:nth-of-type(1)", function () {
           
            $(".poparea").removeClass('on')
            $(".popprice").removeClass('on')
            $('.popsort').toggleClass('on')
        })
        $(".filter ul").on("tap", "li:nth-of-type(2)", function () {
           
            $(".popsort").removeClass('on')
            $(".popprice").removeClass('on')
            $('.poparea').toggleClass('on')
        })
        $(".filter ul").on("tap", "li:nth-of-type(3)", function () {
           /*  if ($(this).find('i').hasClass('fa-caret-down')) {
                $(this).find('i').removeClass("fa-caret-down").addClass('fa-caret-up')
            } else {
                $(this).find('i').removeClass("fa-caret-up").addClass('fa-caret-down')
            } */
            $(".popsort").removeClass('on')
            $(".poparea").removeClass('on')
            $('.popprice').toggleClass('on')
        })
        $(".hd .popsort,.hd .poparea,.hd .popprice").on("tap", "div", function () {
            $(this).siblings().find("i").removeClass("fa-check")
            $(this).find("i").addClass('fa-check')
            setTimeout(function(){
                $(".popsort,.poparea,.popprice").removeClass('on')
            },600)
        })

        $(".popsort").on("tap","div",function(){
           let txt=$(this).find("a").text()
             $(".filter ul li").eq(0).text(txt)
        })
        $(".poparea").on("tap","div",function(){
            let txt=String($(this).find("a").text())
              $(".filter ul li").eq(1).text(txt)
         })

    }



    //获取贩卖商
    function getPopsort() {
        $.get("http://193.112.55.79:9090/api/getgsshop", function (result) {
            let data = result.result;
            console.log(data)
            let html = ""
            for (let i = 0; i < data.length; i++) {
                let popHtml = `
                <div class="sortBtn" data-popsort="${data[i].shopId}">
                <a>${data[i].shopName}</a>
                <i class="fa " aria-hidden="true"></i>
                </div>
                `
                html += popHtml;
            }
            $(".popsort").html(html)
            
                
                $('.popsort').on("tap",".sortBtn",function(){
                    sortId= Number($(this).attr("data-popsort"))
                    if(areaId==undefined){
                        areaId=0;
                    }
                    getGoods(sortId,areaId)
                })
        }
        )
    }
   
    //获取地区
    function getPoparea() {
        $.get("http://193.112.55.79:9090/api/getgsshoparea", function (result) {
            let data = result.result;
            let html = ""
            for (let i = 0; i < data.length; i++) {
                let popHtml = `
                <div class="areaBtn" data-Poparea="${data[i].areaId}">
                <a>${data[i].areaName}</a>
                <i class="fa " aria-hidden="true"></i>
                </div>
                `
                html += popHtml;
            }
            $(".poparea").html(html)
            $('.poparea').on("tap",".areaBtn",function(){
                areaId= Number($(this).attr("data-Poparea"))
                
                if(sortId==undefined){
                    sortId=0;
                }
                getGoods(sortId,areaId)
            })
        }
        )
    }
   //获取商品物品
   function getGoods(num1,num2){
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getgsproduct",
        data:{
            shopid : num1 || 0,
            areaid : num2 || 0
        } ,
        dataType: "json",
        success: function (result) {
            let listData=result.result
           let html=template("goodsJoinTp",{arr:listData})
            $(".bd_list").html(html)
        }
    });
   

   }

})