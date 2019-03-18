$(function(){

    init()
    function init(){
        getData()
    }

    //获取数据渲染模板
    function getData(){
        $.ajax({
            url:"http://193.112.55.79:9090/api/getsitenav",
            type:"get",
            success:function(result){
                let data=result.result
                console.log(data)

                let html=template("brandTP",{arr:data})
                $('.brand').html(html)
            }
        })
    }


})