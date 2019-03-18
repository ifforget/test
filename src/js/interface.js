$(function(){
    init()
   
    function init(){

        $.get("http://193.112.55.79:9090/api/getbrandtitle",
        function(result){
            console.log(result)
          
            let html='';
            for(let i =0 ; i<result.result.length; i++){
                let data = result.result[i]
                html+=`   <li><a href="interfaces_ten.html?brandTitleId=${data.brandTitleId}">${data.brandTitle}</a></li>`
            }
            $('.goodsAll').html(html)

            
        }
        )

    }

    function click(){
        $('.goodsAll').on('click','li',function(){
            location.href="interfaces_ten.html"
        })
    }

})