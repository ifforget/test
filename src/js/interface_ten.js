$(function(){
    init()

    function init(){
        getbrand()
        page()
        last()
      
    }
    function getbrand(){

        $.ajax({
            url:"http://193.112.55.79:9090/api/getbrand",
            type:"get",
            data:{
                brandtitleid:getUrl("brandTitleId")
            },
            
            success:function(result){
                
                let data = result.result
                console.log(data)
                let html = template("min",{arr:data})
                $(".goodsAll").html(html)
            }
        })
       
    }

    function  page() { 
        $.ajax({
            url:"http://193.112.55.79:9090/api/getbrandproductlist",
            type:"get",
            data:{
                brandtitleid:getUrl("brandTitleId"),
                "pagesize ":4
            },
            success:function(result){
              let data =result.result
              let html = template("mins",{arrs:data})
              $(".productImg_img").html(html)
            }
            
        })
   
     }

     //最后一个页面的ajax
     function last(){
         $.get("http://193.112.55.79:9090/api/getproductcom",{
            productid :getUrl("brandTitleId")
         },function(result){
             console.log(result)
             let data = result.result
             let html = template("last",{datas:data})
             $(".productCom").html(html)
         }
         )

     }
   


     // 获取url上的参数 的值
  function getUrl(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
  }
})